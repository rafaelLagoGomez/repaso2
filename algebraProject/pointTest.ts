
import { Point } from "./point";

const myPoint = new Point (5, 6);

console.log(myPoint.toString());

console.log(myPoint.setX(2));
console.log(myPoint.getX());

console.log(myPoint.setY(3));
console.log(myPoint.getY());

console.log(myPoint.toString());

