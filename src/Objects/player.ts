import { CharacterGameObject } from './base';
import { Scene } from '../Scenes/base';

export class PlayerCharacter extends CharacterGameObject {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'fighter', x, y);

        this.on('weakattack', this.performWeakAttack, this);
        this.on('strongattack', this.performStrongAttack, this);
        this.on('grab', this.performGrab, this);

    }

    public performWeakAttack() {
        console.log('performing weak attack...');
    }

    public performStrongAttack() {
        console.log('performing strong attack...');
    }

    public performGrab() {
        console.log('performing grab...');
    }
}
