from pathlib import Path
p=Path('modulos/nesting_chapas.html')
s=p.read_text()
if 'LDH_NESTING_V98_BUSY_GUARD' in s: raise SystemExit(0)
assert 'LDH_NESTING_V98_FINAL_COMPARE_20261116' in s
style='''<style id="LDH_NESTING_V98_BUSY_GUARD">
body.ldh-nesting-comparing #exportActions{display:none!important}
body.ldh-nesting-comparing #manualEditor{pointer-events:none;opacity:.65}
</style>'''
s=s.replace('</head>',style+'</head>',1)
a="const btn=el('runNest');window.__chapasComparing=true;"
b=a+"document.body.classList.add('ldh-nesting-comparing');"
assert s.count(a)==1;s=s.replace(a,b)
a='finally{window.__chapasComparing=false;for(const [element,value] of disabled)element.disabled=value;btn.disabled=false;'
b="finally{window.__chapasComparing=false;document.body.classList.remove('ldh-nesting-comparing');for(const [element,value] of disabled)element.disabled=value;el('editLayout').disabled=!nestCurrent;btn.disabled=false;"
assert s.count(a)==1;s=s.replace(a,b)
p.write_text(s)
print('Busy-guard applied')
