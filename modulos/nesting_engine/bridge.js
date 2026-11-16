/* Adaptador del motor de corte en navegador para Gestión Taller. */
let serial=0;
function send(type,input,progress){
  return new Promise((resolve,reject)=>{
    let worker;
    try{worker=new Worker(new URL('./worker.js',import.meta.url),{type:'module'});}catch(e){return reject(e)}
    const id=++serial;
    const finish=()=>{worker.onmessage=null;worker.onerror=null;worker.terminate()};
    worker.onmessage=(ev)=>{
      const data=ev.data||{};
      if(data.id!==id)return;
      if(data.type==='progress'){progress?.(data);return}
      finish(); data.ok?resolve(type==='health'?true:data.result):reject(new Error(data.error||'Cálculo no disponible'));
    };
    worker.onerror=(ev)=>{finish();reject(new Error('No se pudieron cargar los archivos del motor web: '+(ev.message||'Error de trabajador')))};
    worker.postMessage({id,type,input});
  });
}
export const ready=()=>send('health',null);
export const calculate=(request,progress)=>send('nest',request,progress);
