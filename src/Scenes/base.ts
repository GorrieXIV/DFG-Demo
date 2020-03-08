export class Scene extends Phaser.Scene {
    // Create an event dispatcher for the given scene.
    eventDispatcher: Phaser.Events.EventEmitter = null;;

    public get gameWidth(): number {
        return this.sys.game.config.width as number;
    }

    public get gameHeight(): number {
        return this.sys.game.config.height as number;
    }

    protected setView(): void {
        // focus on center
        this.cameras.main.centerOn(0, 0);
    }
}
