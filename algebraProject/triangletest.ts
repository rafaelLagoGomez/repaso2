
import { Point } from "./point";
import { Triangle } from "./triangle";

// COMPROBACIÓN METODOS RETO-5

const vertex1 = new Point(3,6);
const vertex2 = new Point(8,8);
const vertex3 = new Point(34,12);
const myTriangle = new Triangle(vertex1, vertex2, vertex3)

console.log(myTriangle.calculateLengthSides());



