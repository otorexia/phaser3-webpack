const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ZipPlugin = require('zip-webpack-plugin');
const common = require('./webpack.common.js');
const config = require('./configs/config.dev');
const { title } = require('./package.json');

const setup = {
  mode: 'production',
  output: {
    chunkFilename: 'phaser.js'
  },
  plugins: [new CleanWebpackPlugin(['build'])]
};

if (config.zip) {
  setup.plugins.push(
    new ZipPlugin({
      filename: `${title}.${config.zipExtName}`
    })
  );
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
  );
}
const configer = merge(common, setup);

webpack(configer, (err, stats) => {
  if (err || stats.hasErrors()) {
    // Handle errors here
    console.log(stats.compilation.errors); // eslint-disable-line
  }
  // Done processing
});
