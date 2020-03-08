export class Scene extends Phaser.Scene {
    // Create an event dispatcher for the given scene.
    eventDispatcher: Phaser.Events.EventEmitter = null;;

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
}
