import { CharacterGameObject, CharacterStatus } from './base';
import { Scene } from '../Scenes/base';
import { AttackCard } from './card';

export class PlayerCharacter extends CharacterGameObject {
    constructor(scene: Scene, x: number, y: number) {
        super(scene, 'fighter', x, y);

        scene.events.on('attack', this.performAttack, this);

    }

    public performAttack(card: AttackCard) {
        this.scene.events.emit('cooldown', card.cooldown);
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
                    this.scene.events.emit('enemyhit', card);
                    this.scene.events.emit('enemycombo', card);
                    break;
                case CharacterStatus.Blocking:
                    this.scene.events.emit('enemyblock', card);
                    break;
                case CharacterStatus.Neutral:
                    this.scene.events.emit('enemyhit', card);
                    break;
                default:
                    // do nothing
                    break;
            }
            
        }
        console.log(card);
    }

    public get enemyInRange(): boolean
    {
        return true; //to do
    }
}
