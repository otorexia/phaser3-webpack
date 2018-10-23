export default function (game, maxWidth, maxHeight, type = 'FITALL') {
  var canvas = document.getElementById('game');
  canvas.style.maxWidth = maxWidth + 'px';
  canvas.style.maxHeight = maxHeight + 'px';
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var windowRatio = windowWidth / windowHeight;
  var gameRatio = game.config.width / game.config.height;
  if (type === 'FITALL') {
    if (windowRatio < gameRatio) {
      canvas.style.width = windowWidth + 'px';
      canvas.style.height = (windowWidth / gameRatio) + 'px';
    } else {
      canvas.style.width = (windowHeight * gameRatio) + 'px';
      canvas.style.height = windowHeight + 'px';
    }
  }
}
