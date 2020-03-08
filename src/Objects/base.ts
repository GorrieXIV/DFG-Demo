import { Vector2 } from '../Math/types';

export class GameObject extends Phaser.GameObjects.GameObject {
    position: Vector2 = new Vector2(0, 0);
    sprite: Phaser.GameObjects.Sprite = null;

    constructor(scene: Phaser.Scene, type: string, x: number, y: number) {
        super(scene, type);

        this.position.x = x;
        this.position.y = y;
        console.log(`${type} constructed at ${this.position}`);
    }
}
