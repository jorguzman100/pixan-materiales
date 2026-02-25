$(document).ready(() => {
  // Smooth scroll for in-page links.
  const generalSmoothScroll = () => {
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        if (
          location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
          location.hostname === this.hostname
        ) {
          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 80
            }, 1500, function () {
              const $target = $(target);
              $target.focus();

              if ($target.is(':focus')) {
                return false;
              }

              $target.attr('tabindex', '-1');
              $target.focus();
            });
          }
        }
      });
  };

  // Show the floating button after scrolling.
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
  };

  const init = () => {
    generalSmoothScroll();
    generalBackToTopBtn();
  };

  init();
});
