const path = require('path');
const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ZipPlugin = require('zip-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const common = require('./webpack.common.js');
const config = require('./configs/config.dev');

const name = 'sample';
const version = '0.0.0';
const copyright = 'example name';
const zip = true;

const setup = {
  mode: 'production',
  output: {
    chunkFilename: 'phaser.js'
  },
  plugins: [new CleanWebpackPlugin([`build/plugins/${name}`]), new UnminifiedWebpackPlugin()]
};

common.entry = {
  [`${name}`]: `./plugins/${name}`
};
common.output = {
  path: path.resolve(__dirname, `./build/plugins/${name}`),
  filename: '[name].min.js',
  library: name,
  libraryTarget: 'umd',
  umdNamedDefine: true
};

common.plugins = [
  new webpack.DefinePlugin({
    // Enable both canvas and WebGL for better support
    'typeof CANVAS_RENDERER': JSON.stringify(true),
    'typeof WEBGL_RENDERER': JSON.stringify(true),

    // Development env
    _DEV_: JSON.stringify(true),
    _VERSION_: JSON.stringify(version)
  }),
  new webpack.BannerPlugin({
    banner: `${name} - ${version} © ${copyright}`
  })
];

if (config.zip && zip) {
  setup.plugins.push(
    new ZipPlugin({
      filename: `${name}.${config.zipExtName}`
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
