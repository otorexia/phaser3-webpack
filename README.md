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
- FB (facebok instant)

### Directory
- 'assets/' => for external assets and spritesheet source (see `config.dev.js` for more information)
- configs
  - 'config.dev.js' => for development setup options
- 'src/' => here is your working folder for actual game creation
  - 'assets/' => put all the assets in this folder to load in `assets.json`
  - 'constructors/' => your custom constructors
  - 'objects/' => think of it as your prefab assets
  - 'scene/' => all the game scene
  - 'utils/' => helper functions
  - 'assets.json' => configure this to load all the assets
  - 'config.js' => config phaser
  - 'global' => available as `Global` in any file
  - 'main.js' => phaser init
- 'index.html' => no need to tuoch it! but this is your main html

** fb instant (outdated)
- config.json => for fb instant develpment
- fbapp-config.json => for fb messanger settings

## Tips

  - use `config.dev.js` to modify and control project setup.
  - customs => any custom object, class, funtion incuded in `index.js` is accessible in global(window) scope as `Customs`
