import { Scene } from './base';

export class Boot extends Scene
{
    public create(): void {
        console.log("Boot");

        this.scene.start("Demo");
    }
}
