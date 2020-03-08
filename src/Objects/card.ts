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
        this.adjustSizeOfCards();
        this.bindEventsToFunctions();
    }

    bindEventsToFunctions()
    {
        this.sprite.setInteractive().on('pointerdown', this.onClick, this);
        this.scene.events.on('cooldown', this.disableCard, this);
    }

    adjustSizeOfCards()
    {
        this.sprite.setScale(0.8);
    }

    disableCard(card: AttackCard)
    {
        if (this.disabled) return;
        this.disabled = true;
        let cardIsNewCard: boolean = this.index === card.index;
        if (cardIsNewCard) this.makeCardInvisible();
        else this.makeCardTranslucent();
        this.enableCardAfterCooldown(card.cooldown);
    }

    makeCardInvisible()
    {
        this.sprite.setAlpha(0);
    }

    makeCardTranslucent()
    {
        this.sprite.setAlpha(0.5);
    }

    enableCardAfterCooldown(cooldown: number, modifier = this.cooldownModifier)
    {
        setTimeout(() => {
            this.disabled = false;
            this.sprite.setAlpha(1);
        }, cooldown * modifier);
    }

    onClick()
    {
        if (this.disabled) return;
        this.scene.events.emit('beginplay', this);
        this.sprite.destroy();
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
