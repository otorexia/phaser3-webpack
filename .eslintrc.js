const webpackConfig = require('./webpack.common');

module.exports = {
  extends: ['airbnb/base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true
    }],
    'no-plusplus': [2, {
      allowForLoopAfterthoughts: true
    }],
    'global-require': 0
  },
  globals: {
    Phaser: false,
    Global: false,
    Customs: false
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: true
  },
  'env': {
    browser: true,
    node: true,
    mocha: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: webpackConfig
      }
    }
  },
}
