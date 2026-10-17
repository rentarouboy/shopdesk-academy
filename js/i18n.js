export const languages={en:'English',ta:'தமிழ்',ml:'മലയാളം',te:'తెలుగు',hi:'हिन्दी'};
let language='en'; let dictionaries={};
export async function loadTranslations(){const entries=await Promise.all(Object.keys(languages).map(async lang=>[lang,await fetch(new URL('../data/i18n/'+lang+'.json',import.meta.url)).then(r=>{if(!r.ok)throw Error('Translation file failed to load.');return r.json();})]));dictionaries=Object.fromEntries(entries);try{const saved=localStorage.getItem('shopdesk-academy:language');if(languages[saved])language=saved;}catch{}document.documentElement.lang=language;}
export function setLanguage(lang){if(!languages[lang])return;language=lang;document.documentElement.lang=lang;try{localStorage.setItem('shopdesk-academy:language',lang);}catch{}}
export const getLanguage=()=>language;
export function t(key,values={}){const text=language==='en'?key:dictionaries[language]?.[key];if(text===undefined)throw Error('Missing translation: '+language+' / '+key);return text.replace(/\{(\w+)\}/g,(_,k)=>String(values[k]??'{'+k+'}'));}
export const html=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
