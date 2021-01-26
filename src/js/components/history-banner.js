import $ from 'jquery';

$(document).ready(function () {
  function setBannerPosition() {
    var activeTab = $('ul.history-tabs__list').find('li.active');
    if (activeTab.length) {
      var tabOffset = activeTab.offset();
      var tabOffsetLeft = tabOffset.left;
      $('.history-banner__layer').css('left', tabOffsetLeft + activeTab.width() + 160);
      console.log(tabOffsetLeft + activeTab.width());
    }
  }
  setBannerPosition();

  $(window).resize(function () {
    setBannerPosition();
  });

  $('ul.history-tabs__list')
    .find('li')
    .click(function () {
      setBannerPosition();
    });
});
