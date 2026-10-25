// Academy learning records only. No ShopDesk data, account or cloud connection.
const KEY='shopdesk-academy:learning:v1';
export class LearningStore {
 constructor(storage){this.storage=storage;this.data={version:1,completed:{},current:null};try{const saved=JSON.parse(storage?.getItem(KEY)??'null');if(saved?.version===1&&saved.completed&&typeof saved.completed==='object')this.data={version:1,completed:saved.completed,current:saved.current??null};}catch{/* Unavailable or damaged storage falls back to this session. */}}
 save(){try{this.storage?.setItem(KEY,JSON.stringify(this.data));}catch{/* Practice remains usable without persistence. */}}
 record(guide){if(guide.done){this.data.completed[guide.done.id]={at:new Date().toISOString(),version:'5.0.0'};this.data.current=null;}else if(guide.active){this.data.current={id:guide.active.id,index:guide.index,pending:guide.pending,state:structuredClone(guide.state),history:structuredClone(guide.history)};}this.save();}
 clearCurrent(){this.data.current=null;this.save();}
 get current(){return this.data.current;}
 completed(id){return Object.hasOwn(this.data.completed,id);}
 count(items){return items.filter(item=>this.completed(item.id)).length;}
}
