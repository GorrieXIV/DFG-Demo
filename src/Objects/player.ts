import { GameObject } from './base';
import { Scene } from '../Scenes/base';

export class PlayerCharacter extends CharacterGameObject {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'fighter', x, y);

        scene.eventDispatcher.addListener('weakAttack', this.performWeakAttack, this);
        scene.eventDispatcher.addListener('strongAttack', this.performStrongAttack, this);
        scene.eventDispatcher.addListener('grab', this.performGrab, this);
    }

    public performWeakAttack() {

    }

    public performStrongAttack() {

    }

    public performGrab() {

    }
}
