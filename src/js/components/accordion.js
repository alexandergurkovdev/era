import $ from 'jquery';

$(document).ready(function () {
  $('.accordion__item > a').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).siblings('.accordion__content').slideUp(200);
    } else {
      $('.accordion__item > a').removeClass('active');
      $(this).addClass('active');
      $('.accordion__content').slideUp(200);
      $(this).siblings('.accordion__content').slideDown(200);
    }
  });
});
