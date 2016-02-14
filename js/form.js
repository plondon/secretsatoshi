var FormSlider = function() {
  this.$el = $('form');
  this.$slides = this.$el.find('>li');

  this.init = function() {
    this.goto(0);
  }

  this.goto = function(idx) {
    if ( idx === this.idx ) return;
    this.setDirection(idx);
    this.animateSlides();

    var self = this;
    setTimeout(function() {
      $(self.$slides[idx]).addClass('active');
    }, 10);
  }

  this.setDirection = function(idx) {
    if ( idx > this.idx || !this.idx) {
      this.dir = 'down';
    } else {
      this.dir = 'up';
    }

    this.$el.removeClass('up down');
    this.$el.addClass(this.dir);

    this.idx = idx;
  }

  this.animateSlides = function() {
    var $active = this.$el.find('.active');
    $active.addClass('hide');

    setTimeout(function() {
      $active.removeClass('active hide');
    }, 700);
  }

  this.init();
};

module.exports = FormSlider;