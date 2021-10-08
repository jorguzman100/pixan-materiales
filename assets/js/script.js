


$(document).ready(() => {

  // Back to top button
  const generalBackToTopBtn = () => {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
        $('header').addClass('transparentHeader');
        $('header').removeClass('solidHeader');
      } else {
        $('.back-to-top').fadeOut('slow');
        $('header').addClass('solidHeader');
        $('header').removeClass('transparentHeader');
      }
    });

    $('.back-to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1500);
      return false;
    });
  }

   /*--------------------------------------------------------------
  # Init
  --------------------------------------------------------------*/
  const init = () => {
    generalBackToTopBtn();

  }

  init();
});