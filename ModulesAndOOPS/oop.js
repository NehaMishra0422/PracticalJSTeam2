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


