import $ from 'jquery';

$(function () {
  $('li.dropdown > a').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('selected');
    $(this).parent().find('.dropdown-menu').slideToggle(300);
    $(this).parent().siblings().find('.dropdown-menu').slideUp(300);

    // Скрываем при клике вне меню
    $(this)
      .parent()
      .find('div')
      .parent()
      .mouseleave(function () {
        var thisUI = $(this);
        $('html').click(function (e) {
          if (
            !thisUI.children('.dropdown-menu').is(e.target) &&
            thisUI.children('.dropdown-menu').has(e.target).length === 0
          ) {
            thisUI.children('.dropdown-menu').slideUp(300);
            thisUI.children('a').removeClass('selected');

            $('html').unbind('click');
          }
        });
      });
  });
});
