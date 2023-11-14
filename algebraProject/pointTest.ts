
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




