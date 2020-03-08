import { Scene } from './base';

export class Boot extends Scene
{
    public create(): void {
        this.scene.start("Menu");
    }

    public getEnemy() {
        return null;
    }
}
