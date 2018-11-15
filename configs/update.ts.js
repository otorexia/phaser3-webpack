// To Run This File -->  npm run update:def
var download = require('download-file')
const colors = require('colors/safe');

var url = "https://raw.githubusercontent.com/photonstorm/phaser3-docs/master/typescript/phaser.d.ts"

var options = {
  directory: "./",
  name: "phaser.d.ts",
  timeout: 20000
}

download(url, options, function (err) {
  if (err) throw err
  if (!err) console.log(`${colors.bold(colors.green(options.name))} completed download at location ${colors.bold(colors.yellow(options.directory.replace(".", "")))}`);
})
