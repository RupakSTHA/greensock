const tween = gsap.to(
    '.img1',
    {
        x: 100,
        duration: 1,
        repeat: 1,
        paused: true
    }
)
//kill tween animation
tween.kill();
tween.play()
//got to 2.5 duration and start from there
tween.seek(2.5)
tween.duration(5);
tween.play()
