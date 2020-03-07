import { GameObject } from './base';

export class PlayerCharacter extends GameObject {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, 'player', x, y);
    }
}
