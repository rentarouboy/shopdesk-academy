import {rows,extraRows} from '../data/i18n/v401-messages.js';
import {spawnSync} from 'node:child_process';
import fs from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';import assert from 'node:assert/strict';
import {questions} from '../data/questions/catalog.js';import {lessons} from '../data/lessons/catalog.js';import {features,fields,settingsTabs} from '../data/schema.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dicts=await Promise.all(['en','ta','ml','te','hi'].map(lang=>fs.readFile(path.join(root,'data/i18n',lang+'.json'),'utf8').then(JSON.parse)));
const all=[...questions,...lessons];assert.equal(new Set(all.map(x=>x.id)).size,all.length);
const keys=new Set([...features.map(f=>f.label),...settingsTabs,...Object.values(fields).flat().map(f=>f[1]),...(rows+'\n'+extraRows).trim().split('\n').filter(Boolean).map(r=>r.split('|')[0]),...all.flatMap(q=>[q.title,q.description,q.completion,q.difficulty,...q.steps.flatMap(s=>[s.instruction,s.explanation].filter(Boolean))])]);
for(const key of keys)for(const dict of dicts)assert.ok(dict[key]?.trim(),'Missing translation: '+key);
for(const dict of dicts)assert.deepEqual(Object.keys(dict).sort(),Object.keys(dicts[0]).sort(),'Language dictionary keys must match');
for(const item of all){assert.ok(item.steps.length>1);assert.equal(item.version,'4.0.1');assert.equal(new Set(item.steps.map(s=>s.id)).size,item.steps.length);for(const step of item.steps){assert.ok(step.action&&step.target&&step.instruction&&step.page);assert.equal(step.targetId,step.target);assert.equal(step.expectedAction,step.action);if(step.action.startsWith('field:'))assert.ok(step.validation);}}
for(const f of features)assert.ok(questions.some(q=>q.feature===f.id),'Missing feature: '+f.id);
const html=await fs.readFile(path.join(root,'index.html'),'utf8');assert.ok(!/(?:src|href)="\/(?!\/)/.test(html),'Assets must work under a GitHub Pages project path');
for(const relative of ['js/app.js','css/academy.css','css/learning.css','js/progress.js','simulator/v401-model.js','simulator/v401-ui.js','assets/shopdesk-cat.png'])await fs.access(path.join(root,relative));
console.log(`PASS: ${questions.length} questions, ${lessons.length} lessons, ${features.length} feature areas, ${Object.keys(dicts[0]).length} complete messages in five languages. Static site ready.`);

for(const dir of ['js','simulator','data']){const files=await fs.readdir(path.join(root,dir),{recursive:true});for(const file of files.filter(f=>f.endsWith('.js'))){const result=spawnSync(process.execPath,['--check',path.join(root,dir,file)],{encoding:'utf8'});assert.equal(result.status,0,result.stderr);}}
console.log('PASS: native JavaScript syntax checks.');
