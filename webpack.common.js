'use strict';
const path = require('path');
const webpack = require('webpack');
var SpritesmithPlugin = require('webpack-spritesmith');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const version = require('./package.json').version;
const name = require('./package.json').name;
const config = require('./configs/config.dev');

// extend config
config.logo.title = name;
config.logo.emitStats = false;
config.logo.persistentCache = true;

module.exports = {
  entry: {
    game: ['./src/main.js'],
  },
  resolve: {
    modules: ['src', 'assets','node_modules'],
    extensions: ['.js', '.css', '.png', '.jpg', '.gif', '.jpeg', '.json'],
    alias: {
      phaserMin$: path.resolve(__dirname, './node_modules/phaser/dist/phaser.min.js'),
      phaserArcade$: path.resolve(__dirname, './node_modules/phaser/dist/phaser-arcade-physics.min.js'),
    }
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.png$/,
        use: [
          'file-loader?name=i/[hash].[ext]'
        ]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // Enable both canvas and WebGL for better support
      "typeof CANVAS_RENDERER": JSON.stringify(true),
      "typeof WEBGL_RENDERER": JSON.stringify(true),

      // Development env
      '_DEV_': JSON.stringify(true),
      '_VERSION_': JSON.stringify(version),
    }),
    new FaviconsWebpackPlugin(config.logo),
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: name,
      inject: 'body',
    }),
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }])
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

};

if (config.includeCustomPhaser) {
  for (let c in config.customPhaserBuild) {
    if (config.customPhaserBuild.hasOwnProperty(c)) {
      module.exports.resolve.alias[`${c}$`] = `${config.customPhaserBuild[c]}`;
    }
  }
}

if (config.spritesmeeth) {
  module.exports.plugins.push(
    new CleanWebpackPlugin(['src/assets/spritesheet']),
  );
  for(let i = 0; i < config.spritesheetFolders.length; i++){
    module.exports.plugins.push(
      new SpritesmithPlugin({
        src: {
          cwd: path.resolve(__dirname, `assets/${config.spritesheetFolders[i]}`),
          glob: '*.png'
        },
        target: {
          image: path.resolve(__dirname, `src/assets/spritesheets/${config.spritesheetFolders[i]}.png`),
          css: [
            // path.resolve(__dirname, 'src/assets/spritesheets/sprite.css'),
            [path.resolve(__dirname, `src/assets/spritesheets/${config.spritesheetFolders[i]}.json`), {
              format: 'json_texture'
            }]
          ]
        },
        apiOptions: {
          generateSpriteName: (image) => {
            let name = image.split("\\");
            return name[name.length - 1].replace('.png', '');
          },
          cssImageRef: `~${config.spritesheetFolders[i]}.png`
        },
        spritesmithOptions: {
          algorithm: 'binary-tree'
        }
      })
    );
  }
}
