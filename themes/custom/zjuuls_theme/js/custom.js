
(function($, Drupal) {

  $('.menu-toggle').click(function(){
    $('.menu').toggleClass( '-active' );
  })
  $('.filter-toggle').click(function(){
    $('.form-radios').toggleClass( '-active' );
    $('.filter-toggle').toggleClass( '-active' );
  })
  var scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
  });

  var scrollY = 0

  $('body').mousemove(function( event ) {
    scroll.on('scroll', (args) => {
      scrollY = args.scroll.y
    });
    var styles_img = {
      "left" : event.pageX - 80,
      "top" : event.pageY - 80 + scrollY
    }
    $('.mouse-overlay--img').css(styles_img)
    var styles_link = {
      "left" : event.pageX - 40,
      "top" : event.pageY - 40 + scrollY
    }
    $('.mouse-overlay--link').css(styles_link)
    console.log(event.pageY, scrollY)
  })
})(jQuery, Drupal);
