(function($, Drupal) {
  $('.menu-toggle').click(function(){
    $('.menu').toggleClass( '-active' );
  })
  $('.filter-toggle').click(function(){
    $('.form-radios').toggleClass( '-active' );
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
    console.log()
    var styles_interactive = {
      "transform" : "translate3d(" + (event.pageX - $(window).width() / 2) / 100 + "px, " + (event.pageY - $(window).height() / 2)  / 100 + "px, 0)",
    }
    $('.mouse-interactive').css(styles_interactive)
    var styles_interactive_r = {
      "transform" : "translate3d(" + (event.pageX - $(window).width() / 2) / 100 * -1 + "px, " + (event.pageY - $(window).height() / 2)  / 100 * -1+ "px, 0)",
    }
    $('.mouse-interactive-r').css(styles_interactive_r)
  })
})(jQuery, Drupal);
