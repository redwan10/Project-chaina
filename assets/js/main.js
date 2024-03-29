(function($){
    "use strict";
    

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
      slidesToShow: 4,
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
            slidesToShow: 4,
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
            slidesToShow: 3,
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
            slidesToShow: 2,
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
            slidesToShow: 1,
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


    // Sidebar Toggler
    $(".sidebarBtn").click(function(){
      $("#mySidenav").toggle('slow');
    });


  // About slider
 $('.about-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




})(jQuery);




var scrollAmount = 450;

$(window).on('scroll', function(){
  if($(window).scrollTop()>=scrollAmount && !$('aside').hasClass('sticky-top')){
    $('aside').addClass('sticky-top'); 
  }
  else if($(window).scrollTop()<scrollAmount && $('aside').hasClass('sticky-top')){
     $('aside').removeClass('sticky-top') 
  }
});

var vtnScroll = 450;

$(window).on('scroll', function(){
  if($(window).scrollTop()>=vtnScroll && !$('#topbtnDiv').hasClass('d-inline-block')){
    $('#topbtnDiv').addClass('d-inline-block'); 
  }
  else if($(window).scrollTop()<vtnScroll && $('#topbtnDiv').hasClass('d-inline-block')){
     $('#topbtnDiv').removeClass('d-inline-block') 
  }
});