import Logo from './../objects/logo';
let bombs, gameOver = false;
let score = 0;

export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: 'Game'
    });
  }
  create () {
    this.logo = this.add.existing(new Logo(this));
  }

  update () {
    this.logo.update();
  }
};
