export default class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: 'Boot'
    });
  }

  create() {
    // Initialize things here

    // Loading screen
    this.scene.switch('Preloader');
  }
}
