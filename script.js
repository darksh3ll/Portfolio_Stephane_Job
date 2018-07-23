const btn = document.querySelector('button');
const nav = document.querySelector('.navbar');
btn.addEventListener('click',function () {
    nav.classList.toggle('add_menu' )
});

// Scrollbar
const body = document.querySelector('body');
const scrollbar = document.querySelector('.scroll');
window.addEventListener('scroll',function () {
   let scroll=window.scrollY / (body.clientHeight - window.innerHeight);
   let scrollpercent = Math.round(scroll * 100);
   scrollbar.style.width = scrollpercent + '%';
});

const aboutME= document.querySelector(`.presentation`);
const gps = aboutME.clientHeight;
console.log(aboutME);
console.log(gps);


