
(function(){
  'use strict';
  if(window.__LDH_AI_GLOBAL_R6_20261007__) return;
  window.__LDH_AI_GLOBAL_R6_20261007__=true;

  const GLOBAL_VERSION='IA-GLOBAL-R27-20261008';
  const HISTORY_KEY='ldh_ai_global_history_v1';
  const MODULES=[{"id": "menu", "label": "Menú principal", "path": "index.html", "aliases": ["menu", "menú", "inicio", "principal", "menu principal", "menú principal"]}, {"id": "calculo", "label": "Cálculo", "path": "modulos/calculo.html", "aliases": ["calculo", "cálculo", "calcular"]}, {"id": "pedido_material", "label": "Pedido material", "path": "modulos/pedido_material.html", "aliases": ["pedido material", "pedido de material"]}, {"id": "preparacion", "label": "Preparación de pedidos", "path": "modulos/preparacion_pedidos.html", "aliases": ["preparacion", "preparación", "preparacion de pedidos", "preparación de pedidos"]}, {"id": "agenda", "label": "Agenda diaria", "path": "modulos/agenda_diaria.html", "aliases": ["agenda", "agenda diaria", "ordenes de trabajo", "órdenes de trabajo", "ot agenda"]}, {"id": "fabricacion", "label": "Fabricación", "path": "modulos/fabricacion.html", "aliases": ["fabricacion", "fabricación", "fabrica", "fábrica"]}, {"id": "ferreteria", "label": "Ferretería", "path": "modulos/ferreteria.html", "aliases": ["ferreteria", "ferretería"]}, {"id": "tableros", "label": "Tableros", "path": "modulos/tableros.html", "aliases": ["tableros", "tablero"]}, {"id": "almacen", "label": "Almacén", "path": "modulos/almacen.html", "aliases": ["almacen", "almacén"]}, {"id": "ubicaciones", "label": "Ubicaciones / Empresas", "path": "modulos/ubicaciones_empresas.html", "aliases": ["ubicaciones", "empresas", "ubicaciones empresas", "ubicaciones / empresas"]}, {"id": "stock", "label": "Stock", "path": "modulos/stock.html", "aliases": ["stock", "existencias"]}, {"id": "pintura", "label": "Cálculo de pintura", "path": "modulos/calculo_pintura.html", "aliases": ["pintura", "calculo pintura", "cálculo pintura", "calculo de pintura", "cálculo de pintura"]}, {"id": "herramientas", "label": "Gestión herramientas", "path": "modulos/gestion_herramientas.html", "aliases": ["herramientas", "gestion herramientas", "gestión herramientas", "maquinaria"]}, {"id": "configuracion", "label": "Configuración", "path": "modulos/configuracion.html", "aliases": ["configuracion", "configuración", "configurar", "conceptos", "configuracion de conceptos", "configuración de conceptos"]}];
  const APPROVED_LOGO="data:image/png;base64,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";
  const GLOBAL_CSS="\n:root{--ldh-ai-global-w:340px;--ldh-ai-global-gap:14px;--ldh-ai-global-edge:10px}\n.ldh-ai-dock{\n  top:10px!important;height:calc(100vh - 20px)!important;min-height:600px!important;\n  display:flex!important;flex-direction:column!important;overflow:hidden!important;color:#eef7ff!important;\n  background:linear-gradient(180deg,#061427 0%,#07182d 58%,#041226 100%)!important;\n  border:2px solid rgba(14,165,233,.82)!important;border-radius:22px!important;\n  box-shadow:0 20px 58px rgba(15,23,42,.23),0 0 0 5px rgba(14,165,233,.06)!important;\n  z-index:2147482000!important;box-sizing:border-box!important;font-family:Inter,Segoe UI,system-ui,-apple-system,Roboto,Arial,sans-serif!important;\n}\n.ldh-ai-dock *{box-sizing:border-box}\n.ldh-ai-dock button{padding:0!important;margin:0!important;min-width:0!important;min-height:0!important;line-height:normal!important;text-transform:none!important;letter-spacing:normal!important;transform:none!important;font-family:inherit!important;appearance:none!important;-webkit-appearance:none!important}\n.ldh-ai-head{\n  position:relative!important;height:74px!important;min-height:74px!important;padding:0 10px 0 8px!important;\n  display:flex!important;align-items:center!important;justify-content:space-between!important;gap:8px!important;overflow:hidden!important;\n  background:#031321!important;border-bottom:none!important;flex:0 0 auto!important;\n}\n.ldh-ai-head::before{display:none!important;content:none!important}\n.ldh-ai-approved-head{\n  position:relative!important;z-index:2!important;display:block!important;width:164px!important;height:71px!important;\n  object-fit:contain!important;object-position:left center!important;flex:0 0 164px!important;transform:none!important;\n}\n.ldh-ai-expand-btn{\n  position:relative!important;padding:0!important;margin:0!important;line-height:1!important;z-index:2!important;width:32px!important;height:32px!important;flex:0 0 32px!important;\n  display:grid!important;place-items:center!important;border:1px solid rgba(34,211,238,.35)!important;border-radius:9px!important;\n  background:rgba(14,165,233,.075)!important;color:#48d9ff!important;font-size:15px!important;font-weight:900!important;cursor:pointer!important;\n}\n.ldh-ai-scroll{flex:1 1 auto!important;min-height:0!important;overflow:auto!important;padding:10px!important;scrollbar-width:thin;scrollbar-color:#1e749a #061224}\n.ldh-ai-welcome,.ldh-ai-suggestions{border:1px solid rgba(56,189,248,.26)!important;border-radius:14px!important;background:linear-gradient(180deg,rgba(10,34,60,.72),rgba(4,18,35,.82))!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.025)!important}\n.ldh-ai-welcome{padding:11px 12px!important;margin-bottom:9px!important}.ldh-ai-welcome b{display:block!important;font-size:14px!important;margin-bottom:5px!important;color:#f6fbff!important}.ldh-ai-welcome p{margin:0!important;color:#b6cce3!important;font-size:11px!important;line-height:1.4!important}\n.ldh-ai-suggestions{padding:10px!important;margin-bottom:10px!important}.ldh-ai-suggestions h4{margin:0 0 8px!important;font-size:12px!important;color:#f6fbff!important}.ldh-ai-quick{display:grid!important;gap:7px!important}\n.ldh-ai-quick button{min-height:36px!important;display:grid!important;grid-template-columns:24px 1fr 14px!important;align-items:center!important;gap:8px!important;width:100%!important;border:1px solid rgba(56,189,248,.28)!important;border-radius:9px!important;padding:6px 8px!important;background:linear-gradient(180deg,rgba(8,31,56,.84),rgba(5,22,42,.90))!important;color:#eaf6ff!important;text-align:left!important;font-weight:800!important;font-size:10.5px!important;cursor:pointer!important}\n.ldh-ai-quick button:hover{border-color:#20c9f4!important;background:rgba(14,165,233,.14)!important}.ldh-ai-quick .qico{font-size:15px!important;text-align:center!important}.ldh-ai-quick .arr{color:#3bdcff!important;font-size:17px!important;text-align:right!important}\n.ldh-ai-chat{display:flex!important;flex-direction:column!important;gap:8px!important;padding:1px 0 8px!important}.ldh-ai-msg-row{display:flex!important;gap:8px!important;align-items:flex-end!important}.ldh-ai-msg-row.user{justify-content:flex-end!important}.ldh-ai-mini-avatar{width:23px!important;height:23px!important;flex:0 0 23px!important;border-radius:50%!important;display:grid!important;place-items:center!important;border:1px solid rgba(56,189,248,.45)!important;background:#082747!important;font-size:11px!important}.ldh-ai-msg-wrap{max-width:86%!important}.ldh-ai-meta{font-size:8.5px!important;color:#8fa7bf!important;margin:0 0 3px 2px!important}.ldh-ai-msg-row.user .ldh-ai-meta{text-align:right!important;margin-right:2px!important}.ldh-ai-bubble{padding:9px 10px!important;border-radius:11px!important;background:#0b2b50!important;border:1px solid rgba(56,189,248,.12)!important;font-size:11.5px!important;line-height:1.48!important;color:#dfeeff!important;white-space:normal!important;overflow-wrap:anywhere!important}.ldh-ai-msg-row.user .ldh-ai-bubble{background:linear-gradient(135deg,#0c4fc8,#0a3b97)!important;border-color:rgba(96,165,250,.30)!important;color:#fff!important;white-space:pre-wrap!important}.ldh-ai-bubble.error{background:#3a190f!important;border-color:rgba(248,113,113,.50)!important;color:#fecaca!important}.ldh-ai-bubble.system{background:#102237!important;border-color:rgba(96,165,250,.24)!important;color:#c8d9ed!important}\n.ldh-ai-bubble h4{margin:8px 0 6px!important;font-size:11.5px!important;line-height:1.25!important;color:#f8fbff!important}.ldh-ai-bubble h4:first-child{margin-top:0!important}.ldh-ai-bubble p{margin:0 0 7px!important}.ldh-ai-bubble p:last-child{margin-bottom:0!important}.ldh-ai-bubble ul,.ldh-ai-bubble ol{margin:5px 0 8px 17px!important;padding:0!important}.ldh-ai-bubble li{margin:0 0 4px!important;line-height:1.42!important}.ldh-ai-formula{margin:4px 0 6px!important;padding:6px 8px!important;border:1px solid rgba(56,189,248,.18)!important;border-radius:8px!important;background:rgba(14,165,233,.08)!important;color:#eaf7ff!important;font-weight:850!important;line-height:1.35!important;overflow-wrap:anywhere!important}.ldh-ai-bubble code{font-family:ui-monospace,SFMono-Regular,Consolas,monospace!important;font-size:.95em!important;color:#d9f4ff!important;background:rgba(2,6,23,.42)!important;padding:1px 4px!important;border-radius:4px!important}.ldh-ai-bubble p{margin:0 0 7px!important}.ldh-ai-bubble p:last-child{margin-bottom:0!important}.ldh-ai-bubble strong{color:#fff!important;font-weight:950!important}.ldh-ai-bubble ul,.ldh-ai-bubble ol{margin:5px 0 7px 18px!important;padding:0!important}.ldh-ai-bubble li{margin:3px 0!important;padding-left:1px!important}.ldh-ai-bubble code{font-family:ui-monospace,SFMono-Regular,Consolas,monospace!important;font-size:10.5px!important;background:rgba(2,6,23,.55)!important;border:1px solid rgba(148,163,184,.18)!important;border-radius:5px!important;padding:1px 4px!important;color:#d8f3ff!important}.ldh-ai-table-wrap{width:100%!important;overflow-x:auto!important;margin:6px 0 8px!important;border:1px solid rgba(56,189,248,.18)!important;border-radius:8px!important}.ldh-ai-bubble table{width:100%!important;min-width:270px!important;border-collapse:collapse!important;font-size:10px!important;line-height:1.35!important;background:rgba(2,6,23,.28)!important}.ldh-ai-bubble th,.ldh-ai-bubble td{padding:5px 6px!important;border-bottom:1px solid rgba(148,163,184,.14)!important;border-right:1px solid rgba(148,163,184,.10)!important;vertical-align:top!important;text-align:left!important}.ldh-ai-bubble th{background:rgba(14,165,233,.10)!important;color:#dff6ff!important;font-weight:950!important}.ldh-ai-bubble tr:last-child td{border-bottom:0!important}.ldh-ai-bubble th:last-child,.ldh-ai-bubble td:last-child{border-right:0!important}.ldh-ai-bubble th,.ldh-ai-bubble td{overflow-wrap:normal!important;word-break:normal!important;hyphens:none!important;white-space:normal!important}.ldh-ai-bubble table.ldh-ai-cols-3{min-width:460px!important;table-layout:auto!important}.ldh-ai-bubble table.ldh-ai-cols-3 th:nth-child(1),.ldh-ai-bubble table.ldh-ai-cols-3 td:nth-child(1){min-width:96px!important;width:22%!important}.ldh-ai-bubble table.ldh-ai-cols-3 th:nth-child(2),.ldh-ai-bubble table.ldh-ai-cols-3 td:nth-child(2){min-width:190px!important;width:43%!important}.ldh-ai-bubble table.ldh-ai-cols-3 th:nth-child(3),.ldh-ai-bubble table.ldh-ai-cols-3 td:nth-child(3){min-width:155px!important;width:35%!important}.ldh-ai-bubble table.ldh-ai-cols-4{min-width:540px!important;table-layout:auto!important}.ldh-ai-bubble table.ldh-ai-cols-2{min-width:0!important;table-layout:fixed!important}.ldh-ai-bubble table.ldh-ai-cols-2 th:first-child,.ldh-ai-bubble table.ldh-ai-cols-2 td:first-child{width:44%!important}.ldh-ai-bubble table.ldh-ai-cols-2 th:last-child,.ldh-ai-bubble table.ldh-ai-cols-2 td:last-child{width:56%!important}.ldh-ai-bubble table.ldh-ai-cols-2 th,.ldh-ai-bubble table.ldh-ai-cols-2 td{padding:7px 8px!important;font-size:10.5px!important}.ldh-ai-bubble table.ldh-ai-cols-2 td:last-child{font-weight:850!important;color:#eef8ff!important}\n.ldh-ai-composer{flex:0 0 auto!important;padding:9px!important;border-top:1px solid rgba(56,189,248,.20)!important;background:linear-gradient(180deg,rgba(4,18,34,.92),#041124)!important}.ldh-ai-inputbar{display:grid!important;grid-template-columns:28px 1fr 38px!important;align-items:end!important;border:1px solid rgba(56,189,248,.32)!important;border-radius:11px!important;background:#071a31!important;overflow:hidden!important}.ldh-ai-attach{align-self:stretch!important;display:grid!important;place-items:center!important;width:28px!important;min-width:28px!important;height:38px!important;padding:0!important;margin:0!important;line-height:1!important;border:0!important;border-right:1px solid rgba(56,189,248,.12)!important;background:transparent!important;color:#b9d3e9!important;font-size:18px!important;cursor:pointer!important}#ldhFutureAiInput{border:0!important;outline:0!important;resize:none!important;min-height:38px!important;max-height:88px!important;padding:9px 8px!important;background:transparent!important;color:#eff8ff!important;font:10.5px/1.4 Inter,Segoe UI,Arial,sans-serif!important}#ldhFutureAiInput::placeholder{color:#7f9ab4!important}.ldh-ai-send{width:32px!important;min-width:32px!important;max-width:32px!important;height:32px!important;min-height:32px!important;max-height:32px!important;margin:3px!important;padding:0!important;display:grid!important;place-items:center!important;align-self:center!important;line-height:1!important;border:0!important;border-radius:8px!important;background:linear-gradient(135deg,#16d8ff,#0d9fea)!important;color:#032037!important;font-size:16px!important;font-weight:950!important;cursor:pointer!important;box-shadow:0 0 12px rgba(14,165,233,.26)!important}.ldh-ai-send:hover{filter:brightness(1.08)!important}.ldh-ai-send:disabled,.ldh-ai-quick button:disabled{opacity:.48!important;cursor:wait!important}\n.ldh-ai-walkie-row{display:flex!important;align-items:center!important;gap:7px!important;margin-top:7px!important;flex-wrap:nowrap!important}.ldh-ai-walkie{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;flex:0 0 auto!important;align-self:center!important;min-width:128px!important;height:30px!important;min-height:30px!important;padding:0 12px!important;border:0!important;border-radius:9px!important;font-weight:900!important;cursor:pointer!important;color:#fff!important;background:#0369a1!important;touch-action:none!important;user-select:none!important;-webkit-user-select:none!important;font-size:10.5px!important;line-height:1.1!important;white-space:nowrap!important;text-align:center!important}.ldh-ai-walkie.recording{background:#b91c1c!important;animation:ldhAiWalkiePulse 1s infinite!important}.ldh-ai-walkie-note{display:block!important;flex:1 1 auto!important;min-width:0!important;color:#7893ad!important;font-size:8.5px!important;line-height:1.2!important}.ldh-ai-clear-row{display:flex!important;justify-content:flex-end!important;margin-top:7px!important}.ldh-ai-clear{border:1px solid rgba(148,163,184,.28)!important;border-radius:8px!important;padding:6px 9px!important;background:#102237!important;color:#c8d9ed!important;font-size:9px!important;font-weight:850!important;cursor:pointer!important}.ldh-ai-clear:hover{border-color:#38bdf8!important;color:#fff!important}.ldh-ai-clear:disabled{opacity:.45!important;cursor:not-allowed!important}@keyframes ldhAiWalkiePulse{50%{opacity:.6}}\n.ldh-ai-future-note{text-align:center!important;color:#6f8ca6!important;font-size:8px!important;margin-top:5px!important;letter-spacing:.02em!important}.ldh-ai-future-note.ok{color:#69e7a5!important}.ldh-ai-future-note.bad{color:#fca5a5!important}.ldh-ai-future-note.busy{color:#7dd3fc!important}\nbody.ldh-ai-global-module{padding-right:calc(var(--ldh-ai-global-w) + var(--ldh-ai-global-gap) + var(--ldh-ai-global-edge))!important}\nbody.ldh-ai-global-module #ldhFutureAiDock{position:fixed!important;right:var(--ldh-ai-global-edge)!important;top:10px!important;width:var(--ldh-ai-global-w)!important;height:calc(100vh - 20px)!important}\nbody.ldh-ai-global-menu #ldhFutureAiDock{position:sticky!important;width:auto!important;right:auto!important}\nbody.ldh-ai-global-expanded{--ldh-ai-global-w:520px}\nbody.ldh-ai-global-expanded #ldhFutureAiDock{width:var(--ldh-ai-global-w)!important}\n@media(max-width:1640px){:root{--ldh-ai-global-w:326px;--ldh-ai-global-gap:12px;--ldh-ai-global-edge:10px}}\n@media(max-width:1440px){:root{--ldh-ai-global-w:310px;--ldh-ai-global-gap:10px;--ldh-ai-global-edge:8px}}\n@media(max-width:1180px){body.ldh-ai-global-module{padding-right:0!important}#ldhFutureAiDock{display:none!important}}\n@media print{body.ldh-ai-global-module{padding-right:0!important}#ldhFutureAiDock{display:none!important}}\n";
  const normGlobal=v=>String(v==null?'':v).toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9._xø-]+/g,' ').replace(/\s+/g,' ').trim();
  function appRootUrl(){
    const u=new URL(location.href); const p=u.pathname.toLowerCase();
    if(p.includes('/modulos/')) return new URL('../',u);
    return new URL('./',u);
  }
  function currentModule(){
    const forced=document.querySelector('meta[name="ldh-ai-module"]')?.getAttribute('content');
    if(forced){const f=MODULES.find(m=>m.id===forced);if(f)return f;}
    const path=decodeURIComponent(location.pathname).toLowerCase();
    for(const m of MODULES){
      const tail=m.path.toLowerCase();
      if(m.id==='menu' && (/\/index\.html$/.test(path)||/\/$/.test(path))) return m;
      if(m.id!=='menu' && path.endsWith('/'+tail)) return m;
      if(m.id!=='menu' && path.endsWith(tail)) return m;
    }
    return {id:'desconocido',label:(document.title||'Módulo de Gestión Taller'),path:'',aliases:[]};
  }
  function moduleUrl(id){const m=MODULES.find(x=>x.id===id);return m?new URL(m.path,appRootUrl()).href:'';}
  function saveHistory(rows){try{localStorage.setItem(HISTORY_KEY,JSON.stringify(Array.isArray(rows)?rows.slice(-16):[]));}catch(_){}}
  function loadHistory(){try{const x=JSON.parse(localStorage.getItem(HISTORY_KEY)||'[]');return Array.isArray(x)?x.slice(-16):[];}catch(_){return [];}}
  function cleanVisibleText(el,max=5000){
    if(!el)return''; const c=el.cloneNode(true); c.querySelectorAll?.('#ldhFutureAiDock,script,style,noscript').forEach?.(n=>n.remove());
    return String(c.innerText||c.textContent||'').replace(/\s+/g,' ').trim().slice(0,max);
  }
  function isVisible(el){if(!el)return false;const s=getComputedStyle(el);if(s.display==='none'||s.visibility==='hidden')return false;const r=el.getBoundingClientRect();return r.width>0&&r.height>0;}
  // R21: la instantánea de pantalla representa SOLO el módulo operativo.
  // El propio panel del Asistente IA queda fuera para que sus botones, títulos,
  // enlaces y etiquetas no aparezcan como si fueran acciones del módulo actual.
  function isModuleVisible(el){
    return isVisible(el)&&!el.closest?.('#ldhFutureAiDock');
  }
  // R27: al leer un control visible ignoramos badges auxiliares de alertas/notificaciones.
  // Ejemplo Agenda: "Trabajos pendientes 12" + badge rojo de alertas "0" no debe
  // convertirse en "Trabajos pendientes 120". Los contadores funcionales normales
  // (p. ej. .ordersCount) se conservan; solo se eliminan indicadores auxiliares.
  function visibleControlText(el){
    if(!el)return '';
    if(el.matches?.('input[type="button"],input[type="submit"]')){
      return String(el.value||el.getAttribute('aria-label')||el.title||'').replace(/\s+/g,' ').trim();
    }
    const clone=el.cloneNode(true);
    clone.querySelectorAll?.([
      '.wo-alert-count',
      '.alert-count',
      '.notification-count',
      '.notification-badge',
      '.alert-badge',
      '[data-alert-count]',
      '[data-notification-count]',
      '[aria-label*="alerta" i][role="status"]',
      '[aria-label*="notificacion" i][role="status"]'
    ].join(',')).forEach?.(n=>n.remove());
    return String(clone.innerText||clone.textContent||el.getAttribute('aria-label')||el.title||'').replace(/\s+/g,' ').trim();
  }
  function visibleSnapshot(){
    const mod=currentModule();
    const headings=[...document.querySelectorAll('h1,h2,h3,h4')].filter(isModuleVisible).map(x=>String(x.textContent||'').replace(/\s+/g,' ').trim()).filter(Boolean).slice(0,36);
    const buttons=[...document.querySelectorAll('button,[role="button"],input[type="button"],input[type="submit"]')].filter(isModuleVisible).map(visibleControlText).filter(Boolean).slice(0,60);
    const links=[...document.querySelectorAll('a[href]')].filter(isModuleVisible).map(visibleControlText).filter(Boolean).slice(0,40);
    const labels=[...document.querySelectorAll('label')].filter(isModuleVisible).map(x=>String(x.textContent||'').replace(/\s+/g,' ').trim()).filter(Boolean).slice(0,50);
    return {modulo_actual:{id:mod.id,nombre:mod.label,ruta:location.pathname},titulo_documento:document.title||'',encabezados:headings,botones_visibles:buttons,enlaces_visibles:links,campos_y_etiquetas:labels,texto_visible:cleanVisibleText(document.body,5200)};
  }
  function moduleContext(userText){
    try{if(typeof window.LDH_AI_CONTEXT_PROVIDER==='function')return window.LDH_AI_CONTEXT_PROVIDER(userText)||null;}catch(e){return {error:'context_provider: '+String(e?.message||e)};}
    try{if(window.LDH_AI_CONTEXT&&typeof window.LDH_AI_CONTEXT==='object')return window.LDH_AI_CONTEXT;}catch(_){}
    return null;
  }
  function moduleListPrompt(){return MODULES.map(m=>m.id+'='+m.label+' ('+m.path+')').join('; ');}
  function explicitNavigation(textValue){
    const q=normGlobal(textValue);
    if(!/(^|\b)(abre|abrir|abreme|ábreme|ve|vete|ir|vamos|entra|entrar|llevame|llévame|cambia|cambiar|navega|navegar)(\b|$)/.test(q))return null;
    if(/\bterminal\b/.test(q)||/\bdireccion\b/.test(q)||/\bvehiculos?\b/.test(q)&&/\bapp|terminal\b/.test(q))return {blocked:true,message:'Los terminales, las apps operativas y los programas de Dirección son independientes y quedan fuera del Asistente IA global.'};
    const candidates=[];
    for(const m of MODULES){for(const a of [m.label,...m.aliases]){const n=normGlobal(a);if(n&&q.includes(n))candidates.push({m,len:n.length});}}
    candidates.sort((a,b)=>b.len-a.len); if(!candidates.length)return null;
    const target=candidates[0].m,cur=currentModule();
    if(target.id===cur.id)return {same:true,id:target.id,label:target.label,message:'Ya estás en '+target.label+'.'};
    return {id:target.id,label:target.label,url:moduleUrl(target.id)};
  }
  function navigate(id){const url=moduleUrl(id);if(url)location.href=url;}
  function parseReply(raw){
    const s=String(raw||''); const m=s.match(/\[\[NAVEGAR:([a-z0-9_-]+)\]\]/i); if(!m)return {text:s,navigate:''};
    const id=m[1].toLowerCase(); const ok=MODULES.some(x=>x.id===id); return {text:s.replace(m[0],'').trim()||('Abriendo '+(MODULES.find(x=>x.id===id)?.label||id)+'…'),navigate:ok?id:''};
  }
  const LOCAL_HELP_CSS=`
.ldh-ai-help-root{border:1px solid rgba(34,211,238,.40)!important;border-radius:12px!important;background:rgba(2,15,30,.62)!important;overflow:hidden!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.025)!important}
.ldh-ai-help-group{border:1px solid rgba(100,116,139,.28)!important;border-radius:9px!important;background:rgba(2,12,26,.62)!important;overflow:hidden!important;transition:border-color .16s ease,box-shadow .16s ease!important}
.ldh-ai-help-root>summary,.ldh-ai-help-group>summary{list-style:none!important;cursor:pointer!important;user-select:none!important;-webkit-user-select:none!important}
.ldh-ai-help-root>summary::-webkit-details-marker,.ldh-ai-help-group>summary::-webkit-details-marker{display:none!important}
.ldh-ai-help-root>summary{min-height:44px!important;display:grid!important;grid-template-columns:26px 1fr auto 16px!important;align-items:center!important;gap:8px!important;padding:8px 10px!important;color:#fff!important;font-size:11.6px!important;font-weight:950!important;background:linear-gradient(180deg,#0b3658 0%,#072a48 100%)!important;letter-spacing:.01em!important}
.ldh-ai-help-root[open]>summary{border-bottom:1px solid rgba(34,211,238,.34)!important;box-shadow:0 5px 14px rgba(2,12,27,.22)!important}
.ldh-ai-help-badge{padding:3px 7px!important;border:1px solid rgba(74,222,128,.48)!important;border-radius:999px!important;background:rgba(22,163,74,.17)!important;color:#9af4b7!important;font-size:8px!important;font-weight:950!important;white-space:nowrap!important;letter-spacing:.04em!important}
.ldh-ai-help-chevron{color:#59ddff!important;font-size:14px!important;text-align:right!important;transition:transform .16s ease!important}.ldh-ai-help-root[open]>summary .ldh-ai-help-chevron,.ldh-ai-help-group[open]>summary .ldh-ai-help-chevron{transform:rotate(180deg)!important}
.ldh-ai-help-body{display:grid!important;gap:8px!important;padding:9px!important;background:rgba(1,11,24,.34)!important}
.ldh-ai-help-group>summary{min-height:38px!important;display:grid!important;grid-template-columns:22px 1fr 16px!important;align-items:center!important;gap:7px!important;padding:7px 9px!important;color:#c9daea!important;font-size:10.4px!important;font-weight:880!important;background:rgba(12,28,49,.76)!important;border-left:3px solid rgba(100,116,139,.55)!important}
.ldh-ai-help-group-help{border-color:rgba(56,189,248,.52)!important;background:rgba(8,47,73,.30)!important}.ldh-ai-help-group-help>summary{border-left-color:#38bdf8!important;background:linear-gradient(90deg,rgba(14,165,233,.42) 0%,rgba(8,72,110,.32) 58%,rgba(7,30,52,.94) 100%)!important;color:#dff7ff!important}
.ldh-ai-help-group-query{border-color:rgba(167,139,250,.55)!important;background:rgba(69,35,119,.28)!important}.ldh-ai-help-group-query>summary{border-left-color:#a78bfa!important;background:linear-gradient(90deg,rgba(124,58,237,.42) 0%,rgba(82,46,140,.31) 58%,rgba(20,24,53,.94) 100%)!important;color:#f0e9ff!important}
.ldh-ai-help-group-open{border-color:rgba(52,211,153,.55)!important;background:rgba(5,86,65,.27)!important}.ldh-ai-help-group-open>summary{border-left-color:#34d399!important;background:linear-gradient(90deg,rgba(16,185,129,.42) 0%,rgba(11,104,78,.30) 58%,rgba(6,34,38,.94) 100%)!important;color:#e4fff5!important}
.ldh-ai-help-group[open]{box-shadow:0 0 0 1px rgba(255,255,255,.05)!important}
.ldh-ai-help-group[open]>summary{color:#fff!important;font-size:10.8px!important;font-weight:950!important}
.ldh-ai-help-group-help[open]{border-color:#38bdf8!important;box-shadow:0 0 0 1px rgba(56,189,248,.18),0 6px 18px rgba(14,165,233,.10)!important}.ldh-ai-help-group-help[open]>summary{background:linear-gradient(90deg,rgba(14,165,233,.60) 0%,rgba(8,92,138,.44) 56%,rgba(7,31,53,.97) 100%)!important}
.ldh-ai-help-group-query[open]{border-color:#a78bfa!important;box-shadow:0 0 0 1px rgba(167,139,250,.18),0 6px 18px rgba(124,58,237,.10)!important}.ldh-ai-help-group-query[open]>summary{background:linear-gradient(90deg,rgba(124,58,237,.60) 0%,rgba(91,56,154,.44) 56%,rgba(21,24,54,.97) 100%)!important}
.ldh-ai-help-group-open[open]{border-color:#34d399!important;box-shadow:0 0 0 1px rgba(52,211,153,.18),0 6px 18px rgba(16,185,129,.10)!important}.ldh-ai-help-group-open[open]>summary{background:linear-gradient(90deg,rgba(16,185,129,.60) 0%,rgba(12,112,83,.44) 56%,rgba(6,35,39,.97) 100%)!important}
.ldh-ai-help-items{display:grid!important;gap:5px!important;padding:7px 7px 8px 17px!important;border-top:1px solid rgba(148,163,184,.10)!important;background:rgba(0,8,20,.34)!important;position:relative!important}
.ldh-ai-help-items:before{content:''!important;position:absolute!important;left:8px!important;top:8px!important;bottom:8px!important;width:1px!important;background:rgba(100,116,139,.30)!important}
.ldh-ai-help-group-help .ldh-ai-help-items{background:rgba(6,37,59,.58)!important}.ldh-ai-help-group-query .ldh-ai-help-items{background:rgba(39,25,72,.54)!important}.ldh-ai-help-group-open .ldh-ai-help-items{background:rgba(5,49,40,.54)!important}.ldh-ai-help-group-help .ldh-ai-help-items:before{background:#38bdf8!important}.ldh-ai-help-group-query .ldh-ai-help-items:before{background:#a78bfa!important}.ldh-ai-help-group-open .ldh-ai-help-items:before{background:#34d399!important}
.ldh-ai-help-items button{width:100%!important;min-height:30px!important;display:grid!important;grid-template-columns:18px 1fr 12px!important;align-items:center!important;gap:6px!important;padding:5px 7px!important;border:1px solid rgba(71,85,105,.34)!important;border-radius:7px!important;background:rgba(3,15,31,.86)!important;color:#bcd0e1!important;text-align:left!important;font-size:9.25px!important;font-weight:760!important;cursor:pointer!important;box-shadow:none!important}
.ldh-ai-help-items button>span:first-child{color:#7894ad!important;font-size:10px!important;text-align:center!important}.ldh-ai-help-group-help>summary>span:first-child,.ldh-ai-help-group-help>summary .ldh-ai-help-chevron{color:#67d9ff!important}.ldh-ai-help-group-query>summary>span:first-child,.ldh-ai-help-group-query>summary .ldh-ai-help-chevron{color:#c4b5fd!important}.ldh-ai-help-group-open>summary>span:first-child,.ldh-ai-help-group-open>summary .ldh-ai-help-chevron{color:#6ee7b7!important}.ldh-ai-help-items button:hover{border-color:rgba(56,189,248,.72)!important;background:rgba(10,44,72,.78)!important;color:#f1f9ff!important}.ldh-ai-help-items button:disabled{opacity:.45!important;cursor:wait!important}
.ldh-ai-help-items .arr{color:#38bdf8!important;text-align:right!important;font-size:12px!important}.ldh-ai-help-modules{max-height:240px!important;overflow:auto!important;scrollbar-width:thin!important;scrollbar-color:#1e749a #061224!important}
.ldh-ai-help-modules button{margin-left:4px!important;width:calc(100% - 4px)!important;border-color:rgba(52,211,153,.18)!important;background:rgba(2,20,30,.84)!important;color:#b7cbd6!important}.ldh-ai-help-modules button>span:first-child{color:#62c7a1!important}.ldh-ai-help-modules button:hover{border-color:rgba(52,211,153,.64)!important;background:rgba(5,63,57,.33)!important;color:#effff8!important}
.ldh-ai-help-note{margin:2px 4px 0!important;padding-top:3px!important;color:#6f879b!important;font-size:7.9px!important;line-height:1.35!important}
`;
  function mountStyles(){if(document.getElementById('LDH_AI_GLOBAL_STYLE'))return;const st=document.createElement('style');st.id='LDH_AI_GLOBAL_STYLE';st.textContent=GLOBAL_CSS+LOCAL_HELP_CSS;(document.head||document.documentElement).appendChild(st);}
  function dockHtml(){
    const moduleButtons=MODULES.map(m=>`<button type="button" data-ia-open-module="${m.id}" data-ia-local-label="Abrir ${m.label}"><span>↗</span><span>${m.label}</span><span class="arr">›</span></button>`).join('');
    return `<aside class="ldh-ai-dock" id="ldhFutureAiDock" aria-label="Asistente IA global de Gestión Taller">
    <div class="ldh-ai-head"><img class="ldh-ai-approved-head" alt="Asistente IA · En línea" src="${APPROVED_LOGO}"><button class="ldh-ai-expand-btn" type="button" title="Ampliar / reducir panel IA">↗</button></div>
    <div class="ldh-ai-scroll" id="ldhFutureAiScroll">
      <div class="ldh-ai-welcome"><b>Hola, soy tu asistente de Los del Hierro's</b><p id="ldhAiModuleWelcome">Puedo ayudarte a moverte e interactuar con Gestión Taller.</p></div>
      <div class="ldh-ai-suggestions"><h4>¿En qué puedo ayudarte hoy?</h4>
        <details class="ldh-ai-help-root" id="ldhAiQuickHelp">
          <summary><span>☰</span><span>Ayudas rápidas</span><span class="ldh-ai-help-badge">SIN GROQ</span><span class="ldh-ai-help-chevron">⌄</span></summary>
          <div class="ldh-ai-help-body">
            <details class="ldh-ai-help-group ldh-ai-help-group-help">
              <summary><span>▥</span><span>Ayuda del módulo</span><span class="ldh-ai-help-chevron">⌄</span></summary>
              <div class="ldh-ai-help-items">
                <button type="button" data-ia-local-action="explain" data-ia-local-label="Explícame este módulo"><span>▥</span><span>Explicar este módulo</span><span class="arr">›</span></button>
                <button type="button" data-ia-local-action="guide" data-ia-local-label="Guíame paso a paso"><span>▣</span><span>Guíame paso a paso</span><span class="arr">›</span></button>
                <button type="button" data-ia-local-action="review" data-ia-local-label="Revisa esta pantalla"><span>▤</span><span>Revisar esta pantalla</span><span class="arr">›</span></button>
              </div>
            </details>
            <details class="ldh-ai-help-group ldh-ai-help-group-query">
              <summary><span>⌕</span><span>Consultas rápidas</span><span class="ldh-ai-help-chevron">⌄</span></summary>
              <div class="ldh-ai-help-items">
                <button type="button" data-ia-local-action="summary" data-ia-local-label="Muéstrame un resumen local"><span>Σ</span><span>Resumen local</span><span class="arr">›</span></button>
                <button type="button" data-ia-local-action="actions" data-ia-local-label="¿Qué acciones tengo aquí?"><span>☷</span><span>Acciones disponibles</span><span class="arr">›</span></button>
                <button type="button" data-ia-local-action="where" data-ia-local-label="¿Dónde estoy?"><span>⌂</span><span>¿Dónde estoy?</span><span class="arr">›</span></button>
                <button type="button" data-ia-local-action="modules" data-ia-local-label="Muéstrame los módulos disponibles"><span>?</span><span>Módulos disponibles</span><span class="arr">›</span></button>
              </div>
            </details>
            <details class="ldh-ai-help-group ldh-ai-help-group-open">
              <summary><span>↗</span><span>Abrir módulo</span><span class="ldh-ai-help-chevron">⌄</span></summary>
              <div class="ldh-ai-help-items ldh-ai-help-modules">${moduleButtons}</div>
            </details>
            <div class="ldh-ai-help-note">Estas ayudas se ejecutan en local y nunca consumen Groq. Iremos añadiendo aquí nuevas funciones deterministas.</div>
          </div>
        </details>
      </div>
      <div class="ldh-ai-chat" id="ldhFutureAiMessages"><div class="ldh-ai-msg-row"><div class="ldh-ai-mini-avatar">✦</div><div class="ldh-ai-msg-wrap"><div class="ldh-ai-meta">Asistente IA</div><div class="ldh-ai-bubble">Conectando con la IA central…</div></div></div></div>
    </div>
    <div class="ldh-ai-composer"><div class="ldh-ai-inputbar"><button class="ldh-ai-attach" type="button" title="Adjuntar (preparado para futura IA)">⌕</button><textarea id="ldhFutureAiInput" rows="1" placeholder="Escribe tu consulta aquí..."></textarea><button class="ldh-ai-send" id="ldhFutureAiSend" type="button" title="Enviar a la IA">➤</button></div><div class="ldh-ai-walkie-row"><button class="ldh-ai-walkie" id="ldhFutureAiMic" type="button" title="Mantén pulsado para hablar y suelta para enviar">🎙 Mantén pulsado</button><span class="ldh-ai-walkie-note" id="ldhFutureAiMicNote">Whisper Large V3 · español ES · mantén pulsado para hablar</span></div><div class="ldh-ai-clear-row"><button class="ldh-ai-clear" id="ldhFutureAiClear" type="button" title="Borra solo esta conversación de IA">🗑 Limpiar diálogo</button></div><div class="ldh-ai-future-note" id="ldhFutureAiStatus">IA central · comprobando conexión…</div></div>
  </aside>`;}
  function mountDock(){
    if(document.getElementById('ldhFutureAiDock'))return document.getElementById('ldhFutureAiDock');
    const wrap=document.createElement('div');wrap.innerHTML=dockHtml();const dock=wrap.firstElementChild;const mod=currentModule();
    if(mod.id==='menu'){document.body.classList.add('ldh-ai-global-menu');const app=document.querySelector('.app');(app||document.body).appendChild(dock);}
    else{document.body.classList.add('ldh-ai-global-module');document.body.appendChild(dock);}
    const p=dock.querySelector('#ldhAiModuleWelcome');if(p)p.textContent='Módulo actual: '+mod.label+'. Puedo guiarte, consultar lo visible y abrir otros módulos de Gestión Taller.';
    const exp=dock.querySelector('.ldh-ai-expand-btn');if(exp)exp.addEventListener('click',()=>{document.body.classList.toggle('ldh-ai-global-expanded');exp.textContent=document.body.classList.contains('ldh-ai-global-expanded')?'↙':'↗';});
    return dock;
  }
  mountStyles(); mountDock();
  function bindLocalHelpAccordion(){
    const root=document.getElementById('ldhAiQuickHelp');
    if(!root)return;
    const groups=Array.from(root.querySelectorAll('.ldh-ai-help-body > details.ldh-ai-help-group'));
    groups.forEach(group=>group.addEventListener('toggle',()=>{
      if(!group.open)return;
      groups.forEach(other=>{if(other!==group&&other.open)other.open=false;});
    }));
  }
  bindLocalHelpAccordion();
  window.__LDH_AI_GLOBAL_LOAD_HISTORY__=loadHistory;
  window.__LDH_AI_GLOBAL_SAVE_HISTORY__=saveHistory;
  window.__LDH_AI_GLOBAL_VISIBLE__=visibleSnapshot;
  window.__LDH_AI_GLOBAL_CONTEXT__=moduleContext;
  window.__LDH_AI_GLOBAL_MODULE__=currentModule;
  window.__LDH_AI_GLOBAL_MODULES__=MODULES;
  window.__LDH_AI_GLOBAL_MODULE_LIST__=moduleListPrompt;
  window.__LDH_AI_GLOBAL_TRY_NAV__=explicitNavigation;
  window.__LDH_AI_GLOBAL_NAVIGATE__=navigate;
  window.__LDH_AI_GLOBAL_PARSE_REPLY__=parseReply;
  window.LDH_AI_GLOBAL={version:GLOBAL_VERSION,currentModule,modules:MODULES,navigate,visibleSnapshot};


  const BRIDGE='https://gestion-taller-ia.taller-mantenimiento.workers.dev';
  const EXPECTED_MODEL='openai/gpt-oss-120b';
  const input=document.getElementById('ldhFutureAiInput');
  const messages=document.getElementById('ldhFutureAiMessages');
  const scroll=document.getElementById('ldhFutureAiScroll');
  const sendBtn=document.getElementById('ldhFutureAiSend');
  const status=document.getElementById('ldhFutureAiStatus');
  const mic=document.getElementById('ldhFutureAiMic');
  const micNote=document.getElementById('ldhFutureAiMicNote');
  const clearBtn=document.getElementById('ldhFutureAiClear');
  if(!input||!messages||!sendBtn)return;

  const state={busy:false,history:(window.__LDH_AI_GLOBAL_LOAD_HISTORY__?.()||[]),health:null,recorder:null,stream:null,chunks:[],micHold:false,micReleaseRequested:false,micTimer:null,groqCooldownUntil:0,groqCalls:0};
  const text=v=>String(v==null?'':v);
  function esc(s){return text(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function setStatus(label,kind=''){
    if(!status)return;
    status.textContent=label;
    status.className='ldh-ai-future-note'+(kind?' '+kind:'');
  }
  function setBusy(on,label){
    state.busy=!!on;
    sendBtn.disabled=state.busy;
    document.querySelectorAll('[data-ia-prompt],[data-ia-local-action],[data-ia-open-module]').forEach(b=>b.disabled=state.busy);
    if(mic&&!state.micHold)mic.disabled=state.busy;
    if(clearBtn)clearBtn.disabled=state.busy;
    if(label)setStatus(label,state.busy?'busy':'');
  }
  function ldhAiNormalizeReadable(value){
    let s=text(value).replace(/\r/g,'');
    // El panel lateral no renderiza TeX/LaTeX. Convertimos las formas habituales a texto legible.
    s=s.replace(/\\\[/g,'\n').replace(/\\\]/g,'\n').replace(/\\\(/g,'').replace(/\\\)/g,'');
    for(let i=0;i<4;i++){
      s=s.replace(/\\(?:text|mathrm|mathbf|operatorname)\{([^{}]*)\}/g,'$1');
      s=s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g,'($1 / $2)');
    }
    s=s.replace(/\\times\b/g,'×').replace(/\\cdot\b/g,'×').replace(/\\div\b/g,'÷');
    s=s.replace(/(?:\\,|\\;|\\:|\\!|\\quad|\\qquad)/g,' ');
    s=s.replace(/\\(?:left|right)\b/g,'');
    s=s.replace(/\$\$/g,'').replace(/\$/g,'');
    s=s.replace(/\^\{([^{}]+)\}/g,'^$1').replace(/_\{([^{}]+)\}/g,'_$1');
    s=s.replace(/[ \t]+\n/g,'\n').replace(/\n{3,}/g,'\n\n');
    return s.trim();
  }
  function ldhAiInlineFormat(value){
    let out=esc(ldhAiNormalizeReadable(value));
    out=out.replace(/`([^`\n]+)`/g,'<code>$1</code>');
    out=out.replace(/\*\*([^*\n](?:.*?[^*\n])?)\*\*/g,'<strong>$1</strong>');
    return out;
  }
  function ldhAiCompactPaintCalculation(value){
    const raw=ldhAiNormalizeReadable(value);
    const s=raw.replace(/\*\*/g,'').replace(/`/g,'');
    if(!/c[aá]lculo de pintura y disolvente/i.test(s) || !/paso a paso/i.test(s)) return '';
    const one=(re)=>{const m=s.match(re);return m&&m[1]?String(m[1]).trim().replace(/[.;,]+$/,''):'';};
    const lastQty=(segment,unitRe)=>{
      if(!segment) return '';
      const hits=[...segment.matchAll(new RegExp('([0-9]+(?:[.,][0-9]+)?)\\s*'+unitRe,'gi'))];
      return hits.length ? (hits[hits.length-1][1]+' '+(unitRe==='L'?'L':unitRe.replace('\\s*',' '))) : '';
    };
    const surface=one(/Superficie total a pintar:\s*([0-9]+(?:[.,][0-9]+)?\s*m²)/i);
    const color=one(/Pintura seleccionada:\s*([^\n.]+)/i);
    const factor=one(/Factor de consumo:\s*([^\n(]+)/i);
    const hands=one(/N[uú]mero de manos configuradas:\s*([0-9]+(?:[.,][0-9]+)?)/i);
    const pureSeg=one(/Pintura pura necesaria([\s\S]*?)(?=\n\s*2[.)]\s*Disolvente|\n\s*Disolvente\s*\()/i);
    const solvSeg=one(/Disolvente\s*\(15[^\n]*\)([\s\S]*?)(?=\n\s*3[.)]\s*Mezcla|\n\s*Mezcla total)/i);
    const mixSeg=one(/Mezcla total\s*\(pintura \+ disolvente\)([\s\S]*?)(?=\n\s*4[.)]\s*Equivalentes|\n\s*Equivalentes en envases)/i);
    const pure=lastQty(pureSeg,'L');
    const solvent=lastQty(solvSeg,'L');
    const mixture=lastQty(mixSeg,'L');
    const bottles=one(/Botes de 4\s*L[^\n]*[\s\S]{0,120}?=\s*([0-9]+(?:[.,][0-9]+)?\s*botes?)/i);
    const bidons=one(/Bidones de 25\s*L[^\n]*[\s\S]{0,120}?=\s*([0-9]+(?:[.,][0-9]+)?\s*bidones?)/i);
    const rows=[];
    if(surface) rows.push(['Superficie',surface]);
    if(color) rows.push(['Color',color]);
    if(pure) rows.push(['Pintura pura',pure]);
    if(solvent) rows.push(['Disolvente',solvent]);
    if(mixture) rows.push(['Mezcla total',mixture]);
    if(bottles) rows.push(['Botes de 4 L',bottles]);
    if(bidons) rows.push(['Bidones de 25 L',bidons]);
    if(rows.length<4) return '';
    let html='<h4>Resultado del cálculo</h4><div class="ldh-ai-table-wrap"><table class="ldh-ai-cols-2"><thead><tr><th>Dato</th><th>Valor</th></tr></thead><tbody>';
    html+=rows.map(r=>'<tr><td>'+ldhAiInlineFormat(r[0])+'</td><td><strong>'+ldhAiInlineFormat(r[1])+'</strong></td></tr>').join('');
    html+='</tbody></table></div>';
    const base=[];
    if(factor) base.push('factor '+factor);
    if(hands) base.push(hands+' manos');
    if(base.length) html+='<p><strong>Base:</strong> '+base.map(ldhAiInlineFormat).join(' · ')+'</p>';
    return html;
  }
  function ldhAiIsTableSeparator(line){
    const cells=String(line||'').trim().replace(/^\||\|$/g,'').split('|').map(v=>v.trim());
    return cells.length>1 && cells.every(v=>/^:?-{3,}:?$/.test(v));
  }
  function ldhAiTableCells(line){
    return String(line||'').trim().replace(/^\||\|$/g,'').split('|').map(v=>v.trim());
  }
  function ldhAiRichHtml(value){
    const compact=ldhAiCompactPaintCalculation(value);
    if(compact) return compact;
    const lines=ldhAiNormalizeReadable(value).split('\n');
    let html='',i=0;
    const isBullet=line=>/^\s*[-*]\s+/.test(line);
    const isNumber=line=>/^\s*\d+[.)]\s+/.test(line);
    const isHeading=line=>/^\s*#{1,4}\s+/.test(line);
    const isFormula=line=>false;
    while(i<lines.length){
      const line=lines[i];
      if(!String(line).trim()){i++;continue;}
      if(isHeading(line)){
        html+='<h4>'+ldhAiInlineFormat(String(line).replace(/^\s*#{1,4}\s+/,''))+'</h4>';i++;continue;
      }
      if(line.includes('|') && i+1<lines.length && ldhAiIsTableSeparator(lines[i+1])){
        const head=ldhAiTableCells(line);
        i+=2;
        const rows=[];
        while(i<lines.length && lines[i].includes('|') && String(lines[i]).trim()){rows.push(ldhAiTableCells(lines[i]));i++;}
        html+='<div class="ldh-ai-table-wrap"><table class="ldh-ai-cols-'+Math.min(4,Math.max(2,head.length))+'"><thead><tr>'+head.map(c=>'<th>'+ldhAiInlineFormat(c)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+head.map((_,idx)=>'<td>'+ldhAiInlineFormat(r[idx]||'')+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
        continue;
      }
      if(isBullet(line)){
        const items=[];
        while(i<lines.length && isBullet(lines[i])){items.push(String(lines[i]).replace(/^\s*[-*]\s+/,''));i++;}
        html+='<ul>'+items.map(v=>'<li>'+ldhAiInlineFormat(v)+'</li>').join('')+'</ul>';
        continue;
      }
      if(isNumber(line)){
        const items=[];
        let start=Number((String(line).match(/^\s*(\d+)/)||[])[1]||1);
        while(i<lines.length && isNumber(lines[i])){items.push(String(lines[i]).replace(/^\s*\d+[.)]\s+/,''));i++;}
        html+='<ol'+(start!==1?' start="'+start+'"':'')+'>'+items.map(v=>'<li>'+ldhAiInlineFormat(v)+'</li>').join('')+'</ol>';
        continue;
      }
      if(isFormula(line)){
        html+='<div class="ldh-ai-formula">'+ldhAiInlineFormat(line)+'</div>';i++;continue;
      }
      const para=[line];i++;
      while(i<lines.length && String(lines[i]).trim() && !isHeading(lines[i]) && !(lines[i].includes('|') && i+1<lines.length && ldhAiIsTableSeparator(lines[i+1])) && !isBullet(lines[i]) && !isNumber(lines[i]) && !isFormula(lines[i])){para.push(lines[i]);i++;}
      html+='<p>'+para.map(ldhAiInlineFormat).join('<br>')+'</p>';
    }
    return html || ldhAiInlineFormat(value);
  }
  function addMessage(role,content){
    const row=document.createElement('div');
    row.className='ldh-ai-msg-row'+(role==='user'?' user':'');
    const meta=role==='user'?'Tú':(role==='error'?'Sistema':'Asistente IA');
    const klass=role==='error'?' error':(role==='system'?' system':'');
    const rendered=role==='user' ? esc(content) : ldhAiRichHtml(content);
    row.innerHTML=(role==='user'?'':'<div class="ldh-ai-mini-avatar">✦</div>')+
      '<div class="ldh-ai-msg-wrap"><div class="ldh-ai-meta">'+meta+'</div><div class="ldh-ai-bubble'+klass+'">'+rendered+'</div></div>';
    messages.appendChild(row);
    if(scroll)scroll.scrollTop=scroll.scrollHeight;
  }
  function resetMessages(message){
    messages.innerHTML='';
    if(message)addMessage('assistant',message);
  }
  function restoreConversation(){
    if(!state.history.length)return false;
    messages.innerHTML='';
    state.history.forEach(row=>{if(row&&row.role&&row.content)addMessage(row.role==='assistant'?'assistant':'user',row.content);});
    return true;
  }
  function clearConversation(){
    if(state.busy)return;
    if(!confirm('¿Limpiar esta conversación de IA? No se borrará ningún dato de Gestión Taller.'))return;
    state.history=[];
    window.__LDH_AI_GLOBAL_SAVE_HISTORY__?.(state.history);
    input.value='';
    resetMessages('Conversación limpiada. La IA de Gestión Taller sigue disponible y no se ha modificado ningún dato.');
    const model=text(state.health?.model||EXPECTED_MODEL).replace('openai/','');
    if(state.health?.hasKey)setStatus('IA central · '+model+' · '+(window.__LDH_AI_GLOBAL_MODULE__?.().label||'Gestión Taller')+' · en línea','ok');
  }
  async function bridge(path,body,method='POST'){
    const opt={method,headers:{'Content-Type':'application/json'}};
    if(method!=='GET')opt.body=JSON.stringify(body||{});
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),65000);
    opt.signal=controller.signal;
    try{
      const res=await fetch(BRIDGE+path,opt);
      const raw=await res.text();
      let obj={};
      try{obj=JSON.parse(raw)}catch(_){obj={error:raw||('HTTP '+res.status)}}
      if(!res.ok){
        const e=new Error(obj?.providerMessage||obj?.error||('HTTP '+res.status));
        e.status=res.status;e.details=obj;throw e;
      }
      return obj;
    }finally{clearTimeout(timer);}
  }
  function cleanDomText(node,max=1800){
    if(!node)return'';
    return text(node.innerText||node.textContent||'').replace(/\s+/g,' ').trim().slice(0,max);
  }
  function norm(v){
    return text(v).toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9._xø-]+/g,' ').replace(/\s+/g,' ').trim();
  }
  function num(v){
    const n=Number(String(v==null?'':v).replace(',','.'));
    return Number.isFinite(n)?n:0;
  }
  function parseJson(v,fallback){
    if(v&&typeof v==='object')return v;
    try{return v?JSON.parse(v):fallback;}catch(_){return fallback;}
  }
  function readStore(key){
    try{const v=localStorage.getItem(key);if(v)return v;}catch(_){}
    try{const v=sessionStorage.getItem(key);if(v)return v;}catch(_){}
    return '';
  }
  function firstValue(obj,keys,fallback=''){
    for(const k of keys){const v=obj?.[k];if(v!==undefined&&v!==null&&v!=='')return v;}
    return fallback;
  }
  function firstNumber(obj,keys){
    for(const k of keys){const v=obj?.[k];if(v!==undefined&&v!==null&&v!==''){const n=num(v);if(Number.isFinite(n))return n;}}
    return 0;
  }
  function tokensFor(q){
    const stop=new Set(['que','qué','cual','cuál','cuales','cuáles','cuanto','cuánto','cuantos','cuántos','cuantas','cuántas','hay','tenemos','queda','quedan','dime','muestra','muestrame','muéstrame','el','la','los','las','un','una','unos','unas','de','del','en','para','por','con','sin','y','o','a','al','es','esta','está','estan','están','como','cómo','ahora','mismo']);
    return norm(q).split(/\s+/).filter(t=>t.length>=2&&!stop.has(t));
  }
  function scoreText(hay,tokens){
    const n=norm(hay); if(!n)return 0;
    return tokens.reduce((sum,t)=>sum+(n.includes(t)?1:0),0);
  }
  function visibleSummary(){
    try{return window.__LDH_AI_GLOBAL_VISIBLE__?.()||{};}catch(_){return {};}
  }
  function homeSnapshot(){
    try{
      const snap=window.__LDH_INDEX_HOME_DATA_SNAPSHOT?.();
      if(snap&&typeof snap==='object')return snap;
    }catch(_){}
    const local=parseJson(readStore('ldh_work_orders_v1'),[]);
    const db=parseJson(readStore('ldh_db')||readStore('TallerFlowDB'),{});
    return {cloudReady:false,orders:Array.isArray(local)?local:[],notifications:[],miniAgenda:Array.isArray(db?.miniAgenda)?db.miniAgenda:[],updatedAt:0};
  }
  function compactOrderRows(userText){
    const snap=homeSnapshot();
    const tokens=tokensFor(userText);
    const q=norm(userText);
    const exactRef=(text(userText).match(/\bOT[-\s]?\d[\w-]*/i)||[])[0]||'';
    const rows=(snap.orders||[]).map((o,index)=>{
      const flow=o?.flow&&typeof o.flow==='object'?o.flow:{};
      const row={
        ref:text(firstValue(o,['reference','referencia','ref'],'')),
        empresa:text(firstValue(o,['companyName','empresa','company','empresaReceptora'],'')),
        departamento:text(firstValue(o,['departmentName','departamento','department'],'')),
        prioridad:firstNumber(o,['priority','prioridad','orden']),
        cantidad:firstNumber(o,['quantity','cantidad','units','unidades']),
        entrada:text(firstValue(o,['entryDate','fechaEntrada','createdDate','createdAt'],'')),
        entrega:text(firstValue(o,['deliveryDate','fechaEntrega','execDate','fechaEjecucion'],'')),
        estado:text(firstValue(o,['manualStatus','stateOverride','statusLabel','estado','status'],'')),
        descripcion:text(firstValue(o,['description','descripcion','concept','concepto','work'],'')),
        material:text(firstValue(o,['material','materialName','materiales'],'')),
        aviso:text(firstValue(o,['notice','aviso','warning'],'')),
        FAB:firstNumber(flow,['fab','fabricacion'])||firstNumber(o,['fab','enFabricacion','fabricacion']),
        PINT:firstNumber(flow,['pintura','pint'])||firstNumber(o,['pintura','enPintura']),
        ALM:firstNumber(flow,['almacen','alm'])||firstNumber(o,['almacen','enAlmacen']),
        ENT:firstNumber(flow,['entregado','ent'])||firstNumber(o,['entregado','enEntregado'])
      };
      const hay=Object.values(row).join(' ');
      let score=scoreText(hay,tokens);
      if(exactRef&&norm(row.ref)===norm(exactRef))score+=100;
      const pending=String(o?.status||'pending')==='pending'&&!o?.archivedV2;
      if(/\bpint/.test(q)&&(row.PINT>0||norm(row.estado).includes('pint')))score+=20;
      if(/\bfabric/.test(q)&&(row.FAB>0||norm(row.estado).includes('fabric')))score+=20;
      if(/\balmacen|almacén/.test(q)&&(row.ALM>0||norm(row.estado).includes('almacen')))score+=20;
      if(/\bentreg/.test(q)&&(row.ENT>0||norm(row.estado).includes('entreg')))score+=20;
      return {row,score,index,pending};
    });
    const broad=/\b(orden|ordenes|trabajo|trabajos|ot|pendiente|prioridad|retras|hoy|manana|mañana|estado|fase|empresa|fabric|pint|almacen|almacén|entreg|material)\b/.test(q);
    if(!broad&&!exactRef)return {cloudReady:!!snap.cloudReady,total:(snap.orders||[]).length,rows:[]};
    let chosen=rows.filter(x=>x.score>0);
    if(!chosen.length&&broad)chosen=rows.filter(x=>x.pending);
    chosen.sort((a,b)=>b.score-a.score||Number(a.row.prioridad||999)-Number(b.row.prioridad||999)||a.index-b.index);
    return {cloudReady:!!snap.cloudReady,total:(snap.orders||[]).length,rows:chosen.slice(0,28).map(x=>x.row)};
  }
  function collectPrefixedStore(prefix){
    const out={};
    const readOne=(storage)=>{
      try{
        for(let i=0;i<storage.length;i++){
          const key=storage.key(i);
          if(!key||!key.startsWith(prefix))continue;
          const ref=key.slice(prefix.length);
          if(!ref||Object.prototype.hasOwnProperty.call(out,ref))continue;
          const value=storage.getItem(key);
          if(value!==null&&value!==undefined)out[ref]=value;
        }
      }catch(_){}
    };
    try{readOne(localStorage);}catch(_){}
    try{readOne(sessionStorage);}catch(_){}
    return out;
  }
  function flowPackage(){
    let remote=null;
    try{
      if(window.__LDH_FABRICACION_REMOTE_PACKAGE&&typeof window.__LDH_FABRICACION_REMOTE_PACKAGE==='object'){
        remote=window.__LDH_FABRICACION_REMOTE_PACKAGE;
      }
    }catch(_){}

    // La IA global debe poder consultar el flujo aunque el usuario esté en otro módulo.
    // Si el paquete remoto del Index todavía no existe (o estamos en un módulo aislado),
    // usamos las mismas claves compartidas que leen Fabricación/Almacén/Preparación.
    const localDb=readStore('ldh_db')||readStore('TallerFlowDB')||'';
    const localPrepMeta=collectPrefixedStore('prep_meta_');
    const localPrepRecepcion=collectPrefixedStore('prep_recepcion_');

    if(remote){
      return {
        ...remote,
        ldh_db:remote.ldh_db||localDb,
        prepMeta:{...localPrepMeta,...(remote.prepMeta||{})},
        prepRecepcion:{...localPrepRecepcion,...(remote.prepRecepcion||{})}
      };
    }
    if(localDb||Object.keys(localPrepMeta).length||Object.keys(localPrepRecepcion).length){
      return {ldh_db:localDb||'{}',prepMeta:localPrepMeta,prepRecepcion:localPrepRecepcion,source:'ia_global_local_fallback'};
    }
    return null;
  }
  function compactFlowRows(userText){
    const pkg=flowPackage();
    if(!pkg)return {loaded:false,total:0,rows:[],summary:{pedidos_en_almacen:0,unidades_en_almacen:0,pedidos_con_entrega:0,unidades_entregadas:0,pedidos_en_fabricacion:0,unidades_en_fabricacion:0,pedidos_en_pintura:0,unidades_en_pintura:0}};
    const q=norm(userText),tokens=tokensFor(userText);
    const ldh=parseJson(pkg.ldh_db,{})||{};
    const items=new Map();
    ['deliveries','fabricacion','fab','trabajos'].forEach(k=>{
      (Array.isArray(ldh[k])?ldh[k]:[]).forEach(it=>{
        const ref=text(firstValue(it,['ref','referencia','jobRef','reference'],'')).trim();
        if(ref&&!items.has(ref))items.set(ref,it||{});
      });
    });
    Object.keys(pkg.prepMeta||{}).forEach(ref=>{if(ref&&!items.has(ref))items.set(ref,{});});
    const rows=[];
    items.forEach((it,ref)=>{
      const meta=parseJson(pkg.prepMeta?.[ref],{})||{};
      if(meta.deleted||meta.eliminado||meta.eliminado_modulos||meta.archived)return;
      const flow=(it.flow&&typeof it.flow==='object')?it.flow:((meta.flow&&typeof meta.flow==='object')?meta.flow:{});
      const FAB=firstNumber(flow,['fab','fabricacion'])||firstNumber(it,['fab','enFabricacion','fabricacion'])||firstNumber(meta,['fab','enFabricacion','fabricacion']);
      const PINT=firstNumber(flow,['pintura','pint'])||firstNumber(it,['pintura','enPintura'])||firstNumber(meta,['pintura','enPintura']);
      const ALM=firstNumber(flow,['almacen','alm'])||firstNumber(it,['almacen','enAlmacen'])||firstNumber(meta,['almacen','enAlmacen']);
      const ENT=firstNumber(flow,['entregado','ent'])||firstNumber(it,['entregado','enEntregado'])||firstNumber(meta,['entregado','enEntregado']);
      let fase=text(firstValue(meta,['fase','estado','status'],firstValue(it,['fase','estado','status'],'')));
      const nf=norm(fase);
      const flags=[];
      if(FAB>0||meta.en_fabricacion||meta.fabricacion_ts||nf.includes('fabric'))flags.push('FAB');
      if(PINT>0||meta.en_pintura||meta.pintura_ts||nf.includes('pint'))flags.push('PINT');
      if(ALM>0||meta.en_almacen||meta.almacen_ts||nf.includes('almacen'))flags.push('ALM');
      if(ENT>0||meta.entregado||meta.en_entregado||meta.entregado_ts||nf.includes('entreg'))flags.push('ENT');
      if(!flags.length&&/esperando.*material|waiting.*material/.test(nf))flags.push('ESPERANDO MATERIAL');
      if(!flags.length)flags.push('PREP');
      const recep=parseJson(pkg.prepRecepcion?.[ref],[]);
      let lineas=0,materialPendiente=0;
      if(Array.isArray(recep)){
        lineas=recep.length;
        recep.forEach(line=>{
          const ped=firstNumber(line,['pedida','qty_pedida','requested','qty','cantidad']);
          const rec=firstNumber(line,['recibida','qty_recibida','received']);
          if(ped>rec+1e-9)materialPendiente++;
        });
      }
      const row={
        ref,empresa:text(firstValue(it,['company','empresa','empresaReceptora'],firstValue(meta,['empresa','company','emp','empresaReceptora'],''))),
        concepto:text(firstValue(it,['concepto','concept','descripcion','description','name'],firstValue(meta,['concepto','concept','descripcion','description'],''))),
        fase:fase||flags.join('+'),pills:flags,FAB,PINT,ALM,ENT,lineas_material:lineas,lineas_pendientes_recepcion:materialPendiente
      };
      const hay=Object.values(row).flat().join(' ');
      let score=scoreText(hay,tokens);
      if(/\bpint/.test(q)&&flags.includes('PINT'))score+=20;
      if(/\bfabric/.test(q)&&flags.includes('FAB'))score+=20;
      if(/\balmacen|almacén/.test(q)&&flags.includes('ALM'))score+=20;
      if(/\bentreg/.test(q)&&flags.includes('ENT'))score+=20;
      if(/\bprepar/.test(q)&&flags.includes('PREP'))score+=20;
      if(/esperando.*material/.test(q)&&flags.includes('ESPERANDO MATERIAL'))score+=20;
      const exact=(text(userText).match(/\bOT[-\s]?\d[\w-]*/i)||[])[0]||'';
      if(exact&&norm(ref)===norm(exact))score+=100;
      rows.push({row,score});
    });
    const summary={
      pedidos_en_almacen:rows.filter(x=>Number(x.row.ALM)>0).length,
      unidades_en_almacen:rows.reduce((a,x)=>a+Number(x.row.ALM||0),0),
      pedidos_con_entrega:rows.filter(x=>Number(x.row.ENT)>0).length,
      unidades_entregadas:rows.reduce((a,x)=>a+Number(x.row.ENT||0),0),
      pedidos_en_fabricacion:rows.filter(x=>Number(x.row.FAB)>0).length,
      unidades_en_fabricacion:rows.reduce((a,x)=>a+Number(x.row.FAB||0),0),
      pedidos_en_pintura:rows.filter(x=>Number(x.row.PINT)>0).length,
      unidades_en_pintura:rows.reduce((a,x)=>a+Number(x.row.PINT||0),0)
    };
    const signal=/\b(prepar|fabric|pint|almacen|almacén|entreg|fase|estado|esperando|material|orden|trabajo|ot)\b/.test(q)||/\bOT[-\s]?\d/i.test(text(userText));
    if(!signal)return {loaded:true,total:rows.length,rows:[],summary};
    let chosen=rows.filter(x=>x.score>0);
    if(!chosen.length&&/\b(fabric|pint|almacen|almacén|entreg|prepar|esperando)\b/.test(q))chosen=rows.filter(x=>x.score>0||scoreText(x.row.pills.join(' '),tokens)>0);
    if(!chosen.length&&/\b(orden|trabajo|estado|fase)\b/.test(q))chosen=rows;
    chosen.sort((a,b)=>b.score-a.score||String(a.row.ref).localeCompare(String(b.row.ref),'es'));
    return {loaded:true,total:rows.length,rows:chosen.slice(0,28).map(x=>x.row),summary};
  }
  function stockDb(){
    const raw=window.__LDH_INDEX_STOCK_REMOTE_RAW||readStore('ldh_v2_company_stock_v1');
    const db=parseJson(raw,{})||{};
    return {
      companies:Array.isArray(db.companies)?db.companies:[],materials:Array.isArray(db.materials)?db.materials:[],stock:Array.isArray(db.stock)?db.stock:[],
      reservations:Array.isArray(db.reservations)?db.reservations:[],assignments:Array.isArray(db.assignments)?db.assignments:[],updatedAt:db.updatedAt||''
    };
  }
  function activeStockUse(row){
    const s=norm(firstValue(row,['status','estado'],'activa'));
    const f=norm(firstValue(row,['phase','fase'],''));
    if(/cancel|anulad|elimin|devuelt|archiv/.test(s+' '+f))return false;
    return true;
  }
  function stockUseQty(row){return firstNumber(row,['qty','cantidad','units','unidades','barras','mmAllocated','lineMm','mmAssigned']);}
  function compactStockRows(userText){
    const q=norm(userText);
    const signal=/\b(stock|material|materiales|disponible|disponibles|libre|libres|fisico|físico|fisicos|físicos|reservado|reservados|ferreteria|ferretería|pintura|bote|botes|barra|barras|pletina|tubo|perfil|chapa|ral)\b/.test(q)||/\d+(?:[.,]\d+)?\s*x\s*\d+/i.test(text(userText));
    const db=stockDb();
    if(!signal)return {loaded:db.materials.length>0,total:db.stock.length,rows:[]};
    const tokens=tokensFor(userText);
    const companies=new Map((db.companies||[]).map(c=>[String(c.id),text(c.name||c.nombre||c.empresa||c.id)]));
    const mats=new Map((db.materials||[]).map(m=>[String(m.id||m.materialId),m]));
    const companyMention=[...companies.entries()].find(([id,name])=>q.includes(norm(name))||q.includes(norm(id)));
    const rows=(db.stock||[]).map((r,index)=>{
      const cid=String(firstValue(r,['companyId','empresaId','company','empresa'],'stock_comun'));
      const mid=String(firstValue(r,['materialId','matId','idMaterial'],firstValue(r,['id'],'')));
      const m=mats.get(mid)||{};
      const empresa=companies.get(cid)||text(firstValue(r,['companyName','empresa'],cid));
      const material=text(firstValue(m,['name','nombre','material'],firstValue(r,['name','materialName','material'],mid)));
      const familia=text(firstValue(m,['family','familia','category','categoria'],firstValue(r,['family','familia'],'')));
      const unidad=text(firstValue(m,['unit','unidad','units'],firstValue(r,['unit','unidad'],'')));
      const physical=firstNumber(r,['physical','qty','cantidad','stock','actual']);
      const same=(x)=>{
        const xc=String(firstValue(x,['companyId','empresaId','toCompanyId','destinationCompanyId'],'')).trim();
        const xm=String(firstValue(x,['materialId','matId','toMaterialId','idMaterial'],'')).trim();
        return activeStockUse(x)&&xc===cid&&xm===mid;
      };
      const reservedRaw=r.reserved!==undefined?num(r.reserved):(db.reservations||[]).filter(same).reduce((a,x)=>a+stockUseQty(x),0);
      const assignedRaw=r.assigned!==undefined?num(r.assigned):(db.assignments||[]).filter(same).reduce((a,x)=>a+stockUseQty(x),0);
      const freeRaw=r.free!==undefined?num(r.free):Math.max(0,physical-reservedRaw-assignedRaw);
      const exactitud=(r.free!==undefined||r.reserved!==undefined||r.assigned!==undefined)?'fila_stock':'derivado_de_stock_reservas_asignaciones';
      const row={empresa,material,familia,unidad,ubicacion:text(firstValue(r,['location','ubicacion'],'')),fisico:physical,reservado:reservedRaw,asignado:assignedRaw,libre:freeRaw,minimo:firstNumber(r,['min','minimum','minimo']),exactitud};
      let score=scoreText([empresa,material,familia,unidad].join(' '),tokens);
      if(companyMention&&cid===companyMention[0])score+=4;
      return {row,score,index};
    });
    let chosen=rows.filter(x=>x.score>0);
    if(!chosen.length&&companyMention)chosen=rows.filter(x=>x.row.empresa===companyMention[1]);
    chosen.sort((a,b)=>b.score-a.score||Number(b.row.libre)-Number(a.row.libre)||a.index-b.index);
    return {loaded:db.materials.length>0,total:db.stock.length,rows:chosen.slice(0,24).map(x=>x.row)};
  }
  function compactAgendaRows(userText){
    const q=norm(userText);
    const signal=/\b(agenda|tarea|tareas|hoy|manana|mañana|retras|recordatorio|operario|fecha|ejecucion|ejecución)\b/.test(q);
    const snap=homeSnapshot();
    if(!signal)return {total:(snap.miniAgenda||[]).length,rows:[]};
    const tokens=tokensFor(userText);
    const rows=(snap.miniAgenda||[]).filter(x=>x&&!x.done&&!x.finished&&!x.completed).map((x,index)=>{
      const row={fecha:text(firstValue(x,['exec','execDate','fechaEjecucion','dateExec','date'],'')),operario:text(firstValue(x,['op','operario','operator'],'')),descripcion:text(firstValue(x,['desc','descripcion','task','tarea'],'')),estado:text(firstValue(x,['estado','status'],''))};
      return {row,score:scoreText(Object.values(row).join(' '),tokens),index};
    });
    let chosen=rows.filter(x=>x.score>0); if(!chosen.length)chosen=rows;
    chosen.sort((a,b)=>b.score-a.score||String(a.row.fecha).localeCompare(String(b.row.fecha))||a.index-b.index);
    return {total:rows.length,rows:chosen.slice(0,20).map(x=>x.row)};
  }
  function realDataForQuery(userText){
    const home=homeSnapshot();
    const stock=compactStockRows(userText);
    const flow=compactFlowRows(userText);
    const orders=compactOrderRows(userText);
    const agenda=compactAgendaRows(userText);
    return {
      timestamp:new Date().toISOString(),
      modo:'SOLO LECTURA',
      fuentes:{
        ordenes_trabajo:{nube:!!home.cloudReady,total:orders.total},
        preparacion_fabricacion:{cargado:!!flow.loaded,total:flow.total},
        stock:{cargado:!!stock.loaded,total:stock.total},
        agenda:{total:agenda.total}
      },
      ordenes_reales:orders.rows,
      resumen_flujo_real:flow.summary||{},
      flujo_real:flow.rows,
      stock_candidatos_reales:stock.rows,
      agenda_real:agenda.rows,
      visible:visibleSummary(),
      nota:'Instantánea real tomada justo antes de esta consulta a partir de las cachés que el Index ya mantiene desde Firebase/local. No se hace ninguna escritura ni una segunda llamada de razonamiento.'
    };
  }
  function groqRetryDelayMs(message){
    const raw=text(message);
    const patterns=[
      /(?:try again in|retry(?: after| in)?|espera(?: unos)?|reintenta(?: en)?)[^0-9]{0,18}([0-9]+(?:[.,][0-9]+)?)\s*(ms|milliseconds?|s|sec|secs|seconds?|seg|segs|segundos?|m|min|mins|minutes?|minutos?)/i,
      /([0-9]+(?:[.,][0-9]+)?)\s*(ms|milliseconds?|s|sec|secs|seconds?|seg|segs|segundos?|m|min|mins|minutes?|minutos?)[^0-9]{0,18}(?:retry|try again|reintenta|espera)/i
    ];
    for(const re of patterns){
      const m=raw.match(re); if(!m)continue;
      const value=Number(String(m[1]).replace(',','.')); if(!Number.isFinite(value)||value<0)continue;
      const unit=String(m[2]||'s').toLowerCase(); let ms=value*1000;
      if(unit.startsWith('ms')||unit.startsWith('mill'))ms=value; else if(unit==='m'||unit.startsWith('min'))ms=value*60000;
      return Math.max(500,Math.min(120000,Math.round(ms)));
    }
    return 3500;
  }
  function groqRateSummary(details,msg){
    const rl=details?.rateLimit||{}; const parts=[];
    if(rl.remainingTokens||rl.limitTokens)parts.push('tokens '+(rl.remainingTokens||'?')+' / '+(rl.limitTokens||'?'));
    if(rl.remainingRequests||rl.limitRequests)parts.push('peticiones '+(rl.remainingRequests||'?')+' / '+(rl.limitRequests||'?'));
    if(rl.resetTokens)parts.push('reinicio tokens '+rl.resetTokens);
    if(rl.resetRequests)parts.push('reinicio peticiones '+rl.resetRequests);
    if(rl.retryAfter)parts.push('Retry-After '+rl.retryAfter+'s');
    return {provider:text(details?.providerMessage||msg),parts};
  }
  function systemPrompt(userText){
    const live=realDataForQuery(userText);
    const mod=window.__LDH_AI_GLOBAL_MODULE__?.()||{id:'desconocido',label:document.title||'módulo'};
    const extra=window.__LDH_AI_GLOBAL_CONTEXT__?.(userText)||null;
    const modules=window.__LDH_AI_GLOBAL_MODULE_LIST__?.()||'';
    return [
      'Eres el Asistente IA GLOBAL de Gestión Taller de mantenimiento.',
      'Acompañas al usuario por todos los módulos internos de Gestión Taller conservando la conversación entre páginas.',
      'MÓDULO ACTUAL: '+mod.label+' [id='+mod.id+'] · '+location.pathname,
      'Responde siempre en español de España, de forma breve, precisa y práctica.',
      'Prioriza una lectura muy clara en el panel lateral: respuestas compactas, sin repetir los mismos datos en varios formatos.',
      'Usa negrita solo para cifras, nombres de módulos, referencias o encabezados importantes. Evita bloques densos.',
      'FORMATO TÉCNICO POR DEFECTO: cuando haya varios datos numéricos, materiales, cantidades, equivalencias, estados o cálculos, responde con UNA sola tabla Markdown compacta de 2 o 3 columnas. Después de la tabla añade como máximo una nota breve si aporta algo.',
      'Para cálculos, muestra primero y casi siempre únicamente una tabla | Dato | Valor |. Ejemplo de filas: Superficie, Pintura, Disolvente, Mezcla, Envases. La primera respuesta debe ser un RESUMEN DE RESULTADOS, no una explicación del procedimiento.',
      'No muestres el desarrollo matemático paso a paso salvo que el usuario pida expresamente «paso a paso», «cómo sale» o «fórmula». Si pide «explícame cuánto voy a gastar», interpreta que quiere el resultado claro, no las operaciones.',
      'Si el usuario pide explicar un cálculo sin pedir el desarrollo matemático, añade como máximo una línea de Base debajo de la tabla; nunca una secuencia de fórmulas.',
      'Usa listas con viñetas solo para ideas cortas no tabulares.',
      'NO uses LaTeX, TeX ni delimitadores matemáticos como \\[ \\] \\( \\) $ o $$. Tampoco uses comandos como \\text, \\frac o \\times.',
      'Escribe cualquier fórmula en texto normal y legible. Ejemplo correcto: 4 m² × 0,150 L/m² × 1,5 = 0,90 L.',
      'Si numeras pasos, escribe números consecutivos reales: 1., 2., 3., 4. No repitas 1. confiando en el autoformato Markdown.',
      'Tu misión principal es ayudar, explicar la pantalla actual, guiar paso a paso y orientar la navegación por el programa.',
      'Las instrucciones explícitas del usuario sobre el formato tienen prioridad. Si dice «responde únicamente X», responde exactamente X y nada más.',
      'Una consulta recibida por el walkie-talkie se trata exactamente igual que una consulta escrita. No la confundas con el aviso por voz de Agenda diaria.',
      'Estás en MODO SOLO LECTURA respecto a los datos operativos. Nunca afirmes que has modificado, borrado, enviado, archivado, priorizado, recibido o guardado datos.',
      'Sí puedes NAVEGAR entre módulos internos de Gestión Taller. Solo puedes usar los módulos de REGISTRO_MODULOS.',
      'Los terminales, Apps operativas y Programas de Dirección son independientes y están EXCLUIDOS: no navegues a ellos ni inventes rutas.',
      'Si el usuario pide EXPLÍCITAMENTE abrir, ir, entrar o llevarle a un módulo y puedes inferir con seguridad el destino, comienza tu respuesta exactamente con [[NAVEGAR:id]] usando un id de REGISTRO_MODULOS. Después añade una frase muy breve.',
      'Si solo pregunta dónde está algo, explícalo pero NO navegues salvo que también pida abrir/ir/entrar/llevarle.',
      'La pantalla visible actual está incluida en DATOS_REALES_AHORA.visible. Usa sus botones, títulos, enlaces y etiquetas para guiar al usuario sin inventar controles.',
      'DATOS_REALES_AHORA contiene una instantánea de solo lectura. No inventes filas, cantidades, fechas, stock ni fases.',
      'Para una OT concreta combina ordenes_reales y flujo_real por referencia cuando existan. FAB/PINT/ALM/ENT son cantidades/fases y pueden coexistir en la misma OT.',
      'Para preguntas globales de cantidades por fase (por ejemplo cuántos pedidos hay en Almacén o cuántas unidades están entregadas), usa primero DATOS_REALES_AHORA.resumen_flujo_real: son totales calculados determinísticamente por la aplicación, no estimaciones del modelo.',
      'Si una fuente figura como no cargada o los candidatos no contienen la respuesta, dilo claramente en vez de suponer.',
      'Economía de cuota: resuelve todo lo posible con esta única instantánea y esta única llamada. No solicites una segunda consulta al modelo.',
      '',
      'REGISTRO_MODULOS='+modules,
      'CONTEXTO_ESPECIFICO_MODULO='+JSON.stringify(extra),
      'DATOS_REALES_AHORA='+JSON.stringify(live)
    ].join('\n');
  }
  function compactHistory(){
    // Igual que Informativa: dos intercambios recientes son suficientes y reducen tokens.
    return state.history.slice(-4);
  }
  const LOCAL_FACTS_FIRST = window.LDH_AI_GLOBAL_LOCAL_FACTS_FIRST !== false;
  // R19: explicación/guía básica local universal + lectura correcta de botones_visibles.
  function needsCentralReasoning(userText){
    const q=norm(userText);
    if(!q)return false;
    if(/\b(por que|porque|como funciona|paso a paso|que harias)\b/.test(q))return true;
    if(/\b(mejor|peor|riesgo|causa|motivo|formula)\b/.test(q))return true;
    return /\b(explic|analiz|razon|recomend|aconsej|convien|compar|opin|sugier|suger|interpret|estrateg|deberi|podri)[a-z0-9_-]*\b/.test(q);
  }
  function mdSafe(v){return text(v).replace(/\|/g,'/').replace(/\r?\n/g,' ').trim();}
  function fmtLocal(n){return Number(n||0).toLocaleString('es-ES',{maximumFractionDigits:2});}
  function ferreteriaStoreSnapshot(section){
    const raw=readStore('ldh_v2_ferreteria_stock_v1');
    const db=parseJson(raw,null);
    if(!db||!Array.isArray(db.materials)||!Array.isArray(db.stock)||!Array.isArray(db.movements))return null;
    const want=section==='prefabricados'?'prefabricados':'ferreteria';
    const mats=new Map((db.materials||[]).map(m=>[String(m?.id||m?.materialId||''),m]));
    const rows=(db.stock||[]).map(s=>{
      const mid=String(s?.materialId||s?.matId||'');
      const m=mats.get(mid);
      if(!m)return null;
      const mt=norm(m.type||'');
      if(want==='prefabricados'){if(mt!=='prefabricados')return null;}
      else if(mt&&mt!=='ferreteria')return null;
      let fisico=0;
      (db.movements||[]).forEach(mv=>{
        if(String(mv?.materialId||mv?.matId||'')!==mid)return;
        const t=norm(mv?.type||mv?.tipo||'entrada');
        const q=num(mv?.qty??mv?.cantidad);
        if(['salida','ajuste neg','out','consumo','salida preparacion'].includes(t))fisico-=q;
        else fisico+=q;
      });
      const minimo=num(s?.min??s?.minimum??s?.minimo);
      return {material:text(m.name||m.nombre||mid),familia:text(m.family||m.familia||m.grp),unidad:text(m.unit||m.unidad||'ud'),ubicacion:text(s.location||s.ubicacion),fisico,minimo};
    }).filter(Boolean);
    return {section:want,label:want==='prefabricados'?'Prefabricados':'Ferreteria comun',rows};
  }
  function ferreteriaExactAnswer(userText,mod,extra){
    const q=norm(userText);
    const asksLow=/\b(bajo minimo|bajos minimos|debajo del minimo|por debajo del minimo)\b/.test(q);
    const asksZero=/\b(agotad|sin stock|stock cero|a cero)\b/.test(q);
    const asksTotal=/\b(stock total|cuanto stock|cuanto tengo en stock|total de stock)\b/.test(q);
    if(!asksLow&&!asksZero&&!asksTotal)return null;
    const mentionsFer=/\bferreteria\b/.test(q);
    const mentionsPre=/\bprefabricad/.test(q);
    if(mod.id!=='ferreteria'&&!mentionsFer&&!mentionsPre)return null;
    let section=mentionsPre?'prefabricados':mentionsFer?'ferreteria':'';
    let snap=null;
    if(mod.id==='ferreteria'&&extra&&typeof extra==='object'){
      const active=norm(extra.apartadoActual||extra?.interfaz?.apartado||'');
      const activeSection=active.includes('prefabric')?'prefabricados':'ferreteria';
      if(!section)section=activeSection;
      if(section===activeSection){
        let rows=Array.isArray(extra.materialesVisibles)?extra.materialesVisibles:[];
        if(asksLow&&Array.isArray(extra.bajoMinimo))rows=extra.bajoMinimo;
        if(asksZero&&Array.isArray(extra.agotados))rows=extra.agotados;
        snap={section,label:text(extra.apartadoActual)||(section==='prefabricados'?'Prefabricados':'Ferreteria comun'),rows:rows.map(r=>({material:text(r.material),familia:text(r.familia),unidad:text(r.unidad||'ud'),ubicacion:text(r.ubicacion),fisico:num(r.fisico),minimo:num(r.minimo)})),summary:extra.resumen||{}};
      }
    }
    if(!section)section='ferreteria';
    // Si el módulo actual ha entregado una instantánea válida, incluso una lista vacía
    // (por ejemplo 0 materiales bajo mínimo), esa respuesta es autoritativa. No caer
    // al localStorage porque puede contener una copia anterior a la última sincronización.
    if(!snap)snap=ferreteriaStoreSnapshot(section);
    if(!snap)return null;
    const label=snap.label|| (section==='prefabricados'?'Prefabricados':'Ferreteria comun');
    if(asksLow){
      const rows=snap.rows.filter(r=>r.fisico>0&&r.minimo>0&&r.fisico<=r.minimo);
      if(!rows.length)return {handled:true,text:'No hay ningun material bajo minimo en **'+label+'**.'};
      const body=rows.slice(0,30).map(r=>'| '+mdSafe(r.material)+' | **'+fmtLocal(r.fisico)+' '+mdSafe(r.unidad)+'** | '+fmtLocal(r.minimo)+' '+mdSafe(r.unidad)+' |').join('\n');
      return {handled:true,text:'| Material | Fisico | Minimo |\n|---|---:|---:|\n'+body+'\n\n**Total:** '+rows.length+' material'+(rows.length===1?'':'es')+' bajo minimo en '+label+'.'};
    }
    if(asksZero){
      const rows=snap.rows.filter(r=>r.fisico<=0);
      if(!rows.length)return {handled:true,text:'No hay materiales agotados en **'+label+'**.'};
      const body=rows.slice(0,30).map(r=>'| '+mdSafe(r.material)+' | **'+fmtLocal(r.fisico)+' '+mdSafe(r.unidad)+'** | '+mdSafe(r.familia)+' |').join('\n');
      return {handled:true,text:'| Material | Stock | Familia |\n|---|---:|---|\n'+body+'\n\n**Total:** '+rows.length+' material'+(rows.length===1?'':'es')+' agotado'+(rows.length===1?'':'s')+'.'};
    }
    const total=snap.summary&&Number.isFinite(Number(snap.summary.stockFisicoTotal))?Number(snap.summary.stockFisicoTotal):snap.rows.reduce((a,r)=>a+num(r.fisico),0);
    return {handled:true,text:'Stock fisico total de **'+label+'**: **'+fmtLocal(total)+'**.'};
  }
  function localDate(v){
    if(!v)return '—';
    const d=new Date(v);
    if(Number.isNaN(d.getTime()))return text(v)||'—';
    return d.toLocaleDateString('es-ES');
  }
  function localDateTime(v){
    if(!v)return '—';
    const d=new Date(v);
    if(Number.isNaN(d.getTime()))return text(v)||'—';
    return d.toLocaleString('es-ES');
  }
  function localWords(v){
    return norm(v)
      .replace(/\bmetros?\b/g,'metro')
      .replace(/\bmilimetros?\b/g,'mm')
      .replace(/\bcentimetros?\b/g,'cm')
      .replace(/\bherramientas?\b/g,'herramienta')
      .replace(/\bentregas?\b/g,'entrega')
      .replace(/\breposiciones?\b/g,'reposicion')
      .replace(/\bprestadas?\b|\bprestados?\b/g,'prestado')
      .split(/\s+/).filter(Boolean);
  }
  function localIncludesToken(q,token){
    if(!token)return false;
    const qq=' '+localWords(q).join(' ')+' ';
    const tt=' '+localWords(token).join(' ')+' ';
    return qq.includes(tt);
  }
  function localScore(q,value,{firstBoost=0}={}){
    const nq=norm(q), nv=norm(value);
    if(!nv)return 0;
    let score=nq.includes(nv)?20:0;
    const toks=localWords(value).filter(t=>t.length>1||/^\d+$/.test(t));
    toks.forEach((t,i)=>{if(localWords(q).includes(t))score+=(i===0&&firstBoost?firstBoost:3);});
    return score;
  }
  function bestLocalCandidate(q,rows,getValue,opts={}){
    let best=null,bestScore=0,ties=0;
    const seen=new Set();
    for(const row of rows||[]){
      const raw=getValue(row);
      const key=norm(raw);
      if(!key||seen.has(key))continue;
      seen.add(key);
      const sc=localScore(q,raw,opts);
      if(sc>bestScore){best=row;bestScore=sc;ties=1;}
      else if(sc>0&&sc===bestScore){ties++;}
    }
    return bestScore>0&&ties===1?best:null;
  }
  function localEditDistance(a,b){
    const aa=String(a||''),bb=String(b||'');
    if(!aa)return bb.length;if(!bb)return aa.length;
    let prev=Array.from({length:bb.length+1},(_,i)=>i);
    for(let i=1;i<=aa.length;i++){
      const cur=[i];
      for(let j=1;j<=bb.length;j++)cur[j]=Math.min(cur[j-1]+1,prev[j]+1,prev[j-1]+(aa[i-1]===bb[j-1]?0:1));
      prev=cur;
    }
    return prev[bb.length];
  }
  function localVoiceKey(v){
    return norm(v).replace(/h/g,'').replace(/[^a-z0-9 ]+/g,' ').replace(/\s+/g,' ').trim();
  }
  function bestLocalOperatorCandidate(q,rows,getValue,opts={}){
    const exact=bestLocalCandidate(q,rows,getValue,opts);
    if(exact)return exact;
    const stop=new Set(['cuant','cuanta','cuantas','cuanto','cuantos','entrega','entregas','reposicion','reposiciones','incidencia','incidencias','herramienta','herramientas','metro','metros','tiene','tienen','del','los','las','una','uno','para','por','con','sin','donde','quien','recogio','ultima','ultimo','media','promedio','intervalo','frecuencia']);
    const qTokens=localVoiceKey(q).split(/\s+/).filter(t=>t.length>=4&&!stop.has(t));
    if(!qTokens.length)return null;
    let best=null,bestDist=999,bestLen=0,ties=0;
    const seen=new Set();
    for(const row of rows||[]){
      const raw=text(getValue(row));
      const key=norm(raw);if(!key||seen.has(key))continue;seen.add(key);
      const first=(localVoiceKey(raw).split(/\s+/).filter(Boolean)[0]||'');
      if(first.length<4)continue;
      let rowDist=999,rowTokenLen=0;
      for(const qt of qTokens){
        const d=localEditDistance(qt,first);
        if(d<rowDist){rowDist=d;rowTokenLen=Math.max(qt.length,first.length);}
      }
      const allowed=rowTokenLen>=7?2:1;
      if(rowDist>allowed)continue;
      if(rowDist<bestDist){best=row;bestDist=rowDist;bestLen=rowTokenLen;ties=1;}
      else if(rowDist===bestDist&&rowTokenLen===bestLen){ties++;}
    }
    return best&&ties===1?best:null;
  }
  function localOperatorWasFuzzy(q,name){
    return !!name&&localScore(q,name,{firstBoost:6})===0;
  }
  function recentUserQueryContext(userText){
    const q=norm(userText);
    if(!/^(donde|donde esta|donde esta ahora|quien|quien lo tiene|quien la tiene|quien recogio|cuando|cuando fue|cuantas|cuantos)$/.test(q))return userText;
    const prev=(state.history||[]).filter(x=>x&&x.role==='user').slice(-2).map(x=>text(x.content)).filter(Boolean);
    return prev.length?(prev.join(' ')+' '+userText):userText;
  }
  function herramientasStoreSnapshot(){
    const raw=readStore('tool_loans_db_v14_lib');
    const db=parseJson(raw,null);
    if(!db||typeof db!=='object')return null;
    const departments=Array.isArray(db.departments)?db.departments:[];
    const operators=(Array.isArray(db.operators)?db.operators:[]).filter(o=>!o?.archived);
    const deptNameFor=(op)=>{
      const d=departments.find(x=>String(x?.id||'')===String(op?.departmentId||''));
      return text(d?.name||op?.dept||'Sin departamento');
    };
    const commonLoans=[];
    for(const t of (Array.isArray(db.tools)?db.tools:[])){
      if(t?.archived)continue;
      for(const l of (Array.isArray(t?.loans)?t.loans:[])){
        if(String(l?.status||'active')==='closed'||num(l?.qty)<=0)continue;
        commonLoans.push({
          herramienta:text(t?.name),familia:text(t?.family),cantidad:num(l?.qty),operario:text(l?.operator),recoge:text(l?.pickupBy||l?.operator),zona:text(l?.zone),variante:text(l?.variant),salida:text(l?.outAt),devolucionPrevista:text(l?.dueAt),notas:text(l?.notes)
        });
      }
    }
    const deliveries=[];
    for(const d of (Array.isArray(db.personalDeliveries)?db.personalDeliveries:[])){
      if(!d||String(d?.status||'active')==='cancelled')continue;
      for(const it of (Array.isArray(d?.items)?d.items:[])){
        deliveries.push({
          deliveryId:text(d?.id),operatorId:text(d?.operatorId),operario:text(d?.operatorName),departamento:text(d?.departmentName),entregaRealizadaPor:text(d?.deliveredBy),motivo:text(d?.reason),notas:text(d?.notes),fecha:text(d?.at||d?.createdAt),toolId:text(it?.toolId),herramienta:text(it?.name),variante:text(it?.variant),cantidad:num(it?.qty)
        });
      }
    }
    const assignments=(Array.isArray(db.personalAssignments)?db.personalAssignments:[]).filter(a=>num(a?.qty)>0).map(a=>({
      id:text(a?.id),operatorId:text(a?.operatorId),operario:text(a?.operatorName),departamento:text(a?.departmentName),toolId:text(a?.toolId),herramienta:text(a?.toolName),cantidad:num(a?.qty),danadas:num(a?.damagedQty),roturas:num(a?.brokenQty),desgaste:num(a?.wornQty),perdidas:num(a?.missingQty)
    }));
    const personalLoans=(Array.isArray(db.personalLoans)?db.personalLoans:[]).filter(l=>String(l?.status||'active')==='active'&&num(l?.qty)>0).map(l=>({
      herramienta:text(l?.toolName),cantidad:num(l?.qty),responsable:text(l?.ownerName),poseedorActual:text(l?.borrowerName),departamentoPoseedor:text(l?.borrowerDepartmentName),operarioOcasional:!!l?.borrowerOccasional,salida:text(l?.outAt),devolucionPrevista:text(l?.dueAt),notas:text(l?.notes)
    }));
    const personalHistory=(Array.isArray(db.personalHistory)?db.personalHistory:[]).map(h=>({
      fecha:text(h?.at),tipo:text(h?.type),operatorId:text(h?.operatorId),operario:text(h?.operatorName),otroOperarioId:text(h?.otherOperatorId),otroOperario:text(h?.otherOperatorName),departamento:text(h?.departmentName),herramienta:text(h?.toolName),cantidad:num(h?.qty),motivo:text(h?.reason),condicion:text(h?.condition),notas:text(h?.notes),prestamoId:text(h?.loanId),entregaId:text(h?.deliveryId)
    }));
    return {db,departments,operators:operators.map(o=>({id:text(o?.id),nombre:text(o?.name),departamento:deptNameFor(o)})),commonLoans,deliveries,assignments,personalLoans,personalHistory};
  }
  function reasonLabelLocal(v){
    return ({alta:'Alta / incorporación',ampliacion:'Ampliación',reposicion:'Reposición',desgaste:'Desgaste',rotura:'Rotura',perdida:'Pérdida',otro:'Otro'})[norm(v)]||text(v)||'—';
  }
  function exactCommonLoanAnswer(q,commonLoans){
    if(!Array.isArray(commonLoans))return null;
    const intentLoan=/\b(prestad[a-z0-9_-]*|prestam[a-z0-9_-]*|quien tiene|quien recogio|recogio|donde esta|donde)\b/.test(q);
    if(!intentLoan)return null;
    const ctx=recentUserQueryContext(q);
    const tool=bestLocalCandidate(ctx,commonLoans,r=>[r.herramienta,r.variante].filter(Boolean).join(' '));
    const op=bestLocalOperatorCandidate(ctx,commonLoans,r=>r.operario,{firstBoost:5});
    let rows=commonLoans.slice();
    if(tool){const key=norm([tool.herramienta,tool.variante].filter(Boolean).join(' '));rows=rows.filter(r=>norm([r.herramienta,r.variante].filter(Boolean).join(' '))===key);}
    if(op){const key=norm(op.operario);rows=rows.filter(r=>norm(r.operario)===key);}
    if(/\bquien recogio|\brecogio\b/.test(q)){
      if(rows.length===1){const r=rows[0];return {handled:true,text:'La **'+mdSafe(r.herramienta)+(r.variante?' ('+mdSafe(r.variante)+')':'')+'** prestada a **'+mdSafe(r.operario)+'** la recogió **'+mdSafe(r.recoge||r.operario)+'**.'};}
      if(rows.length>1){const body=rows.slice(0,30).map(r=>'| '+mdSafe(r.herramienta+(r.variante?' · '+r.variante:''))+' | '+mdSafe(r.operario)+' | **'+mdSafe(r.recoge||r.operario)+'** |').join('\n');return {handled:true,text:'| Herramienta | Operario | Recogió |\n|---|---|---|\n'+body};}
      return tool||op?{handled:true,text:'No encuentro un préstamo activo que coincida con esa herramienta y operario.'}:null;
    }
    if(/\bdonde\b/.test(q)){
      if(rows.length===1){const r=rows[0];return {handled:true,text:'La **'+mdSafe(r.herramienta)+(r.variante?' ('+mdSafe(r.variante)+')':'')+'** está prestada a **'+mdSafe(r.operario)+'**'+(r.zona?' en **'+mdSafe(r.zona)+'**':' y no tiene una zona registrada')+'.'};}
      if(rows.length>1&&tool){const body=rows.slice(0,20).map(r=>'| '+mdSafe(r.operario)+' | '+mdSafe(r.zona||'Sin zona')+' |').join('\n');return {handled:true,text:'| Operario | Zona |\n|---|---|\n'+body};}
      if(!tool&&!op&&commonLoans.length===1){const r=commonLoans[0];return {handled:true,text:'La **'+mdSafe(r.herramienta)+'** está prestada a **'+mdSafe(r.operario)+'**'+(r.zona?' en **'+mdSafe(r.zona)+'**':' y no tiene una zona registrada')+'.'};}
      return null;
    }
    if(/\b(quien tiene|a quien|prestadas ahora|prestados ahora|que herramientas.*prestad|herramientas.*prestad)\b/.test(q)){
      if(!commonLoans.length)return {handled:true,text:'No hay herramientas comunes prestadas ahora mismo.'};
      if(rows.length===1&&tool){const r=rows[0];return {handled:true,text:'La **'+mdSafe(r.herramienta)+(r.variante?' ('+mdSafe(r.variante)+')':'')+'** la tiene **'+mdSafe(r.operario)+'**'+(r.zona?' · Zona: **'+mdSafe(r.zona)+'**':'')+'.'};}
      const use=tool||op?rows:commonLoans;
      const body=use.slice(0,40).map(r=>'| '+mdSafe(r.herramienta+(r.variante?' · '+r.variante:''))+' | **'+mdSafe(r.operario)+'** | '+mdSafe(r.zona||'—')+' |').join('\n');
      return {handled:true,text:'| Herramienta | Operario | Zona |\n|---|---|---|\n'+body+'\n\n**Total:** '+use.length+' préstamo'+(use.length===1?'':'s')+' activo'+(use.length===1?'':'s')+'.'};
    }
    return null;
  }
  function exactPersonalDeliveryAnswer(q,snap){
    const intents=/\b(entreg[a-z0-9_-]*|reposicion[a-z0-9_-]*|ultima entrega|media|promedio|intervalo|cada cuanto|frecuencia)\b/.test(q);
    if(!intents||!snap?.deliveries?.length)return null;
    const operator=bestLocalOperatorCandidate(q,snap.deliveries,r=>r.operario,{firstBoost:6});
    const tool=bestLocalCandidate(q,snap.deliveries,r=>[r.herramienta,r.variante].filter(Boolean).join(' '));
    const dep=bestLocalCandidate(q,snap.deliveries,r=>r.departamento,{firstBoost:2});
    if(!operator&&!tool)return null;
    if(!operator&&tool){
      const namedTail=q.match(/\btiene\s+([a-z0-9_-]{4,})\b/);
      const generic=new Set(['esta','este','esto','alguno','alguna','alguien','ahora']);
      if(namedTail&&!generic.has(namedTail[1]))return {handled:true,text:'No identifico con seguridad el operario dictado como **'+mdSafe(namedTail[1])+'**. Repite solo su nombre y no asignare la consulta a otra persona.'};
    }
    let rows=snap.deliveries.slice();
    if(operator){const k=norm(operator.operario);rows=rows.filter(r=>norm(r.operario)===k);}
    if(tool){const k=norm([tool.herramienta,tool.variante].filter(Boolean).join(' '));rows=rows.filter(r=>norm([r.herramienta,r.variante].filter(Boolean).join(' '))===k);}
    if(dep&&/\bdepartamento|los del hierros|construccion|electricidad|mantenimiento|jardineria|direccion|taller\b/.test(q)){const k=norm(dep.departamento);rows=rows.filter(r=>norm(r.departamento)===k);}
    if(!rows.length)return {handled:true,text:'No encuentro entregas de dotación personal que coincidan con esa consulta.'};
    rows.sort((a,b)=>(Date.parse(b.fecha)||0)-(Date.parse(a.fecha)||0));
    const repos=rows.filter(r=>!['alta','ampliacion'].includes(norm(r.motivo)));
    const units=rows.reduce((a,r)=>a+num(r.cantidad),0);
    const who=operator?operator.operario:(rows[0]?.operario||'');
    const toolLabel=tool?[tool.herramienta,tool.variante].filter(Boolean).join(' · '):'';
    const voicePrefix=operator&&localOperatorWasFuzzy(q,operator.operario)?('He interpretado el nombre dictado como **'+mdSafe(operator.operario)+'**. '):'';
    if(/\b(media|promedio|intervalo|cada cuanto|frecuencia)\b/.test(q)){
      const times=rows.map(r=>Date.parse(r.fecha)||0).filter(Boolean).sort((a,b)=>a-b);
      if(times.length<2)return {handled:true,text:voicePrefix+'Para **'+mdSafe(toolLabel||'esa herramienta')+'** de **'+mdSafe(who||'ese operario')+'** solo hay '+times.length+' entrega registrada; todavía no se puede calcular una media entre entregas.'};
      let total=0;for(let i=1;i<times.length;i++)total+=times[i]-times[i-1];
      const days=total/(times.length-1)/86400000;
      return {handled:true,text:voicePrefix+'Intervalo medio de **'+mdSafe(toolLabel||'entregas')+'** para **'+mdSafe(who)+'**: **'+fmtLocal(days)+' días** · '+rows.length+' entregas registradas.'};
    }
    if(/\bultima entrega|ultima vez|cuando.*entreg/.test(q)){
      const r=rows[0];
      return {handled:true,text:voicePrefix+'Última entrega'+(toolLabel?' de **'+mdSafe(toolLabel)+'**':'')+(who?' a **'+mdSafe(who)+'**':'')+': **'+localDate(r.fecha)+'** · '+reasonLabelLocal(r.motivo)+(r.entregaRealizadaPor?' · Entregó: **'+mdSafe(r.entregaRealizadaPor)+'**':'')+'.'};
    }
    if(/\breposicion/.test(q)&&/\b(cuant|numero|total|tiene|ha tenido|recibido)\b/.test(q)){
      const rUnits=repos.reduce((a,r)=>a+num(r.cantidad),0);
      return {handled:true,text:voicePrefix+'**'+mdSafe(who||'El operario')+'** tiene **'+repos.length+' '+(repos.length===1?'reposición':'reposiciones')+'**'+(toolLabel?' de **'+mdSafe(toolLabel)+'**':'')+' · **'+fmtLocal(rUnits)+' uds.** repuestas.'};
    }
    if(/\b(cuant|numero|total|tiene|ha recibido|recibido)\b/.test(q)){
      return {handled:true,text:voicePrefix+'**'+mdSafe(who||'El operario')+'** tiene **'+rows.length+' entrega'+(rows.length===1?'':'s')+'**'+(toolLabel?' de **'+mdSafe(toolLabel)+'**':'')+' · **'+fmtLocal(units)+' uds.** entregadas'+(repos.length?' · '+repos.length+' '+(repos.length===1?'reposición':'reposiciones'):'')+'.'};
    }
    return null;
  }
  function historyIncidentKindLocal(h){
    const type=norm(h?.tipo);
    if(type==='incident'){
      const r=norm(h?.motivo);
      if(r==='rotura')return 'Rotura';
      if(r==='desgaste')return 'Desgaste';
      if(r==='perdida')return 'Pérdida';
      return 'Otra';
    }
    if(type==='loan_return'){
      const c=norm(h?.condicion);
      if(c==='broken')return 'Rotura';
      if(c==='worn')return 'Desgaste';
      if(c==='lost')return 'Pérdida';
      if(c==='damaged')return 'Otra';
    }
    return '';
  }
  function exactPersonalHistoryIncidentAnswer(q,snap){
    if(!snap)return null;
    if(!/\b(historico|historial|historicas|historicos)\b/.test(q))return null;
    if(!/\b(incidencia|incidencias|rotura|roturas|perdida|perdidas|desgaste|danad)\b/.test(q))return null;
    const history=Array.isArray(snap.personalHistory)?snap.personalHistory:[];
    const operator=bestLocalOperatorCandidate(q,history,r=>r.operario,{firstBoost:6})||bestLocalOperatorCandidate(q,snap.operators||[],r=>r.nombre,{firstBoost:6});
    if(!operator)return null;
    const opName=text(operator.operario||operator.nombre);
    const voicePrefix=localOperatorWasFuzzy(q,opName)?('He interpretado el nombre dictado como **'+mdSafe(opName)+'**. '):'';
    let rows=history.filter(r=>norm(r.operario)===norm(opName)).map(r=>({...r,incKind:historyIncidentKindLocal(r)})).filter(r=>r.incKind);
    const tool=bestLocalCandidate(q,rows,r=>r.herramienta);
    if(tool){const k=norm(tool.herramienta);rows=rows.filter(r=>norm(r.herramienta)===k);}
    const units=rows.reduce((a,r)=>a+Math.max(1,num(r.cantidad)),0);
    const activeRows=(snap.assignments||[]).filter(r=>norm(r.operario)===norm(opName));
    const active=activeRows.reduce((a,r)=>a+num(r.danadas)+num(r.roturas)+num(r.desgaste)+num(r.perdidas),0);
    if(!rows.length)return {handled:true,text:voicePrefix+'**'+mdSafe(opName)+'** no tiene incidencias registradas en el histórico'+(tool?' para **'+mdSafe(tool.herramienta)+'**':'')+'. Incidencias activas ahora: **'+fmtLocal(active)+'**.'};
    const grouped=new Map();
    for(const r of rows){
      const toolName=text(r.herramienta)||'Herramienta sin identificar';
      const key=norm(toolName)+'|'+r.incKind;
      if(!grouped.has(key))grouped.set(key,{herramienta:toolName,tipo:r.incKind,events:0,units:0});
      const g=grouped.get(key),u=Math.max(1,num(r.cantidad));
      g.events++; g.units+=u;
    }
    const body=[...grouped.values()]
      .sort((a,b)=>String(a.herramienta).localeCompare(String(b.herramienta),'es',{sensitivity:'base'})||String(a.tipo).localeCompare(String(b.tipo),'es'))
      .map(v=>'| '+mdSafe(v.herramienta)+' | '+v.tipo+' | **'+v.events+'** | **'+fmtLocal(v.units)+'** |').join('\n');
    return {handled:true,text:voicePrefix+'**'+mdSafe(opName)+'** tiene **'+rows.length+' incidencia'+(rows.length===1?'':'s')+' histórica'+(rows.length===1?'':'s')+'**'+(tool?' de **'+mdSafe(tool.herramienta)+'**':'')+' · **'+fmtLocal(units)+' uds. afectadas**.\n\n| Herramienta | Tipo | Casos | Uds. |\n|---|---|---:|---:|\n'+body+'\n\nIncidencias activas ahora: **'+fmtLocal(active)+'**.'};
  }
  function exactPersonalAssignmentAnswer(q,snap){
    if(!snap)return null;
    if(/\b(historico|historial|historicas|historicos)\b/.test(q))return null;
    const intentTools=/\b(que herramientas|herramientas tiene|dotacion de|dotacion tiene)\b/.test(q);
    const intentInc=/\b(incidencia|incidencias|rotura|roturas|perdida|perdidas|desgaste|danad|dañad)\b/.test(q);
    if(!intentTools&&!intentInc)return null;
    const all=[...(snap.assignments||[]),...(snap.operators||[])];
    const operator=bestLocalOperatorCandidate(q,snap.assignments||[],r=>r.operario,{firstBoost:6})||bestLocalOperatorCandidate(q,snap.operators||[],r=>r.nombre,{firstBoost:6});
    if(!operator)return null;
    const opName=text(operator.operario||operator.nombre);
    const voicePrefix=localOperatorWasFuzzy(q,opName)?('He interpretado el nombre dictado como **'+mdSafe(opName)+'**. '):'';
    let rows=(snap.assignments||[]).filter(r=>norm(r.operario)===norm(opName));
    const tool=bestLocalCandidate(q,rows,r=>r.herramienta);
    if(tool){const k=norm(tool.herramienta);rows=rows.filter(r=>norm(r.herramienta)===k);}
    if(intentInc){
      rows=rows.map(r=>({...r,totalInc:num(r.danadas)+num(r.roturas)+num(r.desgaste)+num(r.perdidas)})).filter(r=>r.totalInc>0);
      if(!rows.length)return {handled:true,text:voicePrefix+'**'+mdSafe(opName)+'** no tiene incidencias activas en su dotación personal.'};
      const body=rows.map(r=>'| '+mdSafe(r.herramienta)+' | '+fmtLocal(r.roturas)+' | '+fmtLocal(r.desgaste)+' | '+fmtLocal(r.perdidas)+' | '+fmtLocal(r.danadas)+' |').join('\n');
      return {handled:true,text:voicePrefix+'| Herramienta | Rotura | Desgaste | Pérdida | Otra |\n|---|---:|---:|---:|---:|\n'+body};
    }
    if(!rows.length)return {handled:true,text:voicePrefix+'**'+mdSafe(opName)+'** no tiene herramientas asignadas en Dotación personal.'};
    const body=rows.sort((a,b)=>String(a.herramienta).localeCompare(String(b.herramienta),'es')).map(r=>'| '+mdSafe(r.herramienta)+' | **'+fmtLocal(r.cantidad)+'** |').join('\n');
    return {handled:true,text:voicePrefix+'| Herramienta | Dotación |\n|---|---:|\n'+body};
  }
  function exactPersonalLoanAnswer(q,snap){
    if(!snap?.personalLoans?.length)return null;
    if(!/\b(prestad[a-z0-9_-]*|prestam[a-z0-9_-]*|quien tiene|poseedor|devolucion)\b/.test(q))return null;
    const loan=bestLocalCandidate(q,snap.personalLoans,r=>[r.herramienta,r.responsable,r.poseedorActual].join(' '));
    if(!loan)return null;
    const rows=snap.personalLoans.filter(r=>{
      const toolScore=localScore(q,r.herramienta);
      const ownerScore=localScore(q,r.responsable,{firstBoost:4});
      return toolScore>0&&(ownerScore>0||!bestLocalCandidate(q,snap.personalLoans,x=>x.responsable,{firstBoost:4}));
    });
    if(rows.length===1){const r=rows[0];return {handled:true,text:'La **'+mdSafe(r.herramienta)+'** de **'+mdSafe(r.responsable)+'** la tiene temporalmente **'+mdSafe(r.poseedorActual)+'**'+(r.operarioOcasional?' (ocasional)':'')+(r.departamentoPoseedor?' · Departamento: '+mdSafe(r.departamentoPoseedor):'')+'.'};}
    return null;
  }
  function herramientasExactAnswer(userText,mod,extra){
    const q=norm(userText);
    const looksRelevant=mod.id==='herramientas'||/\b(herramienta[a-z0-9_-]*|dotacion|prestad[a-z0-9_-]*|prestam[a-z0-9_-]*|reposicion[a-z0-9_-]*|entreg[a-z0-9_-]*|incidencia[a-z0-9_-]*|epi[a-z0-9_-]*|proteccion[a-z0-9_-]*|metro[a-z0-9_-]*|destornillador[a-z0-9_-]*|llave[a-z0-9_-]*|pistola[a-z0-9_-]*|taladro[a-z0-9_-]*|atornillador[a-z0-9_-]*|nivel[a-z0-9_-]*)\b/.test(q);
    if(!looksRelevant)return null;
    const store=herramientasStoreSnapshot();
    let commonLoans=store?.commonLoans||[];
    if(mod.id==='herramientas'&&extra&&Array.isArray(extra.prestamosActivos))commonLoans=extra.prestamosActivos.map(r=>({herramienta:text(r.herramienta),familia:text(r.familia),cantidad:num(r.cantidad),operario:text(r.operario),recoge:text(r.recoge),zona:text(r.zona),variante:text(r.variante),salida:text(r.salida),devolucionPrevista:text(r.devolucionPrevista),notas:text(r.notas)}));
    const snap=store||{deliveries:[],assignments:[],personalLoans:[],personalHistory:[],operators:[]};
    if(!store&&mod.id==='herramientas'&&extra&&Array.isArray(extra.historicoDotacionPersonal))snap.personalHistory=extra.historicoDotacionPersonal.map(h=>({fecha:text(h.fecha),tipo:text(h.tipo),operatorId:text(h.operarioId),operario:text(h.operario),otroOperarioId:text(h.otroOperarioId),otroOperario:text(h.otroOperario),departamento:text(h.departamento),herramienta:text(h.herramienta),cantidad:num(h.cantidad),motivo:text(h.motivo),condicion:text(h.condicion),notas:text(h.notas),prestamoId:text(h.prestamoId),entregaId:text(h.entregaId)}));
    return exactPersonalLoanAnswer(q,snap)||exactCommonLoanAnswer(q,commonLoans)||exactPersonalDeliveryAnswer(q,snap)||exactPersonalHistoryIncidentAnswer(q,snap)||exactPersonalAssignmentAnswer(q,snap)||null;
  }
  function flowExactAnswer(userText){
    const q=norm(userText);
    if(!/\b(fabricacion|pintura|almacen|entregad)/.test(q))return null;
    if(!/\b(cuant|unidad|unidades|pedido|pedidos|total)\b/.test(q))return null;
    const data=realDataForQuery(userText);
    if(!data?.fuentes?.preparacion_fabricacion?.cargado)return null;
    const s=data.resumen_flujo_real||{};
    const phases=[];
    if(/\bfabricacion\b/.test(q))phases.push(['Fabricacion','pedidos_en_fabricacion','unidades_en_fabricacion']);
    if(/\bpintura\b/.test(q))phases.push(['Pintura','pedidos_en_pintura','unidades_en_pintura']);
    if(/\balmacen\b/.test(q))phases.push(['Almacen','pedidos_en_almacen','unidades_en_almacen']);
    if(/\bentregad/.test(q))phases.push(['Entregado','pedidos_con_entrega','unidades_entregadas']);
    if(!phases.length)return null;
    const asksPedidos=/\bpedido|pedidos\b/.test(q);
    const asksUnits=/\bunidad|unidades\b/.test(q);
    if(asksPedidos&&asksUnits){
      const body=phases.map(([label,pk,uk])=>'| '+label+' | **'+fmtLocal(s[pk])+'** | **'+fmtLocal(s[uk])+'** |').join('\n');
      return {handled:true,text:'| Fase | Pedidos | Unidades |\n|---|---:|---:|\n'+body};
    }
    if(asksPedidos){
      const body=phases.map(([label,pk])=>'| '+label+' | **'+fmtLocal(s[pk])+'** |').join('\n');
      return {handled:true,text:'| Fase | Pedidos |\n|---|---:|\n'+body};
    }
    const body=phases.map(([label,,uk])=>'| '+label+' | **'+fmtLocal(s[uk])+'** |').join('\n');
    return {handled:true,text:'| Fase | Unidades |\n|---|---:|\n'+body};
  }
  function stockExactAnswer(userText,mod,extra){
    const q=norm(userText);
    if(mod.id!=='stock'&&extra?.modulo!=='Stock por empresa')return null;
    if(!extra||extra.error)return null;
    if(needsCentralReasoning(userText))return null;
    if(/\b(que significa|significado|como funciona|explica|explicame|por que|regla)\b/.test(q))return null;
    const currentShape=Array.isArray(extra.materialesVisibles)||!!extra.resumen||!!extra.empresaActiva;
    const loaded=extra?.carga?.cargado!==undefined?!!extra.carga.cargado:currentShape;
    if(!loaded)return null;
    const factual=/\b(cuant[a-z0-9_-]*|dime|muestra|lista|hay|tengo|queda|quedan|cual|cuales|stock|existenc[a-z0-9_-]*|disponibl[a-z0-9_-]*|libre[a-z0-9_-]*|fisic[a-z0-9_-]*|reserv[a-z0-9_-]*|asignad[a-z0-9_-]*|agotad[a-z0-9_-]*|bajo minimo|deud[a-z0-9_-]*|debo|debe|deben|prestad[a-z0-9_-]*|recibid[a-z0-9_-]* prestad[a-z0-9_-]*)\b/.test(q);
    const materialShape=/\b(?:ral\s*\d+|\d+(?:[.,]\d+)?\s*x\s*\d+(?:[.,]\d+)?|[oø]\s*\d+)\b/.test(q);
    if(!factual&&!materialShape)return null;

    const companyName=text(extra?.empresaActiva?.nombre||extra?.interfaz?.empresaActiva||extra?.interfaz?.empresaMostrada||'empresa activa');
    const stockType=text(extra?.tipoStock||extra?.interfaz?.tipoActivo||extra?.interfaz?.tipoMostrado||'stock');
    const scope=mdSafe(companyName)+' · '+mdSafe(stockType);
    const summary=extra.resumenConsulta||extra.resumen||{};
    const rawRows=Array.isArray(extra.stockConsultado)?extra.stockConsultado:(Array.isArray(extra.materialesVisibles)?extra.materialesVisibles:[]);
    let rows=rawRows.map(row=>({
      ...row,
      empresa:text(row.empresa||row.empresaNombre||companyName),
      material:text(row.material||row.nombre||row.name),
      familia:text(row.familia||row.family),
      unidad:text(row.unidad||row.unit||'ud'),
      fisico:num(row.fisico??row.physical),
      reservado:num(row.reservado??row.reservadoVisible??(num(row.reservaDirecta)+num(row.asignadoTecnico))),
      libre:num(row.libre??row.free),
      minimo:num(row.minimo??row.minimum),
      deudaConOtrasEmpresas:num(row.deudaConOtrasEmpresas??row.debo??row.recibidoPrestado),
      otrasEmpresasDeben:num(row.otrasEmpresasDeben??row.meDeben??row.prestadoAOtraEmpresa),
      agotado:row.agotado!==undefined?!!row.agotado:num(row.libre??row.free)<=0,
      bajoMinimo:row.bajoMinimo!==undefined?!!row.bajoMinimo:(num(row.libre??row.free)>0&&num(row.libre??row.free)<=num(row.minimo??row.minimum))
    }));

    const asksLow=/\b(bajo minimo|bajos minimos|debajo del minimo|por debajo del minimo)\b/.test(q);
    const asksZero=/\b(agotad[a-z0-9_-]*|sin stock|stock cero|a cero)\b/.test(q);
    const asksReserved=/\b(reserv[a-z0-9_-]*|asignad[a-z0-9_-]*)\b/.test(q);
    const asksDebt=/\b(deud[a-z0-9_-]*|debo|debe|deben|prestad[a-z0-9_-]*|recibid[a-z0-9_-]* prestad[a-z0-9_-]*)\b/.test(q);
    const asksPhysical=/\b(fisic[a-z0-9_-]*|real[a-z0-9_-]*|existenc[a-z0-9_-]*)\b/.test(q);
    const asksFree=/\b(disponibl[a-z0-9_-]*|libre[a-z0-9_-]*|queda|quedan)\b/.test(q);
    const asksCount=/\b(cuantos|cuantas|numero|total de materiales|total materiales)\b/.test(q);

    // La integración actual de Stock entrega materialesVisibles sin filtrar por la
    // frase escrita en el chat. R18 filtra localmente por nombre/familia/ubicación
    // para que preguntas como "¿cuánto 80x40 tengo?" no terminen en Groq.
    if(currentShape&&rows.length){
      const stop=new Set(['cuanto','cuantos','cuantas','dime','muestra','lista','hay','tengo','queda','quedan','cual','cuales','stock','existencia','existencias','disponible','disponibles','libre','libres','fisico','fisicos','reservado','reservados','asignado','asignados','agotado','agotados','bajo','minimo','minimos','deuda','deudas','debo','debe','deben','prestado','prestados','recibido','recibidos','material','materiales','empresa','actual','tipo','hierro','pintura','real','unidades','unidad','barras','barra']);
      const specific=tokensFor(userText).filter(t=>!stop.has(t));
      if(specific.length){
        const scored=rows.map(row=>({row,score:scoreText([row.material,row.familia,row.ubicacion].filter(Boolean).join(' '),specific)})).filter(x=>x.score>0);
        if(scored.length)rows=scored.sort((a,b)=>b.score-a.score).map(x=>x.row);
      }
    }
    if(asksLow)rows=rows.filter(r=>r.bajoMinimo);
    if(asksZero)rows=rows.filter(r=>r.agotado);
    if(asksReserved)rows=rows.filter(r=>r.reservado>0);
    if(asksDebt)rows=rows.filter(r=>r.deudaConOtrasEmpresas>0||r.otrasEmpresasDeben>0);

    const hasSpecific=tokensFor(userText).some(t=>!new Set(['cuanto','cuantos','cuantas','dime','muestra','lista','hay','tengo','queda','quedan','cual','cuales','stock','existencia','existencias','disponible','disponibles','libre','libres','fisico','fisicos','reservado','reservados','asignado','asignados','agotado','agotados','bajo','minimo','minimos','deuda','deudas','debo','debe','deben','prestado','prestados','recibido','recibidos','material','materiales','empresa','actual','tipo','hierro','pintura','real','unidades','unidad','barras','barra']).has(t));

    if(asksCount&&!hasSpecific){
      if(asksLow&&Number.isFinite(Number(summary.bajoMinimo)))return {handled:true,text:'Materiales **bajo mínimo** en **'+scope+'**: **'+fmtLocal(summary.bajoMinimo)+'**.'};
      if(asksZero&&Number.isFinite(Number(summary.agotados)))return {handled:true,text:'Materiales **agotados** en **'+scope+'**: **'+fmtLocal(summary.agotados)+'**.'};
    }

    if(!rows.length){
      if(asksLow)return {handled:true,text:'No hay materiales **bajo mínimo** en **'+scope+'** para esta consulta.'};
      if(asksZero)return {handled:true,text:'No hay materiales **agotados** en **'+scope+'** para esta consulta.'};
      if(asksReserved)return {handled:true,text:'No hay materiales con **stock reservado** para esta consulta.'};
      if(asksDebt)return {handled:true,text:'No hay préstamos ni deudas de material para esta consulta.'};
      return {handled:true,text:'No encuentro ninguna ficha de stock que coincida con la consulta en los datos cargados.'};
    }

    if(asksCount&&(asksLow||asksZero||asksReserved||asksDebt)){
      const label=asksLow?'bajo mínimo':asksZero?'agotados':asksReserved?'con reserva':'con deuda/préstamo';
      return {handled:true,text:'Materiales **'+label+'** en **'+scope+'**: **'+fmtLocal(rows.length)+'**.'};
    }

    const rowName=row=>{
      const current=norm(companyName);
      const company=norm(row.empresa||'');
      return mdSafe(row.material)+(company&&company!==current?' · '+mdSafe(row.empresa):'');
    };
    const unit=row=>mdSafe(row.unidad||'ud');
    let header='';
    let body='';
    if(asksLow){
      header='| Material | Libre | Mínimo |\n|---|---:|---:|\n';
      body=rows.slice(0,30).map(row=>'| '+rowName(row)+' | **'+fmtLocal(row.libre)+' '+unit(row)+'** | '+fmtLocal(row.minimo)+' '+unit(row)+' |').join('\n');
    }else if(asksZero){
      header='| Material | Libre | Unidad |\n|---|---:|---|\n';
      body=rows.slice(0,30).map(row=>'| '+rowName(row)+' | **'+fmtLocal(row.libre)+'** | '+unit(row)+' |').join('\n');
    }else if(asksDebt){
      header='| Material | Debo | Me deben |\n|---|---:|---:|\n';
      body=rows.slice(0,30).map(row=>'| '+rowName(row)+' | **'+fmtLocal(row.deudaConOtrasEmpresas)+' '+unit(row)+'** | '+fmtLocal(row.otrasEmpresasDeben)+' '+unit(row)+' |').join('\n');
    }else if(asksReserved){
      header='| Material | Reservado | Libre |\n|---|---:|---:|\n';
      body=rows.slice(0,30).map(row=>'| '+rowName(row)+' | **'+fmtLocal(row.reservado)+' '+unit(row)+'** | '+fmtLocal(row.libre)+' '+unit(row)+' |').join('\n');
    }else if(asksFree&&!asksPhysical){
      header='| Material | Libre | Unidad |\n|---|---:|---|\n';
      body=rows.slice(0,30).map(row=>'| '+rowName(row)+' | **'+fmtLocal(row.libre)+'** | '+unit(row)+' |').join('\n');
    }else{
      header='| Material | Físico | Libre |\n|---|---:|---:|\n';
      body=rows.slice(0,30).map(row=>'| '+rowName(row)+' | **'+fmtLocal(row.fisico)+' '+unit(row)+'** | '+fmtLocal(row.libre)+' '+unit(row)+' |').join('\n');
    }
    const totalKnown=Number(extra.stockConsultadoTotal||summary.materiales||rows.length);
    const truncated=!!extra.stockConsultadoTruncado||(currentShape&&Number.isFinite(totalKnown)&&totalKnown>rawRows.length);
    const note=truncated?'\n\nMostradas hasta **30** fichas de los datos disponibles en pantalla/contexto.':(summary.avisoSuma?'\n\n'+mdSafe(summary.avisoSuma):'');
    return {handled:true,text:header+body+note};
  }

  function localHumanKey(key){
    return text(key).replace(/([a-záéíóúñ])([A-Z])/g,'$1 $2').replace(/[_-]+/g,' ').trim();
  }
  function localActionCleanLabel(value){
    return text(value)
      .replace(/^\s*[•·▪▫◦→←↩↪✓✔☑□■▣▥▤🛒🗑️🗑📋📦🔗]+\s*/u,'')
      .replace(/\s*\((-?\d+(?:[.,]\d+)?)\)\s*$/,'')
      .replace(/\s+/g,' ')
      .trim();
  }
  function localActionCanonical(value){
    let s=localActionCleanLabel(value);
    let n=norm(s);
    const prepMap=[
      [/^volver a pedidos$/, 'Volver a pedidos'],
      [/^menu$/, 'Menú'],
      [/^marcar todo pedido$/, 'Marcar todo pedido'],
      [/^copiar a compras$/, 'Copiar a compras'],
      [/^eliminar pedido$/, 'Eliminar pedido'],
      [/^mandar a fabricacion$/, 'Mandar a fabricación'],
      [/^recibido$/, 'Recibido'],
      [/^sin reserva$/, 'Sin reserva'],
      [/^asignar libre(?:\s+.*)?$/, 'Asignar libre'],
      [/^asignar de otra empresa(?:\s+.*)?$/, 'Asignar de otra empresa'],
      [/^vincular(?:\s+.*)?$/, 'Vincular'],
      [/^ya pedido$/, 'Ya pedido'],
      [/^marcar como pedido$/, 'Marcar como pedido']
    ];
    for(const [re,label] of prepMap)if(re.test(n))return label;
    return s;
  }
  function localUniqueActions(values){
    const out=[];
    const seen=new Set();
    for(const value of values||[]){
      const label=localActionCanonical(value);
      const key=norm(label);
      if(!key||seen.has(key))continue;
      seen.add(key);
      out.push(label);
    }
    return out;
  }
  function localModuleActions(extra){
    const direct=Array.isArray(extra?.accionesVisibles)?extra.accionesVisibles.map(text).filter(Boolean):[];
    if(direct.length)return localUniqueActions(direct);
    const vis=visibleSummary();
    // visibleSnapshot() publica los controles como `botones_visibles` y `enlaces_visibles`.
    // Se mantiene compatibilidad con `buttons`/`links` por si algún proveedor antiguo usa esos nombres.
    const rawButtons=Array.isArray(vis?.botones_visibles)?vis.botones_visibles:(Array.isArray(vis?.buttons)?vis.buttons:[]);
    const rawLinks=Array.isArray(vis?.enlaces_visibles)?vis.enlaces_visibles:(Array.isArray(vis?.links)?vis.links:[]);
    const buttons=rawButtons.map(x=>text(x?.text||x?.label||x)).filter(Boolean);
    const links=rawLinks.map(x=>text(x?.text||x?.label||x)).filter(Boolean);
    return localUniqueActions([...buttons,...links]);
  }
  function localPreparationActionGroups(actions){
    const groups={
      'Navegación':[],
      'Acciones del pedido':[],
      'Acciones por material':[],
      'Otros controles':[]
    };
    for(const raw of localUniqueActions(actions)){
      const action=localActionCanonical(raw);
      const key=norm(action);
      if(['volver a pedidos','menu'].includes(key))groups['Navegación'].push(action);
      else if(['marcar todo pedido','copiar a compras','eliminar pedido','mandar a fabricacion'].includes(key))groups['Acciones del pedido'].push(action);
      else if(['recibido','sin reserva','asignar libre','asignar de otra empresa','vincular','ya pedido','marcar como pedido'].includes(key))groups['Acciones por material'].push(action);
      else groups['Otros controles'].push(action);
    }
    return groups;
  }
  function localActionsMarkdown(mod,actions){
    const unique=localUniqueActions(actions);
    if(!unique.length)return '';
    if(mod?.id==='preparacion'){
      const groups=localPreparationActionGroups(unique);
      return Object.entries(groups).filter(([,items])=>items.length).map(([title,items])=>'**'+title+'**\n'+items.map(a=>'• '+mdSafe(a)).join('\n')).join('\n\n');
    }
    return '**Acciones / controles visibles**\n'+unique.map(a=>'• '+mdSafe(a)).join('\n');
  }
  function localModuleRules(extra){
    return Array.isArray(extra?.reglas)?extra.reglas.map(text).filter(Boolean):[];
  }
  function localSummaryEntries(extra){
    const src=(extra?.resumen&&typeof extra.resumen==='object')?extra.resumen:((extra?.resumenConsulta&&typeof extra.resumenConsulta==='object')?extra.resumenConsulta:null);
    if(!src)return [];
    return Object.entries(src).filter(([,v])=>['string','number','boolean'].includes(typeof v)&&text(v)!=='').map(([k,v])=>({key:k,label:localHumanKey(k),value:v}));
  }
  const LOCAL_MODULE_GUIDES={
    menu:['Elige el módulo de Gestión Taller que necesitas abrir.','Usa el asistente para preguntarme dónde está una función o para abrir un módulo interno.','Los terminales, Apps operativas y Programas de Dirección quedan fuera de esta navegación global.'],
    calculo:['Selecciona o carga el concepto que vas a calcular.','Indica empresa, unidades y las variables necesarias.','Pulsa Calcular y revisa materiales/resultado.','Cuando esté correcto, genera la hoja o envía a Preparación según el flujo del pedido.'],
    pedido_material:['Localiza el pedido o material que necesitas revisar.','Comprueba cantidades y datos del pedido.','Usa las acciones visibles para continuar el flujo sin modificar datos desde la IA.'],
    preparacion:['Abre la OT que vas a preparar.','Revisa físico, reservado/libre y las líneas pendientes.','Registra las recepciones desde los controles del módulo cuando corresponda.','Cuando el material esté preparado, usa Mandar a fabricación.'],
    agenda:['Localiza o crea la orden de trabajo.','Revisa fechas, prioridad, operario y estado.','Usa las acciones de la OT para enviarla a Cálculo o continuar su flujo.','Comprueba avisos y trabajos retrasados antes de cerrar.'],
    fabricacion:['Abre la empresa o la OT que vas a gestionar.','Revisa las unidades que siguen en Fabricación y las que ya han pasado de fase.','Usa los controles de la OT para mover únicamente las cantidades que correspondan.','Comprueba el reparto FAB / PINT / ALM / ENT antes de terminar.'],
    ferreteria:['Selecciona Ferretería común o Prefabricados.','Busca el material por nombre, familia o ubicación.','Usa + Entrada para recepciones y Salida para consumos manuales.','Revisa Bajo mínimo y Agotado para detectar faltas.'],
    tableros:['Selecciona Tableros DM o Tableros AGLOMERADO.','Busca el tablero o familia.','Usa Entrada para recepciones y Salida para consumos.','Revisa reservas, bajo mínimos y agotados antes de pedir material.'],
    almacen:['Localiza la OT o empresa que quieras revisar.','Comprueba qué unidades están realmente en Almacén y cuáles ya se entregaron.','Usa los controles visibles para registrar la entrega correspondiente.'],
    ubicaciones:['Rellena Empresa y, si procede, contacto, teléfono, dirección, Maps y notas.','Pulsa Guardar para dar de alta o actualizar la ficha.','Usa el buscador para localizar una empresa.','Desde el listado puedes abrir Maps, compartir por WhatsApp, editar o borrar.'],
    stock:['Selecciona la empresa activa y después Hierro o Pintura.','Busca el material por nombre, familia o ubicación.','Revisa Físico, Reservado, Prestado, Recibido prestado y Libre.','Usa + Entrada para recepciones o Reservar a trabajo para una OT.','Comprueba deudas, reservas, bajo mínimos y agotados antes de realizar pedidos.'],
    pintura:['Introduce o recibe los datos del concepto que vas a calcular.','Revisa geometría, superficie y factores de pintura/disolvente.','Ejecuta el cálculo y comprueba litros/envases resultantes.','Devuelve los factores al Concepto únicamente desde el flujo previsto del módulo.'],
    herramientas:['Elige el apartado: préstamos, EPIs o Dotación personal.','Busca el operario o herramienta que quieres revisar.','Consulta disponibilidad, préstamos, incidencias, reposiciones e histórico.','Las altas, préstamos, devoluciones o entregas se hacen con los botones del módulo; la IA solo informa.'],
    configuracion:['Busca o abre el concepto que quieras configurar.','Revisa materiales, variables y factores asociados.','Modifica únicamente los campos necesarios y guarda desde los controles del módulo.','Comprueba después el resultado en Cálculo o Cálculo de pintura cuando corresponda.']
  };
  function localPreparationVisibleOrders(){
    const refRe=/\bOT-[A-Z0-9]+(?:-[A-Z0-9]+)*\b/gi;
    const best=new Map();
    const nodes=[...document.querySelectorAll('body *')];
    for(const el of nodes){
      if(!isModuleVisible(el))continue;
      const tag=String(el.tagName||'').toUpperCase();
      if(['SCRIPT','STYLE','NOSCRIPT','OPTION','SVG','PATH'].includes(tag))continue;
      const raw=String(el.innerText||el.textContent||'').replace(/\s+/g,' ').trim();
      if(raw.length<8||raw.length>850)continue;
      const refs=[...raw.matchAll(refRe)].map(m=>String(m[0]||'').toUpperCase());
      const unique=[...new Set(refs)];
      if(unique.length!==1)continue;
      const q=norm(raw);
      const flags={
        pendiente:/\bpendiente\b/.test(q),
        parcial:/\bparcial\b/.test(q),
        completo:/\bcompleto\b/.test(q),
        enFabricacion:/\ben fabricacion\b/.test(q)
      };
      if(!Object.values(flags).some(Boolean))continue;
      const um=raw.match(/(?:^|[·\s])([0-9]+(?:[.,][0-9]+)?)\s*(?:uds?\.?|unidades?)\b/i);
      const units=um?Number(String(um[1]).replace(',','.')):0;
      const hasUnits=!!um;
      // Preferimos el bloque de tarjeta que contiene referencia + estado + unidades,
      // no el encabezado mínimo ni un contenedor grande que englobe varias zonas.
      const score=raw.length-(hasUnits?260:0);
      const ref=unique[0];
      const current=best.get(ref);
      if(!current||score<current._score){
        best.set(ref,{ref,flags,units,hasUnits,text:raw,_score:score});
      }
    }
    return [...best.values()].map(({_score,...row})=>row);
  }
  function localPreparationScreenReview(){
    const rows=localPreparationVisibleOrders();
    if(!rows.length)return null;
    const count=key=>rows.filter(r=>!!r.flags?.[key]).length;
    const pending=count('pendiente');
    const partial=count('parcial');
    const complete=count('completo');
    const inFab=count('enFabricacion');
    const unitsRows=rows.filter(r=>r.hasUnits);
    const units=unitsRows.reduce((a,r)=>a+Number(r.units||0),0);
    const table=[
      ['Pedidos visibles',rows.length],
      ['Pendiente',pending],
      ['Parcial',partial],
      ['Completo',complete],
      ['En fabricación',inFab]
    ];
    if(unitsRows.length)table.push(['Unidades mostradas',fmtLocal(units)]);
    const body=table.map(([label,value])=>'| '+label+' | **'+value+'** |').join('\n');
    const refsFor=key=>rows.filter(r=>r.flags?.[key]).map(r=>r.ref).slice(0,6);
    const notes=[];
    const pRefs=refsFor('pendiente');
    const paRefs=refsFor('parcial');
    const cRefs=refsFor('completo');
    if(pRefs.length)notes.push('• **Pendientes:** '+pRefs.map(mdSafe).join(', ')+'.');
    if(paRefs.length)notes.push('• **Parciales:** '+paRefs.map(mdSafe).join(', ')+'.');
    if(cRefs.length)notes.push('• **Completos todavía visibles en Preparación:** '+cRefs.map(mdSafe).join(', ')+'. Conviene comprobar si corresponde mandarlos a Fabricación.');
    if(!notes.length&&inFab>0)notes.push('• No veo pedidos pendientes, parciales o completos que destaquen por estado en la vista actual.');
    const caveat=(pending+partial+complete+inFab)>rows.length?'\n\nNota: los indicadores no son excluyentes; una OT puede aparecer, por ejemplo, como **En fabricación** y **Parcial** a la vez.':'';
    return {handled:true,text:'**Preparación · revisión de pantalla**\n\n| Indicador visible | Pedidos |\n|---|---:|\n'+body+(notes.length?'\n\n**Para revisar primero**\n'+notes.join('\n'):'')+caveat};
  }
  function localModuleBasicAnswer(userText,mod,extra){
    const q=norm(userText);
    if(!q)return null;
    const asksWhere=/\b(que modulo|en que modulo|modulo actual|donde estoy|que pantalla)\b/.test(q);
    const asksModules=/\b(modulos disponibles|que modulos|a que modulos|donde puedes llevarme|modulos de gestion)\b/.test(q);
    const asksExplain=(/\b(explica|explicame|para que sirve|que puedo hacer)\b/.test(q)&&/\b(modulo|pantalla|aqui)\b/.test(q))||/acciones principales/.test(q);
    const asksActions=/\b(que acciones|acciones principales|que botones|botones disponibles|controles visibles|que controles)\b/.test(q);
    const asksGuide=/\b(guiame|guia|paso a paso|como empiezo|como uso este modulo)\b/.test(q)&&(/\b(modulo|pantalla|controles|aqui)\b/.test(q)||q.includes('paso a paso'));
    const asksReview=/\b(revisa|revisar)\b/.test(q)&&/\b(pantalla|visible|modulo)\b/.test(q)||/requiere atencion|necesita atencion/.test(q);
    if(!asksWhere&&!asksModules&&!asksExplain&&!asksActions&&!asksGuide&&!asksReview)return null;

    if(asksWhere)return {handled:true,text:'Estás en **'+mdSafe(extra?.modulo||mod.label||document.title||'Gestión Taller')+'**.'};
    if(asksModules){
      const body=MODULES.filter(m=>m.id!=='menu').map(m=>'• **'+mdSafe(m.label)+'**').join('\n');
      return {handled:true,text:'Puedo llevarte a estos módulos internos de Gestión Taller:\n\n'+body+'\n\nLos terminales, Apps operativas y Programas de Dirección quedan fuera de esta navegación.'};
    }

    const label=mdSafe(extra?.modulo||mod.label||document.title||'Módulo actual');
    const actions=localModuleActions(extra);
    const rules=localModuleRules(extra);
    if(asksGuide){
      const steps=LOCAL_MODULE_GUIDES[mod.id]||actions.slice(0,6).map(a=>'Usa **'+mdSafe(a)+'** cuando corresponda.');
      const body=steps.map((s,i)=>(i+1)+'. '+s).join('\n');
      return {handled:true,text:'**Guía rápida · '+label+'**\n\n'+body+'\n\nSi me dices la acción concreta que quieres hacer, puedo indicarte dónde está el control sin usar Groq cuando sea un dato o una navegación determinista.'};
    }
    if(asksReview){
      if(mod?.id==='preparacion'){
        const prepReview=localPreparationScreenReview();
        if(prepReview)return prepReview;
      }
      const entries=localSummaryEntries(extra);
      const attention=entries.filter(e=>typeof e.value==='number'&&Number(e.value)>0&&/agot|bajo|minimo|incid|deuda|pend|retras|error|averia|rotur|perdida|reposicion/.test(norm(e.label)));
      const use=(attention.length?attention:entries).slice(0,10);
      if(use.length){
        const body=use.map(e=>'| '+mdSafe(e.label)+' | **'+mdSafe(typeof e.value==='number'?fmtLocal(e.value):e.value)+'** |').join('\n');
        return {handled:true,text:'**Revisión local · '+label+'**\n\n| Dato | Valor |\n|---|---:|\n'+body+(attention.length?'\n\nEstos son los indicadores visibles que ahora mismo requieren más atención.':'')};
      }
      return {handled:true,text:'**'+label+'** está cargado. No encuentro un resumen numérico local para señalar incidencias automáticamente; puedo explicarte los controles visibles sin consumir Groq.'};
    }

    let out='**'+label+'**\n\n';
    if(extra?.modeloStock)out+='Modelo: **'+mdSafe(extra.modeloStock)+'**. ';
    if(extra?.apartadoActual)out+='Apartado actual: **'+mdSafe(extra.apartadoActual)+'**. ';
    if(extra?.empresaActiva?.nombre)out+='Empresa activa: **'+mdSafe(extra.empresaActiva.nombre)+'**. ';
    if(extra?.tipoStock)out+='Tipo: **'+mdSafe(extra.tipoStock)+'**. ';
    if(out.endsWith(' '))out+='\n\n';

    // Para "Explicar este módulo" usamos también la guía local incorporada. Así un módulo
    // que todavía no tenga proveedor de contexto propio (por ejemplo Preparación) puede
    // explicarse sin Groq y sin depender de que exista accionesVisibles.
    const guide=LOCAL_MODULE_GUIDES[mod.id]||[];
    if(asksExplain&&guide.length){
      out+='**Qué puedes hacer**\n'+guide.slice(0,6).map(s=>'• '+mdSafe(s)).join('\n');
      if(actions.length)out+='\n\n';
    }
    if(actions.length){
      out+=localActionsMarkdown(mod,actions);
    }else if(!guide.length){
      out+='Puedo guiarte con los controles que haya visibles en esta pantalla.';
    }
    if(rules.length)out+='\n\n**Reglas clave**\n'+rules.slice(0,4).map(r=>'• '+mdSafe(r)).join('\n');
    return {handled:true,text:out};
  }
  function localSummaryExactAnswer(userText,mod,extra){
    if(!extra||needsCentralReasoning(userText))return null;
    const q=norm(userText);
    if(!/\b(cuant[a-z0-9_-]*|total|hay|tengo|dime)\b/.test(q))return null;
    const entries=localSummaryEntries(extra);
    if(!entries.length)return null;
    const patterns=[
      [/\bagot/,/agot/],
      [/\bbajo minimo|\bminimo/,/bajo.*min|minimo/],
      [/\bmovimiento/,/movimiento/],
      [/\bmateriales?\b/,/^materiales?$|numero.*material|total.*material/],
      [/\bfisic/,/fisic/],
      [/\blibre/,/libre/],
      [/\breservas? activas?/,/reservas.*activas/],
      [/\breservad/,/^reservado$|cantidad.*reserv/],
      [/\bdeudas?/,/deuda/],
      [/\bincidenc/,/incidenc/],
      [/\bprestado.*otras|\bprestado/,/prestado.*otras|prestado/],
      [/\brecibido prestado/,/recibido.*prestado/],
      [/\breposicion/,/reposicion/],
      [/\boperarios?/,/operario/],
      [/\bherramientas?/,/herramienta/]
    ];
    for(const [qre,kre] of patterns){
      if(!qre.test(q))continue;
      const matches=entries.filter(e=>kre.test(norm(e.label)));
      if(matches.length){
        const e=matches[0];
        return {handled:true,text:'**'+mdSafe(e.label)+'** en **'+mdSafe(extra?.modulo||mod.label)+'**: **'+mdSafe(typeof e.value==='number'?fmtLocal(e.value):e.value)+'**.'};
      }
    }
    return null;
  }
  function tryLocalDeterministicAnswer(userText){
    if(!LOCAL_FACTS_FIRST)return null;
    const mod=window.__LDH_AI_GLOBAL_MODULE__?.()||{id:'desconocido'};
    const extra=window.__LDH_AI_GLOBAL_CONTEXT__?.(userText)||null;

    // R18: la conversación básica del módulo se resuelve SIEMPRE en local antes
    // de decidir si la frase contiene "explica", "paso a paso", etc. Así los
    // botones Explicar / Guíame / Revisar / Módulos disponibles siguen funcionando
    // aunque Groq esté sin cuota o desconectado.
    const moduleBasic=localModuleBasicAnswer(userText,mod,extra);
    if(moduleBasic)return moduleBasic;

    // Datos exactos de Herramientas, Stock, Ferretería y resúmenes de cualquier
    // módulo también se intentan localmente antes de consumir una llamada de chat.
    const toolExact=herramientasExactAnswer(userText,mod,extra);
    if(toolExact)return toolExact;
    const stockExact=stockExactAnswer(userText,mod,extra);
    if(stockExact)return stockExact;
    const ferExact=ferreteriaExactAnswer(userText,mod,extra);
    if(ferExact)return ferExact;
    const summaryExact=localSummaryExactAnswer(userText,mod,extra);
    if(summaryExact)return summaryExact;

    if(needsCentralReasoning(userText))return null;
    return flowExactAnswer(userText)||null;
  }
  function localQuickSummaryAnswer(){
    const mod=window.__LDH_AI_GLOBAL_MODULE__?.()||{id:'desconocido',label:'Gestión Taller'};
    const extra=window.__LDH_AI_GLOBAL_CONTEXT__?.('resumen local')||null;
    if(mod.id==='preparacion'){
      const prep=localPreparationScreenReview();
      if(prep)return prep;
    }
    const entries=localSummaryEntries(extra).slice(0,12);
    if(entries.length){
      const body=entries.map(e=>'| '+mdSafe(e.label)+' | **'+mdSafe(typeof e.value==='number'?fmtLocal(e.value):e.value)+'** |').join('\n');
      return {handled:true,text:'**Resumen local · '+mdSafe(extra?.modulo||mod.label)+'**\n\n| Dato | Valor |\n|---|---:|\n'+body};
    }
    const actions=localModuleActions(extra);
    if(actions.length){
      return {handled:true,text:'**Resumen local · '+mdSafe(extra?.modulo||mod.label)+'**\n\nNo hay un resumen numérico específico cargado en este módulo. Sí puedo consultar sus controles y navegación sin Groq.\n\n'+localActionsMarkdown(mod,actions)};
    }
    return {handled:true,text:'**'+mdSafe(extra?.modulo||mod.label)+'** está disponible, pero todavía no tiene un resumen local específico programado.'};
  }
  function localHelpPrompt(action){
    return ({
      explain:'Explícame qué puedo hacer en este módulo y cuáles son sus acciones principales',
      guide:'Guíame paso a paso usando los controles visibles de este módulo',
      review:'Revisa lo que hay visible en este módulo y dime qué requiere atención',
      where:'¿Qué módulo estoy viendo?',
      actions:'¿Qué acciones principales y controles tengo en este módulo?',
      modules:'Explícame los módulos de Gestión Taller a los que puedes llevarme'
    })[action]||'';
  }
  function rememberLocalExchange(userLabel,reply){
    state.history.push({role:'user',content:userLabel},{role:'assistant',content:reply});
    if(state.history.length>16)state.history=state.history.slice(-16);
    window.__LDH_AI_GLOBAL_SAVE_HISTORY__?.(state.history);
  }
  function sendLocalHelp(action,userLabel){
    if(state.busy)return;
    const shown=text(userLabel||action).trim()||'Ayuda rápida';
    addMessage('user',shown);
    let result=null;
    if(action==='summary')result=localQuickSummaryAnswer();
    else{
      const prompt=localHelpPrompt(action);
      if(prompt)result=tryLocalDeterministicAnswer(prompt);
    }
    const reply=text(result?.handled?result.text:'Esta ayuda todavía no tiene una función local programada. No se ha enviado ninguna consulta a Groq.').trim();
    addMessage('assistant',reply);
    rememberLocalExchange(shown,reply);
    setStatus('Asistente local · sin Groq · '+(window.__LDH_AI_GLOBAL_MODULE__?.().label||'Gestión Taller'),'ok');
  }
  function openModuleLocal(id,userLabel){
    if(state.busy)return;
    const target=MODULES.find(m=>m.id===id);
    if(!target)return;
    const shown=text(userLabel||('Abrir '+target.label));
    addMessage('user',shown);
    const current=window.__LDH_AI_GLOBAL_MODULE__?.()||currentModule();
    if(current?.id===target.id){
      const reply='Ya estás en **'+mdSafe(target.label)+'**.';
      addMessage('assistant',reply);
      rememberLocalExchange(shown,reply);
      setStatus('Asistente local · sin Groq · '+target.label,'ok');
      return;
    }
    const reply='Abriendo **'+mdSafe(target.label)+'**…';
    addMessage('assistant',reply);
    rememberLocalExchange(shown,reply);
    setStatus('Asistente local · navegación directa · sin Groq','ok');
    setTimeout(()=>window.__LDH_AI_GLOBAL_NAVIGATE__?.(target.id),220);
  }

  async function send(textValue){
    const value=text(textValue).trim();
    if(!value||state.busy)return;
    input.value='';
    addMessage('user',value);
    const localNav=window.__LDH_AI_GLOBAL_TRY_NAV__?.(value);
    if(localNav){
      const msg=localNav.message||(localNav.blocked?'Ese destino es independiente y queda fuera de la IA global.':('Abriendo '+localNav.label+'…'));
      addMessage(localNav.blocked?'system':'assistant',msg);
      state.history.push({role:'user',content:value},{role:'assistant',content:msg});
      if(state.history.length>16)state.history=state.history.slice(-16);
      window.__LDH_AI_GLOBAL_SAVE_HISTORY__?.(state.history);
      if(localNav.url&&!localNav.same&&!localNav.blocked)setTimeout(()=>window.__LDH_AI_GLOBAL_NAVIGATE__?.(localNav.id),220);
      return;
    }
    const localExact=tryLocalDeterministicAnswer(value);
    if(localExact?.handled){
      const reply=text(localExact.text).trim();
      addMessage('assistant',reply);
      state.history.push({role:'user',content:value},{role:'assistant',content:reply});
      if(state.history.length>16)state.history=state.history.slice(-16);
      window.__LDH_AI_GLOBAL_SAVE_HISTORY__?.(state.history);
      setStatus('Asistente local · sin Groq · '+(window.__LDH_AI_GLOBAL_MODULE__?.().label||'Gestión Taller'),'ok');
      return;
    }
    if(Date.now()<Number(state.groqCooldownUntil||0)){
      const secs=Math.max(1,Math.ceil((state.groqCooldownUntil-Date.now())/1000));
      addMessage('system','Groq ha limitado temporalmente esta petición. Reintenta en unos '+secs+'s. No se ha consumido una nueva llamada de chat.');
      return;
    }
    setBusy(true,'IA central · leyendo datos reales y pensando…');
    try{
      // R20: UNA sola llamada de chat Groq por turno natural, igual que Informativa.
      state.groqCalls++;
      const response=await bridge('/chat',{
        messages:[
          {role:'system',content:systemPrompt(value)},
          ...compactHistory(),
          {role:'user',content:value}
        ],
        temperature:0.05,
        reasoning_effort:'medium',
        max_completion_tokens:520
      });
      state.groqCooldownUntil=0;
      const rawReply=text(response?.choices?.[0]?.message?.content).trim();
      if(!rawReply)throw new Error('La IA no devolvió una respuesta válida.');
      const parsedReply=window.__LDH_AI_GLOBAL_PARSE_REPLY__?.(rawReply)||{text:rawReply,navigate:''};
      const reply=text(parsedReply.text||rawReply).trim();
      addMessage('assistant',reply);
      state.history.push({role:'user',content:value},{role:'assistant',content:reply});
      if(state.history.length>16)state.history=state.history.slice(-16);
      window.__LDH_AI_GLOBAL_SAVE_HISTORY__?.(state.history);
      const model=text(response?.model||state.health?.model||EXPECTED_MODEL).replace('openai/','');
      setStatus('IA central · '+model+' · datos reales · en línea','ok');
      if(parsedReply.navigate)setTimeout(()=>window.__LDH_AI_GLOBAL_NAVIGATE__?.(parsedReply.navigate),320);
    }catch(e){
      const msg=text(e?.message||e||'Error desconocido');
      if(e?.status===429||/429|rate.?limit|too many|cuota|resource exhausted|tokens per/i.test(msg)){
        const details=e?.details||{};
        const retryRaw=text(details?.rateLimit?.retryAfter);
        const retryNumeric=Number(retryRaw);
        const retryMs=Number.isFinite(retryNumeric)&&retryNumeric>0?Math.max(500,retryNumeric*1000):groqRetryDelayMs((details?.providerMessage||'')+' '+retryRaw+' '+msg);
        state.groqCooldownUntil=Date.now()+retryMs;
        const secs=Math.max(1,Math.ceil(retryMs/1000));
        const diag=groqRateSummary(details,msg);
        const limits=diag.parts.length?' · '+diag.parts.join(' · '):'';
        addMessage('error','Groq está temporalmente limitado. Reintenta en ~'+secs+'s'+limits+'. Las consultas locales y la guía básica del módulo siguen disponibles.');
        setStatus('Asistente local disponible · Groq limitado','busy');
      }else if(e?.status===403&&location.hostname!=='tallermantenimiento.github.io'){
        addMessage('error','El Worker está operativo, pero este origen local no está autorizado para consultas IA.');
        setStatus('IA central · prueba local no autorizada','bad');
      }else{
        addMessage('error','Error IA: '+msg);
        setStatus('IA central · sin conexión','bad');
      }
    }finally{setBusy(false);}
  }
  async function refreshHealth(){
    try{
      const h=await bridge('/health',null,'GET');
      state.health=h;
      const model=text(h?.model||EXPECTED_MODEL).replace('openai/','');
      if(h?.hasKey){
        if(!restoreConversation())resetMessages('IA central conectada. Soy el mismo asistente en todo Gestión Taller y puedo guiarte por el módulo actual o abrir otro módulo interno.');
        setStatus('IA central · '+model+' · '+(window.__LDH_AI_GLOBAL_MODULE__?.().label||'Gestión Taller')+' · en línea','ok');
        if(micNote)micNote.textContent='Whisper Large V3 · español ES · mantén pulsado para hablar';
      }else{
        resetMessages('Modo local disponible. Groq no tiene una clave configurada, pero puedo seguir resolviendo navegación, ayuda del módulo y datos deterministas sin consumir API.');
        setStatus('Asistente local · Groq sin clave','ok');
      }
    }catch(e){
      if(!restoreConversation())resetMessages('Modo local disponible. No he podido conectar con Groq, pero la navegación, la ayuda básica del módulo y las consultas deterministas siguen funcionando.');
      setStatus('Asistente local · Groq no disponible','ok');
    }
  }

  document.querySelectorAll('[data-ia-prompt]').forEach(btn=>btn.addEventListener('click',()=>send(btn.getAttribute('data-ia-prompt')||'')));
  document.querySelectorAll('[data-ia-local-action]').forEach(btn=>btn.addEventListener('click',()=>sendLocalHelp(btn.getAttribute('data-ia-local-action')||'',btn.getAttribute('data-ia-local-label')||btn.textContent||'')));
  document.querySelectorAll('[data-ia-open-module]').forEach(btn=>btn.addEventListener('click',()=>openModuleLocal(btn.getAttribute('data-ia-open-module')||'',btn.getAttribute('data-ia-local-label')||btn.textContent||'')));
  sendBtn.addEventListener('click',()=>send(input.value));
  if(clearBtn)clearBtn.addEventListener('click',clearConversation);
  input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send(input.value);}});

  async function blobToBase64(blob){
    return await new Promise((resolve,reject)=>{
      const r=new FileReader();
      r.onload=()=>resolve(String(r.result).split(',')[1]||'');
      r.onerror=reject;
      r.readAsDataURL(blob);
    });
  }
  function voiceNorm(v){
    return text(v).toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9.]+/g,' ').replace(/\s+/g,' ').trim();
  }
  function looksLikeWhisperHallucination(v){
    const q=voiceNorm(v);
    if(!q)return true;
    const compact=q.replace(/[^a-z0-9]/g,'');
    if(compact.length<2)return true;
    const exact=['suscribete','suscribanse','suscribe','subscribe','subscribe now','music','musica','aplausos','applause','subtitulo','subtitulos','amara','amara.org','gracias por ver el video','gracias por ver este video'];
    if(exact.includes(q))return true;
    const one=q.split(/\s+/).filter(Boolean);
    if(one.length===1&&q.length<=3){
      const shortOk=new Set(['si','no','uno','dos','tres']);
      if(!shortOk.has(q))return true;
    }
    const patterns=[
      /^suscribete(?: al canal)?(?: por favor)?$/,
      /^suscribanse(?: al canal)?$/,
      /^gracias por ver(?: este| el)? video/,
      /^gracias por mirar/,
      /^thanks for watching/,
      /^thank you for watching/,
      /^subtitulos?(?: realizados?| aportados?| creados?)? por/,
      /^subtitulos? por la comunidad/,
      /^subtitulos? por/,
      /^subtitulado por/,
      /\bsubtitulos?\b/,
      /\bsuscrib(?:ete|irse|anse|e)\b/,
      /\bcanal de youtube\b/,
      /\bdale like\b/,
      /\bno olvides suscribirte\b/,
      /\bcomunidad de amara\b/,
      /\bamara(?:\.org)?\b/,
      /\bsubtitles? by\b/,
      /\bcaptions? by\b/,
      /\btranslation by\b/,
      /^(?:www\.|https?:)/
    ];
    return patterns.some(re=>re.test(q));
  }
  function voicePrompt(){
    const vocab=[
      'SKLUM','REYNOLDS','WOODS','CREATE','Los del Hierros','Gestión Taller','Asistente IA','Cloudflare','Groq','GPT-OSS',
      'responde únicamente','únicamente','voz','voz conectada','conectada','mantén pulsado','micrófono',
      'orden de trabajo','OT','prioridad','agenda','preparación','fabricación','almacén','stock',
      'hierro negro','galvanizado','pintura','imprimación','RAL 7016','RAL 9005','RAL 9010','RAL 9016',
      '40x40x1.5','40x20x1.5','80x80x2','80x40x1.5','60x40x1.5','pletina','barra','barras','milímetros'
    ];
    return ('IDIOMA OBLIGATORIO: español de España. Transcribe literalmente lo que se oye. No traduzcas y no inventes palabras extranjeras. Si oyes «voz conectada», escribe exactamente «voz conectada». Vocabulario del taller: '+vocab.join(', ')+'. Conserva números, referencias OT, medidas, códigos RAL, nombres de empresas y cantidades exactamente como se oyen.').slice(0,900);
  }
  function restoreOnlineStatus(){
    const model=text(state.health?.model||EXPECTED_MODEL).replace('openai/','');
    if(state.health?.hasKey)setStatus('IA central · '+model+' · en línea','ok');
  }
  async function startWalkie(){
    if(state.busy||state.recorder?.state==='recording')return;
    state.micReleaseRequested=false;
    if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder){
      addMessage('error','Este navegador no permite usar el micrófono aquí.');
      return;
    }
    try{
      const stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true,channelCount:1}});
      state.stream=stream;
      state.chunks=[];
      const track=stream.getAudioTracks()[0];
      const micName=track?.label||'micrófono predeterminado';
      const mime=MediaRecorder.isTypeSupported('audio/webm;codecs=opus')?'audio/webm;codecs=opus':'audio/webm';

      // Misma lógica que la Informativa: realce digital para micrófonos con señal baja.
      let audioCtx=null,source=null,highPass=null,gainNode=null,compressor=null,destination=null,analyser=null,meterTimer=null;
      let maxRms=0,voicedFrames=0,frames=0;
      const AC=window.AudioContext||window.webkitAudioContext;
      if(!AC)throw new Error('Este navegador no dispone de AudioContext para amplificar el micrófono.');
      audioCtx=new AC();
      if(audioCtx.state==='suspended')await audioCtx.resume();
      source=audioCtx.createMediaStreamSource(stream);
      highPass=audioCtx.createBiquadFilter(); highPass.type='highpass'; highPass.frequency.value=85; highPass.Q.value=0.7;
      gainNode=audioCtx.createGain(); gainNode.gain.value=12.5;
      compressor=audioCtx.createDynamicsCompressor();
      compressor.threshold.value=-20; compressor.knee.value=12; compressor.ratio.value=8; compressor.attack.value=0.003; compressor.release.value=0.25;
      destination=audioCtx.createMediaStreamDestination();
      analyser=audioCtx.createAnalyser(); analyser.fftSize=1024; analyser.smoothingTimeConstant=0.12;
      source.connect(highPass); highPass.connect(gainNode); gainNode.connect(compressor); compressor.connect(destination); compressor.connect(analyser);

      const rec=new MediaRecorder(destination.stream,{mimeType:mime});
      state.recorder=rec;
      let recordingStartedAt=0;
      const data=new Float32Array(analyser.fftSize);
      meterTimer=setInterval(()=>{
        if(rec.state!=='recording')return;
        analyser.getFloatTimeDomainData(data);
        let sum=0;
        for(let i=0;i<data.length;i++)sum+=data[i]*data[i];
        const rms=Math.sqrt(sum/data.length);
        frames++; maxRms=Math.max(maxRms,rms);
        if(rms>=0.010)voicedFrames++;
        const pct=Math.min(100,Math.max(0,Math.round(rms*900)));
        if(micNote)micNote.textContent='Escuchando · nivel '+pct+'% · suelta al terminar';
      },100);

      rec.ondataavailable=e=>{if(e.data&&e.data.size)state.chunks.push(e.data);};
      rec.onstop=async()=>{
        clearTimeout(state.micTimer);
        if(meterTimer)clearInterval(meterTimer);
        mic.classList.remove('recording');
        mic.textContent='🎙 Mantén pulsado';
        try{source?.disconnect();highPass?.disconnect();gainNode?.disconnect();compressor?.disconnect();analyser?.disconnect();destination?.disconnect();}catch(_){}
        stream.getTracks().forEach(t=>t.stop());
        try{destination?.stream?.getTracks?.().forEach(t=>t.stop());}catch(_){}
        try{await audioCtx?.close();}catch(_){}
        state.stream=null;
        state.recorder=null;
        const blob=new Blob(state.chunks,{type:mime});
        const heldMs=recordingStartedAt?Math.max(0,performance.now()-recordingStartedAt):0;
        const voiceRatio=frames?voicedFrames/frames:0;
        if(!blob.size){if(micNote)micNote.textContent='No se ha grabado audio.';restoreOnlineStatus();return;}
        if(heldMs<700){
          if(micNote)micNote.textContent='Pulsación demasiado corta. Mantén pulsado mientras hablas.';
          restoreOnlineStatus();
          return;
        }
        if(maxRms<0.006||(frames>=3&&voicedFrames<3)||(frames>=6&&voiceRatio<0.12)){
          if(micNote)micNote.textContent='No he detectado voz suficiente. No se ha enviado nada.';
          restoreOnlineStatus();
          return;
        }
        try{
          setBusy(true,'IA central · transcribiendo voz…');
          if(micNote)micNote.textContent='Whisper Large V3 · transcribiendo…';
          const b64=await blobToBase64(blob);
          const tr=await bridge('/transcribe',{audioBase64:b64,mimeType:mime,prompt:voicePrompt(),temperature:0});
          const spoken=text(tr?.text).trim();
          setBusy(false);
          if(!spoken||looksLikeWhisperHallucination(spoken)||/^(https?:\/\/|www\.)/i.test(spoken)){
            input.value='';
            if(micNote)micNote.textContent='No he reconocido una frase fiable. Vuelve a intentarlo.';
            restoreOnlineStatus();
            return;
          }
          input.value=spoken;
          if(micNote)micNote.textContent='Entendido: «'+spoken+'» · enviando…';
          await send(spoken);
          if(micNote)micNote.textContent='Whisper Large V3 · español ES · mantén pulsado para hablar';
        }catch(e){
          setBusy(false);
          const vmsg=text(e?.message||e);
          if(e?.status===429||/429|rate.?limit|too many|cuota|resource exhausted|tokens per/i.test(vmsg)){
            const details=e?.details||{};
            const retryRaw=text(details?.rateLimit?.retryAfter);
            const retryNumeric=Number(retryRaw);
            const retryMs=Number.isFinite(retryNumeric)&&retryNumeric>0?Math.max(500,retryNumeric*1000):groqRetryDelayMs((details?.providerMessage||'')+' '+retryRaw+' '+vmsg);
            state.groqCooldownUntil=Date.now()+retryMs;
            const secs=Math.max(1,Math.ceil(retryMs/1000));
            addMessage('error','Whisper/Groq está temporalmente limitado. Reintenta en ~'+secs+'s.');
            if(micNote)micNote.textContent='Cuota temporalmente limitada · espera '+secs+'s';
          }else{
            addMessage('error','Error de voz: '+vmsg);
            if(micNote)micNote.textContent='Error de voz. Vuelve a intentarlo.';
          }
          restoreOnlineStatus();
        }
      };

      recordingStartedAt=performance.now();
      rec.start();
      mic.classList.add('recording');
      mic.textContent='🎙 Suelta para enviar';
      if(micNote)micNote.textContent='Escuchando · '+micName+' · suelta cuando termines';
      setStatus('Voz · escuchando…','busy');
      if(state.micReleaseRequested||!state.micHold){
        setTimeout(()=>{try{if(rec.state==='recording')rec.stop();}catch(_){}},0);
      }
      clearTimeout(state.micTimer);
      state.micTimer=null;
    }catch(e){
      try{state.stream?.getTracks?.().forEach(t=>t.stop());}catch(_){}
      state.stream=null;
      state.recorder=null;
      mic.classList.remove('recording');
      mic.textContent='🎙 Mantén pulsado';
      addMessage('error','No puedo capturar el micrófono: '+text(e?.message||e));
      if(micNote)micNote.textContent='Revisa el permiso del micrófono en Chrome.';
      restoreOnlineStatus();
    }
  }

  if(mic){
    const beginHoldToTalk=e=>{
      if(state.busy||state.micHold)return;
      e?.preventDefault?.();
      state.micHold=true;
      state.micReleaseRequested=false;
      try{if(e?.pointerId!=null)mic.setPointerCapture(e.pointerId);}catch(_){}
      startWalkie();
    };
    const endHoldToTalk=e=>{
      if(!state.micHold&&!state.recorder)return;
      e?.preventDefault?.();
      state.micHold=false;
      state.micReleaseRequested=true;
      try{if(state.recorder?.state==='recording')state.recorder.stop();}catch(_){}
    };
    mic.onclick=e=>e.preventDefault();
    mic.oncontextmenu=e=>e.preventDefault();
    mic.addEventListener('pointerdown',beginHoldToTalk);
    mic.addEventListener('pointerup',endHoldToTalk);
    mic.addEventListener('pointercancel',e=>e?.preventDefault?.());
    window.addEventListener('pointerup',endHoldToTalk);
    window.addEventListener('blur',()=>{if(state.micHold||state.recorder?.state==='recording')endHoldToTalk();});
  }

  refreshHealth();
})();
