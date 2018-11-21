// To Run This File -->  npm run update:def
const download = require('download-file');
const colors = require('colors/safe');

const url =
  'https://raw.githubusercontent.com/photonstorm/phaser3-docs/master/typescript/phaser.d.ts';

const options = {
  directory: './',
  name: 'phaser.d.ts',
  timeout: 20000
};

download(url, options, err => {
  if (err) throw err;
  if (!err)
    console.log( // eslint-disable-line
      `${colors.bold(colors.green(options.name))} completed download at location ${colors.bold(
        colors.yellow(options.directory.replace('.', ''))
      )}`
    );
});
