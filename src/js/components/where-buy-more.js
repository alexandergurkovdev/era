import $ from 'jquery';

$(document).ready(function () {
  var isMoreShow = false;

  if (isMoreShow) {
    $('#where-buy-more').text('Скрыть');
  } else {
    $('#where-buy-more').text('Показать всё');
  }

  function setMarginTop() {
    if ($('#where-buy-tab-2').css('display') !== 'none') {
      $('.news').css('margin-top', $('#where-buy-tab-2').outerHeight() + 90);
    } else {
      $('.news').css('margin-top', $('#where-buy-tab-1').outerHeight() + 90);
    }
  }
  setMarginTop();

  $(window).resize(function () {
    setMarginTop();
  });

  $('.where-buy-tabs .vacancies-tabs__nav li').click(function () {
    setMarginTop();
  });

  $('#where-buy-more').click(function (e) {
    e.preventDefault();
    isMoreShow = !isMoreShow;

    if (isMoreShow) {
      $('.where-buy-table__hidden').css('display', 'table-row');
    } else {
      $('.where-buy-table__hidden').css('display', 'none');
    }
    setMarginTop();
  });
});
