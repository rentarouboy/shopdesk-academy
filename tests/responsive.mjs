import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {questions} from '../data/questions/catalog.js';
import {lessons} from '../data/lessons/catalog.js';
import {navigation} from '../data/schema.js';
const require=createRequire(import.meta.url);
let playwright;try{playwright=require('playwright');}catch{playwright=require('C:/Users/vels0/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');}
const browser=await playwright.chromium.launch({executablePath:process.env.CHROME_PATH??'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
page.setDefaultTimeout(12000);
const base=process.env.BASE_URL??'http://127.0.0.1:4188/shopdesk-academy/';
const errors=[],passed=[];page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>{if(!r.url().includes('fonts.'))errors.push(r.failure()?.errorText+' '+r.url());});
const pass=name=>{passed.push(name);console.log('PASS '+name);};
const sim=page.locator('#simulator');
async function noOverflow(label){assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,label+' page fits');assert.equal(await sim.evaluate(n=>n.scrollWidth<=n.clientWidth+1),true,label+' simulator fits');assert.equal(await page.locator('.sim-content').evaluate(n=>n.scrollWidth<=n.clientWidth+1),true,label+' content fits');}
async function drawer(open=true){const button=page.locator('[data-action="shell:toggle"]');if(await page.locator('.sim-sidebar').isVisible()!==open)await button.click();}
async function nav(screen,width){if(width<=850)await drawer();await page.locator('.sim-nav [data-action="nav:'+screen+'"]').click();}
async function dialogFits(label){const box=await page.locator('.sd-dialog').boundingBox(),size=page.viewportSize();assert.ok(box&&box.x>=0&&box.y>=0&&box.x+box.width<=size.width+1&&box.y+box.height<=size.height+1,label+' dialog bounds '+JSON.stringify(box));await noOverflow(label);assert.equal(await page.locator('.sim-main').getAttribute('inert'),'');}
async function guidedStep(step){
 const target=page.locator('.tour-target').filter({visible:true}).first();await target.waitFor();assert.equal(await target.getAttribute('data-target'),step.target);
 const visible=await target.evaluate(n=>{const r=n.getBoundingClientRect();return r.right>0&&r.left<innerWidth&&r.bottom>64&&r.top<innerHeight;});assert.ok(visible,'Visible guided target '+step.target);
 if(await page.locator('.sd-dialog').count())await dialogFits(step.target);
 if(step.action.startsWith('field:')){
  const key=step.action.slice(6),tag=await target.evaluate(n=>n.tagName.toLowerCase());
  let value=String(step.validation?.value??({name:'Aarav Test Customer',phone:'00000 00000',address:'Demo Street',email:'practice@example.test',supplier:'FreshMart Wholesale',mapping:'correct','order-search':'freshmart',amount:'200',paid:'200',price:'80',cost:'40',stock:'5',minStock:'5',quantity:'1',date:'2026-10-20',minutes:'30',rate:'18',owner:'Practice Owner'}[key]??(key.startsWith('sold:')?'1':key==='discount'?'10':key==='transparency'?'25':key.startsWith('received:')?'5':key.startsWith('quantity:')?'12':'Practice value')));
  if(tag==='select'){const options=await target.locator('option').evaluateAll(ns=>ns.filter(n=>n.value).map(n=>n.value));if(!options.includes(value))value=options[0];if(!step.validation?.value&&value===await target.inputValue())value=options.find(x=>x!==value)??value;await target.selectOption(value);}else{await target.fill(value);await target.press('Tab');}
 }else await target.click();
}
try{
 for(const width of [1440,1280,1024,768,430,390,360]){
  await page.setViewportSize({width,height:width<=850?844:1000});await page.goto(base);await page.locator('#loading').waitFor({state:'hidden'});await noOverflow(width+' home');
  if(width<=850){assert.equal(await page.locator('.sim-sidebar').isVisible(),false);await page.locator('#academy-menu').click();assert.equal(await page.locator('#academy-menu').getAttribute('aria-expanded'),'true');await page.keyboard.press('Escape');assert.equal(await page.locator('#academy-menu').getAttribute('aria-expanded'),'false');assert.equal(await page.locator('#academy-menu').evaluate(n=>n===document.activeElement),true);await page.locator('#academy-menu').click();await page.locator('#top-nav a[href="#explore"]').click();assert.equal(await page.locator('#academy-menu').getAttribute('aria-expanded'),'false');await drawer();await page.keyboard.press('Escape');assert.equal(await page.locator('.sim-sidebar').isVisible(),false);assert.equal(await page.locator('[data-action="shell:toggle"]').evaluate(n=>n===document.activeElement),true);}else{assert.equal(Math.round((await page.locator('.sim-sidebar').boundingBox()).width),272);await page.locator('[data-action="shell:toggle"]').click();assert.equal(Math.round((await page.locator('.sim-sidebar').boundingBox()).width),72);await page.locator('[data-action="shell:toggle"]').click();}
  if(width<=850){const menu=await page.locator('[data-action=\"shell:toggle\"]').boundingBox(),search=await page.locator('[data-action=\"shell:search\"]').boundingBox();assert.ok(Math.abs(menu.y-search.y)<1,'Compact toolbar keeps navigation and search together');}
  pass(width+' navigation, focus and home');
  await page.screenshot({path:'.qa/responsive-'+width+'-home.png',fullPage:true});
  await page.goto(base+'#explore');await page.locator('#practice-context').selectOption('retail-service');
  for(const screen of navigation.filter(n=>n.id!=='gaming').map(n=>n.id)){
   await nav(screen,width);await noOverflow(width+' '+screen);assert.ok(await page.locator('.sd-page-header h2').innerText());
   const wrap=page.locator('.table-wrap').first();if(await wrap.count()){await wrap.evaluate(n=>n.scrollLeft=n.scrollWidth);await noOverflow(width+' '+screen+' scrolled table');}
   pass(width+' '+screen);
  }
  for(const [screen,action] of [['inventory','open:products'],['inventory','open:categories'],['stock-adjustments','open:stock'],['customers','open:customers'],['credit-customers','repayment:cus-ravi'],['suppliers','open:suppliers'],['expenses','open:expenses'],['capital','open:capital'],['notes','open:notes'],['services','open:services'],['orders','open:orders'],['shop-orders','order:new'],['settings','backup:export'],['settings','backup:restore'],['settings','import:open']]){
   await nav(screen,width);let trigger=page.locator('[data-action="'+action+'"]').first();if(!await trigger.count()&&action.startsWith('repayment:'))trigger=page.locator('[data-action^="repayment:"]').first();await trigger.click();await dialogFits(width+' '+action);
   await page.keyboard.press('Tab');assert.equal(await page.locator('.sd-dialog').evaluate(n=>n.contains(document.activeElement)),true);
   await page.keyboard.press('Escape');assert.equal(await page.locator('.sd-dialog').count(),0);assert.equal(await trigger.evaluate(n=>n===document.activeElement),true);pass(width+' form '+action);
  }
  await nav('sales-history',width);await page.locator('[data-action^="sale:detail:"]').first().click();await dialogFits(width+' receipt');await page.keyboard.press('Escape');
  await nav('inventory',width);await page.locator('[data-action^="barcode:"]').first().click();await dialogFits(width+' barcode');await page.keyboard.press('Escape');
  await page.locator('#practice-context').selectOption('pc-gaming');await nav('gaming',width);await noOverflow(width+' gaming');await page.locator('[data-action="open:gaming"]').click();await dialogFits(width+' gaming form');await page.keyboard.press('Escape');
  await page.goto(base+'#questions');await page.locator('#question-search').pressSequentially('Ravi');assert.equal(await page.locator('#question-search').inputValue(),'Ravi');assert.ok(await page.locator('[data-start="customer-create"]').count());await page.locator('#question-search').fill('');
  if(width<=850)await page.locator('#feature-filter summary').click();await page.locator('[data-filter="customers"]').click();assert.ok(await page.locator('[data-start="customer-create"]').count());await noOverflow(width+' filtered questions');
  await page.locator('[data-start="customer-create"]').click();for(const step of questions.find(q=>q.id==='customer-create').steps)await guidedStep(step);await page.locator('.success-card').waitFor();pass(width+' customer workflow and reset');
  await page.goto(base+'#lessons');await noOverflow(width+' lessons');assert.equal(await page.locator('.lesson-card').count(),22);
  await page.locator('[data-start="lesson-products"]').click();for(const step of lessons.find(q=>q.id==='lesson-products').steps)await guidedStep(step);await page.locator('.success-card').waitFor();pass(width+' product lesson and reset');
 }
 await page.setViewportSize({width:360,height:844});
 for(const lang of ['en','ta','ml','te','hi']){
  await page.goto(base+'#questions');await page.locator('#language').selectOption(lang);
  for(const id of ['customer-create','order-create','import-products','settings-shop','receipt-view']){
   const item=questions.find(q=>q.id===id);await page.locator('[data-start="'+id+'"]').click();for(const step of item.steps)await guidedStep(step);await page.locator('.success-card').waitFor();pass('360 '+lang+' '+id);await page.goto(base+'#questions');
  }
 }
 await page.locator('#language').selectOption('en');
 for(const item of [...questions,...lessons]){
  await page.goto(base+'#'+(item.id.startsWith('lesson-')?'lessons':'questions'));await page.locator('[data-start="'+item.id+'"]').click();
  for(const step of item.steps)await guidedStep(step);await page.locator('.success-card').waitFor();assert.equal(await page.locator('.tour-target').count(),0);await noOverflow('360 '+item.id);pass('360 workflow '+item.id);
 }
 await page.goto(base+'#questions');await page.locator('[data-start="customer-create"]').click();await page.locator('.sim-nav [data-action="nav:inventory"]').click();assert.ok(await page.locator('.guide-error').innerText());assert.equal(await page.locator('.tour-target').getAttribute('data-target'),'nav:customers');await page.keyboard.press('Escape');assert.equal(await page.locator('.sim-sidebar').isVisible(),false);await drawer();await page.locator('.tour-target').click();await page.locator('.tour-target').click();await page.locator('.tour-target').fill('Keyboard customer');
 await page.setViewportSize({width:360,height:480});await dialogFits('keyboard visible');const target=await page.locator('.tour-target').boundingBox();assert.ok(target.y>=0&&target.y+target.height<=480,'Field remains above keyboard');await page.locator('.sd-dialog').screenshot({path:'.qa/mobile-keyboard.png'});await page.setViewportSize({width:360,height:844});await page.locator('[data-guide="exit"]').click();pass('Wrong action, drawer reopening and shortened keyboard viewport');
 await page.goto(base+'#explore');await page.locator('#expand-simulator').click();await noOverflow('expanded mobile');await nav('customers',360);await page.locator('[data-action="open:customers"]').click();await dialogFits('expanded mobile');await page.keyboard.press('Escape');await page.keyboard.press('Escape');assert.equal(await page.locator('#expand-simulator').getAttribute('aria-pressed'),'false');pass('Expanded mobile workspace and Escape');
 assert.deepEqual(errors,[]);await fs.writeFile('.qa/responsive-results.json',JSON.stringify({base,passed,errors,verifiedAt:new Date().toISOString()},null,2));console.log('PASS '+passed.length+' responsive checks');
}catch(error){await page.screenshot({path:'.qa/responsive-failure.png',fullPage:true});console.error('FAILED after '+passed.at(-1));throw error;}finally{await browser.close();}
