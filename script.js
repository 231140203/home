const all=(s)=>[...document.querySelectorAll(s)];
let language=localStorage.getItem('sy-language')||'zh';
function applyLanguage(next){language=next;localStorage.setItem('sy-language',next);document.documentElement.lang=next==='zh'?'zh-CN':'en';all('[data-zh]').forEach(el=>el.innerHTML=el.dataset[next]);const parts=all('#lang span');parts[0].classList.toggle('active',next==='zh');parts[1].classList.toggle('active',next==='en')}
document.querySelector('#lang').addEventListener('click',()=>applyLanguage(language==='zh'?'en':'zh'));
applyLanguage(language);
