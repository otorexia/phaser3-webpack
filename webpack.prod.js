'use strict';
const resolve = require('path').resolve;
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common.js');
const ZipPlugin = require('zip-webpack-plugin');
const config = require('./config.dev');
const name = require('./package.json').name

let setup = {
  mode: 'production',
  output: {
    chunkFilename: "phaser.js"
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new ZipPlugin({
      filename: name+'.zip'
    })
  ]
}

if (config.imageMin) {
  setup.plugins.push(
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production',
      test: /\.(jpe?g|png|gif|svg)$/i,
      cacheFolder: resolve('./cache'),
      optipng: {
        optimizationLevel: config.imageMinQuality.png
      },
      gifsicle: {
        optimizationLevel: config.imageMinQuality.gif
      },
      jpegtran: {
        arithmetic: config.imageMinQuality.jpeg === 'arithmetic',
        progressive: config.imageMinQuality.jpeg === 'progressive'
      },
      svgo: config.imageMinQuality.svg,
      pngquant: config.imageMinQuality.pngquant
    })
  )
}
const configer = merge(common, setup);

webpack(configer, (err, stats) => {
    if (err || stats.hasErrors()) {
        // Handle errors here
        console.log(stats.compilation.errors);
    }
    // Done processing
});

