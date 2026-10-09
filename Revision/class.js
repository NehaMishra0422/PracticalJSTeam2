//example 1
class house{
    construct(){
        console.log("House is under construction");
    }
}
let house1 = new house();
house1.construct();

//example 2
class car{
    engine(){
        console.log("Engine of the car");
    }
}
let c = new car();
c.engine();

//constructor - a special method that runs automatically hen you create object
class Employee{
    constructor(uName,role){
        this.uName = uName;
        this.role = role;
    }
    login(){
        return this.uName;
        return this.role;
    }
}
let emp1 = new Employee("Neha Mishra","QA");
console.log(emp1.login());
let emp2 = new Employee("Shipra Mishra", "Developer");
console.log(emp2.login());