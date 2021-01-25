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
