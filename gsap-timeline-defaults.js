const TL = gsap.timeline({

  //we can set default params for below timelines
    defaults: {
        duration: 1, 
        ease: "power4.out"
    },
    repeat: -1,
    yoyo: true
})

TL
.from(".img1", {autoAlpha: 0, y: -50})
//can add extra parameter to choose starting point from previous animation
//-=0.75 will lunch after 0.25 seconds from previous animation
.from(".img2", {autoAlpha: 0, y: -50})
.from(".img3", {autoAlpha: 0, y: -50})
//+= will wait for 2 seconds after previous animation
.from("h1", {autoAlpha: 0, y: -50,})
// "<" will lunch at the same time from previous animation
.from("p", {autoAlpha: 0, y: -50})
