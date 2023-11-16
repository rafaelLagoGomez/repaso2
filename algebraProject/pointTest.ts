
import { Point } from "./point";

const myPoint = new Point (5, 6);

// COMPROBACIÓN METODOS RETO1
console.log(myPoint.toString());
console.log(myPoint.setX(2));
console.log(myPoint.getX());
console.log(myPoint.setY(3));
console.log(myPoint.getY());
console.log(myPoint.toString());

// COMPROBACIÓN METODOS RETO2
console.log(myPoint.distanceToOrigin());

const myNewPoint = new Point (12, 4);
console.log(myPoint.calculateDistance(myNewPoint));

// COMPROBACIÓN METODO RETO3
const myPoint2 = new Point (0, 2);
const myPoint3 = new Point (-5, 4);
const myPoint4 = new Point (-6, -15);
const myPoint5 = new Point (9, -6);

console.log(myPoint2.calcularQuadrant());
console.log(myPoint3.calcularQuadrant());
console.log(myPoint4.calcularQuadrant());
console.log(myPoint5.calcularQuadrant());

// COMPROBACIÓN METODO RETO4
const point1 = new Point(0, 0);
const point2 = new Point(1, 1);
const point3 = new Point(2, 2);
const point4 = new Point(3, 3);

const points = [point1, point2, point3, point4];
const nearestPoint = point1.calculateNearest(points);

console.log(nearestPoint);




