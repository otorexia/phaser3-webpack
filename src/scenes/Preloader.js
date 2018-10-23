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
    loadAssets(this, assets);

    // Display loading progress
    var width = this.sys.game.config.width;
    this.bar = this.add.graphics({
      x: this.centerX() - this.centerX(),
      y: this.centerY()
    });
    this.bar.fillStyle(0xAEAEAE, 1)
      .fillRect(0, -(BAR_HEIGHT / 2), width, BAR_HEIGHT);

    this.load.on('progress', this.updateProgressDisplay, this);
  }

  create() {
    this.load.off('progress', this.updateProgressDisplay, this);

    this.tweens.add({
      targets: this.bar,
      scaleY: 0,
      duration: 200,
      ease: 'EaseQuadOut',
      onComplete: function () {
        this.scene.switch('Game');
      },
      callbackScope: this,
    })
  }

  updateProgressDisplay(pct) {
    this.bar.clear()
      .fillStyle(0x50576B, 1)
      .fillRect(0, -(BAR_HEIGHT / 2), this.sys.game.config.width, BAR_HEIGHT)
      .fillStyle(0xFFFFFF, 1)
      .fillRect(0, -(BAR_HEIGHT / 2), Math.round(this.sys.game.config.width * pct), BAR_HEIGHT);
  }

  centerX() {
    return this.sys.game.config.width / 2;
  }
  centerY() {
    return this.sys.game.config.height / 2;
  }
};
