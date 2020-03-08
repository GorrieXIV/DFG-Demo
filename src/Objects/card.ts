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
    disabled: boolean = false;
    index: number;
    cooldownModifier: number = 1000;

    constructor(scene: Scene, type: string, x: number, y: number) {
        super(scene, type, x, y);
        this.sprite.setScale(0.8);
        this.sprite.setInteractive().on('pointerdown', this.onClick, this);
        scene.events.on('cooldown', this.disableCard, this);

    }

    disableCard(cooldown: number)
    {
        if (this.disabled) 
        {
            console.log('waiting for cooldowns');
            return;
        }
        this.disabled = true;
        this.sprite.setAlpha(0.5);
        setTimeout(() => {
            this.disabled = false;
            this.sprite.setAlpha(1);
        }, cooldown * this.cooldownModifier);
    }

    onClick()
    {
        if (this.disabled) 
        {
            console.log('waiting for cooldowns');
            return;
        }
        switch(this.cardType)
        {
            case CardType.Attack:
                this.scene.events.emit('attack', this);
                break
        }
        this.scene.events.emit('playcard', this);

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
