import { GameObject } from './base';
import { Scene } from '../Scenes/base';

export enum CardType
{
    Attack,
}

export class Card extends GameObject {
    title:    string;
    cardType: CardType; 
    damage:   number;
    cooldown: number;

    constructor(scene: Scene, type: string, x: number, y: number) {
        super(scene, type, x, y);

    }

}

export class WeakAttackCard extends Card {

    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'weakattackcard', x, y);        
        this.title = "Weak Attack";
        this.cardType = CardType.Attack;
        this.damage = 2;
        this.cooldown = 2;
        this.setInteractive().on('click', () => this.emit('weakattack', this));

    }

}

export class StrongAttackCard extends Card {

    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'strongattackcard', x, y);
        this.title = "Strong Attack";
        this.cardType = CardType.Attack;
        this.damage = 3;
        this.cooldown = 3;
        this.setInteractive().on('click', () => this.emit('strongattack', this));

    }

}

export class GrabCard extends Card {

    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'grabcard', x, y);
        this.title = "Grab";
        this.cardType = CardType.Attack;
        this.damage = 1;
        this.cooldown = 1;
        this.setInteractive().on('click', () => this.emit('grab', this));

    }

}