document.querySelector(".btn").addEventListener("click", ()=>{
    gsap.from(
        '.img1',
        {
            //setting auto alpha 0 will makes opacity 0 to 1 and visibility show
            autoAlpha: 0,
            duration: 2
        }
    )
})


//in style to block glitch when load.
.img{
visibility:hidden;
}
