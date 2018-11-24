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
- Easily change setup configer with `config.dev.js`

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
- Build: `npm run build` or `yarn run build`
- Update Phaser: `npm run update:phaser`

## File Structure guide

### Ckeckout branch

- Master (Main)
- FB (facebok instant) (Deprecated)

### Directory

- 'assets/' => for external assets and spritesheet source (see `config.dev.js` for more information)
- configs
  - 'config.dev.js' => for development setup options
- 'src/' => here is your working folder for actual game creation
  - 'assets/' => put all the assets in this folder to load in `assets.json`
  - 'objects/' => think of it as your prefab assets
  - 'scene/' => all the game scene
  - 'utils/' => helper functions
    - customs => all your custom classes or function
  - 'assets.json' => configure this to load all the assets
  - 'config.js' => config phaser
  - 'global' => available as `Global` in all files
  - 'main.js' => phaser init
- 'index.html' => no need to tuoch it! but this is your main html

\*\* fb instant (outdated)

- config.json => for fb instant develpment
- fbapp-config.json => for fb messanger settings

## Tips

- use `config.dev.js` to modify and control project setup.
- any custom object, class, funtion incuded in `src/utils/index.js` is accessible in global(window) scope as `Customs`
- first change package.json, title and version to reflect your project.
- choose which phaser module to load in `src/main.js`.
- set format on save in your editor(i.e. vscode) to auto format based on prettier.

* Create additional build files by copying `webpack.prod.plugin.js` for plugins and `webpack.prod.web` for game.
* You can remove `package-lock.json` from `.gitignore` as recomended by NPM in your game projects.
