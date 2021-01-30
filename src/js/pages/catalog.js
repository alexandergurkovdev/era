import $ from 'jquery';

$('.trade-mark_toggler').click(function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $(this).next('.trade-mark__content').slideToggle(200);
});

$('#show-catalog-filter').click(function () {
  $(this).toggleClass('active');
  $('.catalog-form').toggleClass('active');
  $('.catalog-form__filter').slideToggle(200);
});
