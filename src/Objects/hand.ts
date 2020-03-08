import { GameObject } from './base';
import { Card } from './card';
import { Scene } from '../Scenes';

export class Hand extends GameObject {

    cards: Card[] = [];
    static max: number = 4;


    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'hand', x, y, false);
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
                    this.cards[i] = new Card(
                        this.scene,
                        this.getPositionFromIndex(i),
                        this.sprite.y
                    );
                    console.log(`draw card at position ${i}`);
                }
            }
            console.log(this.cards);
        }
    }

    private getPositionFromIndex(index: number) : number
    {
        let val = (this.scene.gameWidth / (Hand.max + 1)) * (index + 1);
        console.log(val);
        console.log(index);
        console.log(this.scene.gameWidth);
        return val;
    }

}
