"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
// COMPROBACIÓN METODOS RETO-5
var vertex1 = new point_1.Point(3, 6);
var vertex2 = new point_1.Point(8, 8);
var vertex3 = new point_1.Point(34, 12);
var myTriangle = new triangle_1.Triangle(vertex1, vertex2, vertex3);
console.log(myTriangle.calculateLengthSides());
