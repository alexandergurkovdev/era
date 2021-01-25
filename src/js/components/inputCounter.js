import { CountUp } from 'countup.js';

window.onload = function () {
  var options = {
    separator: ' ',
  };
  new CountUp('count-1', 2200, options).start();
  new CountUp('count-2', 14000, options).start();
  new CountUp('count-3', 500, options).start();
  new CountUp('count-4', 36168000, options).start();
};
