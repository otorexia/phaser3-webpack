module.exports = class extends Phaser.Physics.Matter.Image {
  constructor(scene, x, y, sprite, frame, opt) {
    super(scene.matter.world, x, y, sprite, frame, opt);
    scene.add.existing(this);
  }
}
