﻿import { Scene } from './base';
import { PlayerCharacter, Sandbag, Card, Hand } from '../Objects';
import { CharacterGameObject } from '../Objects/base';

export class Demo extends Scene {
    player:  PlayerCharacter = null;
    hand:    Hand = null;
    sandbag: Sandbag = null;

    fighterOffset: number = 200;
    sandbagHp;

    preload() {
        this.load.image('fighter', 'assets/fighter.jpg');
        this.load.image('fighter_idle1', 'assets/fighter_idle1.jpg');
        this.load.image('fighter_idle2', 'assets/fighter_idle2.jpg');
        this.load.image('fighterHpBar', 'assets/fighterHpBar.jpg');
        this.load.image('sandbag', 'assets/sandbag.jpg');
        this.load.image('sandbagHpBar', 'assets/sandbagHpBar.jpg');
        this.load.image('weakattackcard', 'assets/weakattackcard.jpg');
        this.load.image('strongattackcard', 'assets/strongattackcard.jpg');
        this.load.image('grabcard', 'assets/grabcard.jpg');
        this.load.image('exitbutton', 'assets/exitbutton.jpg');
    }

    create() {
        // Instantiate the player character and their hand/cards.
        this.player = new PlayerCharacter(
            this,
            this.gameMiddle - this.fighterOffset,
            this.gameHeight / 2
        );
        this.hand = new Hand(this, this.handPositionX, this.handPositionY);
        this.hand.draw();

        // Create the dummy sandbag.
        this.sandbag = new Sandbag(
            this,
            this.gameMiddle + this.fighterOffset,
            this.gameHeight / 2
        );

        // Create the sandbag's health bar.
        this.sandbagHp = this.add.sprite(100,100,'sandbagHpBar');
    }

    update() {
        this.player.update();
        this.sandbagHp.setCrop(
            0,
            0,
            (this.sandbag.health / this.sandbag.maxHealth) * this.sandbagHp.width,
            this.sandbagHp.height
        );
    }

    private get handPositionX(): number {
        return this.gameWidth / Hand.max + 1;
    }

    private get handPositionY(): number {
        return this.gameHeight - this.handPositionX;
    }

    public getEnemy(): CharacterGameObject {
        return this.sandbag;
    }
    
}
