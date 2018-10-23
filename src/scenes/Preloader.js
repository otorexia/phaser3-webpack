import assets from './../assets.json'
import loadAssets from './../utils/loadAssets'

var BAR_HEIGHT = 10;

export default class Preloader extends Phaser.Scene {
  constructor() {
    super({
      key: 'Preloader'
    });
  }

  preload() {
    this.facebook.showLoadProgress(this);
    this.facebook.once('startgame', this.startGame, this);

    loadAssets(this, assets);
  }

  startGame() {
    this.scene.switch('Game');
  }

};
