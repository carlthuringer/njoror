function Core(window, document, d3) {
  'use strict';

  var raf = window.requestAnimationFrame;
  var dataGenerator = new DataGenerator();
  var ball = d3.select('#ball');

  var ballAnimator = animateBall(ball, raf);

  raf(ballAnimator);

  function animateBall(ball, window) {
    return function(time) {
      var factorTime = time * 0.005;
      var position = dataGenerator.sineWave(factorTime) * 30;
      ball.style('top', position.toString() + 'px');
      raf(this);
    };
  }


}
