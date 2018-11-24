import resize from './utils/resize';
import * as config from './config';

function extendConfig(Phaser) {
  const scenes = require('./scenes');
  config.scene = Object.values(scenes);
  config.type = Phaser.AUTO;
  // for plugins require file inside this funtion
  config.plugins = {
    global: []
  };
}

function initGame(Phaser) {
  // for Global exposure. use this pattern - require("expose-loader?<libraryName>!./<location to file>");
  /* eslint-disable */
  require('expose-loader?Global!./global');
  require('expose-loader?Customs!./utils/customs');
  /* eslint-enable */

  let game;
  extendConfig(Phaser);
  window.onload = () => {
    config.canvas.width = config.width;
    config.canvas.height = config.height;
    game = new Phaser.Game(config);
    resize(game, config.width, config.height);
    window.addEventListener(
      'resize',
      () => {
        resize(game, config.width, config.height);
      },
      false
    );
  };
}

if (process.env.NODE_ENV === 'development') {
  import('phaser').then(Phaser => {
    initGame(Phaser);
  });
} else {
  /**
   * load any kind of phaser build for production, including custom builds.
   */
  import('phaserMin').then(Phaser => {
    initGame(Phaser);
  });
}
