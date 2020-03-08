import { GameObject } from './base';
import { Scene } from '../Scenes/base';

export class Card extends GameObject {
    title:    string;
    type:     string; 
    damage:   number;
    cooldown: number;

    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'card', x, y);
    }
}
