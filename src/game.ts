import 'phaser';
import { Boot, Menu, Demo } from './Scenes';

export class DFG extends Phaser.Game {

    // --------------------------------------------------------------------
    constructor() {

        // default renderer
        let renderer: number = Phaser.AUTO;

        // init game
        super({type:            renderer,
               parent:          "game_container",
               width:           1080,
               height:          1920,
               backgroundColor: "#FFFFFF",
               title:           "DFG Demo"});

        // states
        this.scene.add("Boot", Boot);
        this.scene.add("Menu", Menu);
        this.scene.add("Demo", Demo);

        // start
        this.scene.start("Boot");
    }
}
