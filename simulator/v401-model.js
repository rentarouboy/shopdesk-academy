// Standalone, fictional equivalents of verified v5.0.0 business transactions.
import {clone} from './model.js';
import {DEMO_DATE} from '../data/demo-shop.js';
const round=n=>Math.round((n+Number.EPSILON)*100)/100;
const number=(v,min=.01)=>{if(v===''||!Number.isFinite(Number(v))||Number(v)<min)throw Error('Enter a valid amount or quantity.');return Number(v);};
const requireReason=d=>{if(!String(d.reason??'').trim())throw Error('Enter a return reason.');};
export const orderDue=(s,o)=>round(Math.max(0,o.amount-o.paid-(s.purchaseReturns??[]).filter(r=>r.orderId===o.id&&r.settlement==='balance').reduce((a,r)=>a+r.total,0)));
export function supplierPayment(s,d){
 const amount=number(d.amount),o=s.orders.find(o=>o.id===d.orderId);if(!o||amount!==round(amount))throw Error('Payment exceeds the outstanding balance.');
 if(!/^\d{4}-\d{2}-\d{2}$/.test(d.date??'')||!Number.isFinite(Date.parse(d.date))||d.date>DEMO_DATE)throw Error('Choose a valid payment date.');
 const next=clone(s),order=next.orders.find(o=>o.id===d.orderId),id=d.id??'training-payment';
 if((s.supplierPayments??[]).some(p=>p.id===id)){const p=s.supplierPayments.find(p=>p.id===id);if(p.orderId===d.orderId&&p.amount===amount&&p.date===d.date&&p.reference===(d.reference??'')&&p.note===(d.note??''))return s;throw Error('This transaction already exists.');}
 if(amount>orderDue(s,o))throw Error('Payment exceeds the outstanding balance.');
 order.paid=round(order.paid+amount);next.supplierPayments.push({id,orderId:order.id,amount,date:d.date,reference:d.reference??'',note:d.note??''});next.modal=null;return next;
}
export function returnQuote(s,d){
 const purchase=d.kind==='purchase-return',record=(purchase?s.orders:s.sales).find(r=>r.id===d.transaction);if(!record)throw Error('Choose an original transaction.');
 const item=record.items.find(i=>(i.productId??i.id)===d.productId);if(!item)throw Error('Choose a product.');
 const quantity=number(d.quantity),p=s.products.find(p=>p.id===d.productId),already=(purchase?s.purchaseReturns:s.saleReturns).filter(r=>r.transaction===record.id&&r.productId===d.productId).reduce((a,r)=>a+r.quantity,0),eligible=(purchase?item.applied:item.quantity)-already;
 if(quantity>eligible||(purchase&&quantity>p.stock)||(['Pack','Piece','Box','Set'].includes(p.unit)&&!Number.isInteger(quantity)))throw Error('The return exceeds the eligible quantity.');
 const unit=purchase?record.amount*item.quantity*item.cost/record.items.reduce((a,i)=>a+i.quantity*i.cost,0)/item.quantity:record.amount*item.total/record.subtotal/item.quantity;
 const total=round(round(unit*(already+quantity))-round(unit*already));
 return {record,item,quantity,total};
}
export function saveReturn(s,d){
 const prior=(d.kind==='purchase-return'?s.purchaseReturns:s.saleReturns).find(r=>r.id===(d.id??'training-return'));if(prior){if(JSON.stringify(prior.input)===JSON.stringify(d))return s;throw Error('This transaction already exists.');}
 requireReason(d);const {record,item,quantity,total}=returnQuote(s,d),purchase=d.kind==='purchase-return';
 if(purchase&&!['balance','refund','credit','replacement'].includes(d.settlement))throw Error('Choose a settlement.');
 if(!purchase&&!['sellable','damaged'].includes(d.condition))throw Error('Choose a condition.');
 if(purchase&&d.settlement==='balance'&&total>orderDue(s,record))throw Error('The return exceeds the outstanding balance.');
 if(purchase&&d.settlement==='refund'&&total+s.purchaseReturns.filter(r=>r.transaction===record.id&&r.settlement==='refund').reduce((a,r)=>a+r.total,0)>record.paid)throw Error('The refund exceeds payments made.');
 const next=clone(s),id=d.id??'training-return',list=purchase?next.purchaseReturns:next.saleReturns;
 if(list.some(r=>r.id===id)){if(JSON.stringify(list.find(r=>r.id===id).input)===JSON.stringify(d))return s;throw Error('This transaction already exists.');}
 const product=next.products.find(p=>p.id===d.productId),previous=product.stock,delta=purchase?-quantity:d.condition==='sellable'?quantity:0;
 product.stock+=delta;
 if(delta)next.history.push({id,name:product.name,date:DEMO_DATE,previous,quantity:delta,newStock:product.stock,reason:purchase?'Purchase return':'Sales return',notes:d.reason});
 const entry={...clone(d),input:clone(d),id,total,quantity,date:DEMO_DATE,orderId:purchase?record.id:undefined,replacements:0,costRestored:!purchase&&d.condition==='sellable'?round(quantity*item.unitCost):0};
 if(!purchase){
  let replacementTotal=0;
  if(d.exchange){const p=next.products.find(p=>p.id===d.replacementProduct),q=number(d.replacementQuantity);if(!p||q>p.stock||(['Pack','Piece','Box','Set'].includes(p.unit)&&!Number.isInteger(q)))throw Error('The quantity must be available in stock.');p.stock-=q;replacementTotal=round(p.price*q);const sale={id:id+'-exchange',date:DEMO_DATE,items:[{productId:p.id,productName:p.name,quantity:q,total:replacementTotal,unitPrice:p.price,unitCost:p.cost,unit:p.unit}],amount:replacementTotal,total:replacementTotal,subtotal:replacementTotal,quantity:q,paymentMethod:record.paymentMethod,customerId:record.customerId,customerName:record.customerName};next.sales.push(sale);entry.replacementSaleId=sale.id;}
  const c=next.customers.find(c=>c.id===record.customerId),credit=record.paymentMethod==='Credit';entry.creditReduction=credit?round(Math.min(total,c.credit+replacementTotal)):0;entry.cashRefund=credit?round(Math.max(0,total-c.credit-replacementTotal)):round(Math.max(0,total-replacementTotal));entry.cashCollected=round(Math.max(0,replacementTotal-total));
  if(credit)c.credit=round(c.credit+replacementTotal-entry.creditReduction-entry.cashCollected);
 }
 list.push(entry);next.modal=null;return next;
}
export function receiveReplacement(s,d){const record=s.purchaseReturns.find(r=>r.id===d.returnId);if(!record||record.settlement!=='replacement')throw Error('Choose an original transaction.');const quantity=number(d.quantity);if(quantity>record.quantity-record.replacements)throw Error('The return exceeds the eligible quantity.');const next=clone(s),p=next.products.find(p=>p.id===record.productId);if(['Pack','Piece','Box','Set'].includes(p.unit)&&!Number.isInteger(quantity))throw Error('Enter a valid amount or quantity.');const previous=p.stock;p.stock+=quantity;next.purchaseReturns.find(r=>r.id===record.id).replacements+=quantity;next.history.push({id:'replacement-'+record.id+'-'+quantity,name:p.name,date:DEMO_DATE,previous,quantity,newStock:p.stock,reason:'Supplier replacement',notes:record.id});next.modal=null;return next;}
