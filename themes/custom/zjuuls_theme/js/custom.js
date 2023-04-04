(function($, Drupal) {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  var rellax = new Rellax('.rellax');
  $('.menu-toggle').click(function(){
    $('.menu').toggleClass( '-active' );
  })
  $('.filter-toggle').click(function(){
    $('.form-radios').toggleClass( '-active' );
    $('.filter-toggle').toggleClass( '-active' );
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
  window.addEventListener('load', function (){
    console.log('done')
  })
})(jQuery, Drupal);
