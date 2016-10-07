/*! Amaze UI Plugin ~ magnifier */

/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }

}(function($) {
  'use strict';

  // add method to jQuery prototype
  $.fn.magnify = function(options) {
    // iterate over the current set of matched elements
    return this.each(function() {
      var $this = $(this);
      var width = $this.width();
      var height = $this.height();
      var offset = $this.offset();
      var $area = $this.next();
      var $data = $area.data();
      var shape = $data.amShape || 'rect';
      var $box = $area.next();
      var $img = $box.find('img');
      var ax = width * width / $img.width();
      var ay = height * height / $img.height();
      var params = shape.split(/[^\w\.]+/);
      var name = params[0];
      var dx = +params[1] || ax;
      var dy = +params[2] || ay;
      var xmax = width - dx;
      var ymax = height - dy;
      var sx = width / dx;
      var sy = height / dy;
      if (name === 'rect' || name === 'square') {
        $area.width(dx).height(dy);
      }
      $box.width(width).height(height);
      $this.on('mousemove', function (event) {
        var x = Math.min(Math.max(event.pageX - offset.left - dx / 2, 0), xmax);
        var y = Math.min(Math.max(event.pageY - offset.top - dy / 2, 0), ymax);
        var t = 'translate(' + (-sx * x) + 'px, ' + (-sy * y) + 'px)';
        $area.css({
          left: x,
          top: y
        });
        $img.css('transform', t);
      });
    });
  };

  $(function() {
    $('img[data-am-magnify]').magnify();
  });

}));
