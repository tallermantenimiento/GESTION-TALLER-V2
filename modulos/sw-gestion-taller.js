'use strict';
const LDH_PWA_VERSION='GESTION-TALLER-PWA-NETWORK-ONLY-V1-20260908';

self.addEventListener('install',()=>{
  self.skipWaiting();
});

self.addEventListener('activate',event=>{
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  let url;
  try{url=new URL(request.url);}catch(_){return;}
  if(url.origin!==self.location.origin)return;

  const path=url.pathname;
  const isCabinaAsset=(
    path.endsWith('/terminal_cabina_pintura.html') ||
    path.endsWith('/manifest_cabina_pintura.webmanifest') ||
    /\/cabina-pintura-(180|192|512)\.png$/.test(path)
  );
  if(!isCabinaAsset)return;

  // Intencionadamente SIN CacheStorage: siempre se consulta la version publicada.
  event.respondWith(fetch(request,{cache:'no-store'}));
});
