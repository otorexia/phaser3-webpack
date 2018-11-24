const path = require('path');
const webpack = require('webpack');
const SpritesmithPlugin = require('webpack-spritesmith');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { version } = require('./package.json');
const { title } = require('./package.json');
const config = require('./configs/config.dev');

// extend config
config.logo.title = title;
config.logo.emitStats = false;
config.logo.persistentCache = false;

module.exports = {
  entry: {
    game: ['./src/main.js']
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.css', '.png', '.jpg', '.gif', '.jpeg', '.json'],
    alias: {
      Plugins: path.resolve(__dirname, 'plugins'),
      Src: path.resolve(__dirname, 'src'),
      Objects: path.resolve(__dirname, 'src/objects'),
      Utils: path.resolve(__dirname, 'src/utils'),
      phaserMin$: path.resolve(__dirname, './node_modules/phaser/dist/phaser.min.js'),
      phaserArcade$: path.resolve(
        __dirname,
        './node_modules/phaser/dist/phaser-arcade-physics.min.js'
      )
    }
  },
  output: {
    path: path.resolve(__dirname, './build/web'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: require.resolve('./src/utils/customs'),
        use: [
          {
            loader: 'expose-loader',
            options: 'Customs'
          }
        ]
      },
      {
        test: /\.png$/,
        use: ['file-loader?name=i/[hash].[ext]']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      // Enable both canvas and WebGL for better support
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true),

      // Development env
      _DEV_: JSON.stringify(true),
      _VERSION_: JSON.stringify(version)
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      title,
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      }
    ])
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};

if (config.plugins.build) {
  Object.keys(config.plugins).forEach(key => {
    if (key !== 'build') {
      // module.exports.entry[config.plugins[key].name] = `./plugins/${config.plugins[key].name}`;
    }
  });
}

if (config.includeCustomPhaser) {
  Object.keys(config.customPhaserBuild).forEach(key => {
    module.exports.resolve.alias[`${key}$`] = `${config.customPhaserBuild[key]}`;
  });
}

if (config.logo.make) {
  module.exports.plugins.push(new FaviconsWebpackPlugin(config.logo));
}

if (config.spritesmeeth) {
  module.exports.plugins.push(new CleanWebpackPlugin(['src/assets/spritesheet']));
  for (let i = 0; i < config.spritesheetFolders.length; i++) {
    module.exports.plugins.push(
      new SpritesmithPlugin({
        src: {
          cwd: path.resolve(__dirname, `assets/${config.spritesheetFolders[i]}`),
          glob: '*.png'
        },
        target: {
          image: path.resolve(
            __dirname,
            `src/assets/spritesheets/${config.spritesheetFolders[i]}.png`
          ),
          css: [
            // path.resolve(__dirname, 'src/assets/spritesheets/sprite.css'),
            [
              path.resolve(
                __dirname,
                `src/assets/spritesheets/${config.spritesheetFolders[i]}.json`
              ),
              {
                format: 'json_texture'
              }
            ]
          ]
        },
        apiOptions: {
          generateSpriteName: image => {
            const spriteName = image.split('\\');
            return spriteName[spriteName.length - 1].replace('.png', '');
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
