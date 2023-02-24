const tl = gsap.timeline({defaults: {duration: 0.75, ease:"power1.out"}})

tl.fromTo('.cookie-container', {scale: 0}, {scale: 1, ease:"elastic.out(1, 0.4)", duration: 1.4})
tl.fromTo('.cookie', {opacity: 0, x:-50, rotation: '-45deg'}, {opacity: 1, x:0, rotation:'0deg'},'<40%')
tl.fromTo('.text', {opacity: 0, x:50}, {opacity: 1, x:0}, '<')

//Coookie jump
tl.fromTo('.cookie', {y:0, rotation:'0deg'}, {y:20, rotation:'-10deg', yoyo:true, repeat: -1})
tl.fromTo('#crumbs', {y:0 }, {y:10, yoyo:true, repeat: -1}, '<')

//Fading cookie
const button = document.querySelector('button');
button.addEventListener('click', ()=>{
  gsap.to('.cookie-container', {opacity: 0, y: 100, duration: 0.75, ease:'power1.out'})
})