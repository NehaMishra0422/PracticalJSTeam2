//Hoisting- declarations are moved to the top before code execution
//This means we can use functions and variables before they are declared in the code.

//var hoisting --> hoisted and initialized with undefined
console.log(varHoisted); //undefined //here JS will treat varHoisted as var varHoisted = undefined; at the top 
                         //that's why it will return undefined instead of throwing an error
var varHoisted = "Example of Var Hoisting";
console.log(varHoisted); //Example of Var Hoisting

//let and const hoisting --> hoisted but not initialized,they stay in Temporal Dead Zone(TDZ) until they are declared
//Temporal Dead Zone(TDZ) - The period between entering the scope and the variable declaration where the variable cannot be accessed.

//let hoisting
console.log(letHoisted); //ReferenceError: Cannot access 'letHoisted' before initialization
let letHoisted = "Example of Let Hoisting" ;
console.log(letHoisted); //doesn't execute because of the error above

//const hoisting
console.log(constHoisted); //ReferenceError: Cannot access 'constHoisted' before initialization
const constHoisted = "Example of const Hoisting"; //ReferenceError: Cannot access 'constHoisted' before initialization
console.log(constHoisted); //doesn't execute because of the error above

//function hoisting --> completely hoisted,can be called before declaration
funHoisted();
function funHoisted() {
    console.log("Example of function Hoisting");
}

//function expression hoisting -->
funExpHoisted(); //TypeError: funExpHoisted is not a function
var funExpHoisted = function(){
    console.log("Example of function Expression Hoisting");
}

//arrow function hoisting --> works same as function expression hoisting
//with var declaration
arrowVarFunHoisted(); //TypeError: arrowVarFunHoisted is not a function
var arrowVarFunHoisted = () =>{
    console.log("Example of var arrow function hoisting");
}

//with let declaration
arrowLetFunHoisted(); //TypeError: arrowLetFunHoisted is not a function
let arrowLetFunHoisted = ()=>{
    console.log("Example of let arrow funtion hoisting");
}