//animate same multiple elements like img below one after another
gsap.from(
    'img',
    {
        y: -300,
        autoAlpha: 0,
        duration: 2.5,
        //loads img animate one after another
        stagger: 0.5,
        //another way to use it. animate from end element
        stagger:{
            each: 0.5,
            from: "end"     
        },
        //another way to use it. Use it as callback function
        stagger: (index) => {
            console.log(index)
        }

    }
)
