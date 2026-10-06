//Encapsulation 
class Employees{
    #id;
    constructor(name,role,id){
        this.name = name;
        this.role = role;
        this.#id =id;
    }
    empName(name){
        return this.name;
    }
    empRole(role){
        return this.role;
    }
    empID(id){
        return this.#id;
    }
}
let emp = new Employees("Neha","QA","12345");
console.log(emp.empName());
console.log(emp.empRole());
console.log(emp.empID());
emp.id = 12367;
console.log(emp.empID()); //it will not change the value of ID because ID is provate field and we are trying  to change it from outside tthe class.


////Abstraction
class Myntra{
    searchDress(){
        return "Searching for dresses....";
    }
    addToCart(){
        return "Adding dress to cart...";
    }
    makePayment(){
        return "Payment done successfully";
    }
}
let myntra = new Myntra();
console.log(myntra.searchDress());
console.log(myntra.addToCart());
console.log(myntra.makePayment());

//polymorphism
class shoes{
    nike(){
        return "Nike Shoes";
    }
}
class NikeModal1 extends shoes{
    nike(){
        return " Nike Modal 1";
    }
} 
class NikeModal2 extends shoes{
    nike(){
    return "Nike Modal 2";
}
}
let N = new NikeModal1();
console.log(N.nike());
let N1 = new NikeModal2();
console.log(N1.nike());

//Inheritance
class Plot{
    house(){
        return " House is build on plot";
    }
}
class Person extends Plot{
    person(){
        return " person is living in House which is build on plot";
    }
}
let p = new Person();
console.log(p.person());
console.log(p.house());