let a = 20;
let b = 30;
let sum = 0;
try {
    console.log("Try block");
    console.log(sum = a + b);
    xyz; //reference error
    console.log(sum);
}
catch(e){
    console.log("Catch Block");
    console.log(e);
}
finally{
    console.log("Finally block");
    console.log("Execution ended");
}

//example 2
function atm(amount,balance){
    if(amount>balance){
        throw new Error ("Insufficient balance");
    }
    return balance-amount;
}

    try{
        const newBal = atm(2500,2000)
        console.log(newBal);
    }
    catch(e){
        console.log("Error occured", e);
}
finally{
    console.log("completed");
}

//example 3
function check(age){
    if(age>18){
        console.log("User can vote");
    }
    else {
        console.log("user can't vote");
    }
    }
    try{
       check(16)
    }
    catch(e){
        console.log("Access denied!" , e.message);
    }
    finally{
        console.log("Process done!");
    }


