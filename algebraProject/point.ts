
// ***RETO1: Clase Point con Typescript*** (ver en PDF enunciandos)
// ***RETO2: Métodos de Distancias*** (ver en PDF enunciandos)

export class Point {

    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public setX(newX: number) {
        this.x = newX;
    }

    public getX(): number {
        return this.x;
    }

    public setY(newY: number) {
        this.y = newY;
    }

    public getY(): number {
        return this.y;
    }

    public toString(): string {
        return `(${this.x},${this.y})`;
    }

    public distanceToOrigin(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    public calculateDistance(anotherPoint: Point): number {
        const distanceX = this.x - anotherPoint.x;
        const distanceY = this.y - anotherPoint.y;
        return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    }

    public calcularQuadrant(): number {
        if (this.x === 0 && this.y === 0) {
            return 0
        } else if (this.x >= 0 && this.y >= 0) {
            return 1
        } else if (this.x < 0 && this.y >= 0) {
            return 2
        } else if (this.x < 0 && this.y < 0) {
            return 3
        } else if (this.x >= 0 && this.y < 0) {
            return 4
        }
    }
}
