$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1100,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="src/icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="src/icons/right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false
              }
            }
        ]
      });
  });