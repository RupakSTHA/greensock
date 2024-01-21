const TL = gsap.timeline()

TL
.from(".img1", {autoAlpha: 0, y: -50, duration: 1})
.from(".img2", {autoAlpha: 0, y: -50, duration: 1})
.from(".img3", {autoAlpha: 0, y: -50, duration: 1})
.from("h1", {autoAlpha: 0, y: -50, duration: 1})
.from("p", {autoAlpha: 0, y: -50, duration: 1})
