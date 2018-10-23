'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');
const common = require('./webpack.common.js');
const colors = require('colors/safe');
const portfinder = require('portfinder');
const config = require('./config.json')

portfinder.basePort = 4000;

portfinder.getPort(function (err, finalPort) {
  if (err) {
    callback(err);
  }
  const compiler = webpack(merge(common, {
    entry: {
      game: [
        // Live-reload
        `webpack-dev-server/client?http://localhost:${finalPort}`,
      ],
    },
    output: {
      chunkFilename: "chunk-[name]-[chunkhash].js"
    },
    devtool: 'source-map',
    mode: 'development',
    plugins: [
    ],
  }));
  const server = new WebpackDevServer(compiler, {
    https: false,
    stats: {
      colors: true,
    },
  });
  server.listen(finalPort, null, function () {
    console.log(`Project is running at: ${colors.bold(colors.green('https://localhost:' + finalPort))}`);
  });
});
