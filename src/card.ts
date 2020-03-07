export class Card 
{
    title:    string;
    type:     string; 
    damage:   number;
    cooldown: number;

    constructor ()
    {
        console.log(`Card constructed with damage: ${this.damage}, cooldown = ${this.cooldown}`);
    }
}
