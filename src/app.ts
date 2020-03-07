import 'phaser';
import { DFG } from './game';

export let game: Phaser.Game = null;

function launch(): void {

    game = new DFG();
}

window.onload = launch;
