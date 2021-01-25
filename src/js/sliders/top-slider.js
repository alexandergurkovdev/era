import $ from 'jquery';

$('.top-slider').slick({
  slidesToShow: 1,
  arrows: false,
  dots: true,
});

$(document).ready(function () {
  $('#dots-container').append($('.top-slider .slick-dots'));
});
