//example 1
try {
    let a = 100;
    //console.log(x); //Error occured ReferenceError: x is not defined , moves to catch block
    console.log(a);
}
catch(error){
    console.log("Error occured", error); 
}

//Example 2
try {
    let obj = {
        name : "Neha Mishra",
        age : 31,
    }
    //console.log(o.role);  //Error occured ReferenceError: o is not defined, moves to catch block
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj);
    
}
catch(e){
    console.log("Error occured",e);  
}
finally{
    console.log("End of program");  //End of program, finally will execute no matter it error occured or not
}


//Example 3
try{
    console.log("try");
    throw new Error("Throws new error");
    console.log("try1");
}
catch(e1){
    console.log("error raised");
}
finally{
    console.log("Program Ended");
}
//output
//try
//error raised
//Program Ended