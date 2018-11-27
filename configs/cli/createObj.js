const colors = require('colors/safe');
const createFile = require('create-file');

const dir = './src/objects';

const extendList = {
  sprite: 'Phaser.GameObjects.Sprite',
  image: 'Phaser.GameObjects.Image',
  bitmapText: 'Phaser.GameObjects.BitmapText',
  arcadeImage: 'Customs.ArcadeImage',
  arcadeSprite: 'Customs.ArcadeSprite'
};

function createTemplate(extend, name) {
  if (!extendList[extend]) {
    console.log(`${colors.bold(colors.yellow("extend name dosn't exist, please add or fix it"))}`); // eslint-disable-line
    return null;
  }
  return `export default class ${name} extends ${extendList[extend]} {
  constructor(scene) {
    super(scene);
    console.log(this); // eslint-disable-line
  }

  // update() {}
}
`;
}

module.exports = (extend, name) => {
  if (extend && name) {
    const template = createTemplate(extend, name);
    if (template) {
      createFile(`${dir}/${name}.js`, template, err => {
        if (!err) {
          console.log(`${colors.bold(colors.green(`Object named ${colors.cyan(name)} created.`))}`); // eslint-disable-line no-console
        } else {
          console.log(`${colors.bold(colors.red(`Object named ${name} already exists.`))}`); // eslint-disable-line no-console
          // file either already exists or is now created (including non existing directories)
          console.log(err); // eslint-disable-line
        }
      });
    }
  } else {
    console.log(`${colors.bold(colors.red('extend and Name is required'))}`); // eslint-disable-line no-console
  }
};
