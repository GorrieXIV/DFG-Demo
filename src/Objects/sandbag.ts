import { GameObject } from './base';
import { Scene } from '../Scenes/base';

export class Sandbag extends GameObject {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'sandbag', x, y);
    }
}
