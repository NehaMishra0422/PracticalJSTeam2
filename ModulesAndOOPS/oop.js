//OOP - Object Oriented Progamming.
// A way of writing programs by organizing code around objects
//An object can contain : Data -> properties, Actions -> methods
//constructor -> a method that automatically runs when an object is created using 'new'
// we use constructor to initialize the property of object
//new -> keyword to create an instance of a class ie new object which triggers the constructor.
//this -> to reference the current object
//in simple way :
// 'new' creates the object → 'constructor' initializes it → 'this' refers to that object.

//example
class user{
    constructor(name,password){
        this.name = name;
        this.password = password;
    }

    login(){
        console.log(this.name,"User Logged in");
    }
    logout(){
        console.log(this.name, "user logged out");
    }
}
let user1 = new user("Neha", "12345");
user1.login();
user1.logout();

//Here in above example, user -> class, user1 -> Object, name & password -> properties, login() & logout() -> methods

//Default constructor - doesn't take any parameter

class Car {
    constructor(){
        this.brand = "Mahindra";
    }
}
let c = new Car();
console.log(c.brand);   //Mahindra

//Parameterized Constructor - that takes parameters

class Student {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
let student1 = new Student("Neha","31");
console.log(student1.name);
console.log(student1.age);
let student2 =  new Student("Shipra", "30");
console.log(student2.name);
console.log(student2.age);

//Empty constructor - no code inside the constructor

class Room {
    hasObject(){
        console.log("Table is inside the Room");
    }
}
let room =  new Room();
room.hasObject();
