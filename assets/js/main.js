/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
        navToggle.style.visibility= "hidden";
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
        navToggle.style.visibility= "initial";
    })
}
/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR HEADER ===============*/


/*=============== SWIPER FAVORITES ===============*/ 

let swiperfavorite = new Swiper('.favorite-swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    // grabCursor: true,
  });
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 400,

})

sr.reveal(`.home-img`,{distance: '600px', duration: 1500});
sr.reveal(`.home-social,.favorite-container, .sponser-container`);
sr.reveal(`.home-title span:nth-child(1)`,{origin:`left`, opacity:1});
sr.reveal(`.home-title span:nth-child(3)`,{origin:`right`, opacity:1});
sr.reveal(`.home-tooltip, .home-button, .model-button`,{origin:`bottom`});
sr.reveal(`.about-contant, .discount-animate`,{origin:`left`});
sr.reveal(`.about-img, .model-tooltip, .discount-img`,{origin:`right`});
sr.reveal(`.footer-data, .footer-group`,{interval: 300});