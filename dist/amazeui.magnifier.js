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
      var settings = {
        shape: params[0],
        width: +params[1] || ax,
        height: +params[2] || ay,
        offsetX: 0,
        offsetY: 0
      }
      var $options = $.extend({}, settings, options);
      var name = $options.shape;
      var dx = $options.width;
      var dy = (name === 'square') ? dx : $options.height;
      var offsetX = $options.offsetX;
      var offsetY = $options.offsetY;
      var xmax = width - dx; alert(xmax);
      var ymax = height - dy;
      var sx = width / dx;
      var sy = height / dy;
      if (name === 'rect' || name === 'square') {
        $area.width(dx).height(dy);
      }
      $box.width(width).height(height);
      $this.on('mousemove', function (e) {
        var x = Math.min(Math.max(e.pageX - offset.left - dx / 2 + offsetX, 0), xmax);
        var y = Math.min(Math.max(e.pageY - offset.top - dy / 2 + offsetY, 0), ymax);
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
