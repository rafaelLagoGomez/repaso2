"use strict";
// ***RETO1: Clase Point con Typescript*** (ver en PDF enunciados)
// ***RETO2: Métodos de Distancias*** (ver en PDF enunciados)
// ***RETO3: Método Calcular Cuadrante*** (ver en PDF enunciados)
// ***RETO4: Calcula el Punto más cercano*** (ver en PDF enunciados)
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
    Point.prototype.calcularQuadrant = function () {
        if (this.x === 0 && this.y === 0) {
            return 0;
        }
        else if (this.x >= 0 && this.y >= 0) {
            return 1;
        }
        else if (this.x < 0 && this.y >= 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else
            return 4;
    };
    Point.prototype.calculateNearest = function (anotherPoints) {
        var nearestPoint = anotherPoints[0];
        var nearestDistance = this.calculateDistance(nearestPoint);
        for (var i = 1; i < anotherPoints.length; i++) {
            var resultDistance = this.calculateDistance(anotherPoints[i]);
            if (resultDistance < nearestDistance) {
                nearestDistance = resultDistance;
                nearestPoint = anotherPoints[i];
            }
        }
        return nearestPoint;
    };
    return Point;
}());
exports.Point = Point;
