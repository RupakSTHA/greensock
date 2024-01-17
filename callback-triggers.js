gsap.to(
    '.img1',
    {
        x: 100,
        duration: 1,
        repeat: 1,
        onComplete: () => console.log("complete"),
        onStart: () => console.log('onstart'),
        onUpdate: () =>  console.log("onUpdate"),
        onRepeat: () => console.log("onRepeat")
    }
)
