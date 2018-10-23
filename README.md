# Phaser 3 template

basic template project for game development with Phaser 3.

## Highlights

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

## File Structure guide

- 'assets/' => for external assets and spritesheet source (see `config.dev.js` for more information)
- 'src/' => here is your working folder for actual game creation
  - 'assets/' => put all the assets in this folder to load in `assets.json`
  - 'constructors/' => your custom constructors
  - 'objects/' => think of it as your prefab assets
  - 'scene/' => all the game scene
  - 'utils/' => helper functions
  - 'assets.json' => configure this to load all the assets
  - 'config.js' => config phaser
  - 'global' => 'in development'
  - 'main.js' => phaser init
- 'config.dev.js' => for development setup options
- 'index.html' => no need to tuoch it! but this is your main html

** for fb instant
- config.json => for fb instant develpment
- fbapp-config.json => for fb messanger settings

## Tips

  use `config.dev.js` to modify and control project setup.

