//Inheritance -> when one class can aquire the property of other class
// child class aquires property of parent class
//Example
class Person{
    eat(){
        console.log("Eats food");
    }
    work(){
        console.log("Do some work");
    }
}
class neha extends Person{
    sleep(){
        console.log("Neha sleeps");
    }
}
let n = new neha();
n.eat();
n.work();
n.sleep();

//Example 2
class car{
    starts(){
        console.log("Car starts");
    }
    mielage(){
        console.log("Milage of the car is 20");
    }
}
class tyota extends car{
    color(){
        console.log("Black color");
    }
}
class mahindra extends car{
    petrol(){
        console.log("Mahindra runs on Petrol");
    }
}
let t= new tyota();
t.starts();
t.mielage();
t.color();
let m =  new mahindra();
m.starts();
m.mielage();
m.petrol();

