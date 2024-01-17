 gsap.from(
        '.img1',
        {
            y: -300,
            autoAlpha: 0,
            duration: 2.5,
            ease: "bounce.out",
            //pause the animation
            paused: true,
            //delay the animation
            delay: 1,
            //repeat the Delay for repeat anime
            repeatDelay: 0.5,
            //repeat again 2 time after one finishes
            repeat: 2,
            //repeat unlimited times
            repeat: -1,
            //yoyo works with repeat, it animates backwards and forwards
            yoyo: true
        }
    )
