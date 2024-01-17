document.querySelector(".btn").addEventListener("click", ()=>{
    gsap.from(
        '.img1',
        {
            autoAlpha: 0,
            duration: 2
        }
    )
})


//in style to block glitch when load.
.img{
visibility:hidden;
}
