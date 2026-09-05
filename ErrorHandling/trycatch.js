//example 1
try {
    console.log("Execution starts here...");
    //xyz;
    console.log("Execution ends here...");
}
catch(err){
    console.error("Error occured" , err); 
}

//example 2
function myFun(){
    let a = 500;
    try{
        //let s = a.toUpperCase();
        console.log("The value of variable a : " , a);
    }
    catch(e){
        console.log("Error");
    }
}
myFun();

//example 3
function test() {
    let name = "Neha";
    console.log("Execution starts");

try{
    //age;
    console.log("execution in progess...");

}
catch(e){
    console.error("Error occured", e);
}
finally{
    console.log("Finally execution completed");
}
}
test()

//example 4
function check(age){
    if(age > 18){
        console.log("Access granter! User can vote");
    }
    else{
        console.log("Access denied! user can't vote");
    }
}  
    try{
        check(16);
    }
    catch(error){
            console.error("Error occured!", error.message);
        }
    finally{
        console.log("Finally user can vote!");
    }    
//output :
// Access denied! user can't vote
// Finally user can vote!

//example 5
function withdraw(balance,amount){
    if(amount>balance){
        throw new Error("Insufficient balance");
    }
    return balance-amount;
}
try{
const newBalance = withdraw(2000,2500);
console.log(newBalance);
}
catch(error)
{
    console.log("Transaction failed!" , error.message);
}
finally{
    console.log("Transaction completed!");
}
//output
// Transaction failed! error is not defined
// Transaction completed!