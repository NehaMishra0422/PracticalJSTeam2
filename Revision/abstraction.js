//abstraction -> hiding the inner complexity and showing only ehat user needs to see
//Example
class BlackCoffee{
    boilWater(){
        console.log("Water is boiling");
    }
    mixIngredients(){
        console.log("Mix water and milk");
    }
    addSugar(){
        console.log("add sugar");
    }
}
let coffee = new BlackCoffee();
coffee.boilWater()
coffee.mixIngredients();
coffee.addSugar();
console.log("Black coffee is ready");