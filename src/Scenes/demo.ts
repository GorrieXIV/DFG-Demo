import { Scene } from './base';
import { PlayerCharacter, Card } from '../Objects';

export class Demo extends Scene {

    preload() {
        this.load.image('player', 'assets/fighter.jpg');
    }

    create() {
        let player:PlayerCharacter = new PlayerCharacter(this, 400, 300);
        //let hand:Card[] = null;
        // this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);

        // this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0);

        // const logo = this.add.image(400, 70, 'logo');

        // this.tweens.add({
        //     targets: logo,
        //     y: 350,
        //     duration: 1500,
        //     ease: 'Sine.inOut',
        //     yoyo: true,
        //     repeat: -1
        // })
    }
}
