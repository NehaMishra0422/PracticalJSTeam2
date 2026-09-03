//Global scope - variables declared outside the function or block can be used anywhere in the program
//example 1
const y =50; // here y is global scope because it is define outside block so it can be used anywhere
function fun(){
    console.log("Inside block" ,y); //Inside block 50
}
fun(); 
console.log("outside function", y);  //outside function 50


//example 2
let carName = "MG Hector"; 
function car(){
    console.log("Car is inside" ,carName); //Car is inside MG Hector
}
car();
console.log("car is outside" ,carName); //car is outside MG Hector

//example 3
//block/local scope can only be used inside the block
let a = 10; //global ,can be used anywhere
function scope(){
    a=500; //block //can only used inside the block
    console.log("Inner :" , a); //Inner : 500
}
scope();
console.log("outer :", a);  //outer : 10

//example 4

if(true){
    let b ="Hello"; //block scope  //can only used inside the block
}
console.log("Outer" , b); //ReferenceError: b is not defined , because b is defined inside the block
                          // b is block scope and we are accessing it outside the block.


                              
