import $ from 'jquery';
import 'ion-rangeslider';

// catalog range
var rangeMax = 10000,
  rangeMin = 0,
  rangeFrom = 0;

$(document).ready(function () {
  $('#range-from').val(rangeFrom);
  $('#range-to').val(rangeMax);
});

$('.range-slider').ionRangeSlider({
  type: 'double',
  min: rangeMin,
  max: rangeMax,
  from: rangeFrom,
  skin: 'round',
  hide_min_max: true,
  hide_from_to: true,
  onChange: function (data) {
    $('#range-from').val(data.from);
    $('#range-to').val(data.to);
  },
});

var my_range = $('.range-slider').data('ionRangeSlider');

$('#range-to').on('input', function (e) {
  my_range.update({
    to: +e.target.value,
  });
});

$('#range-from').on('input', function (e) {
  my_range.update({
    from: +e.target.value,
  });
});
