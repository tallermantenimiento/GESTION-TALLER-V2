/* Motor geométrico WebAssembly del programa Gestión Taller.
 * La dependencia Rust compilada se aloja en ./pkg; no hay servidor externo.
 * No escribe en Firestore ni cambia otras OT.
 */
import init, {import_files_with_options, nest, validate, export_sheet} from './pkg/nestbolt_wasm.js';

let ready;
function ensureReady(){ return ready ??= init(); }
function finite(v){ const n=Number(v); if(!Number.isFinite(n))throw Error('Parámetro numérico inválido'); return n; }
function createRequest(input,library){
  const sheetTypes=(input.sheets||[]).map((sheet,i)=>{
    const w=finite(sheet.width),h=finite(sheet.height),margin=finite(input.margin);
    if(w<=2*margin||h<=2*margin||w<50||h<50||w>12000||h>12000)throw Error('Dimensiones de chapa incompatibles con los márgenes');
    const max=sheet.count==null?null:Math.floor(finite(sheet.count));
    if(max!==null&&(max<1||max>100))throw Error('Cantidad de chapas inválida');
    return {id:'FORMATO_'+i,width_mm:w,height_mm:h,count:max,
      margins_mm:{left:margin,right:margin,top:margin,bottom:margin},defects_mm:[]};
  });
  if(!sheetTypes.length||sheetTypes.length>8)throw Error('Selecciona de 1 a 8 formatos');
  const spacing=finite(input.spacing);
  const angles=(input.rotationDegrees||[0]).map(finite);
  const rotations={kind:'list',degrees:angles.length?angles:[0]};
  const parts=(library.parts||[]).map(p=>({id:p.id,quantity:1,rotations,allow_mirror:false,priority:1}));
  if(!parts.length||parts.length>1000)throw Error('Número de contornos fuera de rango');
  return {name:'Nesting de Chapas',parts,sheets:sheetTypes,spacing_mm:spacing,edge_spacing_mm:spacing,mode:'all'};
}
async function compute(input,progress){
  if(typeof input.svg!=='string'||!/^\s*<svg\b/i.test(input.svg)||input.svg.length>7e6)throw Error('SVG de entrada inválido');
  if(/<script|<foreignObject|<!ENTITY|onload\s*=/i.test(input.svg))throw Error('Contenido SVG no permitido');
  const seconds=Math.min(180,Math.max(5,finite(input.seconds)));
  const library=JSON.parse(import_files_with_options(JSON.stringify([{name:'lote.svg',text:input.svg}]),JSON.stringify({svg_user_unit:1})));
  const req=createRequest(input,library);
  const seed=53071;
  const result=JSON.parse(nest(JSON.stringify(library),JSON.stringify(req),seconds,seed,false,0,(elapsed,material)=>{if(typeof progress==='function')progress(elapsed,material);}));
  if(!result.layout||!result.validation?.valid)throw Error('El motor no ha validado la geometría del encaje');
  const validated=JSON.parse(validate(JSON.stringify(library),JSON.stringify(req),JSON.stringify(result.layout)));
  const placements=result.layout.placements||[];
  if(!validated.valid||placements.length!==req.parts.length||new Set(placements.map(p=>p.part_id)).size!==req.parts.length){
    throw Error('No se han colocado todas las piezas solicitadas. No se genera un plano incompleto.');
  }
  const sheets=[];
  for(const [i,item] of (result.layout.sheets||[]).entries()){
    const stock=req.sheets.find(x=>x.id===item.stock_id);
    if(!stock)throw Error('El motor devolvió un formato de chapa sin identificar');
    const svg=export_sheet(JSON.stringify(library),JSON.stringify(req),JSON.stringify(result.layout),item.id,'svg',true);
    const dxf=export_sheet(JSON.stringify(library),JSON.stringify(req),JSON.stringify(result.layout),item.id,'dxf',true);
    if(!svg.includes('<svg')||!dxf.includes('SECTION'))throw Error('Salida de corte inválida');
    sheets.push({name:`chapa-${i+1}`,width:stock.width_mm,height:stock.height_mm,svgText:svg,dxfText:dxf});
  }
  if(!sheets.length)throw Error('No se ha generado ninguna chapa válida');
  return {ok:true,pieces:placements.length,sheets,formats:req.sheets.map(x=>({width_mm:x.width_mm,height_mm:x.height_mm})),
    report:validated,spacing:req.spacing_mm,seconds,engine:'web'};
}
self.onmessage=async(event)=>{
  const {id,type,input}=event.data||{};
  try{
    await ensureReady();
    if(type==='health')self.postMessage({id,ok:true,installed:true});
    else if(type==='nest'){
      const result=await compute(input,(elapsed,material)=>self.postMessage({id,type:'progress',elapsed,material}));
      self.postMessage({id,ok:true,result});
    }else throw Error('Acción no admitida');
  }catch(e){self.postMessage({id,ok:false,error:String(e?.message||e)});}
};
