
// for smooth Scroll in my website

function smoothScroll() {
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    speed: 2
});
}

smoothScroll();





// loding animation

function lodingAnimation(){
    gsap.from(".hero-content h1",{
        y:40,
        opacity:0,
        delay: 0.5,
        duration: 0.5,
        stagger: .2
    })

    gsap.from(".hero-content p",{
        y:40,
        opacity:0,
        delay: 0.6,
        duration: 0.5,
        stagger: .2
    })

    gsap.from(".p-btn",{
        y:40,
        opacity:0,
        delay: 0.6,
        duration: 0.5,
        stagger: .2
    })



}

lodingAnimation();





