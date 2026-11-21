/* Gestion Taller - Compra conjunta V16. Operaciones remotas verificadas. */
(function(){
'use strict';
const PREFIX='LDH_GRP_RECEIPT_V10_';
const txt=x=>String(x??'').trim();
const val=x=>{const n=Number(String(x??0).replace(',','.'));return Number.isFinite(n)?n:0};
const norm=x=>txt(x).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const stamp=()=>new Date().toISOString();
const fresh=()=>Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,10);
const copy=x=>JSON.parse(JSON.stringify(x));
let busy=false;
function connected(){
 if(typeof window.LDH_prepRunStockMutationV129!=='function')throw Error('No se ha conectado el Stock transaccional. Vuelve a abrir Preparacion.');
 if(!window.__LDH_PREP_STOCK_FIREBASE_STATE?.connected)throw Error('Stock sin verificacion de nube. No se permite recibir ni adjudicar.');
 if(!window.firebase?.firestore||(window.firebase.apps||[]).every(a=>a.options?.projectId!=='gestion-taller-v2'))throw Error('Preparacion no tiene conexion Firebase autorizada.');
}
function signed(db,g,m){return(db.movements||[]).filter(x=>txt(x.groupId)===g.gid&&txt(x.materialKeyV16)===m.key&&txt(x.source)==='ot_compuesta_recepcion_comun_v16'&&['entrada','in'].includes(norm(x.type||x.tipo)));}
function credits(db,g,m){return(db.assignments||[]).filter(x=>txt(x.groupId)===g.gid&&txt(x.materialKeyV16)===m.key&&txt(x.source)==='adjudicacion_material_comun_v16'&&['activa','active'].includes(norm(x.status||x.estado||'activa')));}
function hydrate(g,plan,s,api){
 const db=api.stock();if(!db||!window.__LDH_PREP_STOCK_FIREBASE_STATE?.connected)return s;
 let change=false;
 for(const m of plan.materials){
  const ms=signed(db,g,m),as=credits(db,g,m);
  if(ms.length){
   const next=ms.map(x=>({id:txt(x.receiptId)||txt(x.id),movId:txt(x.id),qty:val(x.qty),at:x.date,stockCommitted:true,remoteV16:true}));
   if(JSON.stringify(s.receipts?.[m.key]||[])!==JSON.stringify(next)){s.receipts[m.key]=next;change=true;}
  }
  if(as.length){const alloc={};as.forEach(x=>{alloc[txt(x.ref||x.jobRef)]=val(x.qty);});
   if(JSON.stringify(s.allocated?.[m.key]||{})!==JSON.stringify(alloc)){s.allocated[m.key]=alloc;change=true;}
  }
 }
 if(change){try{localStorage.setItem(PREFIX+g.gid,JSON.stringify(s));sessionStorage.setItem(PREFIX+g.gid,JSON.stringify(s));}catch(e){console.warn('[Compra V16] No se pudo actualizar la vista local',e);}}
 return s;
}
function currentIssue(g,plan,api){
 const s=api.initLedger(g,plan),issue=api.legacyIssue(g,plan,s);
 if(issue)throw Error(issue);
 if(g.parts.length!==g.expected||g.parts.some(p=>!p.meta?.composite_part_id))throw Error('Grupo incompleto.');
 return s;
}
function master(db,g,m,ctx,api){return (db.assignments||[]).find(a=>txt(a.source)==='ot_compuesta_recepcion_comun_v16'&&txt(a.groupId)===g.gid&&txt(a.materialId)===ctx.mid&&txt(a.companyId)===ctx.cid)||api.groupAssignment(db,g,m,ctx);}
async function prepSyncPart(ref,groupId,m,quantity,need,api){
 const fb=window.firebase,app=(fb.apps||[]).find(a=>a.options?.projectId==='gestion-taller-v2');
 if(!app)throw Error('No existe la conexion a Preparacion.');
 const db=fb.firestore(app),dr=db.collection('taller_data').doc('preparacion');
 const result=await db.runTransaction(async tx=>{
  const snap=await tx.get(dr);if(!snap.exists||snap.metadata?.fromCache)throw Error('Documento remoto de Preparacion no disponible.');
  const root=snap.data()||{}, data={...(root.data||{})};
  const key='prep_recepcion_'+ref,rows=JSON.parse(data[key]||'null');
  if(!Array.isArray(rows))throw Error('La ficha '+ref+' no esta disponible en Preparacion remota.');
  const matches=rows.map((l,i)=>({l,i})).filter(o=>norm(o.l.mat||o.l.material||o.l.name)===norm(m.name)&&((api.isBar(m)&&norm(o.l.unit||o.l.unidad).includes('barra'))||(!api.isBar(m)&&!norm(o.l.unit||o.l.unidad).includes('barra'))));
  if(matches.length!==1)throw Error('Linea de '+m.name+' no unica en '+ref);
  const o=matches[0],l=o.l;
  if(l.shared_v10&&txt(l.shared_v10_group)!==groupId)throw Error('La partida pertenece a otro grupo.');
  if(!l.shared_v10&&val(l.qty_recibida)>0)throw Error('La partida ya tenia recepcion individual.');
  if(val(l.qty_recibida)>quantity+1e-7)throw Error('La ficha remota tiene mas recibido que Stock.');
  const next={...l,qty_pedida:need,pedida:need,qty_recibida:quantity,recibida:quantity,aplicado_qty:quantity,shared_v10:true,shared_v10_group:groupId,shared_v10_mm:api.isBar(m)?Math.round(need*6000):null,shared_v11_pending:false,receipt_manual_v83:true,compra_conjunta_recepcion_exclusiva_v11:true,toBuy:false};
  next.ok=quantity+1e-7>=need;next.completo=next.ok;next.done=next.ok;next.isDone=next.ok;next.isCompleted=next.ok;
  next.trace=Array.isArray(l.trace)?l.trace.slice():[];
  if(!next.trace.some(x=>x.source==='adjudicacion_nube_material_comun_v16'&&txt(x.groupId)===groupId&&Math.abs(val(x.qty)-quantity)<1e-7))next.trace.push({source:'adjudicacion_nube_material_comun_v16',groupId,qty:quantity,at:stamp(),stockMovement:false});
  rows[o.i]=next;data[key]=JSON.stringify(rows);
  const keys=[...new Set([...(root.keys||Object.keys(root.data||{})),key])].sort();
  tx.set(dr,{schema:root.schema||'prep_live_sync_v6_authoritative',data,keys,updatedAt:Date.now(),reason:'compra_conjunta_v16'},{merge:true});
  return rows;
 });
 localStorage.setItem('prep_recepcion_'+ref,JSON.stringify(result));
 try{sessionStorage.setItem('prep_recepcion_'+ref,JSON.stringify(result));}catch(_){ }
}
async function receipt(g,plan,m,q,api){
 if(busy)return;busy=true;
 try{
  connected();currentIssue(g,plan,api);
  if(plan.estimated===true&&!api.stock()?.compoundPlansV16?.[g.gid])throw Error('El plan de barras no esta verificado en la nube: vuelve a enviar el conjunto desde Calculo en el ordenador de origen.');
  const n=val(q),isBar=api.isBar(m);
  if(!(n>0)||(isBar&&!Number.isInteger(n)))throw Error('La recepcion de perfiles exige barras enteras.');
  const receiptId=fresh(),movementId='mov_comp_v16_'+g.gid.replace(/[^a-z0-9_-]/gi,'_')+'_'+receiptId,at=stamp();
  const done=await window.LDH_prepRunStockMutationV129('compra_conjunta_v16_recepcion',db=>{
   const ctx=api.target(db,g,m);if(!ctx&&isBar)throw Error('La barra no tiene un unico vinculo verificado de Stock.');
   if(!ctx)throw Error('Este material conserva su recepcion individual o de Stock comun.');
   db.compoundPlansV16 ||= {};
   const beforePlan=db.compoundPlansV16[g.gid];
   const signature=p=>JSON.stringify({master:p.masterReference,parts:(p.parts||[]).map(x=>[x.reference,x.partId]),materials:(p.materials||[]).map(x=>[x.key,x.linked,x.bars,x.mm,x.qty,x.perPart])});
   if(beforePlan&&signature(beforePlan)!==signature(plan))throw Error('El plan conjunto no coincide con el guardado en Stock.');
   if(!beforePlan)db.compoundPlansV16[g.gid]=copy(plan);
   const old=signed(db,g,m).reduce((s,x)=>s+val(x.qty),0);
   if((db.movements||[]).some(x=>txt(x.groupId)===g.gid&&txt(x.materialId||x.matId)===ctx.mid&&txt(x.source).includes('recepcion_comun_v10')))throw Error('Existen movimientos previos sin conciliar.');
   if(old+n>api.desired(m)+1e-7)throw Error('La cantidad supera el total de barras del grupo.');
   const row=api.getMasterRow(db,ctx.cid,ctx.mid);if(!row)throw Error('No existe la fila fisica de Stock.');
   const before=api.physical(row);if(isBar&&Math.abs(before-Math.round(before))>1e-8)throw Error('Stock fisico fraccionario. Requiere conciliacion.');
   if(!Array.isArray(db.movements))db.movements=[];if(!Array.isArray(db.assignments))db.assignments=[];
   if(db.movements.some(x=>txt(x.id)===movementId))return {receiptId,movementId};
   const fields=['physicalQty','qtyPhysical','fisico','realQty','stockFisico','stockReal','stockActual','existencias','actualQty','qty','cantidad','stock','real'];
   fields.forEach(f=>row[f]=before+n);row.physicalManualMaster=true;row.physicalSource='compra_conjunta_v16';row.updatedAt=at;
   db.movements.push({id:movementId,receiptId,companyId:ctx.cid,empresaId:ctx.cid,materialId:ctx.mid,matId:ctx.mid,qty:n,cantidad:n,type:'entrada',tipo:'entrada',date:at,ref:g.master,jobRef:g.master,source:'ot_compuesta_recepcion_comun_v16',groupId:g.gid,materialKeyV16:m.key});
   let a=master(db,g,m,ctx,api);
   if(!a){a={id:'asg_comp_v16_master_'+g.gid.replace(/[^a-z0-9_-]/gi,'_')+'_'+ctx.mid,companyId:ctx.cid,empresaId:ctx.cid,materialId:ctx.mid,matId:ctx.mid,ref:g.master,jobRef:g.master,qty:0,cantidad:0,phase:'preparacion',status:'activa',assignmentType:'grupo_compuesto',source:'ot_compuesta_recepcion_comun_v16',groupId:g.gid,materialKeyV16:m.key};db.assignments.push(a);}
   a.qty=val(a.qty)+n;a.cantidad=a.qty;a.status='activa';a.estado='activa';a.updatedAt=at;
   return {receiptId,movementId};
  });
  const s=hydrate(g,plan,api.initLedger(g,plan),api);
  if(!s.receipts[m.key]?.some(x=>txt(x.movId)===movementId)){s.receipts[m.key] ||= [];s.receipts[m.key].push({id:receiptId,movId:movementId,qty:n,at,stockCommitted:true,remoteV16:true});}
  localStorage.setItem(PREFIX+g.gid,JSON.stringify(s));
  const errors=[];
  for(const p of g.parts){
   const part=plan.parts.find(x=>x.reference===p.ref),need=part?api.portion(m,part.partId):0;
   if(!need)continue;
   try{await allocation(g,plan,m,p,undefined,api);}catch(e){errors.push(p.ref+': '+e.message);}
  }
  api.renderMother(g.gid);
  if(errors.length)throw Error('Recepcion confirmada en Stock; algunas partidas pendientes: '+errors.join('; ')+'. No repitas la recepcion.');
 }catch(error){alert('Compra conjunta V16: '+String(error.message||error));console.error(error);}
 finally{busy=false;}
}
async function allocation(g,plan,m,p,override,api){
 connected();currentIssue(g,plan,api);
 const part=plan.parts.find(x=>x.reference===p.ref);if(!part)throw Error('Partida ajena al grupo.');
 const need=api.isBar(m)?api.portion(m,part.partId)/6000:api.portion(m,part.partId);
 const quantity=override==null?need:val(override);
 if(quantity<=0||quantity>need+1e-7)throw Error('Cantidad de reparto no valida.');
 if(m.pletina)throw Error('La pletina conserva su operativa original.');
 const dest=await window.LDH_prepRunStockMutationV129('compra_conjunta_v16_adjudicacion',db=>{
  const ctx=api.target(db,g,m);if(!ctx)throw Error('Material sin vinculo de Stock inequivoco.');
  const masterRow=master(db,g,m,ctx,api);if(!masterRow)throw Error('No hay reserva madre confirmada en Stock.');
  db.assignments ||= [];
  const id='asg_comp_v16_'+g.gid.replace(/[^a-z0-9_-]/gi,'_')+'_'+ctx.mid+'_'+p.ref.replace(/[^a-z0-9_-]/gi,'_');
  let child=db.assignments.find(x=>txt(x.id)===id);
  if(child&&txt(child.materialKeyV16)!==m.key)throw Error('Asignacion de otro material con el mismo ID.');
  const current=val(child?.qty),delta=Math.max(0,quantity-current);
  if(current>quantity+1e-7)throw Error('La partida ya tiene una asignacion superior.');
  if(delta>val(masterRow.qty)+1e-7)throw Error('No hay barras suficientes en la reserva conjunta.');
  if(delta>1e-8){
   masterRow.qty=Math.max(0,val(masterRow.qty)-delta);masterRow.cantidad=masterRow.qty;masterRow.updatedAt=stamp();
   if(!child){child={id,companyId:ctx.cid,empresaId:ctx.cid,materialId:ctx.mid,matId:ctx.mid,ref:p.ref,jobRef:p.ref,qty:0,cantidad:0,assignmentType:'libre',source:'adjudicacion_material_comun_v16',groupId:g.gid,materialKeyV16:m.key,phase:'preparacion',status:'activa',createdAt:stamp()};db.assignments.push(child);}
   child.qty=quantity;child.cantidad=quantity;child.status='activa';child.estado='activa';child.updatedAt=stamp();
  }
  if(api.isBar(m)){
   const all=plan.parts.every(x=>{const r=credits(db,g,m).find(y=>txt(y.ref||y.jobRef)===x.reference);return val(r?.qty)+1e-7>=api.portion(m,x.partId)/6000;});
   if(all){const remaining=Math.max(0,val(masterRow.qty)),whole=Math.floor(remaining+1e-7);masterRow.mermaNoRecuperableMmV13=Math.round(Math.max(0,remaining-whole)*6000);masterRow.mermaNoDisponibleV13=true;masterRow.remainingFullBarsV13=whole;masterRow.wastePolicyV13='sin_retales_solo_barras_enteras';}
  }
  return {credited:val(child?.qty||quantity)};
 });
 await prepSyncPart(p.ref,g.gid,m,dest.credited,need,api);
 const s=api.initLedger(g,plan);s.allocated[m.key] ||= {};s.allocated[m.key][p.ref]=Math.max(val(s.allocated[m.key][p.ref]),dest.credited);
 try{localStorage.setItem(PREFIX+g.gid,JSON.stringify(s));}catch(_){ }
 api.renderMother(g.gid);
 return true;
}

/* V17: recepcion administrativa de compuestos, sin contabilizar Stock.
 * El asiento se guarda en la misma transaccion de Preparacion que las partidas.
 * Nunca crea entradas, salidas, reservas ni retales en Stock. */
const manualBusy = new Set();
const manualNorm=x=>txt(x).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ');
function prepDb(){
 const f=window.firebase;
 const app=(f?.apps||[]).find(a=>a.options?.projectId==='gestion-taller-v2');
 if(!app||!f?.firestore)throw Error('Preparacion no tiene conexion remota. No se ha registrado la recepcion.');
 return f.firestore(app);
}
function ledgerKey(g){return PREFIX+g.gid;}
function emptyLedger(g){return {version:17,groupId:g.gid,masterReference:g.master,receipts:{},allocated:{},events:[],notes:'',createdAt:stamp(),sinStockRealV17:true};}
function materialLine(row,m){
 const name=manualNorm(m.name),u=apiUnit(m);
 return manualNorm(row.mat||row.material||row.name)===name &&
   (u==='barra'?manualNorm(row.unit||row.unidad).includes('barra'):
    u==='mm'?manualNorm(row.unit||row.unidad)==='mm':
    !manualNorm(row.unit||row.unidad).includes('barra')&&manualNorm(row.unit||row.unidad)!=='mm');
}
function apiUnit(m){return m.pletina?'mm':m.kind==='unit'?'ud':'barra';}
function physicalReceived(s,m){return (s.receipts?.[m.key]||[]).filter(x=>!x.revoked).reduce((v,x)=>v+val(x.qty),0);}
function physicalAllocated(s,m){return Object.values(s.allocated?.[m.key]||{}).reduce((v,x)=>v+val(x),0);}
async function manualTransaction(g,plan,m,amount,onlyPart,api){
 const gid=txt(g.gid),key=ledgerKey(g);
 if(manualBusy.has(gid))return;
 manualBusy.add(gid);
 try{
  if(g.parts.length!==g.expected || new Set(g.parts.map(p=>txt(p.meta?.composite_part_id))).size!==g.expected)throw Error('Las partidas del grupo no estan completas.');
  if(!plan?.parts?.length || !plan.materials?.some(x=>x.key===m.key))throw Error('Falta el plan de materiales.');
  if(g.parts.some(p=>p.meta?.en_fabricacion||p.meta?.en_pintura||p.meta?.en_almacen||p.meta?.entregado))throw Error('No se reciben materiales conjuntos en partidas que ya han avanzado de fase.');
  if(amount!==null){
   if(!(amount>0) || (api.isBar(m)&&!Number.isInteger(amount)))throw Error('Las barras se reciben enteras.');
   if(physicalReceived(api.initLedger(g,plan),m)+amount>api.desired(m)+1e-7)throw Error('La recepcion supera las barras o unidades previstas.');
  }
  const fb=prepDb(),ref=fb.collection('taller_data').doc('preparacion');
  const operationId='comp_sinstock_'+fresh(),now=stamp();
  const result=await fb.runTransaction(async tx=>{
   const snap=await tx.get(ref);
   if(!snap.exists)throw Error('No se ha encontrado el documento remoto de Preparacion.');
   const root=snap.data()||{},data={...(root.data||{})};
   const s=data[key]?JSON.parse(data[key]):emptyLedger(g);
   if(s.groupId!==gid)throw Error('El registro de compra conjunta pertenece a otro grupo.');
   s.receipts ||= {};s.allocated ||= {};s.events ||= [];
   const rec=physicalReceived(s,m),max=api.desired(m);
   if(amount!==null){
    if(rec+amount>max+1e-7)throw Error('Esta recepcion ya esta registrada o supera lo necesario. Comprueba la ficha conjunta.');
    s.receipts[m.key] ||= [];
    s.receipts[m.key].push({id:operationId,qty:amount,at:now,manualV17:true,stockCommitted:false,sinStockReal:true});
    s.events.push({id:operationId,at:now,type:'recepcion_sin_stock',material:m.name,qty:amount});
   }
   let available=physicalReceived(s,m)-physicalAllocated(s,m);
   const changed={};
   for(const part of plan.parts){
    if(onlyPart && txt(part.reference)!==txt(onlyPart))continue;
    if(available<=1e-8)break;
    const p=g.parts.find(x=>txt(x.ref)===txt(part.reference));
    if(!p)throw Error('La partida '+part.reference+' no existe en Preparacion.');
    const required=api.isBar(m)?api.portion(m,part.partId)/6000:api.portion(m,part.partId);
    if(required<=0)continue;
    const prior=val(s.allocated[m.key]?.[p.ref]),take=Math.min(available,Math.max(0,required-prior));
    if(take<=1e-8)continue;
    const rowKey='prep_recepcion_'+p.ref;
    const lines=data[rowKey]?JSON.parse(data[rowKey]):null;
    if(!Array.isArray(lines))throw Error('No existe en nube la ficha '+p.ref+'. No se ha grabado nada.');
    const matches=lines.map((l,i)=>({l,i})).filter(z=>materialLine(z.l,m));
    if(matches.length!==1)throw Error('La linea '+m.name+' no es unica en '+p.ref+'.');
    const line=matches[0].l;
    if(line.shared_v10 && txt(line.shared_v10_group)!==gid)throw Error('Material vinculado a otro conjunto.');
    const next=val(line.qty_recibida),assigned=prior+take;
    // No se reduce ni reemplaza una recepcion antigua que el usuario conciliara manualmente.
    // Nunca se crea movimiento fisico de Stock.
    const oldRequested=val(line.qty_pedida);
    if(next<=0 && val(line.aplicado_qty)<=0){
     line.original_bar_need_v11 ||= oldRequested;
     line.qty_pedida=required;line.pedida=required;
     line.qty_recibida=assigned;line.recibida=assigned;
     line.aplicado_qty=assigned;
     line.ok=assigned+1e-7>=required;line.completo=line.ok;
     line.done=line.ok;line.isDone=line.ok;line.isCompleted=line.ok;
     line.shared_v10=true;line.shared_v10_group=gid;
     line.shared_v10_mm=api.isBar(m)?Math.round(required*6000):null;
     line.compra_conjunta_recepcion_exclusiva_v11=true;line.toBuy=false;
     line.stock_consumed_qty=0;
     line.trace=Array.isArray(line.trace)?line.trace:[];
     line.trace.push({source:'recepcion_compartida_sin_stock_v17',groupId:gid,at:now,qty:take,stockMovement:false});
    }
    lines[matches[0].i]=line;
    changed[rowKey]=JSON.stringify(lines);
    s.allocated[m.key] ||= {};s.allocated[m.key][p.ref]=assigned;
    available-=take;
   }
   data[key]=JSON.stringify(s);
   Object.assign(data,changed);
   const keys=[...new Set([...(root.keys||Object.keys(root.data||{})),...Object.keys(changed),key])].sort();
   tx.set(ref,{schema:root.schema||'prep_live_sync_v6_authoritative',data,keys,updatedAt:Date.now(),reason:'compra_compuesta_sin_stock_v17'}, {merge:true});
   return {ledger:s,changed};
  });
  // Solo se actualiza el navegador despues de confirmacion transaccional.
  const raw=JSON.stringify(result.ledger);
  localStorage.setItem(key,raw);
  try{sessionStorage.setItem(key,raw);}catch(_){}
  for(const [k,v] of Object.entries(result.changed)){
   localStorage.setItem(k,v);try{sessionStorage.setItem(k,v);}catch(_){}
  }
  api.renderMother(gid);
 }catch(e){alert('Compra conjunta: '+String(e.message||e));console.error('[Compra conjunta sin Stock]',e);}
 finally{manualBusy.delete(gid);}
}
function manualReceipt(g,plan,m,qty,api){return manualTransaction(g,plan,m,val(qty),null,api);}
function manualAllocation(g,plan,m,p,_override,api){return manualTransaction(g,plan,m,null,p.ref,api);}

window.LDH_GroupV16Remote={receipt,allocation,hydrate,manualReceipt,manualAllocation};
})();