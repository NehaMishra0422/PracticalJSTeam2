//Static Method --> belongs to class

//Example
class Employee {
    static showCompany(){
        console.log("Mindfire Digital LLP");
    }
}
Employee.showCompany();  //here we didn't create object, we are calling it directly using class 
                        // because static method belongs to the class not object
// let emp = new Employee(); 
// emp.showCompany();          // this won't work and throw TypeError               


//Static property -- belongs to property
class Animal {
    static name = "Dog";
}
console.log(Animal.name);     // here we are directly calling property with class name