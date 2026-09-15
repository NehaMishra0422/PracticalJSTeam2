//Abstraction --> means hiding the internal implementation/complexity and showing only what the user needs to use.
// what --> visible , how --> hidden

//Example 1

class BlackCoffee{
    makeCoffee(){
        this.heatWater();
        this.grindCoffee();
        this.mixIngredients();
    }
    heatWater(){
        console.log("Heating water...");
    }
    grindCoffee(){
        console.log("Grind Coffee...");
    }
    mixIngredients(){
        console.log("Mix Coffee & Water well...");
    }
}
let coffee = new BlackCoffee();
coffee.makeCoffee();
console.log("Coffee is ready");

//In above example, the internal complexity of the code is hidden we don't need to know how water is heating, how coffee is grinding and how it is mixing
//that's call abstraction

//Example 2

class Car {
    start(){
        console.log("Start car");
    }
    accelerate(){
        console.log("Accelerate Car");
    }
    brake(){
        console.log("Apply Brake");
    }
}
let c = new Car();
c.start();
c.accelerate();
c.brake();
