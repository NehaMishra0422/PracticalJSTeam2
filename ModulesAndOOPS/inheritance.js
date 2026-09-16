//Inheritance -> Inheritance means one class can acquire the properties and methods of another class
//OR A child class can reuse properties and methods of a parent class.
// used for code reuseability
//common functionality stays in parent class


//example
class Employee {
    login() {
        console.log("user logged in");
    }
    logout() {
        console.log("user logged out");
    }

}
class Developer extends Employee {
    writeCode() {
        console.log("Developer writes code");
    }
}
class Tester extends Employee {
    test() {
        console.log("Tester Test application");
    }
}
let dev = new Developer();
dev.login();
dev.writeCode();
dev.logout();
let qa = new Tester();
qa.login();
qa.test();
qa.logout();

//example- with super keyword
//super keyword is used when chlid class has a constructor,call super() before using 'this'.

class Person {
    constructor(name) {
        this.name = name;
    }
}
class Engineer extends Person {
    constructor(name, role) {
        super(name);
        this.role = role;

    }
}
let eng = new Engineer("Neha", "Tester"); //creating instance of class which trigerrs the constructor
console.log(eng.name);
console.log(eng.role);

//super.method() --> calls parent method

//example
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    brandName(brand) {
        console.log("Brand Name of the car");
    }
}
class Color extends Car {
    constructor(brand, color) {
        super(brand);  //calls parents constructor
        super.brandName(brand);  //calls parents method
        this.color = color;
        console.log("color of the car");
    }
}
let c = new Color("Mahindra", "Black");
console.log(c.color);
console.log(c.brand);

//Example 
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}
class Dog extends Animal {
    eat() {
        console.log("Dog is eating");
        super.eat();
    }
}
let dog = new Dog();
dog.eat();

