(function() {
  'use strict';

  describe("Exponential Smoother", function() {
    it("Initialized with an initial value of 1, and a smoothing factor of .5, it smooths the value 2 to 1.5", function() {
      var subject = new ExponentialSmoother(1, 0.5);
      expect(subject.smooth(2)).toBe(1.5);
    });

    it("Initialized with an initial value of 1, and a smoothing factor of .5, it smooths the series 2, 2 to 1.75", function() {
      var subject = new ExponentialSmoother(1, 0.5);
      subject.smooth(2);
      expect(subject.smooth(2)).toBe(1.75);
    });
  });
})();
