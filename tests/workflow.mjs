import assert from 'node:assert/strict';
export async function runStep(page,step,{keyboard=false}={}){
 const target=page.locator('.tour-target').filter({visible:true}).first();await target.waitFor();assert.equal(await target.getAttribute('data-target'),step.target,'Stable target matches '+step.id);
 if(step.action.startsWith('read:')){await page.locator('[data-guide=next]').click();return;}
 if(step.action.startsWith('field:')){
  const key=step.action.slice(6),tag=await target.evaluate(n=>n.tagName.toLowerCase()),type=await target.getAttribute('type');
  let value=String(step.validation?.value??({name:'Aarav Test Customer',phone:'00000 00000',address:'Demo Street',email:'practice@example.test',supplier:'FreshMart Wholesale',mapping:'correct','order-search':'freshmart',amount:'200',paid:'200',price:'80',cost:'40',stock:'5',minStock:'5',quantity:'1',date:'2026-10-20',minutes:'30',rate:'18',owner:'Practice Owner'}[key]??(key.startsWith('sold:')?'1':key==='discount'?'10':key==='transparency'?'25':key.startsWith('received:')?'5':key.startsWith('quantity:')?'12':'Practice value')));
  if(step.validation?.type==='range')value=String(Math.min(step.validation.max,Math.max(step.validation.min,Number(value)||step.validation.min)));
  if(tag==='select'){const options=await target.locator('option').evaluateAll(ns=>ns.filter(n=>n.value).map(n=>n.value));if(!options.includes(value))value=options[0];await target.selectOption(value);}
  else if(type==='checkbox')await page.locator('[data-target="'+step.target+'"]').setChecked(value==='true');
  else{await target.fill(value);if(!await page.locator('.guide-card[data-pending=true]').count())await target.press(keyboard?'Enter':'Tab');}
 }else await target.click();
 await page.locator('.guide-card[data-pending=true]').waitFor();
 assert.equal(await page.locator('.guide-card').getAttribute('data-step'),step.id,'Action waits for confirmation');
 if(keyboard){await page.locator('[data-guide=next]').focus();await page.keyboard.press('Enter');}else await page.locator('[data-guide=next]').click();
}
