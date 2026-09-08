//Arrow Function -> shorthand for writing function

//Example 1 -> no parameter
const message = ()=>{
    console.log("Hello!Good Morning");
}
message();

//example 2 - one parameter , with one parameter we can write without paranthesis
const info = name =>{
    return name;
}
console.log(info("Neha Mishra"));

//example -3 one paramater- with paranthesis
const product = (pName) =>{
   return pName;
    }
console.log(product("Laptop"));

//example 4 --> passing 2 parameters
const calculator = (a,b)=>{
    let sum = a + b;
    console.log(sum);
    let sub = a - b;
    console.log(sub);
}
calculator(20,5);