import { GameObject } from './base';
import { Card, AttackCard, WeakAttackCard, StrongAttackCard, GrabCard, CardType } from './card';
import { Scene } from '../Scenes';
import { randomIntFromRange } from '../Math';

export class Hand extends GameObject {

    cards: Card[] = [];
    static max: number = 4;


    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'hand', x, y, false);
        scene.events.on('beginplay', this.playCard, this);
    }

    public playCard(card: AttackCard)
    {
        let playedCard = this.cards[card.index];
        this.cards[card.index] = null;
        this.draw();
        switch(playedCard.cardType)
        {
            case CardType.Attack:
                this.scene.events.emit("attack", playedCard);
                break;
        }
    }

    public emptyHand()
    {
        this.cards = [];
    }
    

    public draw()
    {
        if (!this.cards) this.emptyHand();
        for (let i = 0; i < Hand.max; i++)
        {
            if (!this.cards[i])
            {
                let randomInt = randomIntFromRange(1,3);
                let randomCard: AttackCard;
                let spriteX = this.getPositionFromIndex(i);
                switch (randomInt)
                {
                    case 1:
                        randomCard = new WeakAttackCard(
                            this.scene,
                            spriteX,
                            this.sprite.y
                        );
                        break;
                    case 2:
                        randomCard = new StrongAttackCard(
                            this.scene,
                            spriteX,
                            this.sprite.y
                        );
                        break;
                    default:
                        randomCard = new GrabCard(
                            this.scene,
                            spriteX,
                            this.sprite.y
                        );
                        break;
                }
                this.cards[i] = randomCard;
                this.cards[i].index = i;
            }
        }
        console.log(this.cards);
    }

    private getPositionFromIndex(index: number) : number
    {
        return (this.scene.gameWidth / (Hand.max + 1)) * (index + 1);
    }

}
