import assert from 'node:assert/strict';
import {questions} from '../data/questions/catalog.js';
import {lessons} from '../data/lessons/catalog.js';
import {categoryId} from '../js/library.js';
export const ready=page=>page.waitForFunction(()=>document.querySelector('#simulator')?.dataset.transitioning!=='true');
export async function exerciseButton(page,id){
 const item=[...questions,...lessons].find(item=>item.id===id);assert.ok(item,'Existing exercise '+id);
 if(!await page.locator('#category-dialog[open]').count())await page.locator('#library [data-category="'+categoryId(item)+'"]').click();
 return page.locator('#category-dialog [data-start="'+id+'"]');
}
export async function startExercise(page,id){await (await exerciseButton(page,id)).click();await page.locator('.guide-card').waitFor();}
export async function runStep(page,step,{keyboard=false}={}){
 await ready(page);
 const target=page.locator('.tour-target').filter({visible:true}).first();await target.waitFor();assert.equal(await target.getAttribute('data-target'),step.target,'Stable target matches '+step.id);
 if(step.action.startsWith('read:')){if(keyboard){await target.focus();await page.keyboard.press('Enter');}else await page.locator('[data-reading-continue]').click();}
 else if(step.action.startsWith('field:')){
  const key=step.action.slice(6),tag=await target.evaluate(n=>n.tagName.toLowerCase()),type=await target.getAttribute('type');
  let value=String(step.validation?.value??({name:'Aarav Test Customer',phone:'00000 00000',address:'Demo Street',email:'practice@example.test',supplier:'FreshMart Wholesale',mapping:'correct','order-search':'freshmart',amount:'200',paid:'200',price:'80',cost:'40',stock:'5',minStock:'5',quantity:'1',date:'2026-10-20',minutes:'30',rate:'18',owner:'Practice Owner'}[key]??(key.startsWith('sold:')?'1':key==='discount'?'10':key==='transparency'?'25':key.startsWith('received:')?'5':key.startsWith('quantity:')?'12':'Practice value')));
  if(step.validation?.type==='range')value=String(Math.min(step.validation.max,Math.max(step.validation.min,Number(value)||step.validation.min)));
  if(tag==='select'){const options=await target.locator('option').evaluateAll(ns=>ns.filter(n=>n.value).map(n=>n.value));if(!options.includes(value))value=options[0];await target.selectOption(value);}
  else if(type==='checkbox')await page.locator('[data-target="'+step.target+'"]').setChecked(value==='true');
  else{await target.fill(value);if(await page.locator('.guide-card').getAttribute('data-step')===step.id)await target.press('Enter');}
 }else await target.click();
 await page.waitForFunction(id=>document.querySelector('.guide-card')?.dataset.step!==id,step.id);
 assert.equal(await page.locator('[data-guide=next]').count(),0,'No extra confirmation');
}
