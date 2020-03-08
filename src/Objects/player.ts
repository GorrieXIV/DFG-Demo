import { CharacterGameObject } from './base';
import { Scene } from '../Scenes/base';

export class PlayerCharacter extends CharacterGameObject {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'fighter', x, y);

        scene.events.on('weakattack', this.performWeakAttack, this);
        scene.events.on('strongattack', this.performStrongAttack, this);
        scene.events.on('grab', this.performGrab, this);

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
