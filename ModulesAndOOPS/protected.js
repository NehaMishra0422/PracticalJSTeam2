//Protected - The property/method can be used inside the parent class and its child classes, but is not intended to be used directly from outside.
//created using underscore ( _ ), the underscore is only a convention 
//with protected property or method, it doesn't mean that we can't access it from outside the class.

//Example 
class Employee {
    constructor(name){
        this.name = name;
        this._salary = 55000;  //tells that this is internal property. 
    }
}
class Tester extends Employee {
    checkSalary(){
        console.log(this._salary);
    }
}
let tester = new Tester("Neha");
tester.checkSalary();  //55000
console.log(tester._salary); //55000 , this will work becase salary is protected not private 

// so in above, the child class can access salary because salary is not private

//Example - Protected method
class ATM {
    constructor(){
        this._balance = 45000;
    }
    _checkBalance(){
        console.log("Checking balance", this._balance);
    }
    withdrawCash(amount) {
        if(amount < this._balance){
            this._balance = this._balance - amount;
            console.log("Cash withdraw");
        }
    }
}
class Axis extends ATM{
    showBalance(){
        console.log("Show balance", this._balance);
    }
}
let axis = new Axis();
axis.showBalance();
axis._checkBalance();
axis.withdrawCash(5000);
axis.showBalance();

//this shows Parent + child classes can use them, by convention.