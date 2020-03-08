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
    status:    CharacterStatus = CharacterStatus.Neutral;
    maxHealth: number = 20;
    health:    number = 20;

    constructor(scene: Scene, type: string, x: number, y: number) {
        super(scene, type, x, y);
    }

    public takeDamage(damage: number) {
        if (this.health > 0) {
            this.health -= damage;
            console.log(`${this.type} took ${damage} damage! Now at ${this.health} HP.`);
        }

        if (this.health <= 0) {
            this.health = 0;
            console.log(`${this.type} defeated!`);
        }
    }
}
