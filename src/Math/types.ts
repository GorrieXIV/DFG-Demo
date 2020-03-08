export class Vector2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public toString = (): string => {
        return `[${this.x}, ${this.y}]`;
    }
}

export function randomIntFromRange(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
