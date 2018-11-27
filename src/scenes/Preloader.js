import assets from '../assets.json';
import loadAssets from '../utils/loadAssets';

const BAR_HEIGHT = 10;
const SWITCH_SCENE_NAME = 'Game';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super({
      key: 'Preloader'
    });
  }

  preload() {
    loadAssets(this, assets);

    // Display loading progress
    const { width } = this.sys.game.config;
    this.bar = this.add.graphics({
      x: this.centerX() - this.centerX(),
      y: this.centerY()
    });
    this.bar.fillStyle(0xaeaeae, 1).fillRect(0, -(BAR_HEIGHT / 2), width, BAR_HEIGHT);

    this.load.on('progress', this.updateProgressDisplay, this);
  }

  create() {
    this.load.off('progress', this.updateProgressDisplay, this);

    this.tweens.add({
      targets: this.bar,
      scaleY: 0,
      duration: 200,
      ease: 'EaseQuadOut',
      onComplete() {
        this.scene.switch(SWITCH_SCENE_NAME);
      },
      callbackScope: this
    });
  }

  updateProgressDisplay(pct) {
    this.bar
      .clear()
      .fillStyle(0x50576b, 1)
      .fillRect(0, -(BAR_HEIGHT / 2), this.sys.game.config.width, BAR_HEIGHT)
      .fillStyle(0xffffff, 1)
      .fillRect(0, -(BAR_HEIGHT / 2), Math.round(this.sys.game.config.width * pct), BAR_HEIGHT);
  }

  centerX() {
    return this.sys.game.config.width / 2;
  }

  centerY() {
    return this.sys.game.config.height / 2;
  }
}
