//Encapsulation - wrapping up all related data and functions in one class and access control to data
// used for data protecting
class Employee{
    #Id;
    constructor(eName,Id){
        this.eName = eName;
        this.#Id = Id; 
    }
    login(eName){
        return this.eName ;
    }
    getId(eName,Id){
        return this.#Id;

    }
}
let emp1 = new Employee("neha","12345");
console.log(emp1.login());
console.log(emp1.getId());
//emp1.#id = "3456";
//console.log(emp1.getId());