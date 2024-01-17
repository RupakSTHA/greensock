//make function like animation and reusing it.
gsap.registerEffect({
    name:"rupakAnime",
    effect: ( targets, config ) => {
        return gsap.to( targets, {
            duration: config.duration,
            y: 200,
            scale: 1.4, 
            rotation: 360
        })
    },
    defaults: {duration: 2}
})

//.img1 are the targets, and duration is the config.duration
gsap.effects.rupakAnime(".img1", {duration: 5})
//not passing duration, it will use defaults duration
gsap.effects.rupakAnime(".img2")
