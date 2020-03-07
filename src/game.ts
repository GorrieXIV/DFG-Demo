import 'phaser';
import { PlayerCharacter } from './player';
import { Card } from './card';

export default class TitleScreen extends Phaser.Scene
{
    constructor ()
    {
        super('TitleScreen');
    }

    preload ()
    {
        // this.load.image('logo', 'assets/phaser3-logo.png');
        // this.load.image('libs', 'assets/libs.png');
        // this.load.glsl('bundle', 'assets/plasma-bundle.glsl.js');
        // this.load.glsl('stars', 'assets/starfields.glsl.js');
    }

    create ()
    {
        // this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);

        // this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0);

        // this.add.image(400, 300, 'libs');

        // const logo = this.add.image(400, 70, 'logo');

        // this.tweens.add({
        //     targets: logo,
        //     y: 350,
        //     duration: 1500,
        //     ease: 'Sine.inOut',
        //     yoyo: true,
        //     repeat: -1
        // })
        let player:PlayerCharacter = new PlayerCharacter();
        let card:Card = new Card();
    }

}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#FFFFFF',
    width: 1080,
    height: 1920,
    scene: TitleScreen
};

const game = new Phaser.Game(config);
