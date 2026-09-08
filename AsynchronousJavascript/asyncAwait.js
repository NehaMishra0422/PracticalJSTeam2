//async function -> always returns a promise
//await -> wait for this Promise to complete before moving to the next line inside this async function.
//await can be used inside async function 

//example 1
async function hello() {
    return "hello neha!";
}
let h = hello();
console.log(h);

//Example 2
async function login(userName, password) {
    if (userName === "Neha Mishra" && password === 12345) {
        console.log("User get Logged in");
    }
    else {
        console.log("Login failed ! Invalid credentials");
    }
}
async function userName() {
    let uName = "Neha Mishra";
    return uName;
}
async function password() {
    let pass = 12345;
    return pass;
}
async function main() {

    let u = await userName();
    let pas = await password();
    login(u, pas);
}
main();

//Example 4
async function getData() {
    return new Promise((resolve, reject) => {
        resolve("Data fetched...");
    }
    )
}
async function main1() {
    let data = await getData();
    console.log(data);
}
main1();

//Example 5
async function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User name received")
        }, 3000)
    });
}
async function user() {
    console.log("Starting...");
    let us = await getUser();
    console.log(us);
    console.log("Completed");
}
user();

//Example 6 - promise chaining
async function userLogin(fname) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1. User Logged in")
        }, 4000);
    })
}
async function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2. Product fetched")
        }, 4000);
    })
}
async function addToCart(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3. Product added to cart")
        }, 4000);
    })
}
async function makePayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("4. Payment successfull")
        }, 4000);
    })
}
async function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("5. Congratulations! Order is Placed successfully")
        }, 4000);
    })
}
async function orderProduct() {
    //let fName = "Shipra Shukla";
    //let product = "Laptop";
    let uLogin = await userLogin("Shipra Shukla");
    console.log(uLogin);
    let gPro = await getProducts();
    console.log(gPro);
    let addCart = await addToCart("Laptop");
    console.log(addCart);
    let payment = await makePayment();
    console.log(payment);
    let placeOr = await placeOrder();
    console.log(placeOr);
}
orderProduct();

