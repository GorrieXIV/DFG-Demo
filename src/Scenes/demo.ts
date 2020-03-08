import { Scene } from './base';
import { PlayerCharacter, Card, Hand } from '../Objects';

export class Demo extends Scene {

    preload() {
        this.load.image('fighter', 'assets/fighter.jpg');
        this.load.image('fighterHpBar', 'assets/fighterHpBar.jpg');
        this.load.image('sandbag', 'assets/sandbag.jpg');
        this.load.image('sandbagHpBar', 'assets/sandbagHpBar.jpg');
        this.load.image('weakattackcard', 'assets/weakattackcard.jpg');
        this.load.image('strongattackcard', 'assets/strongattackcard.jpg');
        this.load.image('grabcard', 'assets/grabcard.jpg');
        this.load.image('exitbutton', 'assets/exitbutton.jpg');
    }

    create() {
        let player: PlayerCharacter = new PlayerCharacter(this, 400, 300);
        let hand: Hand = new Hand(this, this.handPositionX, this.handPositionY);
        hand.draw();
    }

    private get handPositionX(): number
    {
        return this.gameWidth / Hand.max + 1;
    }

    private get handPositionY(): number
    {
        return this.gameHeight - this.handPositionX;
    }
}
