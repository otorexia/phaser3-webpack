// copied from https://jwiese.eu/en/blog/2018/04/phaser-3---loading-screen--asset-organization/
/* eslint-disable no-prototype-builtins */
export default function(phaser, json) {
  Object.keys(json).forEach(group => {
    if (group !== '') {
      Object.keys(json[group]).forEach(key => {
        const value = json[group][key];

        if (
          group === 'atlas' ||
          group === 'unityAtlas' ||
          group === 'bitmapFont' ||
          group === 'spritesheet' ||
          group === 'multiatlas'
        ) {
          // atlas:ƒ       (key, textureURL,  atlasURL,  textureXhrSettings, atlasXhrSettings)
          // unityAtlas:ƒ  (key, textureURL,  atlasURL,  textureXhrSettings, atlasXhrSettings)
          // bitmapFont ƒ  (key, textureURL,  xmlURL,    textureXhrSettings, xmlXhrSettings)
          // spritesheet:ƒ (key, url,         config,    xhrSettings)
          // multiatlas:ƒ  (key, textureURLs, atlasURLs, textureXhrSettings, atlasXhrSettings)
          phaser.load[group](key, value[0], value[1]);
        } else if (group === 'audio') {
          // do not add mp3 unless, you bought a license ;)
          // opus, webm and ogg are way better than mp3
          if (value.hasOwnProperty('opus') && phaser.sys.game.device.audio.opus) {
            phaser.load[group](key, value.opus);
          } else if (value.hasOwnProperty('webm') && phaser.sys.game.device.audio.webm) {
            phaser.load[group](key, value.webm);
          } else if (value.hasOwnProperty('ogg') && phaser.sys.game.device.audio.ogg) {
            phaser.load[group](key, value.ogg);
          } else if (value.hasOwnProperty('wav') && phaser.sys.game.device.audio.wav) {
            phaser.load[group](key, value.wav);
          }
        } else if (group === 'html') {
          // html:ƒ (key, url, width, height, xhrSettings)
          phaser.load[group](key, value[0], value[1], value[2]);
        } else {
          // animation:ƒ (key, url, xhrSettings)
          // binary:ƒ (key, url, xhrSettings)
          // glsl:ƒ (key, url, xhrSettings)
          // image:ƒ (key, url, xhrSettings)
          // image:ƒ (key, [url, normal-url], xhrSettings)
          // json:ƒ (key, url, xhrSettings)
          // plugin:ƒ (key, url, xhrSettings)
          // script:ƒ (key, url, xhrSettings)
          // svg:ƒ (key, url, xhrSettings)
          // text:ƒ (key, url, xhrSettings)
          // tilemapCSV:ƒ (key, url, xhrSettings)
          // tilemapTiledJSON:ƒ (key, url, xhrSettings)
          // tilemapWeltmeister:ƒ (key, url, xhrSettings)
          // xml:ƒ (key, url, xhrSettings)
          phaser.load[group](key, value);
        }
      }, phaser);
    }
  }, phaser);
}
