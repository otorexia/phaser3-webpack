# Phaser 3 template

Project development setup for Phaser 3.

## Highlights

##

- Asset management
- Auto spritesheet
- Code hinting
- Custom Class (global scope)
- custom phaser import
- Image optimization on build
- Auto zip on build
- Easily change setup configure with `config.dev.js`

##

- eslint `Airbnb` with some customization, see `.eslintrc`.
- test (mocha and chai --in-progress)
- dev server with live-reload and auto port finder
- simple `SHOW_ALL` style stretch mode
- Auto spritesheet with spritesmith
- Image optimization on build
- streamlined assets loading
- modular development setup
- Facebook instant setup

## How to run

- Prepare: `npm install` or `yarn install`
- Development: `npm start` or `yarn start`
- Build: `npm run build:web` or `yarn run build:web`
- Update Phaser: `npm run update:phaser`

## File Structure guide

### Checkout branch

- Master (Main)
- FB (facebook instant) (Deprecated)

### Directory

- 'assets/' => for external assets and spritesheet source (see `config.dev.js` for more information)
- configs/
  - 'config.dev.js' => for development setup options
- plugins/ => Place all the plugin files or build your own here.
- 'src/' => here is your working folder for actual game creation
  - 'assets/' => put all the assets in this folder to load in `assets.json`
  - 'objects/' => think of it as your prefab assets
  - 'scene/' => all the game scene
  - 'utils/' => helper functions
    - customs => all your custom classes or function
  - 'assets.json' => configure this to load all the assets
  - 'config.js' => configure phaser
  - 'global' => available as `Global` in all files
  - 'main.js' => phaser initialization
- 'index.html' => no need to touch it! but this is your main html

\*\* fb instant (outdated)

- config.json => for fb instant development
- fbapp-config.json => for fb messenger settings

## Tips

- use `config.dev.js` to modify and control project setup.
- any custom object, class, function included in `src/utils/index.js` is accessible in global(window) scope as `Customs`
- first change package.json, title and version to reflect your project.
- choose which phaser module to load in `src/main.js`.
- set format on save in your editor(i.e. vscode) to auto format based on prettier.

* No need to use full path when accessing files. `alias` are available in `webpack.common.js` and `jsconfig.json` file. please refer to this files for the available list or adding new ones.
* Create additional build files by copying `webpack.prod.plugin.js` for plugins and `webpack.prod.web` for game.
* You can remove `package-lock.json` from `.gitignore` as recommended by NPM in your game projects.

## CLI

there are number of option available in ./cli.js
you can extend it's functionality as you want.

To create scene

```node
node cli scene <scene-name>
```

To create Object

```node
node cli obj <object-type> <object-name>
```

To update scenes index

```node
node cli update
```
