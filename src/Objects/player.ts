import { CharacterGameObject, CharacterStatus } from './base';
import { Scene } from '../Scenes/base';
import { AttackCard } from './card';

export class PlayerCharacter extends CharacterGameObject {
    idleIncrement: number = 0;
    currentSprite: string = 'fighter_idle1';

    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'fighter', x, y);
        this.sprite.setTexture(this.currentSprite);

        scene.events.on('attack', this.performAttack, this);
    }

    public performAttack(card: AttackCard) {
        this.scene.events.emit('cooldown', card);
        this.status = CharacterStatus.Attacking;
        let enemy = this.scene.getEnemy();
        // play animation
        // play sound
        if (this.enemyInRange)
        {
            switch(enemy.status)
            {
                case CharacterStatus.Attacking:
                    //          switch attack priority
                    //          case equal
                    //              emit clank
                    //          case greater
                    //              emit enemy hit
                    //          case less than
                    //              emeit player hit
                    break;
                case CharacterStatus.Hitstun:
                    // Deal hit to enemy and continue combo.
                    enemy.takeDamage(card.damage);
                    break;
                case CharacterStatus.Blocking:
                    // Enemy blocks damange.
                    break;
                case CharacterStatus.Neutral:
                    // Deal hit to enemy.
                    enemy.takeDamage(card.damage);
                    break;
                default:
                    // do nothing
                    break;
            }
            
        }
        console.log(card);
    }

    public update() {
        this.idleIncrement += 1;
        if (this.idleIncrement >= 60) {
            this.idleIncrement = 0;
            if (this.currentSprite === 'fighter_idle1') {
                this.currentSprite = 'fighter_idle2';
                this.sprite.setTexture(this.currentSprite);
            } else {
                this.currentSprite = 'fighter_idle1';
                this.sprite.setTexture(this.currentSprite);
            }
        }
    }

    public get enemyInRange(): boolean
    {
        return true; //to do
    }
}
