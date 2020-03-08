export class Scene extends Phaser.Scene {
    // Create a static texture manager for all textures in the scene.
    //public textureManager = new Phaser.Textures.TextureManager(this.sys.game);

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
