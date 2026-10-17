import {demo,clone} from '../simulator/model.js';
export function validates(value,rule={type:'text'}) {
 if(rule.type==='text')return String(value??'').trim().length>0;
 if(rule.type==='equals')return String(value)===rule.value;
 if(rule.type==='contains')return String(value).toLocaleLowerCase().includes(String(rule.value).toLocaleLowerCase());
 if(['number','range'].includes(rule.type))return value!==''&&Number.isFinite(Number(value))&&Number(value)>=(rule.min??0)&&Number(value)<=(rule.max??Infinity);
 return false;
}
export class Guide {
 constructor({confirm=false,store=null}={}){this.confirm=confirm;this.store=store;this.state=demo();this.active=null;this.index=0;this.history=[];this.done=null;this.message=null;this.hint=false;this.pending=false;}
 start(item){if(!item)return;this.state=demo();this.state.business=item.business??'retail';this.state.role=item.role??'regular';this.state.import.kind=item.importKind??'products';this.state.screen=item.startingScreen;this.active=item;this.index=0;this.history=[];this.done=null;this.message=null;this.hint=false;this.pending=false;this.prepare();this.store?.record(this);}
 get step(){return this.active?.steps[this.index];}
 get isGuided(){return !!this.active;}
 prepare(){if(!this.pending&&this.step?.page)this.state.screen=this.step.page;if(this.step?.target.startsWith('nav:'))this.state.collapsed=false;}
 dispatch(action,mutate=()=>{},value){
  if(this.active&&this.pending)return false;
  if(this.active&&action!==this.step.action){this.message={key:'Not quite. Follow the highlighted action first.'};return false;}
  if(this.active&&this.step.validation&&!validates(value,this.step.validation)){this.message={key:'Check the highlighted field and try again.'};return false;}
  const before=clone(this.state);
  try{const candidate=clone(this.state),next=mutate(candidate);this.state=next&&Array.isArray(next.products)&&Array.isArray(next.orders)?next:candidate;}
  catch(error){this.message={key:error.message};return false;}
  this.message=null;
  if(this.active){this.history.push(before);this.pending=true;this.hint=false;if(!this.confirm)this.next();else this.store?.record(this);}
  return true;
 }
 next(){
  if(!this.active)return false;
  if(!this.pending){if(!this.step.action.startsWith('read:'))return false;if(!this.dispatch(this.step.action))return false;if(!this.confirm)return true;}
  this.pending=false;this.index++;this.message=null;this.hint=false;
  if(this.index===this.active.steps.length){this.done=this.active;this.active=null;this.state=demo();this.history=[];}
  else{if(this.step.resetBefore){this.state=demo();this.state.business=this.active.business??'retail';this.state.role=this.active.role??'regular';}this.prepare();}
  this.store?.record(this);return true;
 }
 previous(){if(!this.active||!this.history.length)return;this.state=this.history.pop();if(!this.pending)this.index--;this.pending=false;this.message=null;this.hint=false;this.prepare();this.store?.record(this);}
 resume(items){const saved=this.store?.current,item=items.find(item=>item.id===saved?.id);if(!item||!Number.isInteger(saved.index)||saved.index<0||saved.index>=item.steps.length||!saved.state||!Array.isArray(saved.state.products)||!Array.isArray(saved.state.orders)||!Array.isArray(saved.history)||saved.history.length!==saved.index+(saved.pending?1:0))return false;this.active=item;this.index=saved.index;this.state=clone(saved.state);this.history=clone(saved.history);this.pending=!!saved.pending;this.done=null;this.message=null;this.prepare();return true;}
 restart(){if(this.active)this.start(this.active);else if(this.done)this.start(this.done);}
 exit(){this.state=demo();this.active=null;this.done=null;this.pending=false;this.history=[];this.index=0;this.message=null;this.store?.clearCurrent();}
}
