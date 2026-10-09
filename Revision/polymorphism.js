//Polymorphism - same method but different behavior
//can be achieved by method overriding
//example1
class Animal {
    makeSound(){
        console.log("Animal makes sound");
    }
}
class Dog extends Animal{
    makeSound(){
        console.log("Dog barks");
    }    
} 
class Cat extends Animal{
   makeSound(){
    console.log("Cake Meow");
   }
}
let dog= new Dog();
dog.makeSound();
let cat = new Cat();
cat.makeSound();
