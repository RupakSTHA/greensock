gsap.to(
//class or id
    '.img1',
    {
        //x cordinate in pixel by default
        x: 100,
        y: 100,
        backgroundColor: "red",
        //in degree in default
        rotation: 45,
        duration: 2
    }
)

const img1 = document.querySelector('.img1')
gsap.to(
    //can use object like img1
    img1,
    {
        x: 100,
        y: 100,
        backgroundColor: "red",
        rotation: 45,
        duration: 2
    }
)

gsap.to(
  //also assign variable or index
  `img${1}`,
    {
        x: 100,
        y: 100,
        backgroundColor: "red",
        rotation: 45,
        duration: 2
    }
)
