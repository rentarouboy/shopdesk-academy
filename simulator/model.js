import {groceryShop,DEMO_DATE} from '../data/demo-shop.js';
export const clone = value => structuredClone(value);
export const demo=()=>({screen:'dashboard',role:'regular',permissions:{},supplierPayments:[],saleReturns:[],purchaseReturns:[],quickBill:{format:'a4'},modal:null,tab:'Shop information',business:'retail',search:'',searches:{},categoryFilter:'all',selected:[],multiple:false,inspected:null,collapsed:false,includeSettled:false,orderTab:'active',reportTab:'overview',notesTab:'Upcoming',saleDraft:{quantities:{},payment:'Cash',name:'',discountType:'percentage',discount:0},gaming:[],...groceryShop(),import:{format:'CSV',kind:'products',loaded:false,mapped:false,validated:false,confirmed:false,error:false}});
export function resetSimulator() { return demo(); }
export function financialSummary(s){
 const sum=(list,key='amount')=>list.reduce((a,r)=>a+Number(r[key]??0),0),revenue=sum(s.sales)-sum(s.saleReturns??[],'total'),services=sum(s.services.filter(r=>r.status==='Completed')),expenses=sum(s.expenses),capital=sum(s.capital),credit=sum(s.customers,'credit'),payments=sum(s.orders,'paid'),purchaseCost=s.sales.reduce((a,sale)=>a+(sale.items??[]).reduce((b,i)=>b+i.unitCost*i.quantity,0),0);
 return {revenue,services,total:revenue+services,expenses,capital,credit,paid:payments,purchases:s.orders.reduce((a,o)=>a+o.items.reduce((b,i)=>b+i.applied*i.cost,0),0),payables:s.orders.reduce((a,o)=>a+Math.max(0,o.amount-o.paid-(s.purchaseReturns??[]).filter(r=>r.orderId===o.id&&r.settlement==='balance').reduce((b,r)=>b+r.total,0)),0)+sum(s.suppliers,'outstandingAmount'),profit:revenue+services-purchaseCost+sum(s.saleReturns??[],'costRestored')-expenses,available:capital+revenue+services-credit-expenses-payments+(s.purchaseReturns??[]).filter(r=>r.settlement==='refund').reduce((a,r)=>a+r.total,0),inventory:s.products.reduce((a,p)=>a+p.stock*p.cost,0)};
}
// Keep date filters and cash movement tied to the same fictional business records.
export function financialReport(s,from,to){
 const events=[],add=(date,amount,type)=>events.push({date:date.slice(0,10),amount,type});
 s.capital.forEach(r=>add(r.date,r.amount,'capital'));
 s.sales.filter(r=>!(s.saleReturns??[]).some(ret=>ret.replacementSaleId===r.id)).forEach(r=>add(r.date,r.amount,r.paymentMethod==='Credit'?'credit-sale':'sale'));
 s.services.filter(r=>r.status==='Completed').forEach(r=>add(r.completedAt??r.date,r.amount,'sale'));
 s.expenses.forEach(r=>add(r.date,-r.amount,'expense'));
 s.repayments.forEach(r=>add(r.date,r.amount,'repayment'));
 s.orders.forEach(o=>add(o.date,-(o.paid-(s.supplierPayments??[]).filter(p=>p.orderId===o.id).reduce((a,p)=>a+p.amount,0)),'supplier-payment'));
 (s.supplierPayments??[]).forEach(p=>add(p.date,-p.amount,'supplier-payment'));
 (s.saleReturns??[]).forEach(r=>add(r.date,r.cashCollected-r.cashRefund,'returns'));
 (s.purchaseReturns??[]).filter(r=>r.settlement==='refund').forEach(r=>add(r.date,r.total,'supplier-refund'));
 const range=events.filter(e=>e.date>=from&&e.date<=to),total=type=>range.filter(e=>e.type===type).reduce((a,e)=>a+Math.abs(e.amount),0);
 let available=events.filter(e=>e.date<from&&e.type!=='credit-sale').reduce((a,e)=>a+e.amount,0);
 const movement=[{date:from,available}],days=[...new Set(range.map(e=>e.date))].sort();
 for(const date of days){available+=range.filter(e=>e.date===date&&e.type!=='credit-sale').reduce((a,e)=>a+e.amount,0);movement.push({date,available});}
 const purchases=s.orders.filter(o=>o.date>=from&&o.date<=to).reduce((a,o)=>a+o.items.reduce((b,i)=>b+i.applied*i.cost,0),0);
 return {movement,bars:[['Owner Capital Invested',total('capital')],['Stock Purchase Investment',purchases],['Revenue',total('sale')+total('credit-sale')],['Expenses',total('expense')],['Supplier Payments',total('supplier-payment')],['Customer Repayments',total('repayment')],['Available balance change',available-movement[0].available]]};
}
export function saveDailySale(state){
 const d=state.saleDraft,items=Object.entries(d.quantities).filter(([,q])=>Number(q)>0).map(([id,q])=>{const p=state.products.find(p=>p.id===id),quantity=numeric(q,'quantity',0.001);if(!p||quantity>p.stock||(['Pack','Piece','Box','Set'].includes(p.unit)&&!Number.isInteger(quantity)))throw Error('The quantity must be available in stock.');return {productId:id,productName:p.name,categoryId:p.categoryId,categoryName:p.category,quantity,unitPrice:p.price,unitCost:p.cost,total:quantity*p.price,profit:quantity*(p.price-p.cost),unit:p.unit};});
 if(!items.length)throw Error('Choose a product.');
 const customer=state.customers.find(c=>c.name===d.name);if(d.payment==='Credit'&&!customer)throw Error('Choose a customer for a credit sale.');
 const subtotal=items.reduce((a,i)=>a+i.total,0),discount=numeric(d.discount??0,'discount');if((d.discountType==='percentage'&&discount>100)||(d.discountType==='fixed'&&discount>subtotal))throw Error('Enter a valid amount or quantity.');
 const discountAmount=d.discountType==='percentage'?subtotal*discount/100:discount,taxAmount=state.settings.tax==='No Tax'?0:Math.round((subtotal-discountAmount)*Number(state.settings.rate??0))/100,total=Math.round((subtotal-discountAmount+taxAmount)*100)/100;
 const next=clone(state);for(const i of items)next.products.find(p=>p.id===i.productId).stock-=i.quantity;
 const sale={id:'IKY-PRACTICE-BILL',date:DEMO_DATE+'T16:00:00',items,subtotal,taxAmount,taxRate:state.settings.rate,taxName:state.settings.tax,customerPhone:d.phone??'',discountType:d.discountType,discountValue:discount,discountAmount,total,amount:total,paymentMethod:d.payment,payment:d.payment,customerId:customer?.id,customerName:d.name,name:d.name,quantity:items.reduce((a,i)=>a+i.quantity,0)};
 next.sales.push(sale);if(d.payment==='Credit')next.customers.find(c=>c.id===customer.id).credit+=total;
 next.saleDraft={quantities:{},name:'',payment:'Cash',discountType:'percentage',discount:0};next.inspected='sale-saved';return next;
}
export function lowStockRecommendations(state){return state.products.filter(product=>product.stock<=product.minStock&&!state.orders.some(order=>!['Received','Cancelled'].includes(order.status)&&order.items.some(line=>line.id===product.id)));}
const numeric = (value,label,min=0) => {if(value==='' || value===undefined || !Number.isFinite(Number(value)) || Number(value)<min) throw new Error('Enter a valid amount or quantity.'); return Number(value);};
export function saveOrder(state,draft) {
 if(!draft.supplier?.trim() || !draft.items.length) throw new Error('Choose a supplier and add a product.');
 const previous=state.orders.find(o=>o.id===draft.id);
 const updates=draft.items.map(line=>{
  const quantity=numeric(line.quantity,'quantity',1), received=numeric(line.received??0,'received');
  const old=previous?.items.find(i=>i.id===line.id); const applied=old?.applied??0;
  if(received>quantity || received<applied) throw new Error('Received total must be between the previous total and the ordered quantity.');
  if(!state.products.some(p=>p.id===line.id)) throw new Error('Choose a product.');
  if(['Piece','Box','Pack','Set'].includes(state.products.find(p=>p.id===line.id).unit)&&(!Number.isInteger(quantity)||!Number.isInteger(received)))throw new Error('Enter a valid amount or quantity.');
  return {...line,quantity,received,applied:received,delta:received-applied,cost:numeric(line.cost??0,'cost')};
 });
 if(previous?.items.some(old=>old.applied>0 && !updates.some(n=>n.id===old.id))) throw new Error('Received products cannot be removed.');
 if(new Set(updates.map(i=>i.id)).size!==updates.length) throw new Error('This product is already on the order.');
 const amount=numeric(draft.amount??0,'amount'),paid=numeric(draft.paid??0,'paid');
 if(paid>amount) throw new Error('Amount paid cannot exceed the actual amount.');
 const order={...clone(draft),amount,paid,items:updates.map(({delta,...i})=>i),status:updates.every(i=>i.received===i.quantity)?'Received':updates.some(i=>i.received>0)?'Partially Received':draft.status==='Cancelled'?'Cancelled':'Ordered'};
 const next=clone(state);
 for(const line of updates) { const p=next.products.find(p=>p.id===line.id),previous=p.stock;p.stock+=line.delta;if(line.delta>0)next.history.push({id:'receipt-'+order.id+'-'+line.id+'-'+line.received,name:p.name,date:DEMO_DATE,previous,quantity:line.delta,newStock:p.stock,reason:'Supplier receiving',notes:order.id}); }
 next.orders=previous?next.orders.map(o=>o.id===order.id?order:o):[...next.orders,order]; next.modal=null;
 return next;
}
export function saveRecord(state,kind,draft) {
 const next=clone(state),d=clone(draft);
 if(kind==='sales'&&!d.name)d.name='';
 if(kind!=='sales'&&!String(d.name??'').trim()) throw new Error('Enter a name before saving.'); d.name=d.name.trim();
 if(kind==='products'){d.stock=numeric(d.stock??0,'stock');d.price=numeric(d.price??0,'price');d.cost=numeric(d.cost??0,'cost');d.minStock=numeric(d.minStock??0,'minStock'); d.id=d.id??'practice-product';d.sellingPrice=d.price;d.purchasePrice=d.cost;d.categoryId=next.categories.find(c=>c.name===d.category)?.id??next.categories[0].id;d.updatedAt=DEMO_DATE;}
 if(kind==='products'&&['Piece','Box','Pack','Set'].includes(d.unit)&&(!Number.isInteger(d.stock)||!Number.isInteger(d.minStock)))throw new Error('Enter a valid amount or quantity.');
 if(['expenses','capital','services'].includes(kind))d.amount=numeric(d.amount,'amount',0.01);
 if(kind==='sales'){
  const product=next.products.find(p=>p.id===d.product);if(!product)throw new Error('Choose a product.');
  d.quantity=numeric(d.quantity,'quantity',1);if(d.quantity>product.stock)throw new Error('The quantity must be available in stock.');
  d.amount=d.quantity*product.price; product.stock-=d.quantity; d.product=product.name;d.id='PRACTICE-BILL';
  if(d.payment==='Credit'){ const customer=next.customers.find(c=>c.name===d.name);if(!customer)throw new Error('Choose a customer for a credit sale.');customer.credit=(customer.credit??0)+d.amount; }
 }
 if(kind==='repayment'){const c=next.customers.find(c=>c.name===d.name);d.amount=numeric(d.amount,'amount',0.01);if(!c||d.amount>(c.credit??0))throw new Error('Repayment cannot exceed the outstanding credit.');c.credit-=d.amount;next.repayments.push({...d,id:'PRACTICE-REPAYMENT',customerId:c.id,date:DEMO_DATE,paymentMethod:d.payment??'Cash'});}
 else if(kind==='settings')next.settings={...next.settings,...d};
 else if(kind==='stock'){const p=next.products.find(p=>p.name===d.name);if(!p)throw new Error('Choose a product.');const previous=p.stock,change=numeric(d.quantity,'quantity',-Infinity);if(change===0||previous+change<0)throw Error('The quantity must be available in stock.');p.stock+=change;next.history.push({...d,date:DEMO_DATE,previous,newStock:p.stock,reason:d.reason??'Manual correction'});}
 else if(kind==='gaming')next.gaming.push({...d,minutes:numeric(d.minutes,'minutes',1),rate:numeric(d.rate,'rate',0.01),status:'Running'});
 else {d.id=d.id??'practice-'+kind;d.date=d.date??DEMO_DATE;const collection=kind==='orders'?'customOrders':kind;const existing=next[collection].findIndex(row=>row.id===d.id);if(existing>=0)next[collection][existing]={...next[collection][existing],...d};else next[collection].push(d);}
 next.modal=null;return next;
}
export function applyDemoImport(state) {
 if(!state.import.loaded||!state.import.mapped||!state.import.validated||!state.import.confirmed||state.import.error)throw new Error('Review the mapping and validation before confirming.');
 const next=clone(state),kind=next.import.kind;
 if(!['products','categories','customers','suppliers','sales'].includes(kind))throw new Error('Choose a supported import type.');
 if(kind==='sales')next.sales.push({id:'DEMO-IMPORT',name:'Ravi Kumar',product:'Sona Masoori Rice 1 kg',quantity:1,amount:80,payment:'Cash'});
 else next[kind].push(kind==='products'?{id:'demo-import',name:'Imported Red Lentils 500 g',stock:5,minStock:1,price:80,cost:40,category:'Pulses & Lentils',sku:'IMPORT-001'}:{name:{categories:'Organic Foods',customers:'Nila Test Customer',suppliers:'Pantry Supply Example'}[kind],...(kind!=='categories'?{phone:'00000 00000',address:'Example Nagar'}:{})});
 next.modal=null;return next;
}
