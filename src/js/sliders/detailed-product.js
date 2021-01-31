import $ from 'jquery';

$('.detailed-product-slider').slick({
  slidesToShow: 1,
  arrows: false,
  asNavFor: '.detailed-product-slider-nav',
  infinite: false,
});
$('.detailed-product-slider-nav').slick({
  slidesToShow: 4,
  asNavFor: '.detailed-product-slider',
  dots: false,
  arrows: true,
  vertical: true,
  infinite: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        vertical: false,
      },
    },
  ],
});

$('.detailed-product-characteristics_more').click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $(this).text('Скрыть дополнительные характеристики');
  } else {
    $(this).text('Все характеристики');
  }
  $('.detailed-product-characteristics ul li.hidden').slideToggle(200);
});
