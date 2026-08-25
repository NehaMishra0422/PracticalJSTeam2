//var variable - global scope, re-declared, updated
var x = 10;
var x = 50;
var x = 100;
console.log (x);

//global scope 
var y = 55;
function fun1(){
console.log(y);
}
fun1();

//let variable - block scope,can't re-declared, updated
let a = 20;
//let a = 30; //Refrence Error
a = 60;
console.log(a);

//block scope
let b=10;
function fun2(){
   let b = 40;
    console.log(b);
    
}
fun2();
console.log(b);

//one more example
function fun4(){
    let c = 35;
    console.log(c);
}
fun4();

//const variable - block scope, can't re-declared and updated.
const key = 123;
//const key = 567; //ReferenceError
//key = 980; //RefrenceError
console.log(key);

//block scope
const z =565;
function fun3(){
    console.log(z);
}
fun3();

//one more example
function fun5(){
     const n = "abc";
    console.log(n);
}
fun5();