module.exports = class extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, sprite, frame) {
    super(scene, x, y, sprite, frame);
    scene.add.existing(this);
    scene.physics.world.enableBody(this, 0);
  }
}
