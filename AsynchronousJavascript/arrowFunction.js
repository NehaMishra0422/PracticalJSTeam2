//Arrow Function -> shorthand for writing function
//arrow function without {} -> const square = num => num*num; // no return required
//arrow function with {} -> const square = num => {return num*num}; //return required because object is created

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

//single line arrow function
const square = num => num*num;
console.log("Square of numbers" ,square(5));

//arrow function as callback
function calc (a,b,operator){
    return operator(a,b);
}
function add(a,b){
    return a + b;
}
const res = calc(15,30 ,(a,b) => a+b ); //here operator function is converted to arrow function
console.log(res);


//async await arrow fun
const makeTea = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Tea is ready...")
    },3000);
});
};    
const drinkTea = async ()=>{
    console.log("making tea..."); //first thisline will execute
    const output = await makeTea(); //after 3000s this line will execute because this will wait for makeTea function to give promise
    console.log(output);
    console.log("Drinking tea..."); //at last this line will execute
}
drinkTea();

//output -
// making tea...
// Tea is ready...
// Drinking tea...