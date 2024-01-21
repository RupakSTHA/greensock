const TL = gsap.timeline()

TL
.from(".img1", {autoAlpha: 0, y: -50, duration: 1})
//can add extra parameter to choose starting point from previous animation
//-=0.75 will lunch after 0.25 seconds from previous animation
.from(".img2", {autoAlpha: 0, y: -50, duration: 1}, "-=0.75")
.from(".img3", {autoAlpha: 0, y: -50, duration: 1}, "-=0.75")
//+= will wait for 2 seconds after previous animation
.from("h1", {autoAlpha: 0, y: -50, duration: 1}, "+=2")
// "<" will lunch at the same time from previous animation
.from("p", {autoAlpha: 0, y: -50, duration: 1}, "<")
