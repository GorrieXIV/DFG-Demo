import { GameObject } from './base';
import { Scene } from '../Scenes/base';

export class PlayerCharacter extends CharacterGameObject {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'fighter', x, y);

        this.setInteractive().on('weakAttack', this.performWeakAttack, this);
        this.setInteractive().on('strongAttack', this.performStrongAttack, this);
        this.setInteractive().on('grab', this.performGrab, this);

    }

    public performWeakAttack() {

    }

    public performStrongAttack() {

    }

    public performGrab() {

    }
}
