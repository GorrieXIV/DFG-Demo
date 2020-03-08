import { Vector2 } from '../Math/types';
import { Scene } from '../Scenes/base';

export enum CharacterStatus
{
    Neutral,
    Attacking,
    Blocking,
    Hitstun,
    Grounded
}

export class GameObject extends Phaser.GameObjects.GameObject {

    sprite: Phaser.GameObjects.Sprite = null;
    scene: Scene = null;

    constructor(scene: Scene, type: string, x: number, y: number, visible: boolean = true) {
        super(scene, type);
        this.scene = scene;
        this.sprite = this.scene.add.sprite(x, y, type);
        this.sprite.visible = visible;
        console.log(`${type} constructed at (${this.sprite.x}, ${this.sprite.x})`);
    }

    public move(x: number, y: number) {
        this.sprite.setPosition(x, y);
    }

}

export class CharacterGameObject extends GameObject
{
    status: CharacterStatus = CharacterStatus.Neutral;
    constructor(scene: Scene, type: string, x: number, y: number)
    {
        super(scene, type, x, y);
    }
}
