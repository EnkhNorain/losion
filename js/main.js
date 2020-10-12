$.fancybox.defaults.backFocus = false;

$('.about__slider').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	pauseOnHover: false,
	arrows: false,
	dots: true,
	dotsClass: 'slick-dots about__dots',
	customPaging: function(){return ''}
})

$('.gallery__body').slick({
	slidesToShow: 6,
    slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	pauseOnHover: false,
	prevArrow: '<span class="slick-arrow icon-angle-left gallery__arrow gallery__arrow--prev" />',
	nextArrow: '<span class="slick-arrow icon-angle-right gallery__arrow gallery__arrow--next" />',
	infinite: false,
	dots: true,
	dotsClass: 'slick-dots gallery__dots',
	customPaging: function(){return ''},
	responsive: [{
    breakpoint: 1000,
    settings: {
      slidesToShow: 1,
    }
  }]
})
$('.reviews__body').slick({
	slidesToShow: 3,
    slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	pauseOnHover: false,
	arrows: false,
	infinite: false,
	dots: true,
	dotsClass: 'slick-dots reviews__dots',
	customPaging: function(){return ''},
	responsive: [{
    breakpoint: 1000,
    settings: {
      slidesToShow: 1,
    }
  }]
})