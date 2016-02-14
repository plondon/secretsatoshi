$(document).ready(function() {
  var $chase = $('#pacman-animation > div');

  setTimeout(function() {
    $chase.addClass('active');

    setInterval(function() {
      $chase.toggleClass('active');
    }, 7.2*1000);
  }, 0);
});