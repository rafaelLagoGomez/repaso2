"use strict";
// ***RETO1: Clase Point con Typescript***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
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
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (newX) {
        this.x = newX;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setY = function (newY) {
        this.y = newY;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    return Point;
}());
exports.Point = Point;
