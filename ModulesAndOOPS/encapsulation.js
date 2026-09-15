//Encapsulation -> wrapping up related data and methods together and control access to the data
//hiding/protecting data + providing controlled methods to access or modify that data.
//Data protection/control → Restrict direct access to sensitive data.

//Example 1
class BankAccount {
    constructor(owner,balance){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount){
        this.balance = this.balance + amount;
    }
    withdraw(amount){
        this.balance = this.balance - amount;
    }
    checkBalance(){
        console.log(this.balance);
    }
}
let account = new BankAccount("Neha", 25000);
account.deposit(10000);
account.checkBalance();
account.withdraw(5000);
account.checkBalance();

//Here in above example all methods and data are grouped together in one single class ie BankAccount
//on the above example , it is public that means anyone can have access to your bank account details. 
// so to make it protected from direct access we can use private fields (#)

//Example 2
class EmployeeInfo{
    setDetails( name,id,phoneNo){
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getPhoneNo(){
        return this.phoneNo;
    }
}
let details = new EmployeeInfo();
details.setDetails("Abhinav", "504576", "+14423949858");
console.log(details.getName());
console.log(details.getId());
console.log(details.getPhoneNo());

//using private fields #
// class Employee {
//     id = 201900;
//     name = "Shipra";
// }
// let emp = new Employee();
// emp.id = 55555;
// emp.name = "Sharad";
// console.log(emp.id);
// console.log(emp.name);

//in above example fields are not protected so anyone have direct access to the data and can change .

//now using #
class Employee {
    #id = "205678";
    name = "Shipra";
}
let emp = new Employee();
//emp.#id = 55555; //error, because #id is inside Employee class and is private field
emp.name = "Sharad";
//console.log(emp.#id); //error, because #id is inside Employee class and is private field
console.log(emp.name);

//to see  ID , we need to create one method inside the class
class Employee1{
    #id = 205678;
    getID(){
        return this.#id;
    }
}
let emp1 = new Employee1();
console.log(emp1.getID());

//Example 5
class ATM{
    #pin;    //means pin is a private variable
    #balance = 50000;   //balance is a private variable
    insertCard(){
        console.log("Card inserted successfully");
    }
    setPin(pin){
        this.#pin = pin;
    }
    checkPin(pin){
       return this.#pin === pin;   //checks whether the entered PIN is correct 
                                   // return sends the result back whoever calls the method
    }
    withdrawCash(amount){
        if(amount<= 0){
        console.log("Please enter valid amount");
        return;
    }
       if(amount>this.#balance){
         console.log("Insufficient Balance");
         return;
       }
       this.#balance = this.#balance - amount;
       console.log("Please collect your cash" , amount);
    }
    showBalance() {
        console.log("Remaining balance:", this.#balance);
    }  
    success(){
        console.log("Successfull!");
    }
    
}
let atm = new ATM();
atm.insertCard();   //Card inserted successfully
atm.setPin(2456);     //set the pin value = 2456
console.log(atm.checkPin(2456));    //true
atm.withdrawCash(5000);           // Please collect your cash 5000
atm.showBalance();                // Remaining balance: 45000
atm.success();                    // Successfull!

