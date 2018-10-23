export default class Logo extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, 0, 0, 'logo');

    const x = scene.cameras.main.width / 2;
    const y = scene.cameras.main.height / 2;

    this.setPosition(x, y);
    this.setOrigin(0.5);
  }

  update() {
    this.angle += 0.1;
  }
}
