


$(document).ready(() => {
  /*--------------------------------------------------------------
  # General
  --------------------------------------------------------------*/
  // Smooth Scroll Tutorial Using jQuery: https://www.youtube.com/watch?v=6Bd37vCHQ_U
  // Select all links with hashes
  const generalSmoothScroll = () => {
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 80
            }, 1500, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
  }

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
    generalSmoothScroll();
    generalBackToTopBtn();

  }

  init();
});