//private - A property or method can be accessed only from inside the class.
//private properties or private methods are created using #.
//why we make private property -  we don't want someone from outside the class make change or see property directlys

//Example - private property
class Employee {
    #salary = 50000;
    checkSalary(){
        console.log(this.#salary);
    }
}
let emp = new Employee();
emp.checkSalary();
//console.log(emp.#salary); //SyntaxError: Private field '#salary' must be declared in an enclosing class

//Example - Private property with a method
// with public method, we can access or modify private data

class Employee1{
    #salary = 50000;
    getSalary(){
        console.log(this.#salary);
    }
    increaseSalary(amount){
        this.#salary = this.#salary + amount;    // here we are modifying salary
    }
}
let emp1 = new Employee1();
emp1.getSalary(); //50000 
emp1.increaseSalary(10000); // salary will be increased by 10000, private data get modified
emp1.getSalary();   //60000


//Example 3- Private Method
class ATM{
    #checkPin(){
        console.log("Checking Pin...");
    }
    withdrawCash(){
        this.#checkPin();
        console.log("Withdraw Cash");
    }
}
let atm = new ATM();
atm.withdrawCash();  
//output
// Checking Pin...
// Withdraw Cash