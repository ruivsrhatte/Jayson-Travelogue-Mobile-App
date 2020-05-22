$(document).ready(function(){

  // only samll screens
  if($(window).width() <=600){
    //  show menu on swipe to right
    $(document).on('swiperright',function(e){
      e.preventDefault();
      $('#menu').animate({
        left:'0'
      });
    });
    // hide menu on swipe to left
    $(document).on('swipeleft',function(e){
      e.preventDefault();
      $('menu').animate({
        left:'-100'
      });
    });
  }
});
