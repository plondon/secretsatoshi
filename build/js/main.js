(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var intro = require('./intro');
var init = require('./init');

$(document).ready(function() {
  intro();
  init();
});
},{"./init":3,"./intro":4}],2:[function(require,module,exports){
var FormSlider = function() {
  this.$el = $('form');
  this.$slides = this.$el.find('> li');
  this.$dots = this.$el.find('.dots li');
  this.$error = this.$el.find('.error');
  this.$nav = this.$el.find('.nav');

  this.init = function() {
    this.idx = 0;
    this.goto(this.idx);
  }

  this.next = function() {
    this.goto(this.idx + 1);
  };  

  this.prev = function() {
    this.goto(this.idx - 1);
  };  

  this.goto = function(idx) {
    if ( idx < 0 ) return;
    if ( idx > 3 ) return;
    if ( this.getErrors() ) return;
    this.resetErrors();
    this.setDirection(idx);
    this.animateSlides(idx);
    this.updateDots(idx);

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

  this.updateDots = function(idx) {
    this.$dots.removeClass('active');
    $(this.$dots[idx]).addClass('active');
  }

  this.getErrors = function() {
    var $active = this.$el.find('>li.active');
    var $input = $active.find('input');

    if ( !$active.length ) return false;

    if ( !$input.val().length ) {
      this.$error.addClass('active');
      return true;
    }
  }

  this.resetErrors = function() {
    this.$error.removeClass('active');
  }

  this.bindEvents = function() {
    var self = this;
    this.$dots.on('click', function() {
      var idx = $(this).index();
      if ( idx === self.idx ) return;

      self.goto(idx);
    });

    this.$nav.find('li.next').on('click', function() {
      self.next();
    });

    this.$nav.find('li.prev').on('click', function() {
      self.prev();
    });

    this.$slides.find('input').on('keydown', function(e) {
      if (e.keyCode === 13) { 
        e.preventDefault(); 
        self.next();
      }
    });

  }

  this.init();
  this.bindEvents();
};

module.exports = FormSlider;
},{}],3:[function(require,module,exports){
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
},{"./form":2}],4:[function(require,module,exports){
var intro = function() {
  var $chase = $('#pacman-animation > div');

  setTimeout(function() {
    $chase.addClass('active');

    setInterval(function() {
      $chase.toggleClass('active');
    }, 7.2*1000);

  }, 0);
}

module.exports = intro;
},{}]},{},[1])