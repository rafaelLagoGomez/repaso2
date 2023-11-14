"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(5, 6);
// COMPROBACIÓN METODOS RETO1
console.log(myPoint.toString());
console.log(myPoint.setX(2));
console.log(myPoint.getX());
console.log(myPoint.setY(3));
console.log(myPoint.getY());
console.log(myPoint.toString());
// COMPROBACIÓN METODOS RETO2
console.log(myPoint.distanceToOrigin());
var myNewPoint = new point_1.Point(12, 4);
console.log(myPoint.calculateDistance(myNewPoint));
// COMPROBACIÓN METODOS RETO3
var myPoint2 = new point_1.Point(0, 2);
var myPoint3 = new point_1.Point(-5, 4);
var myPoint4 = new point_1.Point(-6, -15);
var myPoint5 = new point_1.Point(9, -6);
console.log(myPoint2.calcularQuadrant());
console.log(myPoint3.calcularQuadrant());
console.log(myPoint4.calcularQuadrant());
console.log(myPoint5.calcularQuadrant());
// falta reto 4  - dudas con Rúben compi o Rubén profe
