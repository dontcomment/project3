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
    
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
    //Modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #tnx, #order').fadeOut('slow');
    });

    $('.button_mini').on('click', function() {
      $('.overlay, #order').fadeIn('slow');
    });

  });