export const clone = value => structuredClone(value);
export const demo = () => ({
 screen:'dashboard', modal:null, tab:'Shop information', business:'retail-service', search:'', selected:[], multiple:false, inspected:null,
 products:[{id:'p1',name:'Demo Notebook',category:'Demo Stationery',stock:3,minStock:5,price:80,cost:45,sku:'DEMO-001'},{id:'p2',name:'Demo Pen',category:'Demo Stationery',stock:2,minStock:10,price:20,cost:10,sku:'DEMO-002'},{id:'p3',name:'Demo Folder',category:'Demo Stationery',stock:24,minStock:5,price:60,cost:30,sku:'DEMO-003'},{id:'p4',name:'Demo Stapler',category:'Demo Stationery',stock:1,minStock:4,price:100,cost:60,sku:'DEMO-004'}],
 categories:[{name:'Demo Stationery'}], customers:[{name:'Demo Customer',phone:'00000 00000',address:'Demo Town',credit:240}], suppliers:[{name:'Demo Supplier',phone:'00000 00000'},{name:'Demo Paper Supply',phone:'00000 00001'}],
 orders:[{id:'DEMO-ORDER',supplier:'Demo Supplier',status:'Partially Received',amount:450,paid:150,items:[{id:'p1',quantity:10,received:2,applied:2,cost:45}]}],
 sales:[{id:'DEMO-BILL',name:'Demo Customer',product:'Demo Notebook',quantity:2,amount:160,payment:'Cash'}], services:[{name:'Demo Repair',customer:'Demo Customer',amount:250,status:'Pending'}], expenses:[{name:'Demo Transport',amount:100}],capital:[{name:'Demo Investment',amount:5000}],notes:[{name:'Demo Reminder',date:'2026-10-15'}],history:[],gaming:[], settings:{name:'Demo Shop',owner:'Demo Owner',phone:'00000 00000',address:'Demo Town',currency:'₹',theme:'Midnight',tax:'No Tax',rate:0}, import:{format:'CSV',kind:'products',loaded:false,mapped:false,validated:false,confirmed:false,error:false}
});
export function resetSimulator() { return demo(); }
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
  return {...line,quantity,received,applied:received,delta:received-applied,cost:numeric(line.cost??0,'cost')};
 });
 if(previous?.items.some(old=>old.applied>0 && !updates.some(n=>n.id===old.id))) throw new Error('Received products cannot be removed.');
 if(new Set(updates.map(i=>i.id)).size!==updates.length) throw new Error('This product is already on the order.');
 const amount=numeric(draft.amount??0,'amount'),paid=numeric(draft.paid??0,'paid');
 if(paid>amount) throw new Error('Amount paid cannot exceed the actual amount.');
 const order={...clone(draft),amount,paid,items:updates.map(({delta,...i})=>i),status:updates.every(i=>i.received===i.quantity)?'Received':updates.some(i=>i.received>0)?'Partially Received':draft.status==='Cancelled'?'Cancelled':'Ordered'};
 const next=clone(state);
 for(const line of updates) { next.products.find(p=>p.id===line.id).stock+=line.delta;if(line.delta>0)next.history.push({name:state.products.find(p=>p.id===line.id).name,quantity:line.delta}); }
 next.orders=previous?next.orders.map(o=>o.id===order.id?order:o):[...next.orders,order]; next.modal=null;
 return next;
}
export function saveRecord(state,kind,draft) {
 const next=clone(state),d=clone(draft);
 if(!String(d.name??'').trim()) throw new Error('Enter a name before saving.'); d.name=d.name.trim();
 if(kind==='products'){d.stock=numeric(d.stock??0,'stock');d.price=numeric(d.price??0,'price');d.cost=numeric(d.cost??0,'cost');d.minStock=numeric(d.minStock??0,'minStock'); d.id='practice-product';}
 if(['expenses','capital','services'].includes(kind))d.amount=numeric(d.amount,'amount',0.01);
 if(kind==='sales'){
  const product=next.products.find(p=>p.id===d.product);if(!product)throw new Error('Choose a product.');
  d.quantity=numeric(d.quantity,'quantity',1);if(!Number.isInteger(d.quantity)||d.quantity>product.stock)throw new Error('The quantity must be available in stock.');
  d.amount=d.quantity*product.price; product.stock-=d.quantity; d.product=product.name;d.id='PRACTICE-BILL';
  if(d.payment==='Credit'){ const customer=next.customers.find(c=>c.name===d.name);if(!customer)throw new Error('Choose a customer for a credit sale.');customer.credit=(customer.credit??0)+d.amount; }
 }
 if(kind==='repayment'){const c=next.customers.find(c=>c.name===d.name);d.amount=numeric(d.amount,'amount',0.01);if(!c||d.amount>(c.credit??0))throw new Error('Repayment cannot exceed the outstanding credit.');c.credit-=d.amount;}
 else if(kind==='settings')next.settings={...next.settings,...d};
 else if(kind==='stock'){const p=next.products.find(p=>p.name===d.name);if(!p)throw new Error('Choose a product.');p.stock+=numeric(d.quantity,'quantity',1);next.history.push(d);}
 else if(kind==='gaming')next.gaming.push({...d,minutes:numeric(d.minutes,'minutes',1),rate:numeric(d.rate,'rate',0.01),status:'Running'});
 else next[kind].push(d);
 next.modal=null;return next;
}
export function applyDemoImport(state) {
 if(!state.import.loaded||!state.import.mapped||!state.import.validated||!state.import.confirmed||state.import.error)throw new Error('Review the mapping and validation before confirming.');
 const next=clone(state),kind=next.import.kind;
 if(!['products','categories','customers','suppliers','sales'].includes(kind))throw new Error('Choose a supported import type.');
 if(kind==='sales')next.sales.push({id:'DEMO-IMPORT',name:'Demo Customer',product:'Demo Notebook',quantity:1,amount:80,payment:'Cash'});
 else next[kind].push(kind==='products'?{id:'demo-import',name:'Demo Imported Product',stock:5,minStock:1,price:80,cost:40,category:'Demo Stationery',sku:'IMPORT-001'}:{name:{categories:'Demo Imported Category',customers:'Demo Imported Customer',suppliers:'Demo Imported Supplier'}[kind],...(kind!=='categories'?{phone:'00000 00000',address:'Demo Town'}:{})});
 next.modal=null;return next;
}
