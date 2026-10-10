import {t,html} from '../js/i18n.js';
import {icons} from '../data/icons.js';
import {themes} from '../data/schema.js';
export const text=(key,params)=>html(t(key,params??(key.includes('{0}, excluding')?{0:'₹'}:{})));
export const icon=name=>icons[name]??icons.Boxes;
export const money=n=>'₹'+Number(n??0).toLocaleString('en-IN',{maximumFractionDigits:2});
export const button=(action,label,extra='',raw=false)=>`<button type="button" data-action="${html(action)}" data-target="${html(action)}" ${extra}>${raw?html(label):text(label)}</button>`;
export const table=(headers,rows,width=850)=>`<div class="table-wrap"><table style="min-width:${width}px"><thead><tr>${headers.map(h=>`<th>${text(h)}</th>`).join('')}</tr></thead><tbody>${rows.length?rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join(''):`<tr><td colspan="${headers.length}" class="empty">${text('No matching records.')}</td></tr>`}</tbody></table></div>`;
export const panel=(title,body)=>`<section class="sd-card"><div class="sd-card-heading"><h3>${text(title)}</h3></div>${body}</section>`;
export const field=(label,control)=>`<label class="field"><span>${text(label)}</span>${control}</label>`;
export const badge=status=>`<span class="sd-badge ${['Completed','Received','Normal','Delivered'].includes(status)?'positive':['Critical','Cancelled'].includes(status)?'negative':'pending'}">${text(status)}</span>`;
export const header=(eyebrow,title,description,actions='')=>`<div class="sd-page-header"><div><span class="eyebrow">${text(eyebrow)}</span><h2>${title}</h2><p>${text(description)}</p></div><div class="sd-actions">${actions}</div></div>`;
export const metric=(label,value,note='',tone='blue')=>`<div class="sd-metric ${tone}"><div>${text(label)}<i></i></div><strong>${html(value)}</strong><small>${note}</small></div>`;
export function input(s,g,key,label,type,value='',required=false){
 const editable=g.isGuided&&g.step.action==='field:'+key,attrs=`data-key="${html(key)}" data-target="field:${html(key)}" aria-label="${text(label)}" ${required?'aria-required="true"':''}`;
 const groups={expiryReminder:[['none','No reminder'],['2-days','2 days before'],['1-week','1 week before'],['1-month','1 month before']],category:s.categories.map(c=>[c.name,c.name,true]),customer:s.customers.map(c=>[c.name,c.name,true]),supplier:s.suppliers.map(c=>[c.name,c.name,true]),discountType:[['percentage','Percentage (%)'],['fixed','Fixed amount']],product:s.products.map(p=>[p.id,p.name,true]),productName:s.products.map(p=>[p.name,p.name,true])};
 const list={payment:['Cash','UPI','Card','Credit','Other'],repayMethod:['Cash','UPI','Card','Other'],unit:['Piece','Box','Pack','Kg','Gram','Litre','Ml','Metre','Set','Hour','Other'],theme:themes,tax:['No Tax','GST','Custom Tax'],reason:['Damaged','Lost','Expired','Found','Manual correction','Opening stock correction','Other'],expenseCategory:['Rent','Utilities','Transport','Supplies','Other'],serviceStatus:['Pending','In progress','Ready','Completed','Cancelled'],customStatus:['New','Designing','Ready','Delivered'],mapping:['correct','wrong']};
 const opts=groups[type]??list[type]?.map(v=>[v,v]);
 if(opts)return `<select ${attrs} ${editable?'':'disabled'}><option value="">${text('Choose')}</option>${opts.map(([v,l,raw])=>`<option value="${html(v)}" ${v===value?'selected':''}>${raw?html(l):text(l)}</option>`).join('')}</select>`;
 return `<input ${attrs} type="${type}" value="${html(value)}" ${type==='number'?'step="0.001"':type==='range'?'min="0" max="70" step="1"':''} ${editable?'':'readonly'} ${['date','time','checkbox','range'].includes(type)&&!editable?'disabled':''} autocomplete="off" maxlength="180">`;
}
export const search=(s,key,label)=>`<label class="sd-search">${icon('Search')}<input data-search="${key}" data-key="${key}-search" data-target="field:${key}-search" aria-label="${text(label)}" placeholder="${text(label)}" value="${html(s.searches[key]??'')}" autocomplete="off"></label>`;
export const matches=(s,key,record)=>Object.values(record).filter(v=>typeof v==='string').join(' ').toLocaleLowerCase().includes((s.searches[key]??'').trim().toLocaleLowerCase());
