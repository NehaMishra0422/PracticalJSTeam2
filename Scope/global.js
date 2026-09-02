//Global scope - variables declared outside the function or block can be used anywhere in the program
const y =50;
function fun(){
    console.log("Inside block" ,y);
}
fun();
console.log("outside function", y);

//another example
let carName = "MG Hector";
function car(){
    console.log("Car is inside" ,carName);
}
car();
console.log("car is outside" ,carName);