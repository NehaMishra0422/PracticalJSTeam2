//global
let x = 20;
function test(){
    x = 50;
    console.log("Inner", x);  //50
}
test();
console.log("outer",x);  //20

//local
function local(){
    let y = 100;
    console.log("Inner",y);  //100
}
local();
console.log("Outer",y);  //Reference Error

//block scope
if(true){
    let z =10;
    console.log("inner", z);  //10

}
console.log("outer",z); //Reference Error

console.log(null === undefined);  //false
console.log(null== undefined);  //true
console.log(NaN == NaN);  //false
console.log(NaN === NaN);  //false
