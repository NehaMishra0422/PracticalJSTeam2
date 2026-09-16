import {Calculator} from "./calculator.js";

let calc = new Calculator();
console.log("Addition of numbers :", calc.sum(5,10));  //Addition of numbers : 15
console.log("Subtraction of numbers :", calc.sub(50,10));  // Subtraction of numbers : 40
console.log("Multiplication of numbers :", calc.mul(25,5));  // Multiplication of numbers : 125
console.log("Division of numbers :", calc.div(7,10));  // Division of numbers : 0.7