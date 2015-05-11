window.ExponentialSmoother = (function() {
  'use strict';

  function ExponentialSmoother(initialValue, smoothingFactor) {
    this.history = [initialValue];
    this.smoothingFactor = smoothingFactor;
  }

  ExponentialSmoother.prototype.smooth = function(value) {
    this.history.push(this.smoothingFactor * value + (1 - this.smoothingFactor) * this.history[this.history.length - 1]);
    return this.history[this.history.length - 1];
  };

  return ExponentialSmoother;
})();
