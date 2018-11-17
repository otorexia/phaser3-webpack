module.exports = {
  canvas: document.getElementById('game'),
  width: 480,
  height: 720,
  zoom: 1,
  resolution: 1,
  pixelArt: false,
  transparent: false,
  clearBeforeRender: true,
  fps: null,
  backgroundColor: '#000',
  physics: {
    // arcade, matter, impact
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    }
  },
  input: {
    // keyboard: false, // Enable or disable or Configure the keyboard input.
    // mouse: false, // Enable or disable or Configure the mouse input.
  },
  // Prevent default action of the mouse right click.
  disableContextMenu: true,
  // banner: false, // To hide banner completely
  // banner style
  banner: {
    text: '#ffffff',
    background: [
      '#00ff00',
      '#00ffff',
      '#ff0000',
    ],
    hidePhaser: false
  },
  loader: {
    path: 'assets/'
  },
  title: require('@/../../package.json').name,
  version: require('@/../../package.json').version,
  url: require('@/../../package.json').url,
}
