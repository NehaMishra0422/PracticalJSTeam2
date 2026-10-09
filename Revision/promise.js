//Example 1
function food(){
    return new Promise((resolve,reject)=>{
        let foodReady = false;
        if(foodReady){
            resolve("Food is ready");
        }
        else{
            reject("Food isnot ready");
        }
    })
}    
food().then((message)=>{
    console.log("Order completed!");
}).catch((error)=>{
    console.log("Retry!", error);
})

//Example 2
function checkEven(num){
    return new Promise((resolve,reject)=>{
        if(num%2===0){
            resolve("number is even");
        }
        else{
            reject("number is odd");
        }
    })
}
checkEven(25).then((msg)=>{
    console.log("Even number");
}).catch((err)=>{
    console.log("odd number!", err);
})

//example 3 - Promise.all
Promise.all([
    Promise.resolve("Promise 1 is resolved"),
    Promise.reject("Promise 2 get rejected"),
    Promise.resolve("Promise 3 got resolved")
])
.then(function(msg){
    console.log(msg);
}).catch(function(err){
    console.log(err);
})

//Example promise.race
const p1 = new Promise((resolve,reject)=>
    setTimeout(()=>{
        resolve("Promise 1");
    },3000),
)
const p2 = new Promise((resolve,reject)=>
    setTimeout(()=>{
        resolve("Promise 2");
    },1000),
)
const p3 = new Promise((resolve,reject)=>
    setTimeout(()=>{
        reject("Promise 3");
    },0),
)
const p4 = new Promise((resolve,reject)=>
    setTimeout(()=>{
        resolve("Promise 1");
    },4000),
)
Promise.race([p1,p2,p3,p4])
.then((msg)=>{
    console.log("Resolved!");
}).catch((err)=>{
    console.log("Rejected!",err);
})