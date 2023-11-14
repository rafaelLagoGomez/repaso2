"use strict";
// ***RETO1: Clase Point con Typescript*** (ver en PDF enunciandos)
// ***RETO2: Métodos de Distancias*** (ver en PDF enunciandos)
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
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
    Point.prototype.distanceToOrigin = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var distanceX = this.x - anotherPoint.x;
        var distanceY = this.y - anotherPoint.y;
        return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    };
    return Point;
}());
exports.Point = Point;
