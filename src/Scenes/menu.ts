import { Scene } from './base';
import { game } from '../app';

export class Menu extends Scene
{
    
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
        this.load.image('title', 'assets/titlecard.jpg');
        this.load.image('start', 'assets/startbutton.jpg');
    }

    addImagesToCanvas()
    {
        this.add.image(this.gameWidth / 2, this.gameHeight / 2, 'title');
        this.add.image(this.gameWidth / 2, this.gameHeight / 2, 'start')
            .setInteractive()
            .on('pointerdown', this.moveToDemoScene);
    }

    moveToDemoScene()
    {
        this.scene.start("Demo");
    }

}
