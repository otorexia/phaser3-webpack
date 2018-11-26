const colors = require('colors/safe');
const createScene = require('./configs/cli/createScene');
const createObject = require('./configs/cli/createObj');
const updateIndex = require('./configs/cli/updateIndex');

const args = [];
process.argv.forEach(val => {
  args.push(val);
});

if (args[2] === 'scene') {
  createScene(args[3]);
}

if (args[2] === 'obj' || args[2] === 'object') {
  createObject(args[3], args[4]);
}

if (args[2] === 'update') {
  updateIndex('./src/scenes');
  console.log(`${colors.bold(colors.blue(`scenes list updated.`))}`); // eslint-disable-line no-console
}
