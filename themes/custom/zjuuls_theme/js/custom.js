(function($, Drupal) {
  $('.menu-toggle').click(function(){
    $('.menu').toggleClass( '-active' );
  })
  $(window).mousemove(function( event ) {
    var styles_img = {
      "top" : event.pageY - 80,
      "left" : event.pageX - 80
    }
    $('.mouse-overlay--img').css(styles_img)
    var styles_link = {
      "top" : event.pageY - 60,
      "left" : event.pageX - 40
    }
    $('.mouse-overlay--link').css(styles_link)
  })
})(jQuery, Drupal);
