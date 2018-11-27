const colors = require('colors/safe');
const createScene = require('./configs/cli/createScene');
const createObject = require('./configs/cli/createObj');
const updateIndex = require('./configs/cli/updateIndex');

/**
 * Run using node (i.e. node cli help)
 */

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

function updateSceneIndex() {
  updateIndex('./src/scenes');
}

if (args[2] === 'update') {
  if (args[3]) {
    if (args[3] === 's') {
      updateSceneIndex();
      console.log(`${colors.bold(colors.blue(`scenes list updated.`))}`); // eslint-disable-line no-console
    }
  } else {
    updateSceneIndex();
    console.log(`${colors.bold(colors.blue(`All list updated.`))}`); // eslint-disable-line no-console
  }
}

if (args[2] === 'help' || !args[2]) {
  // eslint-disable-next-line
  console.log(`${colors.bold(colors.bgRed('Here is the full list of available cmmand:'))}
  scene: create game scene ${colors.bold(colors.grey('--->'))} ${colors.bold(
    colors.yellow('node cli scene <scene-name>')
  )}
  obj || object: create game object ${colors.bold(colors.grey('--->'))} ${colors.bold(
    colors.yellow('node cli obj <object-type> <object-name>')
  )}
  ${colors.bold(colors.green('----------------------------------------------'))}
${colors.bold(colors.red('update'))} ${colors.bold(colors.grey('--->'))} ${colors.bold(
    colors.yellow('node cli update')
  )}
  s - for updating game scene list ${colors.bold(colors.grey('--->'))} ${colors.bold(
    colors.yellow('node cli update s')
  )}

${colors.bold(`*for help - ${colors.cyan('node cli help')}`)}
  `);
}
