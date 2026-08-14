/*
 * LDH GLOBAL ALARM V2 · 2026-08-14
 * - Agenda diaria: hora por tarea, 06:00 por defecto.
 * - Recordatorios personalizados: conserva día/hora/texto actuales.
 * - Voz: Laura D preferente · pitch 1.72 · rate 0.88 · doble pitido.
 * - Un solo motor por pestaña/página; coordinación ligera entre pestañas.
 * - Registra un Service Worker que carga este motor en cualquier HTML del proyecto.
 */
(function(){
  'use strict';
  if(window.LDH_GLOBAL_ALARM_ACTIVE) return;
  window.LDH_GLOBAL_ALARM_ACTIVE = true;

  const BUILD = 'LDH-GLOBAL-ALARM-V2-20260814';
  const DB_KEYS = ['ldh_db','TallerFlowDB'];
  const ACK_KEY = 'ldh_voice_agenda_ack_v1';
  const ENABLED_KEY = 'ldh_voice_agenda_enabled_v1';
  const VOLUME_KEY = 'ldh_voice_volume_v1';
  const CUSTOM_KEY = 'ldh_voice_custom_reminders_v1';
  const LEADER_KEY = 'ldh_global_alarm_leader_v2';
  const TAB_ID = 'alarm_' + Math.random().toString(36).slice(2,9) + '_' + Date.now().toString(36);
  const DEFAULT_AGENDA_TIME = '06:00';
  const REPEAT_MS = 6000;
  const LEADER_STALE_MS = 9000;

  let lastSpeakAt = 0;
  let audioCtx = null;
  let lastDueSignature = '';
  let worker = null;
  let fallbackTimer = null;
  let rootUrl = null;

  function safeJson(raw, fallback){ try{ return raw ? JSON.parse(raw) : fallback; }catch(_){ return fallback; } }
  function norm(v){ return String(v ?? '').trim(); }
  function readStore(key){
    try{ const v = localStorage.getItem(key); if(v !== null && v !== '') return v; }catch(_){ }
    try{ const v = sessionStorage.getItem(key); if(v !== null && v !== '') return v; }catch(_){ }
    return '';
  }
  function writeBoth(key, value){
    try{ localStorage.setItem(key, value); }catch(_){ }
    try{ sessionStorage.setItem(key, value); }catch(_){ }
  }
  function todayISO(){
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }
  function validTime(v){ return /^([01]\d|2[0-3]):[0-5]\d$/.test(norm(v)); }
  function normalizedTime(v){ return validTime(v) ? norm(v) : DEFAULT_AGENDA_TIME; }
  function dueMs(date, time){
    const m = norm(date).match(/^(\d{4})-(\d{2})-(\d{2})$/);
    const h = normalizedTime(time).match(/^(\d{2}):(\d{2})$/);
    if(!m || !h) return NaN;
    return new Date(Number(m[1]),Number(m[2])-1,Number(m[3]),Number(h[1]),Number(h[2]),0,0).getTime();
  }
  function hash(s){
    s = String(s ?? ''); let h=0;
    for(let n=0;n<s.length;n++) h=((h<<5)-h+s.charCodeAt(n))|0;
    return Math.abs(h).toString(36);
  }
  function readAck(){
    const a = safeJson(readStore(ACK_KEY), {});
    return a && typeof a === 'object' && !Array.isArray(a) ? a : {};
  }
  function writeAck(a){ writeBoth(ACK_KEY, JSON.stringify(a || {})); }
  function voiceEnabled(){ return readStore(ENABLED_KEY) === '1'; }
  function setVoiceEnabled(v){ writeBoth(ENABLED_KEY, v ? '1' : '0'); }
  function getVolume(){
    const n=Number(readStore(VOLUME_KEY));
    return Number.isFinite(n) ? Math.max(.4,Math.min(1,n)) : 1;
  }
  function readAgendaDb(){
    for(const key of DB_KEYS){
      const db = safeJson(readStore(key), null);
      if(db && typeof db === 'object') return db;
    }
    return {};
  }
  function readCustom(){
    const rows=safeJson(readStore(CUSTOM_KEY),[]);
    return Array.isArray(rows) ? rows.filter(Boolean) : [];
  }
  function taskAlertId(item,index,iso){
    const rawId = norm(item && (item.id || item.uid));
    const op = norm(item && (item.op || item.operario || item.operator));
    const desc = norm(item && (item.desc || item.descripcion || item.task || item.tarea));
    const id = rawId || `auto-${hash(`${iso}|${op}|${desc}|${index}`)}`;
    return `today|daily-${id}-${iso}`;
  }
  function reminderAlertId(r){ return `reminder|${norm(r && r.id)}|${norm(r && r.date)}|${norm(r && r.time)}`; }

  function collectAgendaDue(){
    const db=readAgendaDb();
    const ack=readAck();
    const today=todayISO();
    const now=Date.now();
    return (Array.isArray(db.miniAgenda)?db.miniAgenda:[])
      .map((item,index)=>({item,index}))
      .filter(x=>x.item && !x.item.done && !x.item.finished && !x.item.completed)
      .filter(x=>norm(x.item.exec || x.item.execDate || x.item.fechaEjecucion || x.item.dateExec) === today)
      .map(x=>{
        const time=normalizedTime(x.item.alertTime || x.item.alarmTime || x.item.horaAviso);
        const ms=dueMs(today,time);
        const id=taskAlertId(x.item,x.index,today);
        return {id,type:'agenda',ms,time,iso:today,text:'Tienes una tarea en la agenda programada para hoy.',title:norm(x.item.desc||x.item.tarea||'Tarea de agenda diaria'),operator:norm(x.item.op||x.item.operario||''),itemId:norm(x.item.id||x.item.uid||String(x.index))};
      })
      .filter(x=>Number.isFinite(x.ms) && x.ms<=now && !ack[x.id])
      .sort((a,b)=>a.ms-b.ms);
  }
  function collectCustomDue(){
    const ack=readAck(); const now=Date.now();
    return readCustom()
      .filter(r=>r && !r.done && !r.deleted && norm(r.text))
      .map(r=>{
        const time=validTime(r.time)?norm(r.time):'00:00';
        const ms=dueMs(r.date,time);
        return {id:reminderAlertId(r),type:'reminder',ms,time,iso:norm(r.date),text:norm(r.text),title:norm(r.text)};
      })
      .filter(x=>Number.isFinite(x.ms) && x.ms<=now && !ack[x.id])
      .sort((a,b)=>a.ms-b.ms);
  }
  function getDueTargets(){ return collectAgendaDue().concat(collectCustomDue()).sort((a,b)=>a.ms-b.ms); }

  function pickVoice(){
    const voices=window.speechSynthesis?.getVoices?.() || [];
    const es=voices.filter(v=>/^es/i.test(v.lang||''));
    const preferred=/(laura|elvira|sabina|helena|monica|mónica|lucia|lucía|maria|maría|sofia|sofía|isabel|paloma|paulina|female|mujer|google)/i;
    const avoided=/(pablo|alvaro|álvaro|jorge|carlos|diego|male|hombre|deep|grave)/i;
    return es.find(v=>/laura/i.test(v.name||'')) || es.find(v=>preferred.test(v.name||'')&&!avoided.test(v.name||'')) || es.find(v=>!avoided.test(v.name||'')) || voices.find(v=>/^es/i.test(v.lang||'')) || null;
  }
  function ensureAudio(){
    try{
      const A=window.AudioContext||window.webkitAudioContext;
      if(!A) return null;
      if(!audioCtx) audioCtx=new A();
      if(audioCtx.state==='suspended') audioCtx.resume().catch(()=>{});
      return audioCtx;
    }catch(_){ return null; }
  }
  function playBeep(){
    try{
      const ctx=ensureAudio(); if(!ctx) return Promise.resolve();
      return new Promise(resolve=>{
        const now=ctx.currentTime;
        const compressor=ctx.createDynamicsCompressor();
        compressor.threshold.setValueAtTime(-24,now); compressor.knee.setValueAtTime(18,now); compressor.ratio.setValueAtTime(6,now); compressor.attack.setValueAtTime(.003,now); compressor.release.setValueAtTime(.16,now); compressor.connect(ctx.destination);
        const tone=(start,freq,duration)=>{
          const osc=ctx.createOscillator(), gain=ctx.createGain();
          osc.type='square'; osc.frequency.setValueAtTime(freq,start);
          gain.gain.setValueAtTime(.0001,start); gain.gain.exponentialRampToValueAtTime(.88,start+.025); gain.gain.setValueAtTime(.88,start+Math.max(.03,duration-.07)); gain.gain.exponentialRampToValueAtTime(.0001,start+duration);
          osc.connect(gain); gain.connect(compressor); osc.start(start); osc.stop(start+duration+.03);
        };
        tone(now,1040,.24); tone(now+.30,1320,.30); setTimeout(resolve,900);
      });
    }catch(_){ return Promise.resolve(); }
  }

  function leaderRecord(){ return safeJson((()=>{try{return localStorage.getItem(LEADER_KEY)}catch(_){return ''}})(), null); }
  function canLead(){
    const now=Date.now(); const visible=document.visibilityState==='visible'; let cur=leaderRecord();
    const stale=!cur || !cur.id || now-Number(cur.ts||0)>LEADER_STALE_MS;
    const visibleCanTake = visible && cur && cur.visible===false && now-Number(cur.ts||0)>2500;
    if(stale || cur?.id===TAB_ID || visibleCanTake){
      try{ localStorage.setItem(LEADER_KEY,JSON.stringify({id:TAB_ID,ts:now,visible})); }catch(_){ return true; }
      cur=leaderRecord();
    }
    return !cur || cur.id===TAB_ID;
  }
  function refreshLeader(){
    const cur=leaderRecord();
    if(!cur || cur.id===TAB_ID){ try{localStorage.setItem(LEADER_KEY,JSON.stringify({id:TAB_ID,ts:Date.now(),visible:document.visibilityState==='visible'}));}catch(_){ } }
  }

  function ensureOverlay(){
    let box=document.getElementById('ldhGlobalAlarmBox');
    if(box) return box;
    box=document.createElement('div'); box.id='ldhGlobalAlarmBox';
    box.style.cssText='display:none;position:fixed;right:18px;bottom:18px;z-index:2147483646;width:min(390px,calc(100vw - 36px));background:#0b1629;color:#edf6ff;border:1px solid rgba(56,189,248,.55);border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.48);padding:14px 14px 12px;font:600 13px/1.35 Segoe UI,Arial,sans-serif';
    box.innerHTML='<div style="font-size:15px;font-weight:900;color:#7dd3fc;margin-bottom:5px">🔊 Aviso de agenda</div><div id="ldhGlobalAlarmText" style="color:#dbeafe;margin-bottom:10px"></div><div style="display:flex;gap:8px;flex-wrap:wrap"><button id="ldhGlobalAlarmAck" type="button" style="border:1px solid #22c55e;background:#14532d;color:#fff;border-radius:9px;padding:7px 11px;font-weight:900;cursor:pointer">OK / Silenciar</button><button id="ldhGlobalAlarmEnable" type="button" style="display:none;border:1px solid #38bdf8;background:#075985;color:#fff;border-radius:9px;padding:7px 11px;font-weight:900;cursor:pointer">Activar voz</button><button id="ldhGlobalAlarmAgenda" type="button" style="border:1px solid rgba(255,255,255,.2);background:#162033;color:#dbeafe;border-radius:9px;padding:7px 11px;font-weight:800;cursor:pointer">Abrir Agenda</button></div>';
    document.body.appendChild(box);
    box.querySelector('#ldhGlobalAlarmAck')?.addEventListener('click', silence);
    box.querySelector('#ldhGlobalAlarmEnable')?.addEventListener('click', ()=>{ setVoiceEnabled(true); ensureAudio(); check(true); });
    box.querySelector('#ldhGlobalAlarmAgenda')?.addEventListener('click', ()=>{ try{ location.href=new URL('modulos/agenda_diaria.html',rootUrl||location.href).href; }catch(_){ } });
    return box;
  }
  function updateOverlay(targets){
    if(!document.body) return;
    const box=ensureOverlay();
    if(!targets.length){ box.style.display='none'; return; }
    const agendas=targets.filter(t=>t.type==='agenda');
    const reminders=targets.filter(t=>t.type==='reminder');
    const parts=[];
    if(agendas.length){
      const times=[...new Set(agendas.map(t=>t.time))].join(', ');
      parts.push(`${agendas.length} tarea${agendas.length===1?'':'s'} de Agenda pendiente${agendas.length===1?'':'s'}${times?' · aviso '+times:''}.`);
    }
    if(reminders.length) parts.push(`${reminders.length} recordatorio${reminders.length===1?'':'s'} personalizado${reminders.length===1?'':'s'} pendiente${reminders.length===1?'':'s'}.`);
    const text=box.querySelector('#ldhGlobalAlarmText'); if(text) text.textContent=parts.join(' ');
    const enable=box.querySelector('#ldhGlobalAlarmEnable'); if(enable) enable.style.display=voiceEnabled()?'none':'';
    box.style.display='block';
  }

  function buildSpeech(targets){
    const parts=[];
    if(targets.some(t=>t.type==='agenda')) parts.push('Tienes una tarea en la agenda programada para hoy.');
    targets.filter(t=>t.type==='reminder').map(t=>t.text).filter(Boolean).forEach(t=>parts.push(t));
    return parts.join(' ');
  }
  function speak(targets,force){
    if(!targets.length || !voiceEnabled() || !canLead()) return;
    const now=Date.now(); if(!force && now-lastSpeakAt<5800) return;
    const text=buildSpeech(targets); if(!text) return;
    lastSpeakAt=now; refreshLeader();
    try{
      window.speechSynthesis?.cancel?.();
      playBeep().then(()=>setTimeout(()=>{
        try{
          const u=new SpeechSynthesisUtterance(text); u.lang='es-ES'; u.rate=.88; u.pitch=1.72; u.volume=getVolume();
          const v=pickVoice(); if(v) u.voice=v;
          window.speechSynthesis.speak(u);
        }catch(_){ }
      },850));
    }catch(_){ }
  }
  function silence(){
    const targets=getDueTargets(); if(!targets.length) return;
    const ack=readAck(); targets.forEach(t=>{ack[t.id]=Date.now();}); writeAck(ack);
    try{ window.speechSynthesis?.cancel?.(); }catch(_){ }
    lastSpeakAt=0; check(false);
  }
  function check(force){
    const targets=getDueTargets();
    const sig=targets.map(t=>t.id).sort().join('|');
    updateOverlay(targets);
    if(!targets.length){
      if(lastDueSignature){ try{window.speechSynthesis?.cancel?.();}catch(_){ } }
      lastDueSignature=''; return targets;
    }
    lastDueSignature=sig;
    speak(targets,!!force);
    try{ window.dispatchEvent(new CustomEvent('ldh:global-alarm-state',{detail:{build:BUILD,targets:targets.map(t=>({id:t.id,type:t.type,time:t.time,iso:t.iso,title:t.title}))}})); }catch(_){ }
    return targets;
  }

  function activateFromGesture(){ ensureAudio(); }
  ['pointerdown','keydown','touchstart'].forEach(evt=>window.addEventListener(evt,activateFromGesture,{passive:true,once:true,capture:true}));
  ['focus','pageshow','online'].forEach(evt=>window.addEventListener(evt,()=>setTimeout(()=>check(true),100)));
  document.addEventListener('visibilitychange',()=>{ refreshLeader(); if(document.visibilityState==='visible') setTimeout(()=>check(true),100); });
  window.addEventListener('storage',e=>{ if(!e || [ACK_KEY,ENABLED_KEY,VOLUME_KEY,CUSTOM_KEY,...DB_KEYS].includes(e.key)) setTimeout(()=>check(true),80); });
  window.addEventListener('beforeunload',()=>{ const cur=leaderRecord(); if(cur?.id===TAB_ID){try{localStorage.removeItem(LEADER_KEY)}catch(_){}} });

  function startTimers(){
    if(fallbackTimer) clearInterval(fallbackTimer);
    fallbackTimer=setInterval(()=>{ refreshLeader(); check(false); },3000);
    try{
      const blob=new Blob([`setInterval(()=>postMessage(Date.now()),2000);`],{type:'application/javascript'});
      worker=new Worker(URL.createObjectURL(blob));
      worker.onmessage=()=>{ refreshLeader(); check(false); };
    }catch(_){ }
  }

  function detectRoot(){
    try{
      const src=document.currentScript && document.currentScript.src ? document.currentScript.src : '';
      if(src) return new URL('./',src);
    }catch(_){ }
    try{
      const p=location.pathname; const marker='/modulos/'; const idx=p.indexOf(marker);
      return new URL(idx>=0?p.slice(0,idx+1):'./',location.origin);
    }catch(_){ return new URL('./',location.href); }
  }
  async function registerWorker(){
    if(!('serviceWorker' in navigator) || location.protocol!=='https:') return;
    try{
      const sw=new URL('alarma_global_sw.js',rootUrl);
      const reg=await navigator.serviceWorker.register(sw.href,{scope:rootUrl.pathname,updateViaCache:'none'});
      try{await reg.update();}catch(_){ }
      navigator.serviceWorker.addEventListener('controllerchange',()=>setTimeout(()=>check(true),100));
    }catch(e){ console.warn('[Alarma global] No se pudo registrar Service Worker',e); }
  }

  rootUrl=detectRoot();
  window.LDHGlobalAlarm={
    build:BUILD,
    check:(force=true)=>check(force),
    silence,
    getDueTargets,
    enable:()=>{setVoiceEnabled(true);ensureAudio();check(true);},
    disable:()=>{setVoiceEnabled(false);try{window.speechSynthesis?.cancel?.();}catch(_){} updateOverlay(getDueTargets());}
  };

  function start(){ ensureOverlay(); startTimers(); registerWorker(); setTimeout(()=>check(true),350); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
  try{ if(window.speechSynthesis) window.speechSynthesis.onvoiceschanged=()=>check(false); }catch(_){ }
})();
