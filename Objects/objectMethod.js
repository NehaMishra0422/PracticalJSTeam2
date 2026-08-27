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
