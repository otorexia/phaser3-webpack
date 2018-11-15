'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const common = require('./webpack.common.js');
const colors = require('colors/safe');
const portfinder = require('portfinder');
const url = require('./package.json').url

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
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [`Game is running here ${colors.bold(colors.blue('http://localhost:' + finalPort))}`],
          notes: [`For more info visit ${url}`]
        }
      })
    ],
  }));
  const server = new WebpackDevServer(compiler, {
    https: false,
    quiet: true,
    stats: {
      colors: true,
    },
  });
  server.listen(finalPort, null, function () {
    // console.log(`Project is running at: ${colors.bold(colors.green('http://localhost:' + finalPort))}`);
  });
});
