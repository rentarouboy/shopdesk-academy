import {t,html,loadTranslations,setLanguage,getLanguage} from './i18n.js';
import {questions,featureLabel} from '../data/questions/catalog.js';
import {lessons} from '../data/lessons/catalog.js';
import {features} from '../data/schema.js';
import {Guide} from './guide.js';
import {renderSimulator,button,records} from '../simulator/render.js';
import {clone,saveOrder,saveRecord,saveDailySale,applyDemoImport} from '../simulator/model.js';
const guide=new Guide(); let view='home', query='',filter='all',simMenuOpen=false,modalReturnTarget='',ready=false;
const compact=matchMedia('(max-width:850px)');
const el=id=>document.getElementById(id);
function toast(key){const node=el('toast');node.textContent=t(key);node.hidden=false;clearTimeout(toast.timer);toast.timer=setTimeout(()=>node.hidden=true,4000);}
function top(){el('current-section').textContent=t({home:'Home',explore:'Explore ShopDesk',questions:'Questions',lessons:'Lessons'}[view]);el('academy-menu').setAttribute('aria-label',t('Toggle navigation'));el('top-nav').innerHTML=[['home','Home'],['explore','Explore ShopDesk'],['questions','Questions'],['lessons','Lessons']].map(([id,label])=>`<a href="#${id}" ${id===view?'aria-current="page"':''}>${html(t(label))}</a>`).join('');document.querySelectorAll('[data-i18n]').forEach(node=>node.textContent=t(node.dataset.i18n));el('language').setAttribute('aria-label',t('Language'));el('top-nav').setAttribute('aria-label',t('Academy navigation'));el('simulator-section').setAttribute('aria-label',t('ShopDesk simulator'));el('practice-context').setAttribute('aria-label',t('Practice business type'));for(const option of el('practice-context').options)option.textContent=option.value==='retail'?'IKYZEN · '+t('Grocery Store'):t(option.value==='pc-gaming'?'PC Gaming':'Retail + Service');}
function home(){el('home').innerHTML=`<div class="hero"><div><span class="eyebrow"><span class="green-dot"></span> ${html(t('LEARN AT YOUR OWN PACE'))}</span><h1>${html(t('Welcome to'))}<br>ShopDesk <em>Academy</em></h1><p class="hero-line">${html(t('Learn ShopDesk by using it.'))}</p><p class="hero-description">${html(t('Explore the interface, find an answer, and practice real workflows in a safe demo workspace.'))}</p><div class="hero-actions"><a class="button primary" href="#explore">${html(t('Explore ShopDesk'))} <span>↗</span></a><a class="button" href="#questions">${html(t('Find an Answer'))}</a><a class="text-link" href="#lessons">${html(t('Start a Lesson'))} →</a></div><div class="hero-meta"><span>✓ ${html(t('No setup needed'))}</span><span>✓ ${html(t('Temporary practice data'))}</span><span>✓ ${html(t('5 languages'))}</span></div></div><div class="hero-cat"><img src="./assets/shopdesk-cat.png" alt="${html(t('CAT preparing a practice workspace'))}" width="190" height="190"><div><strong>${html(t('Your practice buddy'))}</strong><p>${html(t('Small steps. Real confidence.'))}</p></div></div></div><div class="safe-banner"><span class="safe-icon">◇</span><div><strong>${html(t('Practice safely'))}</strong><p>${html(t('This is a simulated training environment. Your practice never changes real ShopDesk records.'))}</p></div><span class="safe-chip">${html(t('Demo data only'))}</span></div>`;}
function library(){
 const isLessons=view==='lessons';el('library').innerHTML=`<div class="library-heading"><span class="eyebrow">${html(t(isLessons?'START FROM THE BEGINNING':'GET UNSTUCK'))}</span><h1>${html(t(isLessons?'Learn ShopDesk, one task at a time.':'What would you like to do?'))}</h1><p>${html(t(isLessons?'Follow a guided path through your everyday shop workflows.':'Choose a question and practice the answer in the simulator below.'))}</p></div><div class="library-toolbar"><label class="question-search"><span aria-hidden="true">⌕</span><input id="question-search" type="search" value="${html(query)}" placeholder="${html(t('Search questions, features or keywords…'))}" aria-label="${html(t('Search questions'))}"></label><span id="result-count" role="status"></span></div><div class="catalog-layout"><details id="feature-filter" class="catalog-filters" ${compact.matches?'':'open'}><summary>${html(t('All features'))}</summary><aside id="categories" class="category-list"></aside></details><div id="catalog" class="catalog"></div></div>`;
 catalog();el('question-search').addEventListener('input',e=>{query=e.target.value;catalog();});
}
function catalog(){
 const isLessons=view==='lessons',items=isLessons?lessons:questions;
 const term=query.trim().toLocaleLowerCase(getLanguage());const filtered=items.filter(q=>(filter==='all'||q.feature===filter)&&[q.title,t(q.title),t(featureLabel(q.feature)),q.feature,t(q.description),...(q.keywords??[]),...(q.aliases??[])].join(' ').toLocaleLowerCase(getLanguage()).includes(term));
 el('result-count').textContent=t('{0} results',{0:filtered.length});
 el('feature-filter').querySelector('summary').textContent=t(filter==='all'?'All features':featureLabel(filter));
 el('categories').innerHTML=`<button data-filter="all" class="${filter==='all'?'selected':''}">${html(t('All features'))}<span>${items.length}</span></button>${features.filter(f=>items.some(q=>q.feature===f.id)).map(f=>`<button data-filter="${f.id}" class="${filter===f.id?'selected':''}"><span class="feature-icon">${f.icon}</span>${html(t(f.label))}<span>${items.filter(q=>q.feature===f.id).length}</span></button>`).join('')}`;
 if(!filtered.length){el('catalog').innerHTML=`<div class="empty-card"><h3>${html(t('No matching questions'))}</h3><p>${html(t('Try a feature name or a shorter search.'))}</p><button data-clear-search>${html(t('Clear search'))}</button></div>`;return;}
 if(isLessons){el('catalog').innerHTML=filtered.map(q=>`<button class="lesson-card" data-start="${q.id}"><span class="lesson-number">${String(lessons.indexOf(q)+1).padStart(2,'0')}</span><div><small>${html(t('Lesson'))} ${lessons.indexOf(q)+1} · ${q.steps.length} ${html(t('actions'))}</small><h3>${html(t(q.title))}</h3><p>${html(t(q.description))}</p></div><span>↗</span></button>`).join('');return;}
 el('catalog').innerHTML=features.filter(f=>filtered.some(q=>q.feature===f.id)).map(f=>`<details class="question-group" open><summary><span class="feature-icon">${f.icon}</span><strong>${html(t(f.label))}</strong><span>${filtered.filter(q=>q.feature===f.id).length}</span></summary><div>${filtered.filter(q=>q.feature===f.id).map(q=>`<button class="question-card" data-start="${q.id}"><div><strong>${html(t(q.title))}</strong><small>${html(t('Beginner'))} · ${q.steps.length} ${html(t('actions'))}${q.business?' · '+html(t(q.business==='pc-gaming'?'PC Gaming workspace only':'Retail + Service')):''}</small></div><span class="question-arrow">↗</span></button>`).join('')}</div></details>`).join('');
}
function guideView(){
 const node=el('guide');
 if(guide.active){const step=guide.step,label=step.rawLabel?step.label:t(featureLabel(step.label));
  node.innerHTML=`<div class="guide-card"><div class="guide-heading"><span class="guide-dot"></span><span>${html(t('Guided practice'))}</span><button data-guide="exit" aria-label="${html(t('Exit lesson'))}">×</button></div><h3>${html(t(guide.active.title))}</h3><p class="step-count">${html(t('Step {0} of {1}',{0:guide.index+1,1:guide.active.steps.length}))}</p><progress value="${guide.index}" max="${guide.active.steps.length}" aria-label="${html(t('Lesson progress'))}"></progress><div class="instruction"><span class="instruction-number">${guide.index+1}</span><h4>${html(t(step.instruction,{0:label.replaceAll('&amp;','&')}))}</h4></div>${guide.message?`<p class="guide-error" role="alert">${html(t(guide.message.key))}</p>`:''}${guide.hint?`<div class="hint"><strong>${html(t('Hint'))}</strong><p>${html(t('Use the pulsing control. Enter a valid value and leave the field to continue.'))}</p>${step.validation?.type==='equals'?`<p>${html(t('Choose'))}: ${html(['FreshMart Wholesale','South India Foods Supply'].includes(step.validation.value)?step.validation.value:t(step.validation.value))}</p>`:''}${step.validation?.type==='range'?`<p>${step.validation.min} – ${step.validation.max}</p>`:''}</div>`:''}<div class="guide-controls"><button data-guide="previous" ${guide.index?'':'disabled'}>← ${html(t('Previous'))}</button><button data-guide="hint">${html(t('Hint'))}</button><button data-guide="restart">↺ ${html(t('Restart'))}</button></div><p class="guide-footnote">${html(t('Your actions move the lesson forward.'))}</p></div>`;
 }else if(guide.done){node.innerHTML=`<div class="guide-card success-card"><div class="celebrate" aria-hidden="true">✦ <span>✓</span> ✦</div><span class="eyebrow">${html(t('Congratulations!'))}</span><h3>${html(t(guide.done.completion))}</h3><p>${html(t('Temporary records have been cleared. Your workspace is clean again.'))}</p><button class="primary" data-guide="restart">${html(t('Practice again'))}</button><a class="button" href="#lessons">${html(t('Continue learning'))}</a></div>`;}
 else node.innerHTML=`<div class="guide-card explore-card"><img src="./assets/shopdesk-cat.png" alt="" width="58" height="58"><span class="eyebrow">${html(t('LOOK AROUND'))}</span><h3>${html(t('Meet your ShopDesk workspace.'))}</h3><p>${html(t('Open screens, inspect forms and get familiar with the layout. Data entry is locked in Explore Mode.'))}</p><a href="#questions" class="button primary">${html(t('Find an Answer'))} ↗</a><a href="#lessons" class="button">${html(t('Start a Lesson'))}</a><div class="explore-tip"><strong>${html(t('Ready to try it?'))}</strong><p>${html(t('Choose a question to unlock a guided task.'))}</p></div></div>`;
}
function academyMenu(open,returnFocus=false){
 el('academy-menu').setAttribute('aria-expanded',String(open));
 el('top-nav').classList.toggle('menu-open',open);
 el('top-nav').inert=compact.matches&&!open;
 if(returnFocus)el('academy-menu').focus({preventScroll:true});
}
function syncOverlayBounds(){
 const sim=el('simulator'),rect=sim.getBoundingClientRect(),viewport=window.visualViewport;
 const top=viewport?.offsetTop??0,bottom=top+(viewport?.height??innerHeight),left=viewport?.offsetLeft??0,right=left+(viewport?.width??innerWidth);
 const header=document.querySelector('.academy-header').getBoundingClientRect();
 document.documentElement.style.setProperty('--academy-header-height',header.height+'px');
 const guideRect=el('guide').getBoundingClientRect();
 const guideBottom=compact.matches&&guide.isGuided&&guideRect.top<bottom?guideRect.bottom:top;
 const y=Math.max(top+8,rect.top,compact.matches&&!el('simulator-section').classList.contains('simulator-expanded')?header.bottom:top,guideBottom);
 const x=Math.max(left,rect.left),width=Math.max(0,Math.min(right,rect.right)-x),height=Math.max(0,Math.min(bottom-8,rect.bottom)-y);
 for(const [key,value] of Object.entries({left:x,top:y,width,height}))sim.style.setProperty('--overlay-'+key,value+'px');
 sim.dataset.wide=String(sim.clientWidth>=1200);
}
function revealTarget(target){
 // Scroll each owning region independently so wide tables never scroll the page.
 for(let parent=target.parentElement;parent&&parent!==el('simulator');parent=parent.parentElement){
  if(!parent.matches('.table-wrap,.sd-dialog,.sim-content,.sim-nav,.product-picks'))continue;
  const r=target.getBoundingClientRect(),box=parent.getBoundingClientRect(),pad=10;
  if(r.left<box.left+pad)parent.scrollLeft-=box.left+pad-r.left;
  else if(r.right>box.right-pad)parent.scrollLeft+=r.right-box.right+pad;
  if(r.top<box.top+pad)parent.scrollTop-=box.top+pad-r.top;
  else if(r.bottom>box.bottom-pad)parent.scrollTop+=r.bottom-box.bottom+pad;
 }
 if(!target.closest('.sd-dialog,.sim-sidebar[role=dialog]')){
  const rect=target.getBoundingClientRect(),header=document.querySelector('.academy-header').getBoundingClientRect();
  const reserve=compact.matches?header.height+(guide.isGuided?el('guide').offsetHeight:0)+16:16;
  if(rect.top<reserve)window.scrollBy({top:rect.top-reserve,behavior:'instant'});
  else if(rect.bottom>innerHeight-16)window.scrollBy({top:rect.bottom-innerHeight+16,behavior:'instant'});
 }
 syncOverlayBounds();
 target.focus({preventScroll:true});
}
function renderPractice(scroll=false){
 const sim=el('simulator'),previousScroll=sim.querySelector('.sim-content')?.scrollTop??0,navScroll=sim.querySelector('.sim-nav')?.scrollTop??0;
 if(scroll&&guide.step&&compact.matches)simMenuOpen=guide.step.target.startsWith('nav:');
 if(!compact.matches||guide.state.modal)simMenuOpen=false;
 sim.dataset.theme=guide.state.settings.theme;sim.style.setProperty('--sd-opacity',1-Math.min(70,Math.max(0,Number(guide.state.settingsDraft?.transparency??guide.state.settings.transparency)))/100);sim.classList.toggle('collapsed',!compact.matches&&!!guide.state.collapsed);sim.classList.toggle('has-background',!!guide.state.settings.background);el('practice-context').disabled=guide.isGuided;el('practice-context').value=guide.state.business;sim.innerHTML=renderSimulator(guide,{compact:compact.matches,menuOpen:simMenuOpen});sim.querySelectorAll('[data-search]').forEach(n=>n.readOnly=guide.isGuided&&guide.step.action!=='field:'+n.dataset.key);guideView();el('mode').textContent=t(guide.isGuided?'Guided Mode':'Explore Mode · View-only');sim.classList.toggle('guided',guide.isGuided);el('simulator-section').classList.toggle('is-guided',guide.isGuided);
 sim.querySelectorAll('[data-filter-category],[data-sale-category],[data-settled],[data-history-period],[data-report-date]').forEach(node=>node.disabled=guide.isGuided);
 sim.querySelector('.sim-content').scrollTop=previousScroll;sim.querySelector('.sim-nav').scrollTop=navScroll;
 syncOverlayBounds();
 el('expand-simulator').textContent=t(el('simulator-section').classList.contains('simulator-expanded')?'Close':'Expand workspace');
 if(!guide.isGuided&&guide.state.modal&&scroll)sim.querySelector('.sd-dialog button')?.focus({preventScroll:true});
 if(guide.step){const target=Array.from(sim.querySelectorAll('[data-target]')).find(n=>n.dataset.target===guide.step.target);if(target){target.classList.add('tour-target');if(guide.step.action.startsWith('inspect:')){target.dataset.action=guide.step.action;target.tabIndex=0;target.setAttribute('role','button');}target.setAttribute('aria-describedby','guide');if(scroll)revealTarget(target);updateSpotlight();}}
}
function updateSpotlight(){
 const sim=el('simulator'),target=sim.querySelector('.tour-target');let shade=sim.querySelector('.tour-shade');
 if(!target||!target.getClientRects().length){shade?.remove();return;}
 if(!shade){shade=document.createElement('div');shade.className='tour-shade';shade.setAttribute('aria-hidden','true');sim.append(shade);}
 const base=sim.getBoundingClientRect(),rect=target.getBoundingClientRect(),x=Math.max(0,rect.left-base.left-6),y=Math.max(0,rect.top-base.top-6),right=Math.min(base.width,rect.right-base.left+6),bottom=Math.min(base.height,rect.bottom-base.top+6);
 shade.style.clipPath=`polygon(evenodd,0 0,100% 0,100% 100%,0 100%,0 0,${x}px ${y}px,${x}px ${bottom}px,${right}px ${bottom}px,${right}px ${y}px,${x}px ${y}px)`;
}
function simulatorMenu(open,returnFocus=false){
 simMenuOpen=open;renderPractice();
 if(open){const target=el('simulator').querySelector('.sim-nav .tour-target,.sim-nav [aria-current=page]');if(target)revealTarget(target);}
 else if(returnFocus)el('simulator').querySelector('[data-action="shell:toggle"]')?.focus({preventScroll:true});
}
function navigate(){academyMenu(false);simMenuOpen=false;el('simulator-section').classList.remove('simulator-expanded');document.body.classList.remove('workspace-expanded');el('expand-simulator').setAttribute('aria-pressed','false');const next=location.hash.slice(1)||'home';view=['home','explore','questions','lessons'].includes(next)?next:'home';query='';filter='all';el('home').hidden=view!=='home';el('library').hidden=!['questions','lessons'].includes(view);top();home();if(!el('library').hidden)library();renderPractice();window.scrollTo({top:0,left:0,behavior:'instant'});}
function openForm(s,kind){s.modal={kind,draft:kind==='settings'?clone(s.settings):{...(kind==='products'?{category:s.categories[0].name,unit:'Pack',stock:0,minStock:5,price:0,cost:0}:{}),...(kind==='gaming'?{rate:18}:{}),...(kind==='services'?{status:'Pending'}:{}),date:'2026-10-11'}};}
function openOrder(s,ids=[],old){s.modal={kind:'order',draft:old?clone(old):{id:'PRACTICE-'+(s.orders.length+1),supplier:'',status:'Ordered',amount:0,paid:0,items:ids.map(id=>{const p=s.products.find(p=>p.id===id);return {id,quantity:Math.max(1,p.minStock*2-p.stock),received:0,applied:0,cost:p.cost};})}};}
function perform(action,target){
 if(action==='shell:toggle'){if(compact.matches)simulatorMenu(!simMenuOpen);else{guide.state.collapsed=!guide.state.collapsed;renderPractice();}return;}
 const hadModal=!!guide.state.modal;
 if(!hadModal&&target)modalReturnTarget=target.dataset.target??target.dataset.action;
 if(compact.matches&&action.startsWith('nav:'))simMenuOpen=false;
 const mutate=s=>{
  if(action==='shell:search'){s.screen='inventory';s.modal=null;return;}
  if(action.startsWith('edit:')){const [,kind,id]=action.split(':');const list=kind==='orders'?s.customOrders:s[kind];s.modal={kind,draft:clone(list.find(r=>r.id===id))};return;}
  if(action.startsWith('category:')){const id=action.slice(9);s.categoryFilter=s.categoryFilter===id?'all':id;return;}
  if(action.startsWith('category-product:')){openForm(s,'products');s.modal.draft.category=s.categories.find(c=>c.id===action.slice(17)).name;return;}
  if(action.startsWith('category-edit:')){s.modal={kind:'categories',draft:clone(s.categories.find(c=>c.id===action.slice(14)))};return;}
  if(action.startsWith('customer:history:')||action.startsWith('credit:detail:')){s.modal={kind:action.startsWith('credit')?'credit':'customer-history',customerId:action.split(':').at(-1)};return;}
  if(action.startsWith('repayment:')){openForm(s,'repayment');s.modal.draft.name=s.customers.find(c=>c.id===action.slice(10)).name;s.modal.draft.payment='Cash';return;}
  if(action.startsWith('sale:detail:')){s.modal={kind:'receipt',saleId:action.slice(12)};return;}
  if(action.startsWith('barcode:')){s.modal={kind:'barcode',productId:action.slice(8)};return;}
  if(action.startsWith('service:complete:')){s.modal={kind:'services',draft:{...clone(s.services.find(j=>j.id===action.slice(17))),status:'Completed',completing:true}};return;}
  if(action.startsWith('theme:')){s.settings.theme=action.slice(6);return;}
  if(action==='branding:profile'){s.settings.profile=true;return;}
  if(action==='branding:background'){s.settings.background='shopdesk-cat';return;}
  if(action==='branding:remove-profile'){s.settings.profile=false;return;}
  if(action==='branding:remove-background'){s.settings.background='';return;}
  if(action==='reset:preview'){s.modal={kind:'reset'};return;}
  if(action.startsWith('notes:')){s.notesTab=action.slice(6);return;}
  if(action.startsWith('note:done:')){const n=s.notes.find(n=>n.id===action.slice(10));n.done=!n.done;return;}
  if(action.startsWith('report:')){s.reportTab=action.slice(7);return;}
  if(action.startsWith('chart:')){s.chartMode=action.slice(6);return;}
  if(action.startsWith('receipt:format:')){s.modal.format=action.slice(15);return;}
  if(action==='receipt:print'){window.print();return;}
  if(action==='sale:scan'){const p=s.products.find(p=>p.barcode===s.saleDraft.barcode);if(!p)throw Error('Choose a product.');s.saleDraft.quantities[p.id]=(s.saleDraft.quantities[p.id]??0)+1;return;}

  if(action.startsWith('nav:')){s.screen=action.slice(4);s.modal=null;s.inspected=null;s.search='';return;}
  if(action.startsWith('tab:')){s.tab=action.slice(4);s.inspected=null;return;}
  if(action.startsWith('open:'))return openForm(s,action.slice(5));
  if(action==='close'){s.modal=null;s.inspected=null;return;}
  if(action==='dashboard:low-stock'){s.screen='inventory';return;}
  if(action.startsWith('inspect:')){s.inspected=action.slice(8);return;}
  if(action==='report:financial'){s.inspected='financial';return;}
  if(action==='credit:detail'){s.inspected='credit';return;}
  if(action==='sale:detail'){s.modal={kind:'receipt'};return;}
  if(action==='receipt:preview'){s.inspected='receipt';return;}
  if(action.startsWith('supplier:orders')){s.screen='shop-orders';return;}
  if(action==='order:new')return openOrder(s);
  if(action==='order:edit'){const old=s.orders.find(o=>o.id===(target?.dataset.orderId??s.orders[0].id));if(old)openOrder(s,[],old);return;}
  if(action.startsWith('order:add:')){const id=action.slice(10),p=s.products.find(p=>p.id===id);if(!s.modal?.draft||!p)throw Error('Choose a product.');s.modal.draft.items.push({id,quantity:'',received:0,applied:0,cost:p.cost});return;}
  if(action.startsWith('order:remove:')){const id=action.slice(13);s.modal.draft.items=s.modal.draft.items.filter(i=>i.id!==id);return;}
  if(action==='order:receive-all'){s.modal.draft.items.forEach(i=>i.received=i.quantity);return;}
  if(action==='order:multiple'){s.multiple=!s.multiple;s.selected=[];return;}
  if(action.startsWith('order:select:')){const id=action.slice(13);s.selected=s.selected.includes(id)?s.selected.filter(i=>i!==id):[...s.selected,id];return;}
  if(action==='order:from-low')return openOrder(s,s.selected);
  if(action.startsWith('order:low:'))return openOrder(s,[action.slice(10)]);
  if(action==='order:history'){s.orderTab='history';return;}
  if(action==='order:active'){s.orderTab='active';return;}
  if(action.startsWith('backup:')&&['export','restore'].includes(action.slice(7))){s.modal={kind:'backup',direction:action.slice(7),preview:false};return;}
  if(action==='backup:preview'){s.modal.preview=true;s.inspected='backup';return;}
  if(action==='backup:confirm'){if(s.modal.direction==='export'){const url=URL.createObjectURL(new Blob([JSON.stringify({training:true,settings:s.settings,products:s.products},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='shopdesk-academy-demo-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}s.modal=null;return;}
  if(action==='import:open'){s.modal={kind:'import'};return;}
  if(action==='import:detect'){s.import.loaded=true;return;}
  if(action==='import:preview'){s.import.preview=true;return;}
  if(action==='import:validate'){s.import.validated=true;s.import.error=s.import.mapping!=='correct';s.import.mapped=!s.import.error;return;}
  if(action==='import:confirm'){s.import.confirmed=true;return;}
  if(action==='import:apply')return applyDemoImport(s);
  throw Error('Follow the highlighted action first.');
 };
 // Explore opens UI and previews, while operations that alter records stay locked.
 const viewOnly=/^(shell:|edit:|category:|category-product:|category-edit:|customer:history:|credit:detail:|repayment:|barcode:|service:complete:|sale:detail:|notes:|chart:|reset:preview|nav:|tab:|open:|inspect:|order:(new|edit|multiple|history|active|low:)|supplier:orders|receipt:format:|receipt:print|sale:detail|credit:detail|dashboard:|report:|receipt:|backup:(export|restore|preview)$|import:open$|close$)/.test(action);
 if(!guide.isGuided&&!viewOnly){toast('Start a question to unlock this action.');return;}
 guide.dispatch(action,mutate);renderPractice(true);
 if(hadModal&&!guide.state.modal&&!guide.isGuided)el('simulator').querySelector('[data-target="'+CSS.escape(modalReturnTarget)+'"]')?.focus({preventScroll:true});
}
function updateField(node){const s=guide.state,key=node.dataset.key,value=node.value;
 if(node.dataset.search){if(guide.isGuided&&guide.step.action!=='field:'+key)return;s.searches[node.dataset.search]=value;const region=el('simulator').querySelector('.record-results');if(region)region.innerHTML=records(s,guide);return;}
 if(!guide.isGuided||guide.step.action!=='field:'+key)return;
 if(key==='mapping'){s.import.mapping=value;s.import.validated=false;s.import.confirmed=false;return;}
 if(key==='product-search'){s.orderProductSearch=value;return;}
 if(key.startsWith('sold:')){s.saleDraft.quantities[key.slice(5)]=value;const p=s.products.find(p=>p.id===key.slice(5)),line=el('simulator').querySelector('[data-sale-line="'+p.id+'"]');if(line)line.textContent='₹'+(Number(value)*p.price);return;}
 if(s.screen==='daily-sales'&&!s.modal){if(key==='sale-customer')s.saleDraft.name=value;else if(key==='barcode-input')s.saleDraft.barcode=value;else s.saleDraft[key]=value;return;}
 if(key.includes(':')){const [field,id]=key.split(':');s.modal.draft.items.find(i=>i.id===id)[field]=value;}
 else if(s.modal?.draft)s.modal.draft[key]=value;
 else if(s.screen==='settings'){s.settingsDraft??=clone(s.settings);s.settingsDraft[key]=value;}
}
function finishField(node){updateField(node);if(guide.dispatch('field:'+node.dataset.key,()=>{},node.value))renderPractice(true);else{let alert=el('guide').querySelector('.guide-error');if(!alert){alert=document.createElement('p');alert.className='guide-error';alert.setAttribute('role','alert');el('guide').querySelector('.instruction').after(alert);}alert.textContent=t(guide.message.key);}}
document.addEventListener('pointerdown',e=>{if(e.target.closest('[data-guide]'))e.preventDefault();if(!e.target.closest('.academy-header'))academyMenu(false);});
document.addEventListener('input',e=>{if(e.target.matches('#simulator [data-key]'))updateField(e.target);});
document.addEventListener('change',e=>{
 if(e.target.id==='language'||e.target.hasAttribute('data-simulator-language')){setLanguage(e.target.value);top();home();if(!el('library').hidden)library();renderPractice();return;}
 if(e.target.id==='practice-context'){guide.exit();guide.state.business=e.target.value;renderPractice();return;}
 if(e.target.hasAttribute('data-filter-category')){guide.state.categoryFilter=e.target.value;renderPractice();return;}
 if(e.target.hasAttribute('data-sale-category')){guide.state.saleCategory=e.target.value;renderPractice();return;}
 if(e.target.hasAttribute('data-settled')){guide.state.includeSettled=e.target.checked;renderPractice();return;}
 if(e.target.hasAttribute('data-history-period')){guide.state.historyPeriod=e.target.value;renderPractice();return;}
 if(e.target.hasAttribute('data-report-date')){guide.state[e.target.dataset.reportDate==='from'?'reportFrom':'reportTo']=e.target.value;renderPractice();return;}
 if(e.target.matches('[data-config="format"]')&&guide.isGuided){guide.state.import.format=e.target.value;return;}
 if(e.target.matches('#simulator select[data-key], #simulator input[type="date"][data-key]')&&guide.isGuided&&guide.step.action==='field:'+e.target.dataset.key)finishField(e.target);
});
document.addEventListener('focusout',e=>{if(e.target.matches('#simulator input[data-key]')&&guide.isGuided&&guide.step.action==='field:'+e.target.dataset.key)finishField(e.target);});
document.addEventListener('click',e=>{
 if(e.target.closest('#academy-menu')){academyMenu(el('academy-menu').getAttribute('aria-expanded')!=='true');return;}
 if(e.target.closest('[data-layout="close-navigation"]')){simulatorMenu(false,true);return;}
 if(e.target.closest('#top-nav a'))academyMenu(false);
 if(e.target.closest('#expand-simulator')){const expanded=el('simulator-section').classList.toggle('simulator-expanded');el('expand-simulator').setAttribute('aria-pressed',String(expanded));el('expand-simulator').textContent=t(expanded?'Close':'Expand workspace');document.body.classList.toggle('workspace-expanded',expanded);syncOverlayBounds();if(guide.step){const target=el('simulator').querySelector('.tour-target');if(target)revealTarget(target);}return;}
 const start=e.target.closest('[data-start]');if(start){guide.start([...questions,...lessons].find(q=>q.id===start.dataset.start));el('simulator-section').classList.add('is-guided');el('simulator-section').scrollIntoView({block:'start',behavior:'instant'});renderPractice(true);if(compact.matches){el('guide').scrollIntoView({block:'start',behavior:'instant'});syncOverlayBounds();const target=el('simulator').querySelector('.tour-target');if(target)revealTarget(target);}return;}
 const category=e.target.closest('[data-filter]');if(category){filter=category.dataset.filter;catalog();if(compact.matches){el('feature-filter').open=false;el('feature-filter').querySelector('summary').focus({preventScroll:true});}return;}
 if(e.target.closest('[data-clear-search]')){query='';el('question-search').value='';catalog();el('question-search').focus();return;}
 const g=e.target.closest('[data-guide]');if(g){if(g.dataset.guide==='hint')guide.hint=!guide.hint;else guide[g.dataset.guide]();if(g.dataset.guide==='exit')simMenuOpen=false;renderPractice(true);return;}
 const action=e.target.closest('#simulator [data-action]');if(action&&!action.disabled)perform(action.dataset.action,action);
});
document.addEventListener('submit',e=>{const form=e.target.closest('#simulator form');if(!form)return;e.preventDefault();if(!guide.isGuided)return;const kind=form.dataset.form;guide.dispatch('save:'+kind,s=>kind==='daily-sale'?saveDailySale(s):kind==='order'?saveOrder(s,s.modal.draft):saveRecord(s,kind,kind==='settings'?(s.settingsDraft??s.settings):s.modal.draft));renderPractice(true);});
document.addEventListener('keydown',e=>{
 const dialog=el('simulator').querySelector('.sd-dialog,.sim-sidebar[role=dialog]');
 if(e.key==='Tab'&&dialog){const focusable=[...dialog.querySelectorAll('button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex="0"]')].filter(n=>n.getClientRects().length);const first=focusable[0],last=focusable.at(-1);if(first&&((e.shiftKey&&(document.activeElement===first||!dialog.contains(document.activeElement)))||(!e.shiftKey&&(document.activeElement===last||!dialog.contains(document.activeElement))))){e.preventDefault();revealTarget(e.shiftKey?last:first);}}
 if(e.ctrlKey&&e.key.toLowerCase()==='k'&&!dialog){e.preventDefault();perform('shell:search');el('simulator').querySelector('[data-search=inventory]')?.focus();}
 if(e.key==='Enter'&&e.target.matches('[data-action][role=button]'))perform(e.target.dataset.action,e.target);
 if(e.key==='Escape'){
  if(el('academy-menu').getAttribute('aria-expanded')==='true'){academyMenu(false,true);return;}
  if(simMenuOpen){simulatorMenu(false,true);return;}
  if(guide.state.modal){if(guide.isGuided)toast('Use Exit lesson to leave guided practice.');else{guide.state.modal=null;renderPractice();el('simulator').querySelector('[data-target="'+CSS.escape(modalReturnTarget)+'"]')?.focus({preventScroll:true});}return;}
  if(el('simulator-section').classList.contains('simulator-expanded'))el('expand-simulator').click();
 }
});
window.addEventListener('hashchange',navigate);
function refreshGeometry(){syncOverlayBounds();if(guide.active)updateSpotlight();}
el('simulator').addEventListener('scroll',refreshGeometry,true);window.addEventListener('scroll',refreshGeometry,{passive:true});window.addEventListener('resize',refreshGeometry);
window.visualViewport?.addEventListener('resize',()=>{refreshGeometry();const focused=document.activeElement;if(focused?.matches('.sd-dialog input,.sd-dialog select,.sd-dialog textarea'))revealTarget(focused);});window.visualViewport?.addEventListener('scroll',refreshGeometry);
new ResizeObserver(refreshGeometry).observe(el('guide'));
compact.addEventListener('change',()=>{if(!ready)return;academyMenu(false);if(el('feature-filter'))el('feature-filter').open=!compact.matches;renderPractice(true);});
try{await loadTranslations();ready=true;el('loading-text').textContent=t('CAT is preparing ShopDesk Academy.');navigate();await el('loading').querySelector('img').decode().catch(()=>{});await new Promise(resolve=>setTimeout(resolve,650));el('loading').classList.add('loaded');setTimeout(()=>el('loading').remove(),450);}
catch(error){el('loading').innerHTML='<h1>ShopDesk Academy</h1><p>Could not load the learning workspace. Please reload the page.</p>';console.error(error);}
