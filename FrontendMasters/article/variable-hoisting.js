// article link http://bit.ly/2pm5c8d

/*
 * Table of Contents
 *   1. Intro
 *   2. Hoisting
 *      - is JavaScript’s default behavior of moving declarations to the top
 *      - variable declaration is moved to the top of the function or global code.
 *   3. Javascript Engine
 *   4. Browser Developer Tool
 *   5. Variable Hoisting
 *   6. Wrap-up
 * */

/*1*/
console.log("x is", x); // ReferenceError: x is not defined

/*2*/
console.log("y is", y); // y is undefined
var y;

/*3*/
console.log("z is", z); // z is undefined
var z = 5;
console.log("z is", z); // z is 5
