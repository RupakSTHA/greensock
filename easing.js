//you can check out the docs in gsap easing for more..
document.querySelector(".btn").addEventListener("click", ()=>{
    gsap.from(
        '.img1',
        {
            y: -300,
            autoAlpha: 0,
            duration: 2.5,
            ease: "bounce.out"
        }
    )
})
