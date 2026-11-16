import fs from 'node:fs';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
const root='http://127.0.0.1:8876';
const backup=JSON.parse(fs.readFileSync('modulos/nesting_chapas_olaso_seed.json','utf8'));
const parts=backup.jobs[1].data.parts.filter(p=>p.file.includes('falsa escuadra'));
const browser=await chromium.launch({headless:true});
const results=[];
try {
 for(const [name,small,retal] of [['mixed',true,false],['large',false,false],['mixed-retal',true,true]]){
  const context=await browser.newContext({viewport:{width:1480,height:1000}});
  await context.route('https://**/*',r=>r.abort());
  await context.route('**/asistente_ia_global.js*',r=>r.fulfill({body:'',contentType:'text/javascript'}));
  const page=await context.newPage();const logs=[];
  page.on('pageerror',e=>logs.push('JS: '+e.message));
  page.on('console',m=>{if(m.type()==='warning'||m.type()==='error')logs.push(m.type()+': '+m.text())});
  page.on('dialog',d=>d.dismiss());
  await page.goto(root+'/modulos/nesting_chapas.html');
  await page.waitForFunction(()=>document.getElementById('health').textContent.includes('disponible en este navegador'),null,{timeout:60000});
  await page.evaluate(({parts,small,retal})=>{
   state.parts=structuredClone(parts);state.signatures.clear();render();
   el('process').value='shear';el('s1').checked=small;el('s2').checked=true;el('s3').checked=false;el('gap').value='1';
   el('seconds').add(new Option('test','5'));el('seconds').value='5';
   if(retal){el('scrapW').value='850';el('scrapH').value='620';el('scrapQty').value='1';addScrap()}
  },{parts,small,retal});
  await page.waitForTimeout(30);
  const started=Date.now();await page.evaluate(()=>runNest(false));
  const info=await page.evaluate(()=>{
   const sheets=printSheetData();
   const d=new DOMParser().parseFromString(buildPrintHtml(),'text/html');
   return {status:el('engineStatus').textContent,editor:el('meStatus').textContent,stats:el('nestStats').innerText,
    sheets:sheets.map(s=>({w:s.w,h:s.h,count:s.items.length})),area:sheets.reduce((n,s)=>n+s.w*s.h,0)/1e6,
    pieces:sheets.reduce((n,s)=>n+s.items.length,0),valid:window.__chapasCheckOutput('test'),
    heads:[...document.querySelectorAll('#nestResult .nest-sheet')].filter(c=>getComputedStyle(c).display!=='none').map(c=>({title:c.querySelector('h3')?.textContent,chips:c.querySelector('.nest-meta')?.textContent,pieces:c.querySelectorAll('.manual-part').length})),
    printSummary:d.querySelector('.ext-summary')?.textContent,plan:sheets};
  });
  info.name=name;info.elapsedMs=Date.now()-started;info.logs=logs;
  results.push(info);console.log('RESULT',JSON.stringify({...info,plan:undefined}));
  fs.writeFileSync('tests/nesting_v98_result.json',JSON.stringify(results,null,2));
  await page.locator('#nestResult').screenshot({path:'tests/nesting_v98_'+name+'.png'});
  if(fs.existsSync('tests/nesting_v98_patch.py')){
   assert.equal(info.pieces,11,'Debe conservar las 11 piezas');assert.equal(info.sheets.length,1,'Debe encontrar el encaje de una chapa');assert.equal(info.area,4.5,'Superficie final');assert(info.valid.ok);assert.equal(info.heads.length,1,'No quedan chapas vacias visibles');
   assert(!logs.some(x=>/dbGet is not defined|dbPut is not defined|JS:/.test(x)),'Sin referencias indefinidas');
  }
  await context.close();
 }
}finally{await browser.close()}
