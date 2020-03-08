import { CharacterGameObject } from "../Objects/base";

export abstract class Scene extends Phaser.Scene {

    public get gameWidth(): number {
        return this.gameConfig.width as number;
    }

    public get gameMiddle(): number {
        return this.gameWidth / 2;
    }

    public get gameHeight(): number {
        return this.gameConfig.height as number;
    }

    private get gameConfig() : Phaser.Core.Config
    {
        return this.sys.game.config;
    }

    protected setView(): void {
        // focus on center
        this.cameras.main.centerOn(0, 0);
    }

    public abstract getEnemy(): CharacterGameObject;
}
