import { Vector2 } from '../Math/types';
import { Scene } from '../Scenes/base';

export class GameObject extends Phaser.GameObjects.GameObject {
    position: Vector2 = new Vector2(0, 0);
    sprite: Phaser.GameObjects.Sprite = null;

    constructor(scene: Scene, type: string, x: number, y: number) {
        super(scene, type);

        this.position.x = x;
        this.position.y = y;

        // Get a reference to the list of sprites for this object.
        //let spriteSource =
        //    scene.textures.get(type).getSourceImage() as HTMLImageElement;

        // Instantiate the texture for this game object.
        //let texture: Phaser.Textures.Texture = null
        //texture = new Phaser.Textures.Texture(scene.textureManager,
        //                                      'temporary-key',
        //                                      spriteSource,
        //                                      154,
        //                                      253);

        // Create a sprite for the game object.
        //this.sprite = new Phaser.GameObjects.Sprite(scene, x, y, type);
        scene.add.sprite(x, y, type);

        console.log(`${type} constructed at ${this.position}`);
    }
}
