export default function (scene, key, sprite, frames, frameRate = 60, repeat = 1) {
  var config = {
    key,
    frames:
    frameRate,
    repeat
  };
  if (frames.constructor === Array) {
    config.frames = scene.anims.generateFrameNumbers(sprite, { frames })
  } else {

  }
  scene.anims.create(config);
}
