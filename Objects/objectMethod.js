//using funtion constructor for creating multiple objects
//this keyword is used to refer the current object or owner of the function
function employee(fname,lname,salary){
    this.fname = fname;
    this.lname = lname;
    this.salary = salary;
    this.designation = function designation(){
        console.log(`Employee designation of ${this.fname} ${this.lname} is a Tester`);
    }
} 
const emp1 = new employee("Neha","Mishra" , 50000);
const emp2 = new employee("Abhinav", "Shukla", 90000);
console.log(emp1);
console.log(emp2);
emp1.designation();
emp2.designation();

//calculator using object method
function Calculator() {    //here we are using capital C for constructor function
  this.sum = function sum(a,b){
        return a + b;
  } ,
  this.sub = function sub(a,b){
    return a - b;
  },
this.mul = function mul(a, b){
    return a * b;
},
this.div = function div(a, b){
    return a / b;
}
}
const calc = new Calculator()
console.log("Sum" , calc.sum(50,30));
console.log("Multiply", calc.mul(50,30));
console.log("Divide" , calc.div(50,30));
console.log("Subtract", calc.sub(50,30));

//assign method
//object.assign(destination, source1,source2...)
//here destination = studentDetails,source1 = rollNo, source2 = claasName
//these objects are copied to destination object ie studentDetails.

let student = {
    name : "Shivanshi Mishra",
    age : 10,
}
let rollNo = {no : 30};
let className = { cname :5 };

Object.assign(student, rollNo , className );
console.log(student);
console.log(student.no);

//assign()
let target = { a:3 , b : 5};
let source = { b : 10, c : 15};
let returnedTarget = Object.assign(target,source);
console.log(target); //{ a: 3, b: 10, c: 15 }

//when targer parameter is null or undefiend 
let t1 = { a : null, b : undefined};
let s1 = { b : 10, c : 20};
let rT = Object.assign(t1,s1);
console.log(t1); //{ a: null, b: 10, c: 20 }

//.getOwnPropertyDescriptor() method
// this method tells the properties/attributes of a specific property inside an object.
let car = {
    name : "Morris Garages",
    model : "MG Hector",
    color : "white"
}
console.log(Object.getOwnPropertyDescriptor(car,"model"));
// output : {
//     value: 'MG Hector', --> current value of the property
//   writable: true,   --> if true, the value of the proprty can be changed
//   enumerable: true,  --> if true, the property is included in a for...in loop
//   configurable: true --> if true, the property can be deleted or changed to an accessor property
// }

//example for writable
car.model = "MG ZS EV";
console.log(car.model); //MG ZS EV
console.log(Object.getOwnPropertyDescriptor(car, "model"));
//output :
// {
//   value: 'MG ZS EV',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

//.defineProperty() method --> defines a new property or modify an existing property on an object and return the object
const obj = {};
console.log(Object.defineProperty(obj, "code" ,{
    value : 55,
    writable : false,
}));
console.log(obj);
console.log(obj.code); //55
obj.code = 90;
console.log(obj.code); //55, because we had set property writable to false.

//.hasOwn() --> checks whether an object has property directly on itself or not
let child = {
    name : "Shritik SHukla",
    age : " 1 month",
    city : "Noida",
}
console.log(Object.hasOwn(child, "weight")); //false
console.log(Object.hasOwn(child , "age")); //true

//Object.freeze() --> using this method, you cannot aadd, delete or modify property
// Object.freeze(child);
// child.age = 10;
// console.log(child.age); //1 month
// console.log(delete child.city); //false
// console.log(child); //{ name: 'Shritik SHukla', age: ' 1 month', city: 'Noida' }
// child.weight = "4kg";
// console.log(child); //{ name: 'Shritik SHukla', age: ' 1 month', city: 'Noida' }

//Object.seal() --> we can't add or delete property but can modify
Object.seal(child);
child.age = 10;
console.log(child);
// delete child.city;
// console.log(child);
// child.weight = "4kgs";
// console.log(child);