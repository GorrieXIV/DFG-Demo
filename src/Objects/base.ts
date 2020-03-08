import { Vector2 } from '../Math/types';
import { Scene } from '../Scenes/base';

export class GameObject extends Phaser.GameObjects.GameObject {
    position: Vector2 = new Vector2(0, 0);
    sprite: Phaser.GameObjects.Sprite = null;

    constructor(scene: Scene, type: string, x: number, y: number) {
        super(scene, type);

        this.position.x = x;
        this.position.y = y;

        scene.add.sprite(x, y, type);

        console.log(`${type} constructed at ${this.position}`);
    }
}
