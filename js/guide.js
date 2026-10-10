import {demo,clone} from '../simulator/model.js';
export function validates(value,rule={type:'text'}) {
 if(rule.type==='text')return String(value??'').trim().length>0;
 if(rule.type==='equals')return String(value)===rule.value;
 if(rule.type==='contains')return String(value).toLowerCase().includes(rule.value);
 if(['number','range'].includes(rule.type))return value!==''&&Number.isFinite(Number(value))&&Number(value)>=(rule.min??0)&&Number(value)<=(rule.max??Infinity);
 return false;
}
export class Guide {
 constructor(){this.state=demo();this.active=null;this.index=0;this.history=[];this.done=null;this.message=null;this.hint=false;}
 start(item){this.state=demo();this.state.business=item.business??'retail';this.state.import.kind=item.importKind??'products';this.state.screen=item.startingScreen;this.active=item;this.index=0;this.history=[];this.done=null;this.message=null;this.hint=false;}
 get step(){return this.active?.steps[this.index];}
 get isGuided(){return !!this.active;}
 dispatch(action,mutate,value){
  if(this.active&&action!==this.step.action){this.message={key:'Not quite. Follow the highlighted action first.'};return false;}
  if(this.active&&this.step.validation&&!validates(value,this.step.validation)){this.message={key:'Check the highlighted field and try again.'};return false;}
  const before=clone(this.state);
  try{const candidate=clone(this.state),next=mutate(candidate);this.state=next&&Array.isArray(next.products)&&Array.isArray(next.orders)?next:candidate;}
  catch(error){this.message={key:error.message};return false;}
  this.message=null;
  if(this.active){this.history.push(before);this.index++;this.hint=false;if(this.index===this.active.steps.length){this.done=this.active;this.active=null;this.state=demo();this.history=[];}else if(this.step.resetBefore){this.state=demo();this.state.business=this.active.business??'retail';}}
  return true;
 }
 previous(){if(!this.active||!this.history.length)return;this.state=this.history.pop();this.index--;this.message=null;this.hint=false;}
 restart(){if(this.active)this.start(this.active);else if(this.done)this.start(this.done);}
 exit(){this.state=demo();this.active=null;this.done=null;this.history=[];this.index=0;this.message=null;}
}
