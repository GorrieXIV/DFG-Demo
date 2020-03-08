import { GameObject } from './base';
import { Card } from './card';
import { Scene } from '../Scenes';

export class Hand extends GameObject {

    cards: Card[] = [];
    static max: number = 4;


    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'hand', x, y);
    }

    public emptyHand()
    {
        this.cards = [];
    }
    

    public draw()
    {
        if (!this.cards) this.emptyHand();
        if (this.cards.length >= Hand.max) console.log("Hand is full");
        else
        {
            for (let i = 0; i < Hand.max; i++)
            {
                if (!this.cards[i])
                {
                    this.cards[i] = new Card(this.scene, this.getPositionFromIndex(i), Hand.y)
                    console.log(`draw card at position ${i}`);
                }
            }
            console.log(this.cards);
        }
    }

    private getPositionFromIndex(index: number) : number
    {
        return this.scene.game.canvas.width / (Hand.max + 1 - index);
    }

}
