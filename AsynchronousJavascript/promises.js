//Promises -. an object that represents eventual result of an asynchronous operation
//Promise is a solution for callback hell
//resolve and reject are predefined in JS Engine

//simple example
let promise = new Promise((resolve, reject) => {
    console.log("I am Promise");
    setTimeout(() => {
        resolve("Successfull");
    }, 5000);

})
console.log(promise);

//example 2
let p = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Successfull");
    }
    else {
        reject("Failed");
    }
});
console.log(p);

//Example 3 
function foodOrder() {
    return new Promise((resolve, reject) => {
        let foodReady = true;
        if (foodReady) {
            resolve("Food is ready"); //resolve() is a method
        }
        else {
            reject("Food is not ready");
        }
    });
}
//promise consumption-> is done by writing the function name here foorOrder().then(), 
// .then() have callback function which returns some value from the foodOrder function 
//.then()-> direct relation with resolve-> for success
//.cathc() -> direct relation with reject -> for error 
foodOrder()
    .then(function (message) {   //runs if resolve is called
        console.log(message);
    })
    .catch(function (error) {  //runs if reject is called
        console.log(error);
    });

//example 4
function canVote() {
    return new Promise((resolve, reject) => {
        let age = 25;
        if (age > 18) {
            resolve("User can vote");
        }
        else {
            reject("User can't vote");
        }
    });
}
canVote()
    .then(function (message) { //runs if resolve is called
        console.log(message);
    })
    .catch(function (message) { //runs if reject is called
        console.log(message);
    })

//example 5- check even number
function checkEvenNum() {
    return new Promise((resolve, reject) => {
        let num = 10;
        if (num % 2 === 0) {
            resolve("Number is even");
        }
        else {
            reject("Number is not even");
        }
    });
}
checkEvenNum()
    .then(function (number) {
        console.log(number);
    })
    .catch(function (error) {
        console.log(error);
    })

//Promise.all() method --> wait for all promises to resolve and returns result as an array.
//if any promise rejected, it rejects .
Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed"),
    Promise.resolve("Task 4 completed"),
])
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    })
//output - Task 3 failed, because one promise got rejected so it immediatly rejects all.

//Another example for promise.all()
Promise.all([
    Promise.resolve("Food Ordered"),
    Promise.resolve("Order accpeted"),
    Promise.resolve("Order is being prepared"),
    Promise.resolve("Food is ready and out for delivery"),
    Promise.resolve("Food is delivered")
])
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    })

//output : retuns an array
// [
//   'Food Ordered',
//   'Order accpeted',
//   'Order is being prepared',
//   'Food is ready and out for delivery',
//   'Food is delivered'
// ]

//Promise.race() method -> Settles as soon as the very first promise settles (whether it succeeds or fails)
const p1 = new Promise((resolve, reject) =>
    setTimeout(() =>
        resolve("Promise 1 resolved")
        , 3000),
)
const p2 = new Promise((resolve, reject) =>
    setTimeout(() =>
        resolve("Promise 2 resolved")
        , 2000),
)
const p3 = new Promise((resolve, reject) =>
    setTimeout(() =>
        reject("Promise 3 rejected")
        , 0),
)
Promise.race([p1, p2, p3])
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    })

//output -> Promise 3 rejected ,because  p2 finishes first as it will run in 0sec 