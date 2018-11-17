export default class Logo extends Customs.ArcadeImage {
  constructor(scene) {
    super(scene, scene.cameras.main.width / 2, scene.cameras.main.height / 2, 'logo');
    console.log(this)
    this.setOrigin(0.5);
    this.setScale(0.8);
    this.alphaBottomLeft = 0;
    this.aVelocity = 2000;
    this.setAngularVelocity(this.aVelocity);
  }

  update() {
    if (this.aVelocity < -10000) this.aVelocity += 10;
    if (this.aVelocity > 10000) this.aVelocity -= 10;
    this.setAngularVelocity(this.aVelocity);
  }
}
