import Logo from '../objects/logo';

export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: 'Game'
    });
  }

  create() {
    this.counter = this.add.text(0, 0, Global.name, {
      fontFamily: 'Arial',
      fontSize: 24,
      color: '#00ff00'
    });
    this.logo = new Logo(this);
  }

  update() {
    this.logo.update();
    this.counter.setText(`Velocity: ${this.logo.aVelocity}`);
  }
}
