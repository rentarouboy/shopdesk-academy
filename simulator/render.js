import {navigation,visibleNavigation} from '../data/schema.js';
import {DEMO_DATE} from '../data/demo-shop.js';
import {text,icon,button} from './ui.js';
import {html} from '../js/i18n.js';
import {content} from './pages.js';
import {forms} from './forms.js';
export {button} from './ui.js';
export {records} from './pages.js';

export function renderSimulator(g,{compact=false,menuOpen=false}={}){
 const s=g.state,nav=visibleNavigation(s.business),current=navigation.find(n=>n.id===s.screen);
 return `${compact&&menuOpen?`<button class="sim-drawer-backdrop" data-layout="close-navigation" aria-label="${text('Close')}" tabindex="-1"></button>`:''}
 <aside id="sim-navigation" class="sim-sidebar" ${compact?menuOpen?`role="dialog" aria-modal="${g.isGuided?'false':'true'}" aria-label="${text('ShopDesk navigation')}"`:'hidden inert':s.modal?'inert':''}>
  <div class="sim-brand"><span class="sd-store-icon">${icon('Store')}</span><span>ShopDesk<small>${text('Daily business manager')}</small></span>${compact?`<button class="sim-drawer-close" data-layout="close-navigation" aria-label="${text('Close')}">×</button>`:''}</div>
  <nav class="sim-nav" aria-label="${text('ShopDesk navigation')}">${nav.map(f=>`<button data-action="nav:${f.id}" data-target="nav:${f.id}" class="${f.id===s.screen?'active':''}" title="${text(f.label)}" aria-label="${text(f.label)}" ${f.id===s.screen?'aria-current="page"':''}>${icon(f.icon)}<span>${text(f.label)}</span></button>`).join('')}</nav>
  <div class="shop-profile"><span class="avatar">${s.settings.profile?'<img src="./assets/shopdesk-cat.png" alt="" width="40" height="40">':'IK'}</span><div><strong>${html(s.settings.name)}</strong><small>${text(s.business==='pc-gaming'?'PC Gaming':s.business==='retail-service'?'Retail + Service':'Retail Shop')}</small></div></div>
 </aside>
 <div class="sim-main" ${s.modal||compact&&menuOpen?'inert':''}>
  <header class="sim-topbar">${button('shell:toggle','Toggle navigation',`class="sd-icon-button" aria-label="${text('Toggle navigation')}" aria-controls="sim-navigation" aria-expanded="${compact?menuOpen:!s.collapsed}"`)}
   <div class="sd-header-page"><strong>${text(current?.label??'Dashboard')}</strong><small>${DEMO_DATE} · ${text('Temporary practice data')}</small></div>
   <button data-action="shell:search" data-target="shell:search" class="sd-header-search" aria-label="${text('Search')}">${icon('Search')}<span>${text('Search')}</span><kbd>Ctrl K</kbd></button>
   <button data-action="nav:daily-sales" data-target="header:record-sale" class="primary sd-record-sale">${icon('Plus')}${text('Record sale')}</button>
  </header>
  <div class="sim-content">${g.step?.action.startsWith('read:')?`<article class="sd-card sd-pad reading-step" tabindex="0" data-target="${html(g.step.target)}"><h3>${text(g.step.label)}</h3><p>${text(g.step.explanation)}</p></article>`:''}${content(s,g)}${s.inspected&&!s.modal?`<div class="detail-panel" role="status">${text('Review')} · IKYZEN</div>`:''}</div>
 </div>
 ${s.modal?`<div class="sd-modal-backdrop"><section class="sd-dialog" role="dialog" aria-modal="${g.isGuided?'false':'true'}" aria-labelledby="form-title" tabindex="-1">${forms(s,g)}</section></div>`:''}`;
}
