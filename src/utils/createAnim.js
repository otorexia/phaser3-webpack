export default function(scene, key, sprite, frames, frameRate = 60, repeat = 1) {
  const config = {
    key,
    frames: frameRate,
    repeat
  };
  if (frames.constructor === Array) {
    config.frames = scene.anims.generateFrameNumbers(sprite, {
      frames
    });
  }
  scene.anims.create(config);
}
