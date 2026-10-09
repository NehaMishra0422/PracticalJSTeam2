//var hoisting -> hoisted with undefined
console.log(varHoisted);  //undefined
var varHoisted = 24;
console.log("Var Hoisting", varHoisted);  //24

//let hoisting -> hoisted but TDZ
console.log(letHoisted);
let letHoisted = true;
if(letHoisted){
    console.log("let hoisted with TDZ");
}

//const hoisting -> hoisted but TDZ
console.log(constHoisted);
const constHoisted = 25;
console.log(constHoisted);

//function hoisting -> fully hoisted
test();
function test(){
    console.log("Practice of Function hoisting which is fully hoisted");
}

//function expression hoisting -> not hoisted
exp();
let exp = function(){
    console.log("neha mishra");
}

//arrow function expression hoisting -> not hoisted
console.log(arrow);
let arrow = age => {
    console.log("age is 31");
}