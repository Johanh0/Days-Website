let controller;
let slideScene;

function animateSlides(){
    // Init Controller
    controller = new ScrollMagic.Controller();
    // Select
    const sliders = document.querySelectorAll('.slide');
    const nav = document.querySelector('.nav-header');
    // Loop over each slide
    sliders.forEach(slide => {
        const revealImg = slide.querySelector('.reveal-img');
        const img = slide.querySelector('img');
        const revealText = slide.querySelector('.reveal-text');
        //GSAP
        const sliderTl = gsap.timeline({defaults: {duration: 1, ease: 'power2.inOut'}});
        sliderTl.fromTo(revealImg, {x:'0%'}, {x:'100%'});
        sliderTl.fromTo(img, {scale: 2}, {scale: 1}, '-=1');
        sliderTl.fromTo(revealText, {x:'0%'}, {x:'100%'}, '-=0.75');
        sliderTl.fromTo(nav, {y:'-100%'}, {y:'0%'}, '-=0.5');
    })
}

animateSlides();