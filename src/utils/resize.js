export default function(game, maxWidth, maxHeight, type = 'FITALL') {
  const canvas = document.getElementById('game');
  canvas.style.maxWidth = `${maxWidth}px`;
  canvas.style.maxHeight = `${maxHeight}px`;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const windowRatio = windowWidth / windowHeight;
  const gameRatio = game.config.width / game.config.height;
  if (type === 'FITALL') {
    if (windowRatio < gameRatio) {
      canvas.style.width = `${windowWidth}px`;
      canvas.style.height = `${windowWidth / gameRatio}px`;
    } else {
      canvas.style.width = `${windowHeight * gameRatio}px`;
      canvas.style.height = `${windowHeight}px`;
    }
  }
}
