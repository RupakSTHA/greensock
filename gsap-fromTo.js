//this is used fix issue when clicking button multiple times, using from and to object as below
document.querySelector(".btn").addEventListener("click", ()=>{
    gsap.fromTo(
        '.img1',
      //from object
        {
            autoAlpha: 0
        },
      //to object, we can use duration on to object only
        {
            autoAlpha: 1,
            duration: 2
        }
    )
})
