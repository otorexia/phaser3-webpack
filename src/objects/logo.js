const velocity = 2000;
const updateBy = 2;

export default class Logo extends Customs.ArcadeImage {
  constructor(scene) {
    super(scene, scene.cameras.main.width / 2, scene.cameras.main.height / 2, 'logo');
    this.setOrigin(0.5);
    this.setScale(0.8);
    this.alphaBottomLeft = 0;
    this.aVelocity = velocity;
    this.clockWise = true;
    this.setAngularVelocity(this.aVelocity);
  }

  update() {
    if (this.clockWise) {
      this.aVelocity -= updateBy;
      if (this.aVelocity < -Math.abs(velocity)) this.clockWise = false;
    } else {
      this.aVelocity += updateBy;
      if (this.aVelocity > velocity) this.clockWise = true;
    }
    this.setAngularVelocity(this.aVelocity);
  }
}
