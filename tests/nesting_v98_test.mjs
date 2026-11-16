import fs from 'node:fs';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
const backup=JSON.parse(fs.readFileSync('modulos/nesting_chapas_olaso_seed.json','utf8'));
const olaso=backup.jobs[1].data.parts.filter(p=>p.file.includes('falsa escuadra'));
const rect=(id,w,h,qty=1)=>({id,file:'GENERIC.dxf',name:id,design:'REGRESSION',layer:'0',qty,poly:[[0,0],[w,0],[w,h],[0,h]]});
const cases=[
 {name:'mixed',parts:olaso,small:true,large:true,area:4.5,sheets:1},
 {name:'large',parts:olaso,large:true,area:4.5,sheets:1},
 {name:'mixed-retal-cold',parts:olaso,small:true,large:true,retal:true,area:4.5,sheets:1,throttle:4},
 {name:'generic-small-better',parts:[rect('rectangle',800,300,3)],small:true,large:true,area:2,sheets:1},
 {name:'generic-two-required',parts:[rect('large-rectangle',2100,1000,2)],large:true,area:9,sheets:2},
 {name:'limited-retal',parts:[rect('retal-piece',450,250,2)],retal:{w:500,h:300,qty:1},impossible:true}
];
const results=[];
const browser=await chromium.launch({headless:true});
async function readDatabase(page,store){return page.evaluate(store=>new Promise((resolve,reject)=>{const req=indexedDB.open('ldh_chapas_biblioteca_v85');req.onerror=()=>reject(req.error);req.onsuccess=()=>{const db=req.result,t=db.transaction(store,'readonly'),r=t.objectStore(store).getAll();r.onerror=()=>reject(r.error);r.onsuccess=()=>{resolve(r.result);db.close()}}}),store)}
async function measure(page){return page.evaluate(()=>{const plan=printSheetData(),doc=new DOMParser().parseFromString(buildPrintHtml(),'text/html');return {build:window.__chapasBuild,status:el('engineStatus').textContent,stats:el('nestStats').innerText,area:plan.reduce((n,s)=>n+s.w*s.h,0)/1e6,pieces:plan.reduce((n,s)=>n+s.items.length,0),sheets:plan.map(s=>({w:s.w,h:s.h,count:s.items.length})),valid:window.__chapasValidatePlan(plan),heads:[...document.querySelectorAll('#nestResult .nest-sheet')].filter(c=>getComputedStyle(c).display!=='none').map(c=>({title:c.querySelector('h3')?.textContent,chips:c.querySelector('.nest-meta')?.textContent})),printSummary:doc.querySelector('.ext-summary')?.textContent,plan,comparison:window.__chapasLastComparison}})}
function check(info,c){const n=c.parts.reduce((s,p)=>s+p.qty,0);assert.equal(info.pieces,n,c.name+' count');assert.equal(info.sheets.length,c.sheets,c.name+' sheets');assert.equal(info.area,c.area,c.name+' area');assert(info.valid,c.name+' geometry');assert.equal(info.heads.length,c.sheets,'No empty visible sheets');for(const h of info.heads)assert(h.chips.includes(info.area.toFixed(2).replace('.',',')),'Final chip area matches print');assert(info.printSummary.includes(info.area.toFixed(2).replace('.',',')));assert(info.status.includes('Calculo final verificado'));}
try{
 for(const c of cases){
  const context=await browser.newContext({viewport:{width:1480,height:1000}});
  await context.route('https://**/*',r=>r.abort());
  await context.route('**/asistente_ia_global.js*',r=>r.fulfill({body:'',contentType:'text/javascript'}));
  const page=await context.newPage(),logs=[];
  page.on('pageerror',e=>logs.push('JS: '+e.message));page.on('console',m=>{if(['warning','error'].includes(m.type()))logs.push(m.text())});page.on('dialog',d=>d.type()==='beforeunload'?d.accept():d.dismiss());
  if(c.throttle){const cdp=await context.newCDPSession(page);await cdp.send('Emulation.setCPUThrottlingRate',{rate:c.throttle})}
  await page.goto('http://127.0.0.1:8876/modulos/nesting_chapas.html');
  await page.waitForFunction(()=>el('health').textContent.includes('disponible en este navegador')&&el('jobLibraryStats').textContent.includes('2 activos'),null,{timeout:60000});
  const originalJobs=JSON.stringify(await readDatabase(page,'jobs'));
  await page.evaluate(c=>{state.parts=structuredClone(c.parts);state.signatures.clear();render();el('process').value='shear';el('s1').checked=!!c.small;el('s2').checked=!!c.large;el('s3').checked=false;el('gap').value='1';el('seconds').add(new Option('test','5'));el('seconds').value='5';if(c.retal){el('scrapW').value=String(c.retal.w||850);el('scrapH').value=String(c.retal.h||620);el('scrapQty').value=String(c.retal.qty||1);addScrap()}},c);
  await page.waitForTimeout(30);const start=Date.now();await page.evaluate(()=>runNest(false));
  if(c.impossible){const status=await page.locator('#engineStatus').innerText();assert(status.includes('No se pudo validar'));assert(await page.locator('#exportActions').evaluate(e=>e.hidden));results.push({name:c.name,blocked:true,status});}
  else{
   const info=await measure(page);info.name=c.name;info.elapsedMs=Date.now()-start;check(info,c);results.push(info);
   await page.locator('#nestResult').screenshot({path:'tests/nesting_v98_'+c.name+'.png'});
   if(c.name==='mixed'){
    const checks=await page.evaluate(()=>{const good=printSheetData();const missing=structuredClone(good);missing[0].items.pop();const changed=structuredClone(good);changed[0].items[0].poly[0][0]+=10;const res={missingRejected:!__chapasValidatePlan(missing),geometryRejected:!__chapasValidatePlan(changed)};el('s2').checked=false;res.disabledFormatRejected=!__chapasValidatePlan(good);el('s2').checked=true;el('gap').value='500';res.gapRejected=!__chapasValidatePlan(good);el('gap').value='1';return res;});
    assert(Object.values(checks).every(Boolean));results.push({name:'invalid-plan-guards',...checks});
    const before=(await readDatabase(page,'meta')).filter(x=>x.key.startsWith('nest-best-v98-'));assert(before.length>0,'Persistent memo exists');
    await page.evaluate(()=>{el('scrapW').value='850';el('scrapH').value='620';el('scrapQty').value='1';addScrap()});await page.evaluate(()=>runNest(false));const repeat=await measure(page);check(repeat,c);results.push({...repeat,name:'same-session-add-retal'});
    await page.reload();await page.waitForFunction(()=>window.__chapasPlanMemo&&el('health').textContent.includes('disponible en este navegador'),null,{timeout:60000});const after=(await readDatabase(page,'meta')).filter(x=>x.key.startsWith('nest-best-v98-'));assert.equal(after.length,before.length);assert.deepEqual(after[0].plan,before[0].plan);results.push({name:'memo-after-reload',records:after.length,ok:true});
   }
  }
  assert.equal(JSON.stringify(await readDatabase(page,'jobs')),originalJobs,'Existing studies untouched');
  assert(!logs.some(x=>/dbGet is not defined|dbPut is not defined|JS:/.test(x)),logs.join('\n'));
  console.log('PASS',c.name,JSON.stringify(results.at(-1), (k,v)=>k==='plan'?undefined:v));
  fs.writeFileSync('tests/nesting_v98_result.json',JSON.stringify(results,null,2));
  await context.close();
 }
 console.log('ALL_REGRESSIONS_PASSED',results.map(r=>r.name));
}finally{fs.writeFileSync('tests/nesting_v98_result.json',JSON.stringify(results,null,2));await browser.close()}
