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


//Method overloading - means having multiple methods with same name but different parameters
//but JS doesn't support method overloading.
// if you create two similar methods with different parameters,the last method replaces the previous one.

//Example 
class Calculator{
    add(a,b){
        return a + b;
    }
    add(a,b,c){
        return a + b + c;
    }
}
let calc = new Calculator();
console.log(calc.add(10,20));  //NaN , because first method got replaced with the second method and 
                                       //second method have 3 parameters, so when calc.add(10,20) calls
                                       //it get replaced by add(a,b,c)
                                       //a= 10,b=20, c= undefined , 10 + 20 + undefined = NaN
