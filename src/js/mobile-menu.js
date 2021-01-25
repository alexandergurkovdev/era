import $ from 'jquery';

$('.nav-toggler').click(function () {
  $(this).toggleClass('active');
  $('.header__nav').slideToggle(200);
});
