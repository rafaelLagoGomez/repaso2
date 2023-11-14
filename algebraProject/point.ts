
// ***RETO1: Clase Point con Typescript***

// 2. Dicho fichero debe contener la clase Point con los siguientes 
// atributos privados:
// • x : number
// • y : number
// 3. El constructor de la clase debe tener los mismos parámetros de entrada 
// que atributos.
// 4. Crear los métodos setters y getters para todos los atributos de la clase.
// 5. Crear un método toString() que convierta a texto las coordenadas del punto.
// Debe devolver: "(x,y)"
// 6. En otro fichero denominado pointTest.ts importar la clase Point
// 7. Crear un nuevo objeto myPoint de la clase Point , en el 
// fichero pointTest.ts , y probar todos sus métodos . Subir los cambios 
// a GitHub

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

}
