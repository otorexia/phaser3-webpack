import resize from './utils/resize';
import * as config from './config';
/* NOTE: From  here on out use require
 * eg: const plugin = require('<pluginame>')
 * or const plugin = require('<pluginame>').plugin;
 **/
function extendConfig(Phaser) {
  const scenes = require('./scenes');

  config.scene = Object.values(scenes);
  config.type = Phaser.AUTO;
  config.plugins = {
    global: []
  }
}

if (process.env.NODE_ENV === 'development') {
  import('phaser')
    .then((Phaser) => {
      initGame(Phaser);
    });
} else {
  import('phaserMin')
    .then((Phaser) => {
      initGame(Phaser);
    });
}

function initGame(Phaser) {
  // for Global exposure. use this pattern - require("expose-loader?<libraryName>!./<location to file>");
  require("expose-loader?Global!./global");
  require("expose-loader?Customs!./utils/customs");

  let game;
  extendConfig(Phaser);
  window.onload = function () {
    config.canvas.width = config.width;
    config.canvas.height = config.height;
    game = new Phaser.Game(config);
    resize(game, config.width, config.height);
    window.addEventListener('resize', () => {
      resize(game, config.width, config.height);
    }, false);
  }
}
