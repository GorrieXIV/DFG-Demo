import { GameObject } from './base';
import { Scene } from '../Scenes/base';

export class PlayerCharacter extends GameObject {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'fighter', x, y);
    }
}
