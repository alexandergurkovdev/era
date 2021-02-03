import $ from 'jquery';

function initAboutSlider(selector) {
  $(selector).slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
  });
  $(selector + '-next').click(function () {
    $(selector).slick('slickNext');
  });
  $(selector).parent('.about-slider-wrapper').children('.dots-container').append($(selector).children('.slick-dots'));
}

initAboutSlider('#about-slider-1');
initAboutSlider('#about-slider-2');

$('.about-partners').slick({
  slidesToShow: 7,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});
