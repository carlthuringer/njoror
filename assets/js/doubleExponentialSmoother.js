window.DoubleExponentialSmoother = (function() {
  'use strict';

  function DoubleExponentialSmoother(initialValues, smoothingFactor) {
    this.smoothingFactor = smoothingFactor;
    this.trendSmoothingFactor = initialValues.reduce(function(fold, value) { return fold + value; }) / initialValues.length;
    this.data = initialValues[initialValues.length - 1];
    this.data1 = initialValues[initialValues.length - 2];
    this.best = this.data - this.data1;
    this.best1 = this.best;
  }

  DoubleExponentialSmoother.prototype.smooth = function(value) {
    var newData = this.smoothingFactor * value + (1 - this.smoothingFactor) * (this.data1 + this.best1);
    var newBest = this.trendSmoothingFactor * (this.data - this.data1) + (1 - this.trendSmoothingFactor) * this.best1;
    this.data1 = this.data;
    this.best1 = this.best;
    this.data = newData;
    this.best = newBest;

    return newData;
  };

  return DoubleExponentialSmoother;
})();
