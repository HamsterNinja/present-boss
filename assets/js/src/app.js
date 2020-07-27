$(document).ready(function (){
	var swiper = new Swiper('.swiper-container.main-swiper', {
	      slidesPerView: 1,
	      loop: true,
	      allowTouchMove: false,
	      navigation: {
	      nextEl: '.main-swiper .swiper-button-next',
	      prevEl: '.main-swiper .swiper-button-prev',
	    },
	    pagination: {
	     el: '.swiper-pagination',
	     type: 'fraction',
	     formatFractionCurrent: function(number) {
	if (number < 10) {
	number =  number;
	}
	return number;
	},
	formatFractionTotal: function(number) {
	if (number < 10) {
	number = number;
	}
	return number;
	},
	    }
	    });


	var swiper = new Swiper('.swiper-container.product-swiper', {
      slidesPerView: 1,
      loop: true,
      autoHeight: true,
      navigation: {
	      nextEl: '.swiper-buttons .swiper-button-next',
	      prevEl: '.swiper-buttons .swiper-button-prev',
	    },
      breakpoints: {
        420: {
          slidesPerView: 2,
        },
        1380: {
          slidesPerView: 3,
        },
        1650: {
          slidesPerView: 4,
        },
      }
    });

  var swiper = new Swiper('.swiper-container.gallery-swiper', {
        slidesPerView: 3,
        loop: true,
        navigation: {
        nextEl: '.page_about-gallery .swiper-button-next',
        prevEl: '.page_about-gallery .swiper-button-prev',
      },
      pagination: {
       el: '.swiper-pagination',
       type: 'fraction',
       formatFractionCurrent: function(number) {
  if (number < 10) {
  number =  number;
  }
  return number;
  },
  formatFractionTotal: function(number) {
  if (number < 10) {
  number = number;
  }
  return number;
  },
      }
      });

$('.product-slick-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-slick-nav'
});
$('.product-slick-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
  asNavFor: '.product-slick-for',
  dots: false,
  arrows: true,
  centerMode: false,
  focusOnSelect: true
});

    $('.hits-button').click(function (event) {
        event.preventDefault();
        $('.hits-button').removeClass('active');
        $(this).addClass('active');
    
        var id = $(this).attr('data-id');
        if (id) {
            $('.hits-inner:visible').removeClass('visible');
            $('.main-page-hits-content').find('#' + id).addClass('visible');
        }
    });
});