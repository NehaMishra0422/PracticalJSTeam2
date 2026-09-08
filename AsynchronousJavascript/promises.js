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
            resolve("Food is ready");
        }
        else {
            reject("Food is not ready");
        }
    });
}
foodOrder()
    .then(function (message) {  //.then -> for success
        console.log(message);
    })
    .catch(function (error) {  //.catch -> for error
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
    .then(function (message) {
        console.log(message);
    })
    .catch(function (message) {
        console.log(message);
    })