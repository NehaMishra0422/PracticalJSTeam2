//modifying object properties
let obj = {
    fullName : "Neha Mishra",
    age : 31
};
console.log(obj);
obj.fullName = "ShipraMishra";
console.log(obj);

//adding object properties
obj.job = "Tester";
console.log(obj);

//deleting object properties
delete obj.job;
console.log(obj);

//copying object
let obj1 = obj;
console.log(obj1);
obj1.job = "Tester";
obj1.location = "Noida";
obj.age = 30;
console.log(obj1);
console.log(obj);
