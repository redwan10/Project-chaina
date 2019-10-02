(function($){
    "use strict";
    // Mobile menu 
    jQuery('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "768"
    });

    // card slider
    $('.card-slider').slick({
      dots: false,
      infinite: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      arrows: true,
      autoplay: false,
      fade: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1500,
          settings: {
            arrows: true,
            dots: false,
            infinite: true,
            autoplay: false,
            fade: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },{
          breakpoint: 1200,
          settings: {
            arrows: true,
            dots: false,
            infinite: true,
            autoplay: false,
            fade: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },{
          breakpoint: 992,
          settings: {
            arrows: true,
            dots: false,
            infinite: true,
            autoplay: false,
            fade: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },{
          breakpoint: 768,
          settings: {
            arrows: true,
            dots: false,
            infinite: true,
            autoplay: false,
            fade: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },{
          breakpoint: 470,
          settings: {
            arrows: true,
            dots: false,
            infinite: true,
            autoplay: false,
            fade: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    



    // Sort By Selector
    $(document).ready(function() {
      $('#sort-by-option').niceSelect();
    });



})(jQuery);