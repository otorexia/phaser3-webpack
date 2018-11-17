// export default class Logo extends Phaser.GameObjects.Image {
export default class Logo extends Customs.ImpactImage {
  constructor(scene) {
    super(scene, scene.cameras.main.width / 2, scene.cameras.main.height / 2, 'logo');

    console.log(this)
    this.setActiveCollision();
    this.setOrigin(0.5);
    this.alphaBottomLeft = 0;
    this.aVelocity = 2000;
    this.setScale(0.5);
    // this.setAngularVelocity(this.aVelocity);
  }

  update() {
  //   if (this.aVelocity < -10000) this.aVelocity += 10;
  //   if (this.aVelocity > 10000) this.aVelocity -= 10;
  //   this.setAngularVelocity(this.aVelocity);
  }
}
