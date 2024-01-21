const TL = gsap.timeline({
    defaults: {
        duration: 1, 
        ease: "power4.out"
    },
  
})

TL
.from(".img1", {autoAlpha: 0, y: -50})
.from(".img2", {autoAlpha: 0, y: -50})
.from(".img3", {autoAlpha: 0, y: -50})

.from("h1", {autoAlpha: 0, y: -50,})

//it does exactly like .addLabel but we can add params at the end
.add("endAdmin", "-=2")

//add a pause of animation and when seek call it starts from here
.addLabel("endAnim")

.from("p", {autoAlpha: 0, y: -50})

setTimeout(()=>{
  //calling the addLabel
    TL.seek('endAnim')
    TL.play()
}, 1000)
