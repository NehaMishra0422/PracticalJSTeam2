//example 1
let promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve ("Successfull");
    }
    else {
          reject ("Failed");
    }
})
console.log(promise);

//check even number
function isEven(num){
    return new Promise((resolve,reject)=>{
        if(num%2===0){
            resolve("Even Number");
        }
        else{
            reject("Odd Number");
        }

    })
}
isEven(23)
.then(function(message){
    console.log(message);
})
.catch(function(message){
    console.log(message);
})