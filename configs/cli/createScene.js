const colors = require('colors/safe');
const createFile = require('create-file');
const updateIndex = require('./updateIndex');

const dir = './src/scenes';

function createTemplate(name) {
  return `export default class ${name} extends Phaser.Scene {
  constructor() {
    super({
      key: '${name}'
    });
  }

  create() {
    console.log(this); // eslint-disable-line
  }

  // update() {}
}
`;
}

module.exports = name => {
  if (name) {
    const template = createTemplate(name);
    createFile(`${dir}/${name}.js`, template, err => {
      if (!err) {
        updateIndex(dir);
        console.log(`${colors.bold(colors.green(`scene named ${colors.cyan(name)} created.`))}`); // eslint-disable-line no-console
      } else {
        console.log(`${colors.bold(colors.red(`scene named ${name} already exists.`))}`); // eslint-disable-line no-console
        // file either already exists or is now created (including non existing directories)
        console.log(err); // eslint-disable-line
      }
    });
  } else {
    console.log(`${colors.bold(colors.red('Name is required'))}`); // eslint-disable-line no-console
  }
};
