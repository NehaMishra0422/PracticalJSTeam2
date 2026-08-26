//objects - dynamic data structure that stores key-value pairs


//object creation using object literals
let obj = {
    name : "Neha Mishra",
    age : 31,
    isWorking : true
};
console.log(obj);

//object creating using new Object() constructor (constructor is a function or method used to initialize/create object)
let obj1 = new Object();
obj1.name = "Shipra Mishra";
obj1.age = 31;
obj1.job = "Tester"
console.log(obj1);

//nested object creation
let details = {
    name : "Avnish Mishra",
    age : 35,
    job : "Manager",
    location : {
        city : "Noida",
        State : "U.P",
        country : "India"
    }
}
console.log(details);
console.log(details.location);
console.log(details.location.State);



//sum of salaries
let salaries = {
    emp1 : 20000,
    emp2 : 45000,
    emp3 : 55000,
    emp4 : 60000,
    emp5 : 90000
}
 let sum = 0;
 for(let salary in salaries){
    sum = sum + salaries[salary];
 }
 console.log(`Sum of salaries : ${sum}`);