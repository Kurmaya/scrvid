// $("#container").mousemove(function (e) {
//   parallaxIt(e, ".slide", -100);
//   parallaxIt(e, "img", -30);
// });
//
// function parallaxIt(e, target, movement) {
//   var $this = $("#container");
//   var relX = e.pageX - $this.offset().left;
//   var relY = e.pageY - $this.offset().top;
//
//   TweenMax.to(target, 1, {
//     x: ((relX - $this.width() / 2) / $this.width()) * movement,
//     y: ((relY - $this.height() / 2) / $this.height()) * movement
//   });
// }
function parallaxIt(e, target , movement){
  var his = cont;
  var relX= e.pageX - his.offsetWidth;
  var relY= e.pageY - his.offsetHeight;


TweenMax.to(target ,1 ,{
  x: ((relX -his.offsetWidth /2)/ his.offsetWidth)*movement,
  y:((relY -his.offsetHeight/2) /his.offsetHeight)*movement
});
}
const cont= document.getElementById('container');
const slide=document.querySelector('.slide');
cont.addEventListener('mousemove', function(e){
  parallaxIt(e, slide, 50);
  parallaxIt(e, cont.querySelector('img'),100);

  parallaxIt(e , cont.querySelector('.thing'),20);
  // parallaxIt(e , cont.querySelector('.thing'),-120);
});

// document.getElementById("third").onmousemove= function (e) {
//   parallaxIt(e, ".head", -100);
//   parallaxIt(e, "img", -30);
// };
//
// function parallaxIt(e, target, movement) {
//   let his = document.getElementById("third");
//   let relX = e.pageX - his.offset().left;
//   let relY = e.pageY - his.offset().top;
//
//   TweenMax.to(target, 1, {
//     x: ((relX - his.width() / 2) / his.width()) * movement,
//     y: ((relY - his.height() / 2) / his.height()) * movement
//   });
// }
