import { GameObject } from './base';
import { Scene } from '../Scenes/base';
import { randomIntFromRange } from '../Math'

export enum CardType
{
    Attack,
}

export class Card extends GameObject {
    title:    string;
    cardType: CardType; 
    damage:   number;
    cooldown: number;

    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'card', x, y);
        let random = randomIntFromRange(1, 3);
        switch (random)
        {
            case 1:
                this.setGrab();
                break;
            case 2:
                this.setWeakAttack();
                break;
            case 3:
                this.setStrongAttack();
                break;
            
        }
    }

    setGrab()
    {
        this.title = "Grab";
        this.cardType = CardType.Attack;
        this.damage = 1;
        this.cooldown = 1;
    }

    setWeakAttack()
    {
        this.title = "Weak Attack";
        this.cardType = CardType.Attack;
        this.damage = 2;
        this.cooldown = 2;
    }

    setStrongAttack()
    {
        this.title = "Strong Attack";
        this.cardType = CardType.Attack;
        this.damage = 3;
        this.cooldown = 3;
    }
}