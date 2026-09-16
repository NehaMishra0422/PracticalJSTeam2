//Polymorphism --> same method but different behavior
// can be achieved by using method overriding

//Example 1
class Animal {
    makeSound() {
        console.log("Animal makes different sounds");
    }
}
class Dog extends Animal {
    makeSound(){
        console.log("Dog Barks");
    }
}
class Cat extends Animal {
    makeSound(){
        console.log("Cat Meow");
    }
}
let dog = new Dog();
dog.makeSound();   //Dog Barks
let cat = new Cat();
cat.makeSound();    //Cat Meow

//in above example we are using same method in parent and child class.. but it has different behavior

//Example 2
class car {
    color(){
        console.log("Different color of car");
    }
}
class mgHector extends car{
    color(){
        console.log("The car MG Hector is of Black color");
    }
}
class Mahindra extends car {
    color(){
        console.log("The Mahindra xuv is of color blue");
    }
}
class HondaCity extends car {
    color(){
        console.log("The Honda City car is of Silver color");
    }
}
let hector = new mgHector();
hector.color();                     //The car MG Hector is of Black color
let mahindra = new Mahindra(); 
mahindra.color();                   //The Mahindra xuv is of color blue
let hondacity = new HondaCity();
hondacity.color();                  //The Honda City car is of Silver color