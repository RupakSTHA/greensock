gsap.to(
    '.btn',
    {
        duration: 0.4,
        stagger: 0.2, 
        //generation of random values
        x: "random(-100,100)",
        //generation of random values in 10 digit not point
        x: "random(-100,100, 10)",
        //generation of values from the above array only
        x: "random([20, 10, 50, 80, 90])"
    }
)
