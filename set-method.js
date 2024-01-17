const img1 = document.querySelector(".img1")
//can set opacity to 0 using pure javascript. like this we can use in gsap using set method
img1.style.opacity = 0;

//set up value in gsap like above.
gsap.set(img1, {opacity: 0})
