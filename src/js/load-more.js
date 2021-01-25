import $ from 'jquery';

$(function () {
  $('.load-more-content').slice(0, 5).show();
  $('.load-more-toggler').on('click', function (e) {
    e.preventDefault();
    $('.load-more-content:hidden').slice(0, 3).slideDown(300);
    if ($('.load-more-content:hidden').length == 0) {
      $('.load-more-toggler').remove();
    } else {
      $('html,body').animate(
        {
          scrollTop: $(this).offset().top,
        },
        1500
      );
    }
  });
});
