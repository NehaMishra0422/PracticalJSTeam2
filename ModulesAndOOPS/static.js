//Static Method --> belongs to class
//why to use static? suppose there are 100 of employees in a company .. each employee has their name, designation,salary etc
//but one common is Company name, so in that case we don't need to store company name seperatly for each employee
//we can create one property which is static .
//for calling static property we don't need to create object. Calling it direclty using class will work

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