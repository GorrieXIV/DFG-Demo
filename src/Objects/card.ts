import { GameObject } from './base';
import { Scene } from '../Scenes/base';

export type AttackCard = WeakAttackCard | StrongAttackCard | GrabCard;

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
        this.sprite.setInteractive().on('pointerdown', this.emitAttack, this);
    }

    emitAttack()
    {
        this.scene.events.emit('attack', this);
    }
}

export class WeakAttackCard extends Card {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'weakattackcard', x, y);        
        this.title = "Weak Attack";
        this.cardType = CardType.Attack;
        this.damage = 2;
        this.cooldown = 2;
    }
}

export class StrongAttackCard extends Card {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'strongattackcard', x, y);
        this.title = "Strong Attack";
        this.cardType = CardType.Attack;
        this.damage = 3;
        this.cooldown = 3;
    }
}

export class GrabCard extends Card {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'grabcard', x, y);
        this.title = "Grab";
        this.cardType = CardType.Attack;
        this.damage = 1;
        this.cooldown = 1;
    }
}
