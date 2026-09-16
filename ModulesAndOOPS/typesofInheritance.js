//TYPES OF INHERITANCE

//1. Single Inheritance - one chlid class inherits from one parent class
class Room {
    hasObject() {
        console.log("Table");
    }
}
class Box extends Room {
    onTable() {
        console.log("Box is placed on Table");
    }
}
let box = new Box();
box.onTable(); //Box is placed on Table , Box own method
box.hasObject();  //Table , inherited from Room

//2. Multilevel Interitance - A class inherits from another class, and a third class inherits from the second class.
//example 
class Seed {
    germinate() {
        console.log("Seed is germinating");
    }
}
class Plant extends Seed {
    growLeaves() {
        console.log("Plant is growing into Leaves");
    }
}
class Tree extends Plant {
    growBranches() {
        console.log("Tree is growing branch");
    }
}
let T = new Tree();
T.germinate();   //Seed is germinating
T.growLeaves();   //Plant is growing into Leaves
T.growBranches();  //Tree is growing branch

//in above example, Tree extends Plant and Plant extends Seed.. 
// So Tree can access methods of both classes as well as its own method.
//This is called Multilevel Inheritance

//3.Hierarchical Inheritance - Multiple child classes inherit from the same parent class.
//Example 
class Mahindra{
    start(){
        console.log("Mahindra vehicle starts");
    }
    stops(){
        console.log("Mahindra vehicle stops");
    }
}
class Thar extends Mahindra {
    offRoad() {
        console.log("Thar is good for off-road driving");
    }
}
class Scorpio extends Mahindra{
    travel(){
        console.log("Scorpio is good for long-distance driving");
    }
}
let thar = new Thar();
let scorpio = new Scorpio();
thar.start();
thar.stops();
thar.offRoad();
scorpio.start();
scorpio.stops();
scorpio.travel();

//4. Multiple Inheritance - one child class inherits from multiple parents.
//JS doesn't support this directly, this can be acieved by using mixins
//Mixins - a way to give a class additional methods or properties from another object/class without using normal inheritance.

//Example
class GPS{
    navigate(){
        console.log("Navigation Started");
    }
}
class Music{
    playMusic(){
        console.log("Playing Music");
    }
}
class Bus{
    drive(){
        console.log("Bus is driving");
    }
}
Object.assign(Bus.prototype , GPS.prototype);
Object.assign(Bus.prototype , Music.prototype);

let bus = new Bus();
bus.drive();
//bus.navigate();
//bus.playMusic();

//5. Hybrid Inheritance - combination of two or more types of inheritance

//Example
class Animal{
    eat(){
        console.log("Animal is eating");
    }
}
class Dog extends Animal {
    bark(){
        console.log("Dog is barking");
    }
}
class Cat extends Animal{
    meow(){
        console.log("Cat is Meowing");
    }
}
class Puppy extends Dog {
    play(){
        console.log("Puppy is playing");
    }
}
console.log("DOG");

let dog = new Dog();
dog.eat();
dog.bark();

console.log("CAT");

let cat = new Cat();
cat.eat();
cat.meow();

console.log("PUPPY");

let puppy = new Puppy();
puppy.eat();
puppy.bark();
puppy.play();

//in  the above example, it a combination of hierarchical + multilevel inheritance
//Animal -> Dog -> puppy
//Animal -> cat