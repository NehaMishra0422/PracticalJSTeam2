//callback functions : a function passed as an argument to another function and
// executed later, usually after some task is completed.

//Example 1
function greet(name,callback){
    console.log("Hello !", name);
    callback(name);
}
function bye(userName){
    console.log("GoodBye", userName);
}
greet("Neha Mishra", bye); //passing callback function as an argument

//example 2
function calculator(a, b, operation) {
    return operation(a, b);
}
function addition(a, b) {
    console.log("Addition", a + b);
}
function subtraction(a, b) {
    console.log("Subtraction", a - b);
}
calculator(10, 15, addition);
calculator(55, 25, subtraction);

//Example 2
console.log("Hi , this side Neha Mishra");
console.log("Currently learning Javascript");

setTimeout(() => {
    console.log("In JS team");
}, 4000);

setTimeout(() => {
    console.log("Learning callback function");
}, 0);

console.log("Example of callback function");

//callback hell --> multiple callbacks nested inside each other, making the code difficult to read, understand, and maintain.
//Also known as pyramid of doom

//Example - placing an order
function login(user, callback){
    console.log("1. User get Logged in");
    callback();
}
function getProducts(callback){
    console.log("2. Product fetched");
    callback();
}
function addToCart(product , callback){
    console.log("3. Product added to cart");
    callback();
}
function makePayment(callback){
    console.log("4. Payment is successfull");
    callback();
}
function placeOrder(callback){
    console.log("5. Congratulations! Order is placed Successfully");
    callback();
}
let user = "Neha Mishra";
let product = "Mobile";
login(user, function () {
    getProducts(function () {
        addToCart(product, function () {
            makePayment(function () {
                placeOrder(function () {
                    console.log("COMPLETED!");
                });
            });
        });
    });
});

