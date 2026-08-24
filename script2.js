const root=document.documentElement;
const theme=document.getElementById('themeToggle');
function setTheme(d){root.classList.toggle('dark',d);localStorage.setItem('studentTheme',d?'dark':'light');if(theme)theme.textContent=d?'☀':'☾'}
setTheme(localStorage.getItem('studentTheme')==='dark');
theme?.addEventListener('click',()=>setTheme(!root.classList.contains('dark')));
const help=document.getElementById('helpModal'), helpBtn=document.getElementById('helpButton'), closeHelp=document.getElementById('closeHelp');
helpBtn?.addEventListener('click',()=>help.classList.add('open')); closeHelp?.addEventListener('click',()=>help.classList.remove('open')); help?.addEventListener('click',e=>{if(e.target===help)help.classList.remove('open')});
const slides=[...document.querySelectorAll('.slide')],dots=document.getElementById('dots'),counter=document.getElementById('slideCounter');let current=0,timer;
function showSlide(i){if(!slides.length)return;current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===current));if(counter)counter.textContent=`${String(current+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;if(dots){dots.innerHTML='';slides.forEach((_,n)=>{const b=document.createElement('button');b.className='dot-btn'+(n===current?' active':'');b.onclick=()=>{showSlide(n);start()};dots.appendChild(b)})}}
function start(){clearInterval(timer);timer=setInterval(()=>showSlide(current+1),5000)}
document.getElementById('nextSlide')?.addEventListener('click',()=>{showSlide(current+1);start()});
document.getElementById('prevSlide')?.addEventListener('click',()=>{showSlide(current-1);start()});showSlide(0);start();
const composer=document.getElementById('composer');document.getElementById('newMessage')?.addEventListener('click',()=>composer?.classList.add('open'));document.getElementById('closeComposer')?.addEventListener('click',()=>composer?.classList.remove('open'));composer?.addEventListener('click',e=>{if(e.target===composer)composer.classList.remove('open')});