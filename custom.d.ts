namespace Customs {
   /**
   * Custom Game Object.
  */
  class ArcadeImage extends Phaser.GameObjects.Image implements Phaser.Physics.Arcade.Components.Acceleration, Phaser.Physics.Arcade.Components.Angular, Phaser.Physics.Arcade.Components.Bounce, Phaser.Physics.Arcade.Components.Debug, Phaser.Physics.Arcade.Components.Drag, Phaser.Physics.Arcade.Components.Enable, Phaser.Physics.Arcade.Components.Friction, Phaser.Physics.Arcade.Components.Gravity, Phaser.Physics.Arcade.Components.Immovable, Phaser.Physics.Arcade.Components.Mass, Phaser.Physics.Arcade.Components.Size, Phaser.Physics.Arcade.Components.Velocity, Phaser.GameObjects.Components.Alpha, Phaser.GameObjects.Components.BlendMode, Phaser.GameObjects.Components.Depth, Phaser.GameObjects.Components.Flip, Phaser.GameObjects.Components.GetBounds, Phaser.GameObjects.Components.Origin, Phaser.GameObjects.Components.Pipeline, Phaser.GameObjects.Components.ScaleMode, Phaser.GameObjects.Components.ScrollFactor, Phaser.GameObjects.Components.Size, Phaser.GameObjects.Components.Texture, Phaser.GameObjects.Components.Tint, Phaser.GameObjects.Components.Transform, Phaser.GameObjects.Components.Visible {
    /**
     * @param scene The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time.
     * @param x The horizontal position of this Game Object in the world.
     * @param y The vertical position of this Game Object in the world.
     * @param texture The key of the Texture this Game Object will use to render with, as stored in the Texture Manager.
     * @param frame An optional frame from the Texture this Game Object is rendering with.
     */
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer);

    /**
     * This Game Object's Physics Body.
     */
    body: Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody;

    /**
     * Clears all alpha values associated with this Game Object.
     *
     * Immediately sets the alpha levels back to 1 (fully opaque).
     */
    clearAlpha(): this;

    /**
     * Set the Alpha level of this Game Object. The alpha controls the opacity of the Game Object as it renders.
     * Alpha values are provided as a float between 0, fully transparent, and 1, fully opaque.
     *
     * If your game is running under WebGL you can optionally specify four different alpha values, each of which
     * correspond to the four corners of the Game Object. Under Canvas only the `topLeft` value given is used.
     * @param topLeft The alpha value used for the top-left of the Game Object. If this is the only value given it's applied across the whole Game Object. Default 1.
     * @param topRight The alpha value used for the top-right of the Game Object. WebGL only.
     * @param bottomLeft The alpha value used for the bottom-left of the Game Object. WebGL only.
     * @param bottomRight The alpha value used for the bottom-right of the Game Object. WebGL only.
     */
    setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

    /**
     * The alpha value of the Game Object.
     *
     * This is a global value, impacting the entire Game Object, not just a region of it.
     */
    alpha: number;

    /**
     * The alpha value starting from the top-left of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    alphaTopLeft: number;

    /**
     * The alpha value starting from the top-right of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    alphaTopRight: number;

    /**
     * The alpha value starting from the bottom-left of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    alphaBottomLeft: number;

    /**
     * The alpha value starting from the bottom-right of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    alphaBottomRight: number;

    /**
     * Sets the Blend Mode being used by this Game Object.
     *
     * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
     *
     * Under WebGL only the following Blend Modes are available:
     *
     * * ADD
     * * MULTIPLY
     * * SCREEN
     *
     * Canvas has more available depending on browser support.
     *
     * You can also create your own custom Blend Modes in WebGL.
     *
     * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
     * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
     * reasons try to be careful about the construction of your Scene and the frequency of which blend modes
     * are used.
     */
    blendMode: Phaser.BlendModes | string;

    /**
     * Sets the Blend Mode being used by this Game Object.
     *
     * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
     *
     * Under WebGL only the following Blend Modes are available:
     *
     * * ADD
     * * MULTIPLY
     * * SCREEN
     *
     * Canvas has more available depending on browser support.
     *
     * You can also create your own custom Blend Modes in WebGL.
     *
     * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
     * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
     * reasons try to be careful about the construction of your Scene and the frequency of which blend modes
     * are used.
     * @param value The BlendMode value. Either a string or a CONST.
     */
    setBlendMode(value: string | Phaser.BlendModes): this;

    /**
     * The depth of this Game Object within the Scene.
     *
     * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
     * of Game Objects, without actually moving their position in the display list.
     *
     * The depth starts from zero (the default value) and increases from that point. A Game Object with a higher depth
     * value will always render in front of one with a lower value.
     *
     * Setting the depth will queue a depth sort event within the Scene.
     */
    depth: number;

    /**
     * The depth of this Game Object within the Scene.
     *
     * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
     * of Game Objects, without actually moving their position in the display list.
     *
     * The depth starts from zero (the default value) and increases from that point. A Game Object with a higher depth
     * value will always render in front of one with a lower value.
     *
     * Setting the depth will queue a depth sort event within the Scene.
     * @param value The depth of this Game Object.
     */
    setDepth(value: integer): this;

    /**
     * The horizontally flipped state of the Game Object.
     * A Game Object that is flipped horizontally will render inversed on the horizontal axis.
     * Flipping always takes place from the middle of the texture and does not impact the scale value.
     */
    flipX: boolean;

    /**
     * The vertically flipped state of the Game Object.
     * A Game Object that is flipped vertically will render inversed on the vertical axis (i.e. upside down)
     * Flipping always takes place from the middle of the texture and does not impact the scale value.
     */
    flipY: boolean;

    /**
     * Toggles the horizontal flipped state of this Game Object.
     */
    toggleFlipX(): this;

    /**
     * Toggles the vertical flipped state of this Game Object.
     */
    toggleFlipY(): this;

    /**
     * Sets the horizontal flipped state of this Game Object.
     * @param value The flipped state. `false` for no flip, or `true` to be flipped.
     */
    setFlipX(value: boolean): this;

    /**
     * Sets the vertical flipped state of this Game Object.
     * @param value The flipped state. `false` for no flip, or `true` to be flipped.
     */
    setFlipY(value: boolean): this;

    /**
     * Sets the horizontal and vertical flipped state of this Game Object.
     * @param x The horizontal flipped state. `false` for no flip, or `true` to be flipped.
     * @param y The horizontal flipped state. `false` for no flip, or `true` to be flipped.
     */
    setFlip(x: boolean, y: boolean): this;

    /**
     * Resets the horizontal and vertical flipped state of this Game Object back to their default un-flipped state.
     */
    resetFlip(): this;

    /**
     * Gets the center coordinate of this Game Object, regardless of origin.
     * The returned point is calculated in local space and does not factor in any parent containers
     * @param output An object to store the values in. If not provided a new Vector2 will be created.
     */
    getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

    /**
     * Gets the top-left corner coordinate of this Game Object, regardless of origin.
     * The returned point is calculated in local space and does not factor in any parent containers
     * @param output An object to store the values in. If not provided a new Vector2 will be created.
     * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
     */
    getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

    /**
     * Gets the top-right corner coordinate of this Game Object, regardless of origin.
     * The returned point is calculated in local space and does not factor in any parent containers
     * @param output An object to store the values in. If not provided a new Vector2 will be created.
     * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
     */
    getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

    /**
     * Gets the bottom-left corner coordinate of this Game Object, regardless of origin.
     * The returned point is calculated in local space and does not factor in any parent containers
     * @param output An object to store the values in. If not provided a new Vector2 will be created.
     * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
     */
    getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

    /**
     * Gets the bottom-right corner coordinate of this Game Object, regardless of origin.
     * The returned point is calculated in local space and does not factor in any parent containers
     * @param output An object to store the values in. If not provided a new Vector2 will be created.
     * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
     */
    getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

    /**
     * Gets the bounds of this Game Object, regardless of origin.
     * The values are stored and returned in a Rectangle, or Rectangle-like, object.
     * @param output An object to store the values in. If not provided a new Rectangle will be created.
     */
    getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

    /**
     * The Mask this Game Object is using during render.
     */
    mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

    /**
     * Sets the mask that this Game Object will use to render with.
     *
     * The mask must have been previously created and can be either a GeometryMask or a BitmapMask.
     * Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.
     *
     * If a mask is already set on this Game Object it will be immediately replaced.
     *
     * Masks are positioned in global space and are not relative to the Game Object to which they
     * are applied. The reason for this is that multiple Game Objects can all share the same mask.
     *
     * Masks have no impact on physics or input detection. They are purely a rendering component
     * that allows you to limit what is visible during the render pass.
     * @param mask The mask this Game Object will use when rendering.
     */
    setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

    /**
     * Clears the mask that this Game Object was using.
     * @param destroyMask Destroy the mask before clearing it? Default false.
     */
    clearMask(destroyMask?: boolean): this;

    /**
     * Creates and returns a Bitmap Mask. This mask can be used by any Game Object,
     * including this one.
     *
     * To create the mask you need to pass in a reference to a renderable Game Object.
     * A renderable Game Object is one that uses a texture to render with, such as an
     * Image, Sprite, Render Texture or BitmapText.
     *
     * If you do not provide a renderable object, and this Game Object has a texture,
     * it will use itself as the object. This means you can call this method to create
     * a Bitmap Mask from any renderable Game Object.
     * @param renderable A renderable Game Object that uses a texture, such as a Sprite.
     */
    createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

    /**
     * Creates and returns a Geometry Mask. This mask can be used by any Game Object,
     * including this one.
     *
     * To create the mask you need to pass in a reference to a Graphics Game Object.
     *
     * If you do not provide a graphics object, and this Game Object is an instance
     * of a Graphics object, then it will use itself to create the mask.
     *
     * This means you can call this method to create a Geometry Mask from any Graphics Game Object.
     * @param graphics A Graphics Game Object. The geometry within it will be used as the mask.
     */
    createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

    /**
     * The horizontal origin of this Game Object.
     * The origin maps the relationship between the size and position of the Game Object.
     * The default value is 0.5, meaning all Game Objects are positioned based on their center.
     * Setting the value to 0 means the position now relates to the left of the Game Object.
     */
    originX: number;

    /**
     * The vertical origin of this Game Object.
     * The origin maps the relationship between the size and position of the Game Object.
     * The default value is 0.5, meaning all Game Objects are positioned based on their center.
     * Setting the value to 0 means the position now relates to the top of the Game Object.
     */
    originY: number;

    /**
     * The horizontal display origin of this Game Object.
     * The origin is a normalized value between 0 and 1.
     * The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.
     */
    displayOriginX: number;

    /**
     * The vertical display origin of this Game Object.
     * The origin is a normalized value between 0 and 1.
     * The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.
     */
    displayOriginY: number;

    /**
     * Sets the origin of this Game Object.
     *
     * The values are given in the range 0 to 1.
     * @param x The horizontal origin value. Default 0.5.
     * @param y The vertical origin value. If not defined it will be set to the value of `x`. Default x.
     */
    setOrigin(x?: number, y?: number): this;

    /**
     * Sets the origin of this Game Object based on the Pivot values in its Frame.
     */
    setOriginFromFrame(): this;

    /**
     * Sets the display origin of this Game Object.
     * The difference between this and setting the origin is that you can use pixel values for setting the display origin.
     * @param x The horizontal display origin value. Default 0.
     * @param y The vertical display origin value. If not defined it will be set to the value of `x`. Default x.
     */
    setDisplayOrigin(x?: number, y?: number): this;

    /**
     * Updates the Display Origin cached values internally stored on this Game Object.
     * You don't usually call this directly, but it is exposed for edge-cases where you may.
     */
    updateDisplayOrigin(): this;

    /**
     * The initial WebGL pipeline of this Game Object.
     */
    defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

    /**
     * The current WebGL pipeline of this Game Object.
     */
    pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

    /**
     * Sets the initial WebGL Pipeline of this Game Object.
     * This should only be called during the instantiation of the Game Object.
     * @param pipelineName The name of the pipeline to set on this Game Object. Defaults to the Texture Tint Pipeline. Default TextureTintPipeline.
     */
    initPipeline(pipelineName?: string): boolean;

    /**
     * Sets the active WebGL Pipeline of this Game Object.
     * @param pipelineName The name of the pipeline to set on this Game Object.
     */
    setPipeline(pipelineName: string): this;

    /**
     * Resets the WebGL Pipeline of this Game Object back to the default it was created with.
     */
    resetPipeline(): boolean;

    /**
     * Gets the name of the WebGL Pipeline this Game Object is currently using.
     */
    getPipelineName(): string;

    /**
     * The Scale Mode being used by this Game Object.
     * Can be either `ScaleModes.LINEAR` or `ScaleModes.NEAREST`.
     */
    scaleMode: Phaser.ScaleModes;

    /**
     * Sets the Scale Mode being used by this Game Object.
     * Can be either `ScaleModes.LINEAR` or `ScaleModes.NEAREST`.
     * @param value The Scale Mode to be used by this Game Object.
     */
    setScaleMode(value: Phaser.ScaleModes): this;

    /**
     * The horizontal scroll factor of this Game Object.
     *
     * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
     *
     * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
     * It does not change the Game Objects actual position values.
     *
     * A value of 1 means it will move exactly in sync with a camera.
     * A value of 0 means it will not move at all, even if the camera moves.
     * Other values control the degree to which the camera movement is mapped to this Game Object.
     *
     * Please be aware that scroll factor values other than 1 are not taken in to consideration when
     * calculating physics collisions. Bodies always collide based on their world position, but changing
     * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
     * them from physics bodies if not accounted for in your code.
     */
    scrollFactorX: number;

    /**
     * The vertical scroll factor of this Game Object.
     *
     * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
     *
     * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
     * It does not change the Game Objects actual position values.
     *
     * A value of 1 means it will move exactly in sync with a camera.
     * A value of 0 means it will not move at all, even if the camera moves.
     * Other values control the degree to which the camera movement is mapped to this Game Object.
     *
     * Please be aware that scroll factor values other than 1 are not taken in to consideration when
     * calculating physics collisions. Bodies always collide based on their world position, but changing
     * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
     * them from physics bodies if not accounted for in your code.
     */
    scrollFactorY: number;

    /**
     * Sets the scroll factor of this Game Object.
     *
     * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
     *
     * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
     * It does not change the Game Objects actual position values.
     *
     * A value of 1 means it will move exactly in sync with a camera.
     * A value of 0 means it will not move at all, even if the camera moves.
     * Other values control the degree to which the camera movement is mapped to this Game Object.
     *
     * Please be aware that scroll factor values other than 1 are not taken in to consideration when
     * calculating physics collisions. Bodies always collide based on their world position, but changing
     * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
     * them from physics bodies if not accounted for in your code.
     * @param x The horizontal scroll factor of this Game Object.
     * @param y The vertical scroll factor of this Game Object. If not set it will use the `x` value. Default x.
     */
    setScrollFactor(x: number, y?: number): this;

    /**
     * The native (un-scaled) width of this Game Object.
     *
     * Changing this value will not change the size that the Game Object is rendered in-game.
     * For that you need to either set the scale of the Game Object (`setScale`) or use
     * the `displayWidth` property.
     */
    width: number;

    /**
     * The native (un-scaled) height of this Game Object.
     *
     * Changing this value will not change the size that the Game Object is rendered in-game.
     * For that you need to either set the scale of the Game Object (`setScale`) or use
     * the `displayHeight` property.
     */
    height: number;

    /**
     * The displayed width of this Game Object.
     *
     * This value takes into account the scale factor.
     *
     * Setting this value will adjust the Game Object's scale property.
     */
    displayWidth: number;

    /**
     * The displayed height of this Game Object.
     *
     * This value takes into account the scale factor.
     *
     * Setting this value will adjust the Game Object's scale property.
     */
    displayHeight: number;

    /**
     * Sets the size of this Game Object to be that of the given Frame.
     *
     * This will not change the size that the Game Object is rendered in-game.
     * For that you need to either set the scale of the Game Object (`setScale`) or call the
     * `setDisplaySize` method, which is the same thing as changing the scale but allows you
     * to do so by giving pixel values.
     *
     * If you have enabled this Game Object for input, changing the size will _not_ change the
     * size of the hit area. To do this you should adjust the `input.hitArea` object directly.
     * @param frame The frame to base the size of this Game Object on.
     */
    setSizeToFrame(frame: Phaser.Textures.Frame): this;

    /**
     * Sets the internal size of this Game Object, as used for frame or physics body creation.
     *
     * This will not change the size that the Game Object is rendered in-game.
     * For that you need to either set the scale of the Game Object (`setScale`) or call the
     * `setDisplaySize` method, which is the same thing as changing the scale but allows you
     * to do so by giving pixel values.
     *
     * If you have enabled this Game Object for input, changing the size will _not_ change the
     * size of the hit area. To do this you should adjust the `input.hitArea` object directly.
     * @param width The width of this Game Object.
     * @param height The height of this Game Object.
     */
    setSize(width: number, height: number): this;

    /**
     * Sets the display size of this Game Object.
     *
     * Calling this will adjust the scale.
     * @param width The width of this Game Object.
     * @param height The height of this Game Object.
     */
    setDisplaySize(width: number, height: number): this;

    /**
     * The Texture this Game Object is using to render with.
     */
    texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

    /**
     * The Texture Frame this Game Object is using to render with.
     */
    frame: Phaser.Textures.Frame;

    /**
     * A boolean flag indicating if this Game Object is being cropped or not.
     * You can toggle this at any time after `setCrop` has been called, to turn cropping on or off.
     * Equally, calling `setCrop` with no arguments will reset the crop and disable it.
     */
    isCropped: boolean;

    /**
     * Applies a crop to a texture based Game Object, such as a Sprite or Image.
     *
     * The crop is a rectangle that limits the area of the texture frame that is visible during rendering.
     *
     * Cropping a Game Object does not change its size, dimensions, physics body or hit area, it just
     * changes what is shown when rendered.
     *
     * The crop coordinates are relative to the texture frame, not the Game Object, meaning 0 x 0 is the top-left.
     *
     * Therefore, if you had a Game Object that had an 800x600 sized texture, and you wanted to show only the left
     * half of it, you could call `setCrop(0, 0, 400, 600)`.
     *
     * It is also scaled to match the Game Object scale automatically. Therefore a crop rect of 100x50 would crop
     * an area of 200x100 when applied to a Game Object that had a scale factor of 2.
     *
     * You can either pass in numeric values directly, or you can provide a single Rectangle object as the first argument.
     *
     * Call this method with no arguments at all to reset the crop, or toggle the property `isCropped` to `false`.
     *
     * You should do this if the crop rectangle becomes the same size as the frame itself, as it will allow
     * the renderer to skip several internal calculations.
     * @param x The x coordinate to start the crop from. Or a Phaser.Geom.Rectangle object, in which case the rest of the arguments are ignored.
     * @param y The y coordinate to start the crop from.
     * @param width The width of the crop rectangle in pixels.
     * @param height The height of the crop rectangle in pixels.
     */
    setCrop(x?: number | Phaser.Geom.Rectangle, y?: number, width?: number, height?: number): this;

    /**
     * Sets the texture and frame this Game Object will use to render with.
     *
     * Textures are referenced by their string-based keys, as stored in the Texture Manager.
     * @param key The key of the texture to be used, as stored in the Texture Manager.
     * @param frame The name or index of the frame within the Texture.
     */
    setTexture(key: string, frame?: string | integer): this;

    /**
     * Sets the frame this Game Object will use to render with.
     *
     * The Frame has to belong to the current Texture being used.
     *
     * It can be either a string or an index.
     *
     * Calling `setFrame` will modify the `width` and `height` properties of your Game Object.
     * It will also change the `origin` if the Frame has a custom pivot point, as exported from packages like Texture Packer.
     * @param frame The name or index of the frame within the Texture.
     * @param updateSize Should this call adjust the size of the Game Object? Default true.
     * @param updateOrigin Should this call adjust the origin of the Game Object? Default true.
     */
    setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

    /**
     * Fill or additive?
     */
    tintFill: boolean;

    /**
     * Clears all tint values associated with this Game Object.
     *
     * Immediately sets the color values back to 0xffffff and the tint type to 'additive',
     * which results in no visible change to the texture.
     */
    clearTint(): this;

    /**
     * Sets an additive tint on this Game Object.
     *
     * The tint works by taking the pixel color values from the Game Objects texture, and then
     * multiplying it by the color value of the tint. You can provide either one color value,
     * in which case the whole Game Object will be tinted in that color. Or you can provide a color
     * per corner. The colors are blended together across the extent of the Game Object.
     *
     * To modify the tint color once set, either call this method again with new values or use the
     * `tint` property to set all colors at once. Or, use the properties `tintTopLeft`, `tintTopRight,
     * `tintBottomLeft` and `tintBottomRight` to set the corner color values independently.
     *
     * To remove a tint call `clearTint`.
     *
     * To swap this from being an additive tint to a fill based tint set the property `tintFill` to `true`.
     * @param topLeft The tint being applied to the top-left of the Game Object. If no other values are given this value is applied evenly, tinting the whole Game Object. Default 0xffffff.
     * @param topRight The tint being applied to the top-right of the Game Object.
     * @param bottomLeft The tint being applied to the bottom-left of the Game Object.
     * @param bottomRight The tint being applied to the bottom-right of the Game Object.
     */
    setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

    /**
     * Sets a fill-based tint on this Game Object.
     *
     * Unlike an additive tint, a fill-tint literally replaces the pixel colors from the texture
     * with those in the tint. You can use this for effects such as making a player flash 'white'
     * if hit by something. You can provide either one color value, in which case the whole
     * Game Object will be rendered in that color. Or you can provide a color per corner. The colors
     * are blended together across the extent of the Game Object.
     *
     * To modify the tint color once set, either call this method again with new values or use the
     * `tint` property to set all colors at once. Or, use the properties `tintTopLeft`, `tintTopRight,
     * `tintBottomLeft` and `tintBottomRight` to set the corner color values independently.
     *
     * To remove a tint call `clearTint`.
     *
     * To swap this from being a fill-tint to an additive tint set the property `tintFill` to `false`.
     * @param topLeft The tint being applied to the top-left of the Game Object. If not other values are given this value is applied evenly, tinting the whole Game Object. Default 0xffffff.
     * @param topRight The tint being applied to the top-right of the Game Object.
     * @param bottomLeft The tint being applied to the bottom-left of the Game Object.
     * @param bottomRight The tint being applied to the bottom-right of the Game Object.
     */
    setTintFill(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

    /**
     * The tint value being applied to the top-left of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    tintTopLeft: integer;

    /**
     * The tint value being applied to the top-right of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    tintTopRight: integer;

    /**
     * The tint value being applied to the bottom-left of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    tintBottomLeft: integer;

    /**
     * The tint value being applied to the bottom-right of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    tintBottomRight: integer;

    /**
     * The tint value being applied to the whole of the Game Object.
     */
    tint: integer;

    /**
     * Does this Game Object have a tint applied to it or not?
     */
    readonly isTinted: boolean;

    /**
     * The x position of this Game Object.
     */
    x: number;

    /**
     * The y position of this Game Object.
     */
    y: number;

    /**
     * The z position of this Game Object.
     * Note: Do not use this value to set the z-index, instead see the `depth` property.
     */
    z: number;

    /**
     * The w position of this Game Object.
     */
    w: number;

    /**
     * The horizontal scale of this Game Object.
     */
    scaleX: number;

    /**
     * The vertical scale of this Game Object.
     */
    scaleY: number;

    /**
     * The angle of this Game Object as expressed in degrees.
     *
     * Where 0 is to the right, 90 is down, 180 is left.
     *
     * If you prefer to work in radians, see the `rotation` property instead.
     */
    angle: integer;

    /**
     * The angle of this Game Object in radians.
     *
     * If you prefer to work in degrees, see the `angle` property instead.
     */
    rotation: number;

    /**
     * Sets the position of this Game Object.
     * @param x The x position of this Game Object. Default 0.
     * @param y The y position of this Game Object. If not set it will use the `x` value. Default x.
     * @param z The z position of this Game Object. Default 0.
     * @param w The w position of this Game Object. Default 0.
     */
    setPosition(x?: number, y?: number, z?: number, w?: number): this;

    /**
     * Sets the position of this Game Object to be a random position within the confines of
     * the given area.
     *
     * If no area is specified a random position between 0 x 0 and the game width x height is used instead.
     *
     * The position does not factor in the size of this Game Object, meaning that only the origin is
     * guaranteed to be within the area.
     * @param x The x position of the top-left of the random area. Default 0.
     * @param y The y position of the top-left of the random area. Default 0.
     * @param width The width of the random area.
     * @param height The height of the random area.
     */
    setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

    /**
     * Sets the rotation of this Game Object.
     * @param radians The rotation of this Game Object, in radians. Default 0.
     */
    setRotation(radians?: number): this;

    /**
     * Sets the angle of this Game Object.
     * @param degrees The rotation of this Game Object, in degrees. Default 0.
     */
    setAngle(degrees?: number): this;

    /**
     * Sets the scale of this Game Object.
     * @param x The horizontal scale of this Game Object.
     * @param y The vertical scale of this Game Object. If not set it will use the `x` value. Default x.
     */
    setScale(x: number, y?: number): this;

    /**
     * Sets the x position of this Game Object.
     * @param value The x position of this Game Object. Default 0.
     */
    setX(value?: number): this;

    /**
     * Sets the y position of this Game Object.
     * @param value The y position of this Game Object. Default 0.
     */
    setY(value?: number): this;

    /**
     * Sets the z position of this Game Object.
     * @param value The z position of this Game Object. Default 0.
     */
    setZ(value?: number): this;

    /**
     * Sets the w position of this Game Object.
     * @param value The w position of this Game Object. Default 0.
     */
    setW(value?: number): this;

    /**
     * Gets the local transform matrix for this Game Object.
     * @param tempMatrix The matrix to populate with the values from this Game Object.
     */
    getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

    /**
     * Gets the world transform matrix for this Game Object, factoring in any parent Containers.
     * @param tempMatrix The matrix to populate with the values from this Game Object.
     * @param parentMatrix A temporary matrix to hold parent values during the calculations.
     */
    getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix, parentMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

    /**
     * The visible state of the Game Object.
     *
     * An invisible Game Object will skip rendering, but will still process update logic.
     */
    visible: boolean;

    /**
     * Sets the visibility of this Game Object.
     *
     * An invisible Game Object will skip rendering, but will still process update logic.
     * @param value The visible state of the Game Object.
     */
    setVisible(value: boolean): this;

    /**
     * Sets the body's horizontal and vertical acceleration. If the vertical acceleration value is not provided, the vertical acceleration is set to the same value as the horizontal acceleration.
     * @param x The horizontal acceleration
     * @param y The vertical acceleration Default x.
     */
    setAcceleration(x: number, y?: number): this;

    /**
     * Sets the body's horizontal acceleration.
     * @param value The horizontal acceleration
     */
    setAccelerationX(value: number): this;

    /**
     * Sets the body's vertical acceleration.
     * @param value The vertical acceleration
     */
    setAccelerationY(value: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setAngularVelocity(value: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setAngularAcceleration(value: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setAngularDrag(value: number): this;

    /**
     * [description]
     * @param x [description]
     * @param y [description] Default x.
     */
    setBounce(x: number, y?: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setBounceX(value: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setBounceY(value: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setCollideWorldBounds(value: boolean): this;

    /**
     * [description]
     * @param showBody [description]
     * @param showVelocity [description]
     * @param bodyColor [description]
     */
    setDebug(showBody: boolean, showVelocity: boolean, bodyColor: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setDebugBodyColor(value: number): this;

    /**
     * [description]
     */
    debugShowBody: boolean;

    /**
     * [description]
     */
    debugShowVelocity: boolean;

    /**
     * [description]
     */
    debugBodyColor: number;

    /**
     * [description]
     * @param x [description]
     * @param y [description] Default x.
     */
    setDrag(x: number, y?: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setDragX(value: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setDragY(value: number): this;

    /**
     * [description]
     * @param value `true` to use damping for deceleration, or `false` to use linear deceleration.
     */
    setDamping(value: boolean): this;

    /**
     * Enables this Game Object's Body.
     * @param reset Also reset the Body and place it at (x, y).
     * @param x The horizontal position to place the Game Object and Body.
     * @param y The horizontal position to place the Game Object and Body.
     * @param enableGameObject Also activate this Game Object.
     * @param showGameObject Also show this Game Object.
     */
    enableBody(reset: boolean, x: number, y: number, enableGameObject: boolean, showGameObject: boolean): this;

    /**
     * Stops and disables this Game Object's Body.
     * @param disableGameObject Also deactivate this Game Object. Default false.
     * @param hideGameObject Also hide this Game Object. Default false.
     */
    disableBody(disableGameObject?: boolean, hideGameObject?: boolean): this;

    /**
     * Syncs the Body's position and size with its parent Game Object.
     * You don't need to call this for Dynamic Bodies, as it happens automatically.
     * But for Static bodies it's a useful way of modifying the position of a Static Body
     * in the Physics World, based on its Game Object.
     */
    refreshBody(): this;

    /**
     * Sets the friction (e.g. the amount of velocity reduced over time) of the physics body when moving.
     * The higher than friction, the faster the body will slow down once force stops being applied to it.
     * @param x The amount of horizontal friction to apply.
     * @param y The amount of vertical friction to apply. Default x.
     */
    setFriction(x: number, y?: number): this;

    /**
     * Sets the friction (e.g. the amount of velocity reduced over time) of the physics body when moving horizontally in the X axis.
     * The higher than friction, the faster the body will slow down once force stops being applied to it.
     * @param x The amount of friction to apply.
     */
    setFrictionX(x: number): this;

    /**
     * Sets the friction (e.g. the amount of velocity reduced over time) of the physics body when moving vertically in the Y axis.
     * The higher than friction, the faster the body will slow down once force stops being applied to it.
     * @param x The amount of friction to apply.
     */
    setFrictionY(x: number): this;

    /**
     * Set the X and Y values of the gravitational pull to act upon this Arcade Physics Game Object. Values can be positive or negative. Larger values result in a stronger effect.
     *
     * If only one value is provided, this value will be used for both the X and Y axis.
     * @param x The gravitational force to be applied to the X-axis.
     * @param y The gravitational force to be applied to the Y-axis. If this is not specified, the X value will be used. Default x.
     */
    setGravity(x: number, y?: number): this;

    /**
     * Set the gravitational force to be applied to the X axis. Value can be positive or negative. Larger values result in a stronger effect.
     * @param x The gravitational force to be applied to the X-axis.
     */
    setGravityX(x: number): this;

    /**
     * Set the gravitational force to be applied to the Y axis. Value can be positive or negative. Larger values result in a stronger effect.
     * @param y The gravitational force to be applied to the Y-axis.
     */
    setGravityY(y: number): this;

    /**
     * [description]
     * @param value [description] Default true.
     */
    setImmovable(value?: boolean): this;

    /**
     * [description]
     * @param value [description]
     */
    setMass(value: number): this;

    /**
     * Sets the body offset. This allows you to adjust the difference between the center of the body
     * and the x and y coordinates of the parent Game Object.
     * @param x The amount to offset the body from the parent Game Object along the x-axis.
     * @param y The amount to offset the body from the parent Game Object along the y-axis. Defaults to the value given for the x-axis. Default x.
     */
    setOffset(x: number, y?: number): this;

    /**
     * Sets this physics body to use a circle for collision instead of a rectangle.
     * @param radius The radius of the physics body, in pixels.
     * @param offsetX The amount to offset the body from the parent Game Object along the x-axis.
     * @param offsetY The amount to offset the body from the parent Game Object along the y-axis.
     */
    setCircle(radius: number, offsetX?: number, offsetY?: number): this;

    /**
     * [description]
     * @param x [description]
     * @param y [description] Default x.
     */
    setVelocity(x: number, y?: number): this;

    /**
     * [description]
     * @param x [description]
     */
    setVelocityX(x: number): this;

    /**
     * [description]
     * @param y [description]
     */
    setVelocityY(y: number): this;

    /**
     * [description]
     * @param x [description]
     * @param y [description] Default x.
     */
    setMaxVelocity(x: number, y?: number): this;
  }
  /** <=END=> */
  class ArcadeSprite {
    /**
     *
     * @param scene The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time.
     * @param x The horizontal position of this Game Object in the world.
     * @param y The vertical position of this Game Object in the world.
     * @param texture The key of the Texture this Game Object will use to render with, as stored in the Texture Manager.
     * @param frame An optional frame from the Texture this Game Object is rendering with.
     */
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | integer);

    /**
     * This Game Object's Physics Body.
     */
    body: Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody;

    /**
     * Clears all alpha values associated with this Game Object.
     *
     * Immediately sets the alpha levels back to 1 (fully opaque).
     */
    clearAlpha(): this;

    /**
     * Set the Alpha level of this Game Object. The alpha controls the opacity of the Game Object as it renders.
     * Alpha values are provided as a float between 0, fully transparent, and 1, fully opaque.
     *
     * If your game is running under WebGL you can optionally specify four different alpha values, each of which
     * correspond to the four corners of the Game Object. Under Canvas only the `topLeft` value given is used.
     * @param topLeft The alpha value used for the top-left of the Game Object. If this is the only value given it's applied across the whole Game Object. Default 1.
     * @param topRight The alpha value used for the top-right of the Game Object. WebGL only.
     * @param bottomLeft The alpha value used for the bottom-left of the Game Object. WebGL only.
     * @param bottomRight The alpha value used for the bottom-right of the Game Object. WebGL only.
     */
    setAlpha(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): this;

    /**
     * The alpha value of the Game Object.
     *
     * This is a global value, impacting the entire Game Object, not just a region of it.
     */
    alpha: number;

    /**
     * The alpha value starting from the top-left of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    alphaTopLeft: number;

    /**
     * The alpha value starting from the top-right of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    alphaTopRight: number;

    /**
     * The alpha value starting from the bottom-left of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    alphaBottomLeft: number;

    /**
     * The alpha value starting from the bottom-right of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    alphaBottomRight: number;

    /**
     * Sets the Blend Mode being used by this Game Object.
     *
     * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
     *
     * Under WebGL only the following Blend Modes are available:
     *
     * * ADD
     * * MULTIPLY
     * * SCREEN
     *
     * Canvas has more available depending on browser support.
     *
     * You can also create your own custom Blend Modes in WebGL.
     *
     * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
     * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
     * reasons try to be careful about the construction of your Scene and the frequency of which blend modes
     * are used.
     */
    blendMode: Phaser.BlendModes | string;

    /**
     * Sets the Blend Mode being used by this Game Object.
     *
     * This can be a const, such as `Phaser.BlendModes.SCREEN`, or an integer, such as 4 (for Overlay)
     *
     * Under WebGL only the following Blend Modes are available:
     *
     * * ADD
     * * MULTIPLY
     * * SCREEN
     *
     * Canvas has more available depending on browser support.
     *
     * You can also create your own custom Blend Modes in WebGL.
     *
     * Blend modes have different effects under Canvas and WebGL, and from browser to browser, depending
     * on support. Blend Modes also cause a WebGL batch flush should it encounter a new blend mode. For these
     * reasons try to be careful about the construction of your Scene and the frequency of which blend modes
     * are used.
     * @param value The BlendMode value. Either a string or a CONST.
     */
    setBlendMode(value: string | Phaser.BlendModes): this;

    /**
     * The depth of this Game Object within the Scene.
     *
     * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
     * of Game Objects, without actually moving their position in the display list.
     *
     * The depth starts from zero (the default value) and increases from that point. A Game Object with a higher depth
     * value will always render in front of one with a lower value.
     *
     * Setting the depth will queue a depth sort event within the Scene.
     */
    depth: number;

    /**
     * The depth of this Game Object within the Scene.
     *
     * The depth is also known as the 'z-index' in some environments, and allows you to change the rendering order
     * of Game Objects, without actually moving their position in the display list.
     *
     * The depth starts from zero (the default value) and increases from that point. A Game Object with a higher depth
     * value will always render in front of one with a lower value.
     *
     * Setting the depth will queue a depth sort event within the Scene.
     * @param value The depth of this Game Object.
     */
    setDepth(value: integer): this;

    /**
     * The horizontally flipped state of the Game Object.
     * A Game Object that is flipped horizontally will render inversed on the horizontal axis.
     * Flipping always takes place from the middle of the texture and does not impact the scale value.
     */
    flipX: boolean;

    /**
     * The vertically flipped state of the Game Object.
     * A Game Object that is flipped vertically will render inversed on the vertical axis (i.e. upside down)
     * Flipping always takes place from the middle of the texture and does not impact the scale value.
     */
    flipY: boolean;

    /**
     * Toggles the horizontal flipped state of this Game Object.
     */
    toggleFlipX(): this;

    /**
     * Toggles the vertical flipped state of this Game Object.
     */
    toggleFlipY(): this;

    /**
     * Sets the horizontal flipped state of this Game Object.
     * @param value The flipped state. `false` for no flip, or `true` to be flipped.
     */
    setFlipX(value: boolean): this;

    /**
     * Sets the vertical flipped state of this Game Object.
     * @param value The flipped state. `false` for no flip, or `true` to be flipped.
     */
    setFlipY(value: boolean): this;

    /**
     * Sets the horizontal and vertical flipped state of this Game Object.
     * @param x The horizontal flipped state. `false` for no flip, or `true` to be flipped.
     * @param y The horizontal flipped state. `false` for no flip, or `true` to be flipped.
     */
    setFlip(x: boolean, y: boolean): this;

    /**
     * Resets the horizontal and vertical flipped state of this Game Object back to their default un-flipped state.
     */
    resetFlip(): this;

    /**
     * Gets the center coordinate of this Game Object, regardless of origin.
     * The returned point is calculated in local space and does not factor in any parent containers
     * @param output An object to store the values in. If not provided a new Vector2 will be created.
     */
    getCenter<O extends Phaser.Math.Vector2>(output?: O): O;

    /**
     * Gets the top-left corner coordinate of this Game Object, regardless of origin.
     * The returned point is calculated in local space and does not factor in any parent containers
     * @param output An object to store the values in. If not provided a new Vector2 will be created.
     * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
     */
    getTopLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

    /**
     * Gets the top-right corner coordinate of this Game Object, regardless of origin.
     * The returned point is calculated in local space and does not factor in any parent containers
     * @param output An object to store the values in. If not provided a new Vector2 will be created.
     * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
     */
    getTopRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

    /**
     * Gets the bottom-left corner coordinate of this Game Object, regardless of origin.
     * The returned point is calculated in local space and does not factor in any parent containers
     * @param output An object to store the values in. If not provided a new Vector2 will be created.
     * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
     */
    getBottomLeft<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

    /**
     * Gets the bottom-right corner coordinate of this Game Object, regardless of origin.
     * The returned point is calculated in local space and does not factor in any parent containers
     * @param output An object to store the values in. If not provided a new Vector2 will be created.
     * @param includeParent If this Game Object has a parent Container, include it (and all other ancestors) in the resulting vector? Default false.
     */
    getBottomRight<O extends Phaser.Math.Vector2>(output?: O, includeParent?: boolean): O;

    /**
     * Gets the bounds of this Game Object, regardless of origin.
     * The values are stored and returned in a Rectangle, or Rectangle-like, object.
     * @param output An object to store the values in. If not provided a new Rectangle will be created.
     */
    getBounds<O extends Phaser.Geom.Rectangle>(output?: O): O;

    /**
     * The Mask this Game Object is using during render.
     */
    mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask;

    /**
     * Sets the mask that this Game Object will use to render with.
     *
     * The mask must have been previously created and can be either a GeometryMask or a BitmapMask.
     * Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.
     *
     * If a mask is already set on this Game Object it will be immediately replaced.
     *
     * Masks are positioned in global space and are not relative to the Game Object to which they
     * are applied. The reason for this is that multiple Game Objects can all share the same mask.
     *
     * Masks have no impact on physics or input detection. They are purely a rendering component
     * that allows you to limit what is visible during the render pass.
     * @param mask The mask this Game Object will use when rendering.
     */
    setMask(mask: Phaser.Display.Masks.BitmapMask | Phaser.Display.Masks.GeometryMask): this;

    /**
     * Clears the mask that this Game Object was using.
     * @param destroyMask Destroy the mask before clearing it? Default false.
     */
    clearMask(destroyMask?: boolean): this;

    /**
     * Creates and returns a Bitmap Mask. This mask can be used by any Game Object,
     * including this one.
     *
     * To create the mask you need to pass in a reference to a renderable Game Object.
     * A renderable Game Object is one that uses a texture to render with, such as an
     * Image, Sprite, Render Texture or BitmapText.
     *
     * If you do not provide a renderable object, and this Game Object has a texture,
     * it will use itself as the object. This means you can call this method to create
     * a Bitmap Mask from any renderable Game Object.
     * @param renderable A renderable Game Object that uses a texture, such as a Sprite.
     */
    createBitmapMask(renderable?: Phaser.GameObjects.GameObject): Phaser.Display.Masks.BitmapMask;

    /**
     * Creates and returns a Geometry Mask. This mask can be used by any Game Object,
     * including this one.
     *
     * To create the mask you need to pass in a reference to a Graphics Game Object.
     *
     * If you do not provide a graphics object, and this Game Object is an instance
     * of a Graphics object, then it will use itself to create the mask.
     *
     * This means you can call this method to create a Geometry Mask from any Graphics Game Object.
     * @param graphics A Graphics Game Object. The geometry within it will be used as the mask.
     */
    createGeometryMask(graphics?: Phaser.GameObjects.Graphics): Phaser.Display.Masks.GeometryMask;

    /**
     * The horizontal origin of this Game Object.
     * The origin maps the relationship between the size and position of the Game Object.
     * The default value is 0.5, meaning all Game Objects are positioned based on their center.
     * Setting the value to 0 means the position now relates to the left of the Game Object.
     */
    originX: number;

    /**
     * The vertical origin of this Game Object.
     * The origin maps the relationship between the size and position of the Game Object.
     * The default value is 0.5, meaning all Game Objects are positioned based on their center.
     * Setting the value to 0 means the position now relates to the top of the Game Object.
     */
    originY: number;

    /**
     * The horizontal display origin of this Game Object.
     * The origin is a normalized value between 0 and 1.
     * The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.
     */
    displayOriginX: number;

    /**
     * The vertical display origin of this Game Object.
     * The origin is a normalized value between 0 and 1.
     * The displayOrigin is a pixel value, based on the size of the Game Object combined with the origin.
     */
    displayOriginY: number;

    /**
     * Sets the origin of this Game Object.
     *
     * The values are given in the range 0 to 1.
     * @param x The horizontal origin value. Default 0.5.
     * @param y The vertical origin value. If not defined it will be set to the value of `x`. Default x.
     */
    setOrigin(x?: number, y?: number): this;

    /**
     * Sets the origin of this Game Object based on the Pivot values in its Frame.
     */
    setOriginFromFrame(): this;

    /**
     * Sets the display origin of this Game Object.
     * The difference between this and setting the origin is that you can use pixel values for setting the display origin.
     * @param x The horizontal display origin value. Default 0.
     * @param y The vertical display origin value. If not defined it will be set to the value of `x`. Default x.
     */
    setDisplayOrigin(x?: number, y?: number): this;

    /**
     * Updates the Display Origin cached values internally stored on this Game Object.
     * You don't usually call this directly, but it is exposed for edge-cases where you may.
     */
    updateDisplayOrigin(): this;

    /**
     * The initial WebGL pipeline of this Game Object.
     */
    defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

    /**
     * The current WebGL pipeline of this Game Object.
     */
    pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

    /**
     * Sets the initial WebGL Pipeline of this Game Object.
     * This should only be called during the instantiation of the Game Object.
     * @param pipelineName The name of the pipeline to set on this Game Object. Defaults to the Texture Tint Pipeline. Default TextureTintPipeline.
     */
    initPipeline(pipelineName?: string): boolean;

    /**
     * Sets the active WebGL Pipeline of this Game Object.
     * @param pipelineName The name of the pipeline to set on this Game Object.
     */
    setPipeline(pipelineName: string): this;

    /**
     * Resets the WebGL Pipeline of this Game Object back to the default it was created with.
     */
    resetPipeline(): boolean;

    /**
     * Gets the name of the WebGL Pipeline this Game Object is currently using.
     */
    getPipelineName(): string;

    /**
     * The Scale Mode being used by this Game Object.
     * Can be either `ScaleModes.LINEAR` or `ScaleModes.NEAREST`.
     */
    scaleMode: Phaser.ScaleModes;

    /**
     * Sets the Scale Mode being used by this Game Object.
     * Can be either `ScaleModes.LINEAR` or `ScaleModes.NEAREST`.
     * @param value The Scale Mode to be used by this Game Object.
     */
    setScaleMode(value: Phaser.ScaleModes): this;

    /**
     * The horizontal scroll factor of this Game Object.
     *
     * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
     *
     * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
     * It does not change the Game Objects actual position values.
     *
     * A value of 1 means it will move exactly in sync with a camera.
     * A value of 0 means it will not move at all, even if the camera moves.
     * Other values control the degree to which the camera movement is mapped to this Game Object.
     *
     * Please be aware that scroll factor values other than 1 are not taken in to consideration when
     * calculating physics collisions. Bodies always collide based on their world position, but changing
     * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
     * them from physics bodies if not accounted for in your code.
     */
    scrollFactorX: number;

    /**
     * The vertical scroll factor of this Game Object.
     *
     * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
     *
     * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
     * It does not change the Game Objects actual position values.
     *
     * A value of 1 means it will move exactly in sync with a camera.
     * A value of 0 means it will not move at all, even if the camera moves.
     * Other values control the degree to which the camera movement is mapped to this Game Object.
     *
     * Please be aware that scroll factor values other than 1 are not taken in to consideration when
     * calculating physics collisions. Bodies always collide based on their world position, but changing
     * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
     * them from physics bodies if not accounted for in your code.
     */
    scrollFactorY: number;

    /**
     * Sets the scroll factor of this Game Object.
     *
     * The scroll factor controls the influence of the movement of a Camera upon this Game Object.
     *
     * When a camera scrolls it will change the location at which this Game Object is rendered on-screen.
     * It does not change the Game Objects actual position values.
     *
     * A value of 1 means it will move exactly in sync with a camera.
     * A value of 0 means it will not move at all, even if the camera moves.
     * Other values control the degree to which the camera movement is mapped to this Game Object.
     *
     * Please be aware that scroll factor values other than 1 are not taken in to consideration when
     * calculating physics collisions. Bodies always collide based on their world position, but changing
     * the scroll factor is a visual adjustment to where the textures are rendered, which can offset
     * them from physics bodies if not accounted for in your code.
     * @param x The horizontal scroll factor of this Game Object.
     * @param y The vertical scroll factor of this Game Object. If not set it will use the `x` value. Default x.
     */
    setScrollFactor(x: number, y?: number): this;

    /**
     * The native (un-scaled) width of this Game Object.
     *
     * Changing this value will not change the size that the Game Object is rendered in-game.
     * For that you need to either set the scale of the Game Object (`setScale`) or use
     * the `displayWidth` property.
     */
    width: number;

    /**
     * The native (un-scaled) height of this Game Object.
     *
     * Changing this value will not change the size that the Game Object is rendered in-game.
     * For that you need to either set the scale of the Game Object (`setScale`) or use
     * the `displayHeight` property.
     */
    height: number;

    /**
     * The displayed width of this Game Object.
     *
     * This value takes into account the scale factor.
     *
     * Setting this value will adjust the Game Object's scale property.
     */
    displayWidth: number;

    /**
     * The displayed height of this Game Object.
     *
     * This value takes into account the scale factor.
     *
     * Setting this value will adjust the Game Object's scale property.
     */
    displayHeight: number;

    /**
     * Sets the size of this Game Object to be that of the given Frame.
     *
     * This will not change the size that the Game Object is rendered in-game.
     * For that you need to either set the scale of the Game Object (`setScale`) or call the
     * `setDisplaySize` method, which is the same thing as changing the scale but allows you
     * to do so by giving pixel values.
     *
     * If you have enabled this Game Object for input, changing the size will _not_ change the
     * size of the hit area. To do this you should adjust the `input.hitArea` object directly.
     * @param frame The frame to base the size of this Game Object on.
     */
    setSizeToFrame(frame: Phaser.Textures.Frame): this;

    /**
     * Sets the internal size of this Game Object, as used for frame or physics body creation.
     *
     * This will not change the size that the Game Object is rendered in-game.
     * For that you need to either set the scale of the Game Object (`setScale`) or call the
     * `setDisplaySize` method, which is the same thing as changing the scale but allows you
     * to do so by giving pixel values.
     *
     * If you have enabled this Game Object for input, changing the size will _not_ change the
     * size of the hit area. To do this you should adjust the `input.hitArea` object directly.
     * @param width The width of this Game Object.
     * @param height The height of this Game Object.
     */
    setSize(width: number, height: number): this;

    /**
     * Sets the display size of this Game Object.
     *
     * Calling this will adjust the scale.
     * @param width The width of this Game Object.
     * @param height The height of this Game Object.
     */
    setDisplaySize(width: number, height: number): this;

    /**
     * The Texture this Game Object is using to render with.
     */
    texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;

    /**
     * The Texture Frame this Game Object is using to render with.
     */
    frame: Phaser.Textures.Frame;

    /**
     * A boolean flag indicating if this Game Object is being cropped or not.
     * You can toggle this at any time after `setCrop` has been called, to turn cropping on or off.
     * Equally, calling `setCrop` with no arguments will reset the crop and disable it.
     */
    isCropped: boolean;

    /**
     * Applies a crop to a texture based Game Object, such as a Sprite or Image.
     *
     * The crop is a rectangle that limits the area of the texture frame that is visible during rendering.
     *
     * Cropping a Game Object does not change its size, dimensions, physics body or hit area, it just
     * changes what is shown when rendered.
     *
     * The crop coordinates are relative to the texture frame, not the Game Object, meaning 0 x 0 is the top-left.
     *
     * Therefore, if you had a Game Object that had an 800x600 sized texture, and you wanted to show only the left
     * half of it, you could call `setCrop(0, 0, 400, 600)`.
     *
     * It is also scaled to match the Game Object scale automatically. Therefore a crop rect of 100x50 would crop
     * an area of 200x100 when applied to a Game Object that had a scale factor of 2.
     *
     * You can either pass in numeric values directly, or you can provide a single Rectangle object as the first argument.
     *
     * Call this method with no arguments at all to reset the crop, or toggle the property `isCropped` to `false`.
     *
     * You should do this if the crop rectangle becomes the same size as the frame itself, as it will allow
     * the renderer to skip several internal calculations.
     * @param x The x coordinate to start the crop from. Or a Phaser.Geom.Rectangle object, in which case the rest of the arguments are ignored.
     * @param y The y coordinate to start the crop from.
     * @param width The width of the crop rectangle in pixels.
     * @param height The height of the crop rectangle in pixels.
     */
    setCrop(x?: number | Phaser.Geom.Rectangle, y?: number, width?: number, height?: number): this;

    /**
     * Sets the texture and frame this Game Object will use to render with.
     *
     * Textures are referenced by their string-based keys, as stored in the Texture Manager.
     * @param key The key of the texture to be used, as stored in the Texture Manager.
     * @param frame The name or index of the frame within the Texture.
     */
    setTexture(key: string, frame?: string | integer): this;

    /**
     * Sets the frame this Game Object will use to render with.
     *
     * The Frame has to belong to the current Texture being used.
     *
     * It can be either a string or an index.
     *
     * Calling `setFrame` will modify the `width` and `height` properties of your Game Object.
     * It will also change the `origin` if the Frame has a custom pivot point, as exported from packages like Texture Packer.
     * @param frame The name or index of the frame within the Texture.
     * @param updateSize Should this call adjust the size of the Game Object? Default true.
     * @param updateOrigin Should this call adjust the origin of the Game Object? Default true.
     */
    setFrame(frame: string | integer, updateSize?: boolean, updateOrigin?: boolean): this;

    /**
     * Fill or additive?
     */
    tintFill: boolean;

    /**
     * Clears all tint values associated with this Game Object.
     *
     * Immediately sets the color values back to 0xffffff and the tint type to 'additive',
     * which results in no visible change to the texture.
     */
    clearTint(): this;

    /**
     * Sets an additive tint on this Game Object.
     *
     * The tint works by taking the pixel color values from the Game Objects texture, and then
     * multiplying it by the color value of the tint. You can provide either one color value,
     * in which case the whole Game Object will be tinted in that color. Or you can provide a color
     * per corner. The colors are blended together across the extent of the Game Object.
     *
     * To modify the tint color once set, either call this method again with new values or use the
     * `tint` property to set all colors at once. Or, use the properties `tintTopLeft`, `tintTopRight,
     * `tintBottomLeft` and `tintBottomRight` to set the corner color values independently.
     *
     * To remove a tint call `clearTint`.
     *
     * To swap this from being an additive tint to a fill based tint set the property `tintFill` to `true`.
     * @param topLeft The tint being applied to the top-left of the Game Object. If no other values are given this value is applied evenly, tinting the whole Game Object. Default 0xffffff.
     * @param topRight The tint being applied to the top-right of the Game Object.
     * @param bottomLeft The tint being applied to the bottom-left of the Game Object.
     * @param bottomRight The tint being applied to the bottom-right of the Game Object.
     */
    setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

    /**
     * Sets a fill-based tint on this Game Object.
     *
     * Unlike an additive tint, a fill-tint literally replaces the pixel colors from the texture
     * with those in the tint. You can use this for effects such as making a player flash 'white'
     * if hit by something. You can provide either one color value, in which case the whole
     * Game Object will be rendered in that color. Or you can provide a color per corner. The colors
     * are blended together across the extent of the Game Object.
     *
     * To modify the tint color once set, either call this method again with new values or use the
     * `tint` property to set all colors at once. Or, use the properties `tintTopLeft`, `tintTopRight,
     * `tintBottomLeft` and `tintBottomRight` to set the corner color values independently.
     *
     * To remove a tint call `clearTint`.
     *
     * To swap this from being a fill-tint to an additive tint set the property `tintFill` to `false`.
     * @param topLeft The tint being applied to the top-left of the Game Object. If not other values are given this value is applied evenly, tinting the whole Game Object. Default 0xffffff.
     * @param topRight The tint being applied to the top-right of the Game Object.
     * @param bottomLeft The tint being applied to the bottom-left of the Game Object.
     * @param bottomRight The tint being applied to the bottom-right of the Game Object.
     */
    setTintFill(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): this;

    /**
     * The tint value being applied to the top-left of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    tintTopLeft: integer;

    /**
     * The tint value being applied to the top-right of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    tintTopRight: integer;

    /**
     * The tint value being applied to the bottom-left of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    tintBottomLeft: integer;

    /**
     * The tint value being applied to the bottom-right of the Game Object.
     * This value is interpolated from the corner to the center of the Game Object.
     */
    tintBottomRight: integer;

    /**
     * The tint value being applied to the whole of the Game Object.
     */
    tint: integer;

    /**
     * Does this Game Object have a tint applied to it or not?
     */
    readonly isTinted: boolean;

    /**
     * The x position of this Game Object.
     */
    x: number;

    /**
     * The y position of this Game Object.
     */
    y: number;

    /**
     * The z position of this Game Object.
     * Note: Do not use this value to set the z-index, instead see the `depth` property.
     */
    z: number;

    /**
     * The w position of this Game Object.
     */
    w: number;

    /**
     * The horizontal scale of this Game Object.
     */
    scaleX: number;

    /**
     * The vertical scale of this Game Object.
     */
    scaleY: number;

    /**
     * The angle of this Game Object as expressed in degrees.
     *
     * Where 0 is to the right, 90 is down, 180 is left.
     *
     * If you prefer to work in radians, see the `rotation` property instead.
     */
    angle: integer;

    /**
     * The angle of this Game Object in radians.
     *
     * If you prefer to work in degrees, see the `angle` property instead.
     */
    rotation: number;

    /**
     * Sets the position of this Game Object.
     * @param x The x position of this Game Object. Default 0.
     * @param y The y position of this Game Object. If not set it will use the `x` value. Default x.
     * @param z The z position of this Game Object. Default 0.
     * @param w The w position of this Game Object. Default 0.
     */
    setPosition(x?: number, y?: number, z?: number, w?: number): this;

    /**
     * Sets the position of this Game Object to be a random position within the confines of
     * the given area.
     *
     * If no area is specified a random position between 0 x 0 and the game width x height is used instead.
     *
     * The position does not factor in the size of this Game Object, meaning that only the origin is
     * guaranteed to be within the area.
     * @param x The x position of the top-left of the random area. Default 0.
     * @param y The y position of the top-left of the random area. Default 0.
     * @param width The width of the random area.
     * @param height The height of the random area.
     */
    setRandomPosition(x?: number, y?: number, width?: number, height?: number): this;

    /**
     * Sets the rotation of this Game Object.
     * @param radians The rotation of this Game Object, in radians. Default 0.
     */
    setRotation(radians?: number): this;

    /**
     * Sets the angle of this Game Object.
     * @param degrees The rotation of this Game Object, in degrees. Default 0.
     */
    setAngle(degrees?: number): this;

    /**
     * Sets the scale of this Game Object.
     * @param x The horizontal scale of this Game Object.
     * @param y The vertical scale of this Game Object. If not set it will use the `x` value. Default x.
     */
    setScale(x: number, y?: number): this;

    /**
     * Sets the x position of this Game Object.
     * @param value The x position of this Game Object. Default 0.
     */
    setX(value?: number): this;

    /**
     * Sets the y position of this Game Object.
     * @param value The y position of this Game Object. Default 0.
     */
    setY(value?: number): this;

    /**
     * Sets the z position of this Game Object.
     * @param value The z position of this Game Object. Default 0.
     */
    setZ(value?: number): this;

    /**
     * Sets the w position of this Game Object.
     * @param value The w position of this Game Object. Default 0.
     */
    setW(value?: number): this;

    /**
     * Gets the local transform matrix for this Game Object.
     * @param tempMatrix The matrix to populate with the values from this Game Object.
     */
    getLocalTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

    /**
     * Gets the world transform matrix for this Game Object, factoring in any parent Containers.
     * @param tempMatrix The matrix to populate with the values from this Game Object.
     * @param parentMatrix A temporary matrix to hold parent values during the calculations.
     */
    getWorldTransformMatrix(tempMatrix?: Phaser.GameObjects.Components.TransformMatrix, parentMatrix?: Phaser.GameObjects.Components.TransformMatrix): Phaser.GameObjects.Components.TransformMatrix;

    /**
     * The visible state of the Game Object.
     *
     * An invisible Game Object will skip rendering, but will still process update logic.
     */
    visible: boolean;

    /**
     * Sets the visibility of this Game Object.
     *
     * An invisible Game Object will skip rendering, but will still process update logic.
     * @param value The visible state of the Game Object.
     */
    setVisible(value: boolean): this;

    /**
     * Sets the body's horizontal and vertical acceleration. If the vertical acceleration value is not provided, the vertical acceleration is set to the same value as the horizontal acceleration.
     * @param x The horizontal acceleration
     * @param y The vertical acceleration Default x.
     */
    setAcceleration(x: number, y?: number): this;

    /**
     * Sets the body's horizontal acceleration.
     * @param value The horizontal acceleration
     */
    setAccelerationX(value: number): this;

    /**
     * Sets the body's vertical acceleration.
     * @param value The vertical acceleration
     */
    setAccelerationY(value: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setAngularVelocity(value: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setAngularAcceleration(value: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setAngularDrag(value: number): this;

    /**
     * [description]
     * @param x [description]
     * @param y [description] Default x.
     */
    setBounce(x: number, y?: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setBounceX(value: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setBounceY(value: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setCollideWorldBounds(value: boolean): this;

    /**
     * [description]
     * @param showBody [description]
     * @param showVelocity [description]
     * @param bodyColor [description]
     */
    setDebug(showBody: boolean, showVelocity: boolean, bodyColor: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setDebugBodyColor(value: number): this;

    /**
     * [description]
     */
    debugShowBody: boolean;

    /**
     * [description]
     */
    debugShowVelocity: boolean;

    /**
     * [description]
     */
    debugBodyColor: number;

    /**
     * [description]
     * @param x [description]
     * @param y [description] Default x.
     */
    setDrag(x: number, y?: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setDragX(value: number): this;

    /**
     * [description]
     * @param value [description]
     */
    setDragY(value: number): this;

    /**
     * [description]
     * @param value `true` to use damping for deceleration, or `false` to use linear deceleration.
     */
    setDamping(value: boolean): this;

    /**
     * Enables this Game Object's Body.
     * @param reset Also reset the Body and place it at (x, y).
     * @param x The horizontal position to place the Game Object and Body.
     * @param y The horizontal position to place the Game Object and Body.
     * @param enableGameObject Also activate this Game Object.
     * @param showGameObject Also show this Game Object.
     */
    enableBody(reset: boolean, x: number, y: number, enableGameObject: boolean, showGameObject: boolean): this;

    /**
     * Stops and disables this Game Object's Body.
     * @param disableGameObject Also deactivate this Game Object. Default false.
     * @param hideGameObject Also hide this Game Object. Default false.
     */
    disableBody(disableGameObject?: boolean, hideGameObject?: boolean): this;

    /**
     * Syncs the Body's position and size with its parent Game Object.
     * You don't need to call this for Dynamic Bodies, as it happens automatically.
     * But for Static bodies it's a useful way of modifying the position of a Static Body
     * in the Physics World, based on its Game Object.
     */
    refreshBody(): this;

    /**
     * Sets the friction (e.g. the amount of velocity reduced over time) of the physics body when moving.
     * The higher than friction, the faster the body will slow down once force stops being applied to it.
     * @param x The amount of horizontal friction to apply.
     * @param y The amount of vertical friction to apply. Default x.
     */
    setFriction(x: number, y?: number): this;

    /**
     * Sets the friction (e.g. the amount of velocity reduced over time) of the physics body when moving horizontally in the X axis.
     * The higher than friction, the faster the body will slow down once force stops being applied to it.
     * @param x The amount of friction to apply.
     */
    setFrictionX(x: number): this;

    /**
     * Sets the friction (e.g. the amount of velocity reduced over time) of the physics body when moving vertically in the Y axis.
     * The higher than friction, the faster the body will slow down once force stops being applied to it.
     * @param x The amount of friction to apply.
     */
    setFrictionY(x: number): this;

    /**
     * Set the X and Y values of the gravitational pull to act upon this Arcade Physics Game Object. Values can be positive or negative. Larger values result in a stronger effect.
     *
     * If only one value is provided, this value will be used for both the X and Y axis.
     * @param x The gravitational force to be applied to the X-axis.
     * @param y The gravitational force to be applied to the Y-axis. If this is not specified, the X value will be used. Default x.
     */
    setGravity(x: number, y?: number): this;

    /**
     * Set the gravitational force to be applied to the X axis. Value can be positive or negative. Larger values result in a stronger effect.
     * @param x The gravitational force to be applied to the X-axis.
     */
    setGravityX(x: number): this;

    /**
     * Set the gravitational force to be applied to the Y axis. Value can be positive or negative. Larger values result in a stronger effect.
     * @param y The gravitational force to be applied to the Y-axis.
     */
    setGravityY(y: number): this;

    /**
     * [description]
     * @param value [description] Default true.
     */
    setImmovable(value?: boolean): this;

    /**
     * [description]
     * @param value [description]
     */
    setMass(value: number): this;

    /**
     * Sets the body offset. This allows you to adjust the difference between the center of the body
     * and the x and y coordinates of the parent Game Object.
     * @param x The amount to offset the body from the parent Game Object along the x-axis.
     * @param y The amount to offset the body from the parent Game Object along the y-axis. Defaults to the value given for the x-axis. Default x.
     */
    setOffset(x: number, y?: number): this;

    /**
     * Sets this physics body to use a circle for collision instead of a rectangle.
     * @param radius The radius of the physics body, in pixels.
     * @param offsetX The amount to offset the body from the parent Game Object along the x-axis.
     * @param offsetY The amount to offset the body from the parent Game Object along the y-axis.
     */
    setCircle(radius: number, offsetX?: number, offsetY?: number): this;

    /**
     * [description]
     * @param x [description]
     * @param y [description] Default x.
     */
    setVelocity(x: number, y?: number): this;

    /**
     * [description]
     * @param x [description]
     */
    setVelocityX(x: number): this;

    /**
     * [description]
     * @param y [description]
     */
    setVelocityY(y: number): this;

    /**
     * [description]
     * @param x [description]
     * @param y [description] Default x.
     */
    setMaxVelocity(x: number, y?: number): this;

  }

}
