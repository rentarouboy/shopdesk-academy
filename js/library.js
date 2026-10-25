import {navigation} from '../data/schema.js';
import {featureLabel} from '../data/questions/catalog.js';
import {t,html,languages,getLanguage} from './i18n.js';
import {icon} from '../simulator/ui.js';

// Parent areas follow the verified v5.0.0 navigation, not a second curriculum.
const parents={products:'inventory',categories:'inventory',inventory:'inventory',bills:'sales-history','supplier-payments':'suppliers',returns:'stock-adjustments','purchase-returns':'stock-adjustments',permissions:'settings',backup:'settings',import:'settings'};
export const categoryId=item=>parents[item.feature]??item.feature;
export function belongsToCategory(item,id){
 return categoryId(item)===id||(id==='capital'&&item.id==='lesson-expenses')||(id==='updates'&&item.id==='lesson-help-updates')||(id==='suppliers'&&item.id==='lesson-receiving');
}
export function matchingItems(items,query='',level='all'){
 const term=query.trim().toLocaleLowerCase(getLanguage());
 return items.filter(item=>(level==='all'||item.difficulty===level)&&[item.title,t(item.title),t(item.description),featureLabel(item.feature),t(featureLabel(item.feature)),...navigation.filter(n=>belongsToCategory(item,n.id)).flatMap(n=>[n.label,t(n.label)]),...(item.keywords??[]),...(item.aliases??[])].join(' ').toLocaleLowerCase(getLanguage()).includes(term));
}
export const groupedItems=items=>navigation.map(category=>({...category,items:items.filter(item=>belongsToCategory(item,category.id))})).filter(category=>category.items.length);
const text=(key,values)=>html(t(key,values));
const countKey=(count,isLessons)=>count===1?(isLessons?'{0} lesson':'{0} question'):(isLessons?'{0} lessons':'{0} questions');
const featureIcon=category=>['help','updates'].includes(category.id)?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${category.id==='help'?'<path d="M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1Z"/><path d="M12 5v15"/>':'<path d="M20 7a8 8 0 0 0-14-2L3 8m0-5v5h5M4 17a8 8 0 0 0 14 2l3-3m0 5v-5h-5"/>'}</svg>`:icon(category.icon);
export function categoryGrid(items,learning,isLessons){
 return `<div class="feature-bubbles" aria-label="${text('Feature categories')}">${groupedItems(items).map(category=>{
  const completed=learning.count(category.items);
  return `<button class="feature-bubble" data-category="${category.id}" aria-haspopup="dialog" aria-controls="category-dialog"><span class="bubble-icon">${featureIcon(category)}</span><strong>${text(category.label)}</strong><span class="bubble-meta">${text(countKey(category.items.length,isLessons),{0:category.items.length})}<span aria-hidden="true">↗</span></span>${completed?`<small class="bubble-completed">✓ ${text('{0} completed',{0:completed})}</small>`:''}</button>`;
 }).join('')}</div>`;
}
export function categoryContents(category,learning,isLessons){
 return `<div class="category-shell"><header class="category-heading"><span class="bubble-icon">${featureIcon(category)}</span><div><span class="eyebrow">${text(isLessons?'Lessons':'Questions')}</span><h2 id="category-title">${text(category.label)}</h2><p id="category-description">${text(countKey(category.items.length,isLessons),{0:category.items.length})} · ${text('{0} completed',{0:learning.count(category.items)})}</p></div><button class="category-close" data-category-close aria-label="${text('Close category')}">×</button></header><label class="category-language"><span>${text('Language')}</span><select data-library-language aria-label="${text('Language')}">${Object.entries(languages).map(([id,label])=>`<option value="${id}" ${id===getLanguage()?'selected':''}>${html(label)}</option>`).join('')}</select></label><div class="category-exercises">${category.items.map(item=>`<button class="exercise-card ${isLessons?'lesson-card':'question-card'}" data-start="${item.id}"><span class="exercise-status" aria-hidden="true">${learning.completed(item.id)?'✓':'↗'}</span><span><small>${text(item.difficulty)} · ${item.estimatedMinutes} ${text('min')}${learning.completed(item.id)?' · '+text('Completed'):learning.current?.id===item.id?' · '+text('In progress'):''}</small><strong>${text(item.title)}</strong><span class="exercise-description">${text(item.description)}</span></span></button>`).join('')}</div><footer class="category-footer"><button data-category-close>← ${text('Back to features')}</button></footer></div>`;
}
