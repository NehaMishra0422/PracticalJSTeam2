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







                              
