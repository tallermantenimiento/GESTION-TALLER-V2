from pathlib import Path
import hashlib
p=Path('modulos/nesting_chapas.html')
s=p.read_text(encoding='utf-8')
marker='LDH_NESTING_V98_FINAL_COMPARE_20261116'
if marker in s:
    print('V9.8 already applied')
    raise SystemExit(0)
assert hashlib.sha1(b'blob '+str(len(s.encode())).encode()+b'\0'+s.encode()).hexdigest()=='ef9c6374dd17329f404a50f3d262b68f2df183d2','Unexpected source'
def replace(old,new):
    global s
    assert s.count(old)==1,('Anchor count',s.count(old),old[:100])
    s=s.replace(old,new)
def block(start,end,new):
    global s
    a=s.index(start);b=s.index(end,a)
    s=s[:a]+new+'\n'+s[b:]
s=s.replace('V9.3</title>','V9.8</title>').replace('V9.3 \u00b7 Retales \u00b7 Biblioteca OT \u00b7 IA com\u00fan','V9.8 \u00b7 Comparaci\u00f3n final verificada')
replace('const dist=(a,b)','// '+marker+"\nwindow.__chapasBuild='V9.8-20261116';\nwindow.__chapasComparing=false;\nconst dist=(a,b)")
replace('async function dbAll(){',r'''window.__chapasPlanMemo={
 read(key){if(!/^nest-best-v98-[0-9a-f]+$/.test(key))throw Error('Clave de plano no permitida');return dbGet(META,key)},
 write(record){if(!/^nest-best-v98-[0-9a-f]+$/.test(record?.key||''))throw Error('Clave de plano no permitida');return dbPut(META,record)}
};
async function dbAll(){''')
replace("return 'nest-best-v97-'+","return 'nest-best-v98-'+")
replace('await dbGet(META,key)','await window.__chapasPlanMemo.read(key)')
replace('await dbPut(META,record)','await window.__chapasPlanMemo.write(record)')
replace('if(ed.modified)window.__chapasChanged?.()', 'if(ed.modified&&!window.__chapasComparing)window.__chapasChanged?.()')
replace('const all=ed.sheets.flatMap(sh=>sh.pieces).map(p=>{', "const orderById=new Map(state.parts.map((p,i)=>[String(p.id),i]));\n const all=ed.sheets.flatMap(sh=>sh.pieces).sort((a,b)=>(orderById.get(String(a.sourceId))-orderById.get(String(b.sourceId)))||a.id.localeCompare(b.id,undefined,{numeric:true})).map(p=>{")
replace('return {...p,poly:poly.map(v=>v.slice())};\n });', 'const b=bounds(poly);\n  return {...p,poly:poly.map(([x,y])=>[x-b.minX,b.maxY-y])};\n });')
replace('if(Date.now()>deadline)break outer;\n    if(Date.now()>targetDeadline)break;', 'if(k>=6 && (Date.now()>deadline||Date.now()>targetDeadline))break;')
replace("}catch(e){status('Error de optimizaci\u00f3n: '+e.message+'. No se modifica el trabajo.',true)}", "}catch(e){status('Error de optimizaci\u00f3n: '+e.message,true);throw e}")
replace('const retention=await chooseBestValidatedPlan();','const retention=window.__chapasComparing?{retained:false}:await chooseBestValidatedPlan();')
replace("await fillSheetPreviews(); window.dispatchEvent(new Event('ldh-nest-result-ready'));", "await fillSheetPreviews(); window.dispatchEvent(new Event('ldh-nest-result-ready'));\n if(compareInfo?.renderOnly)return;")
replace("  }else if(auto?.error){sayEngine('El c\u00e1lculo finaliz\u00f3, pero no se pudo mejorar el encaje: '+auto.error,true)}", "  }else if(auto?.error){sayEngine('El c\u00e1lculo finaliz\u00f3, pero no se pudo mejorar el encaje: '+auto.error,true)}\n  return auto;")
insert=r'''
function expectedPlanPieces(){return state.parts.flatMap(p=>Array.from({length:Number(p.qty)},(_,i)=>({id:String(p.id)+'#'+i,sourceId:String(p.id),poly:p.poly})))}
function samePlanGeometry(a,b){
 if(a.length!==b.length)return false;
 const n=a.length;
 for(let offset=0;offset<n;offset++)for(const direction of [1,-1]){
  let ok=true;
  for(let i=0;i<n&&ok;i++)for(let j=i+1;j<n;j++){
   const x=b[(offset+direction*i+n*2)%n],y=b[(offset+direction*j+n*2)%n];
   if(Math.abs(Math.hypot(a[i][0]-a[j][0],a[i][1]-a[j][1])-Math.hypot(x[0]-y[0],x[1]-y[1]))>.025){ok=false;break}
  }
  if(ok)return true;
 }
 return false;
}
function applyValidatedFinalPlan(plan){
 if(!ed.active)enterEdit(true);
 if(!ed.active)throw Error('No se pudo abrir el editor para el plano final');
 const verified=checkPlanCandidate(plan,expectedPlanPieces());
 if(!verified)throw Error('Plano final incompatible con las piezas, formatos o separacion actuales');
 const pool=new Map();
 for(const p of ed.sheets.flatMap(sh=>sh.pieces)){const key=String(p.sourceId);const items=pool.get(key)||[];items.push(p);pool.set(key,items)}
 const assignments=verified.map(sh=>({...sh,pieces:sh.pieces.map(item=>{
  const original=pool.get(String(item.sourceId))?.shift();
  if(!original)throw Error('Falta una pieza al reconstruir el plano final');
  return {...original,poly:item.poly.map(v=>v.slice())};
 })}));
 for(const sh of ed.sheets)sh.pieces=[];
 for(const wanted of assignments){
  let dest=ed.sheets.find(sh=>!sh.pieces.length&&sh.w===wanted.w&&sh.h===wanted.h);
  if(!dest){dest=createAddedSheet(wanted.w,wanted.h);ed.sheets.push(dest)}
  dest.pieces=wanted.pieces;
 }
 ed.modified=true;paintAll();
 return window.__chapasPrintSnapshot();
}
window.__chapasUseFinalPlan=applyValidatedFinalPlan;
window.__chapasFinalizeBest=async()=>{
 const r=await chooseBestValidatedPlan();
 if(r.error)throw Error(r.error);
 paintAll();return window.__chapasPrintSnapshot();
};
window.__chapasValidatePlan=plan=>!!checkPlanCandidate(plan,expectedPlanPieces());
'''
replace('function checkPlanCandidate(plan,parts){',insert+'\nfunction checkPlanCandidate(plan,parts){')
replace('if(poly.some(pt=>pt.some(v=>!Number.isFinite(v))))return null;', 'if(poly.some(pt=>pt.some(v=>!Number.isFinite(v)))||!simple(poly)||!samePlanGeometry(poly,p.poly))return null;')
replace('const all=ed.sheets.flatMap(sh=>sh.pieces);\n const admissible=', 'const all=expectedPlanPieces();\n const admissible=')
replace('checkPlanCandidate(effective,ed.sheets.flatMap(sh=>sh.pieces))','checkPlanCandidate(effective,expectedPlanPieces())')
replace('function paintAll(){let visibleIndex=0;', 'function paintAll(){let visibleIndex=0;const occupiedSheets=ed.sheets.filter(sh=>sh.pieces.length),totalArea=occupiedSheets.reduce((sum,sh)=>sum+sh.w*sh.h,0)/1e6;')
replace("if(occupied){const h=sh.card.querySelector('.nest-head h3');", "if(occupied){const meta=sh.card.querySelector('.nest-meta');if(meta)meta.innerHTML='<span class=\"nest-chip\">Plano final</span><span class=\"nest-chip\">Total final: '+formatM2(totalArea)+' m\u00b2</span>';const caption=sh.card.querySelector('.nest-caption > span:last-child');if(caption)caption.textContent='Formato final: '+sh.w+' \u00d7 '+sh.h+' mm';const h=sh.card.querySelector('.nest-head h3');")
replace('if(nestCurrent)restoreOutputActions();', "if(nestCurrent){restoreOutputActions();const stats=byId('nestStats');stats.hidden=false;stats.innerHTML='<div><strong>'+occupiedSheets.length+'</strong><span>Chapas utilizadas \u00b7 final</span></div><div><strong>'+occupiedSheets.reduce((n,sh)=>n+sh.pieces.length,0)+'/'+state.parts.reduce((n,p)=>n+Number(p.qty),0)+'</strong><span>Piezas colocadas</span></div><div><strong>'+formatM2(totalArea)+'</strong><span>m\u00b2 totales \u00b7 final</span></div>';}")
block('async function runNest(forceOne=false){',"el('runNest').onclick=",r'''async function runNest(forceOne=false){
 if(window.__chapasComparing)return;
 if(!state.parts.length){sayEngine('Primero importa uno o varios DXF.',true);return}
 let base;try{base=getSettings(forceOne)}catch(e){sayEngine(e.message,true);return}
 const entry=JSON.stringify(state.parts),expected=state.parts.reduce((n,p)=>n+Number(p.qty),0);
 const controls=[...document.querySelectorAll('#layout input,#layout select,#layout textarea,header button,#choose,#clear,#runNest,#editLayout')];
 const disabled=controls.map(e=>[e,e.disabled]);controls.forEach(e=>e.disabled=true);
 const btn=el('runNest');window.__chapasComparing=true;
 const finalists=[],errors=[];
 try{
  const formats=sheetSearchVariants(base),variants=[];
  for(const f of formats){const rotations=[base.rotationDegrees];if(el('process').value==='laser'&&rotation90Enabled())rotations.push([0]);
   for(const rotation of rotations)variants.push({label:f.label,request:{...base,sheets:f.sheets,rotationDegrees:rotation,seconds:f===formats[0]?base.seconds:Math.min(12,Math.max(5,Math.floor(base.seconds/2)))}});
  }
  const {calculate}=await import('./nesting_engine/bridge.js');
  for(const [i,v] of variants.entries()){
   btn.textContent='Comparando '+(i+1)+'/'+variants.length+'...';
   sayEngine('Calculando y refinando opcion '+(i+1)+'/'+variants.length+': '+v.label);
   try{
    const j=await calculate(v.request);
    if(!j?.ok||!isAllowedNestResult(j,v.request.sheets))throw Error('Resultado incompleto o formato no permitido');
    j.rotationDegrees=v.request.rotationDegrees;j.searchLabel=v.label;
    window.__chapasResetEditor?.();
    const refined=await displayResults(j,{tested:i+1});
    if(!refined?.ok)throw Error(refined?.error||'El ajuste final no se ha validado');
    const plan=window.__chapasPrintSnapshot();
    if(!window.__chapasValidatePlan(plan)||plan.reduce((n,sh)=>n+sh.items.length,0)!==expected)throw Error('No se han validado todas las piezas');
    finalists.push({result:j,plan,area:plan.reduce((n,sh)=>n+sh.w*sh.h,0),label:v.label});
   }catch(error){errors.push(v.label+': '+error.message);console.warn('[Nesting V9.8] Opcion rechazada:',error)}
  }
  if(JSON.stringify(state.parts)!==entry)throw Error('Las piezas han cambiado durante el calculo');
  if(!finalists.length)throw Error(errors.join(' | ')||'No hay distribuciones completas validas');
  finalists.sort((a,b)=>a.area-b.area||a.plan.length-b.plan.length);
  const winner=finalists[0];window.__chapasResetEditor?.();
  await displayResults(winner.result,{tested:finalists.length,renderOnly:true});
  window.__chapasUseFinalPlan(winner.plan);
  const final=await window.__chapasFinalizeBest();
  const total=final.reduce((n,sh)=>n+sh.w*sh.h,0)/1e6,partArea=state.parts.reduce((n,p)=>n+area(p.poly)*Number(p.qty),0)/1e6;
  const rows=finalists.map((f,i)=>'<tr><td>'+esc(f.label)+'</td><td>'+f.plan.length+'</td><td>'+formatM2(f.area/1e6)+'</td><td>'+esc(f.plan.map(sh=>sh.w+' x '+sh.h).join(' + '))+'</td></tr>').join('');
  const comp=el('sheetComparison');comp.hidden=false;
  comp.innerHTML='<h3>Comparativa de resultados finales</h3><p><b>Seleccion final: '+final.length+' chapa(s), '+formatM2(total)+' m\u00b2.</b> Piezas: '+expected+'. Superficie de piezas: '+formatM2(partArea)+' m\u00b2. Cada alternativa se compara DESPUES de recolocar y excluir chapas vacias; el ajuste puede aprovechar cualquier formato activado.</p><table><thead><tr><th>Inicio de busqueda</th><th>Chapas finales</th><th>m\u00b2 finales</th><th>Formatos finales</th></tr></thead><tbody>'+rows+'</tbody></table><p>'+errors.length+' alternativa(s) descartada(s). Se conserva un plano anterior solo si sigue siendo valido y es mejor. No se garantiza el optimo absoluto.</p>';
  sayEngine('Calculo final verificado: '+expected+'/'+expected+' piezas en '+final.length+' chapa(s), '+formatM2(total)+' m\u00b2. Visor e impresion usan la misma distribucion.');
  window.__chapasLastComparison={build:'V9.8',selected:{sheets:final.length,pieces:expected,area:total},candidates:finalists.map(f=>({label:f.label,area:f.area/1e6,sheets:f.plan.length})),errors};
 }catch(e){sayEngine('No se pudo validar el calculo: '+e.message,true);el('exportActions').hidden=true;console.error('[Nesting V9.8]',e)}
 finally{window.__chapasComparing=false;for(const [element,value] of disabled)element.disabled=value;btn.disabled=false;btn.textContent='Optimizar TODAS las piezas';if(finalists.length)window.__chapasChanged?.();}
}
''')
p.write_text(s,encoding='utf-8')
print('Patched V9.8',len(s))
