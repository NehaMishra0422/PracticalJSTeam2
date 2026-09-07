//Promises -. an object that represents eventual result of an asynchronous operation
//Promise is a solution for callback hell
//resolve and reject are predefine din JS Engine

//simple example
let promise =new Promise((resolve,reject) => { 
    console.log("I am Promise");
    resolve("Successfull");
})
console.log(promise);