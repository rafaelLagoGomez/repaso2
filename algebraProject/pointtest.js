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
// COMPROBACIÓN METODO RETO3
var myPoint2 = new point_1.Point(0, 2);
var myPoint3 = new point_1.Point(-5, 4);
var myPoint4 = new point_1.Point(-6, -15);
var myPoint5 = new point_1.Point(9, -6);
console.log(myPoint2.calcularQuadrant());
console.log(myPoint3.calcularQuadrant());
console.log(myPoint4.calcularQuadrant());
console.log(myPoint5.calcularQuadrant());
// COMPROBACIÓN METODO RETO4
var point1 = new point_1.Point(0, 0);
var point2 = new point_1.Point(1, 1);
var point3 = new point_1.Point(2, 2);
var point4 = new point_1.Point(3, 3);
var points = [point1, point2, point3, point4];
var nearestPoint = point1.calculateNearest(points);
console.log(nearestPoint);
