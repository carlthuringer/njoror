(function() {
  'use strict';

  describe("Double Exponential Smoother", function() {
    it("Initialized with an initial values of [1, 2], smoothing factor 0.5, it smooths 2 to 1.5", function() {
      var subject = new DoubleExponentialSmoother([1, 2], 0.5);
      expect(subject.smooth(3)).toBe(2.5);
    });
  });
})();
