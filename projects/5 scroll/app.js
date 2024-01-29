gsap.from('.b2 h2', {
    duration:1,
    autoAlpha: 0,
    y:100,
    scale: 0.5,
    scrollTrigger: {
        trigger: '.b2 h2',
        //show the markers start to end for scroll
        markers: true,
        start: "top bottom",
        //follow the animation with scroll
        scrub: true
    }
})


//make screen still while scroll by pin true
ScrollTrigger.create({
    trigger: '.b2',
    pin: true,
    markers: true
})
