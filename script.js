function Animation1()
{
  var tl=gsap.timeline();
tl.from("nav #part1_nav,#part2_nav h5",{
  y:30,
  duration:0.6,
  opacity:0,
  stagger:0.2,
})
tl.from("#h1",{
  x:-600,
  duration:0.5,
  opacity:0,
})
tl.from("#p1",{
  x:-700,
  opacity:0,
  duration:0.5,
})
tl.from(".btnBook",{
  y:30,
  opacity:0,
  duration:0.6,

})
tl.from("#img1",{
  x:800,
  opacity:0,
  duration:0.5,
},"-=1")
tl.from(".section1 img",{
  y:70,
  duration:0.4,
  stagger:0.2,
  opacity:0.5,
},"-=1")
}
Animation1();

function Animation2()
{
  var tl2=gsap.timeline({
    scrollTrigger:{
      trigger:".page2 h1",
      scroller:"body",
      scrub:true,
      start:"top 20%",
      
    }
  })
  tl2.from(".box1 .box_part1",{
    x:-400,
    duration:3,
    opacity:0, 
    delay:1,
  })
}
Animation2();