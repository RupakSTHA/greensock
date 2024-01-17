gsap.to(
    '.img1',
    {
        //allow one animation to another after one completes
        keyframes: [
            {
                duration: 0.3, x: 100
            },
            {
                duration: 0.3, y: 100
            },
            {
                duration: 0.3, x: 200
            }
        ]
    }
)
