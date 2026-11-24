/*
 * Gestión Taller · Adaptador Cloudflare Workers AI R1
 * CANDIDATO NO DESPLEGADO.
 * Integrar únicamente DENTRO del Worker gestion-taller-ia existente,
 * DESPUÉS de sus controles actuales de autenticación/autorización.
 * No publicar este archivo como Worker independiente sin autenticación.
 *
 * En Cloudflare: Worker -> Settings -> Bindings -> Workers AI -> nombre AI.
 * Endpoint sugerido: POST /chat-workers-ai (solo lectura).
 *
 * NO guarda claves, no conecta con Firestore y no ejecuta operaciones.
 */
const TALLER_AI_MODEL = '@cf/google/gemma-4-26b-a4b-it';
export async function gestionarConsultaWorkersAI(request, env) {
  if (request.method !== 'POST') return Response.json({error:'Método no permitido'}, {status:405});
  if (!env?.AI || typeof env.AI.run !== 'function') return Response.json({error:'Binding AI no configurado'}, {status:503});
  let body;
  try {body=await request.json()} catch (_) {return Response.json({error:'JSON no válido'}, {status:400})}
  const input=Array.isArray(body?.messages)?body.messages:[];
  const messages=input.filter(m=>m && ['user','system','assistant'].includes(m.role) && typeof m.content==='string')
    .slice(-6).map(m=>({role:m.role,content:m.content.slice(0,12000)}));
  if (!messages.some(m=>m.role==='user')) return Response.json({error:'Falta mensaje de usuario'}, {status:400});
  try{
    const result=await env.AI.run(TALLER_AI_MODEL,{
      messages,
      temperature:0.1,
      max_completion_tokens:600
    });
    const content=result?.choices?.[0]?.message?.content ?? result?.response ?? '';
    if(typeof content!=='string' || !content.trim()) return Response.json({error:'Respuesta vacía del modelo'}, {status:502});
    return Response.json({
      model:TALLER_AI_MODEL,
      choices:[{message:{role:'assistant',content}}],
      usage:result?.usage || null
    },{headers:{'Cache-Control':'no-store'}});
  }catch(e){
    return Response.json({error:'Error de inferencia Workers AI',code:String(e?.code||'INFERENCE_ERROR')},{status:502});
  }
}
