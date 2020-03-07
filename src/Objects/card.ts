import { GameObject } from './base';

export class Card extends GameObject {
    title:    string;
    type:     string; 
    damage:   number;
    cooldown: number;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, 'card', x, y);
    }
}
