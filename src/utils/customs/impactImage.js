module.exports = class extends Phaser.Physics.Impact.Image {
  constructor(scene, x, y, sprite, frame) {
    super(scene.impact.world, x, y, sprite, frame);
    scene.add.existing(this);
  }
}
