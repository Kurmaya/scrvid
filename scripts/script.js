

function scrollVideo() {
  var video = $('#video').get(0),
    videoLength = video.duration,
    scrollPosition = $(document).scrollTop();

  video.currentTime = (scrollPosition / ($(document).height() - $(window).height())) * videoLength;
  if(video.currentTime>5.6){
    document.querySelector('h1').style.display="none";
    video.style.display="none";
    // document.getElementById('later').style.display="block";
  }
  else if(video.currentTime<5.6){
    video.style.display="block";
    document.querySelector('h1').style.position="sticky";
    document.querySelector('h1').style.display="inline";

  }
}


$(window).scroll(function(e) {
  scrollVideo();
});
const vid= document.getElementById('load-vid');
vid.playbackRate=2.0;
window.addEventListener("load",function(){
  const loader = document.querySelector('.loader');

  setTimeout(hide, 4800)
  function hide(){
    loader.classList.add("hidden");
  }


});
