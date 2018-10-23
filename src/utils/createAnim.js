export default function (phaser, name, sprite, frames, rate, repeat) {
  let options = {
    key: name,
    frameRate: rate
  };
  if (frames.constructor === Array) {
    options.frames = phaser.anims.generateFrameNumbers(sprite, {
      start: frames[0],
      end: frames[1]
    })
  } else {
    options.frames = [{
      key: sprite,
      frame: frames
    }]
  }
  if (repeat) options.repeat = repeat;
  phaser.anims.create(options)
}
