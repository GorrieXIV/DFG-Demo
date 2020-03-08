import { GameObject } from './base';
import { Card } from './card';
import { Scene } from '../Scenes';

export class Hand extends GameObject {

    cards: Card[] = [];
    max: number = 4;
    y: number;


    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'hand', x, y);
        this.y = y;
    }

    public emptyHand()
    {
        this.cards = [];
    }
    

    public draw()
    {
        if (!this.cards) this.emptyHand();
        if (this.cards.length >= this.max) console.log("Hand is full");
        else
        {
            for (let i = 0; i < this.max; i++)
            {
                if (!this.cards[i])
                {
                    this.cards[i] = new Card(this.scene, this.getPositionFromIndex(i), this.y)
                    console.log(`draw card at position ${i}`);
                }
            }
            console.log(this.cards);
        }
    }

    private getPositionFromIndex(index: number) : number
    {
        return this.scene.game.canvas.width / (this.max + 1 - index);
    }

}
