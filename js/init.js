var FormSlider = require('./form');

var init = function() {
  $('#init').on('click', function() {
    
    $('#intro').addClass('hide');

    setTimeout(function() {
      $('#intro').remove();

      window.slider = new FormSlider();

    }, 500);

  });

  // setTimeout(function() {
  //   $('#init').trigger('click');
  // }, 0);
}

module.exports = init;