/* LDH GLOBAL ALARM SERVICE WORKER V2 · injects alarma_global.js into project HTML navigations. */
'use strict';
const BUILD='LDH-GLOBAL-ALARM-SW-V2-20260814';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET' || request.mode!=='navigate') return;
  let url;
  try{ url=new URL(request.url); }catch(_){ return; }
  const scope=new URL(self.registration.scope);
  if(url.origin!==scope.origin || !url.pathname.startsWith(scope.pathname)) return;

  event.respondWith((async()=>{
    try{
      const response=await fetch(request,{cache:'no-store'});
      const type=String(response.headers.get('content-type')||'').toLowerCase();
      if(!response.ok || !type.includes('text/html')) return response;
      let html=await response.text();
      if(!/LDH_GLOBAL_ALARM_LOADER|alarma_global\.js/i.test(html)){
        const alarmUrl=new URL('alarma_global.js?v=20260814-1',self.registration.scope).href;
        const tag=`<script id="LDH_GLOBAL_ALARM_LOADER" src="${alarmUrl}"></script>`;
        if(/<head[^>]*>/i.test(html)) html=html.replace(/<head([^>]*)>/i,`<head$1>\n${tag}`);
        else html=tag+html;
      }
      return new Response(html,{status:response.status,statusText:response.statusText,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','X-LDH-Alarm':BUILD}});
    }catch(_){
      return fetch(request);
    }
  })());
});
