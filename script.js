document.getElementById('year').textContent=new Date().getFullYear();
const reveals=[...document.querySelectorAll('.reveal')];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.animationPlayState='running';observer.unobserve(entry.target)}}),{threshold:.12});
reveals.forEach(el=>{el.style.animationPlayState='paused';observer.observe(el)});
