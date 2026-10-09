//example of asynchronouss
console.log("first line of code");
console.log("second line of code");
console.log("third line of code");
setTimeout(()=>{
    console.log("fourth line of code");
    },4000);
console.log("fifth line of code");
console.log("sixth line of code");

//promise
async function practice(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise Practice");
        resolve("success");
    },2000);
})
}
async function test(){
let m= await practice().then((message)=>{
  console.log("successfull");
})
}
test();

//promise another example
let num = 20;
function even(){
    return new Promise((resolve,reject)=>{
        if(num%2 === 0){
            resolve("success");
        }
        else{
            reject("failed");
        }  
          })
}
even().then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
})

//async-await
async function Sum(a,b){
    return a + b;
}
let s = await Sum(10,25);
console.log("Sum of two numbers", s)

//example- async await
async function login(username, password){
    if(username === "Neha Mishra" && password === "12345"){
        console.log("User get logged in fine");
    }
    else{
        console.log("Log in failed!");
    }
}
async function username(){
    let username = "Neha Mishra";
    return username;
}
async function password(){
    let password = "123456";
    return password;
}
async function portal(){
let u = await username();
let p = await password();
console.log(u,p);
await login(u,p);
}

portal();

//asyn-await
async function checkEven(num){
    return new Promise((resolve,reject)=>{
        if(num%2===0){
            resolve("Number is even");
        }
        else {
            reject("Number is not Even");
        }
    })
}
checkEven(5)
.then(function(msg){
    console.log(msg);
}).catch(function(e){
    console.log(e);
})

async function main(){
    try{
    let even = await checkEven(5);
    console.log(even);
    }
    catch(e){
        console.log(e);
    }
}
main();