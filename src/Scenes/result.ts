import { Scene } from './base';
import { game } from '../app';

export class Result extends Scene
{
    constructor()
    {
        super('Result');
    }

    preload()
    {
        this.loadImages();
    }

    create()
    {
        this.addImagesToCanvas();
    }

    loadImages()
    {
        this.load.image('result', 'assets/resultcard.jpg');
        this.load.image('start', 'assets/startbutton.jpg');
    }

    addImagesToCanvas()
    {
        this.add.image(this.gameWidth / 2, this.gameHeight / 2, 'result');
        this.add.image(this.gameWidth / 2, this.gameHeight / 2, 'start')
            .setInteractive()
            .on('pointerdown', this.moveToDemoScene, this);
    }

    moveToDemoScene()
    {
        this.scene.start("Demo");
    }

    public getEnemy()
    {
        return null;
    }
}
