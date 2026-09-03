//Local scope - variables declared inside function or block can be used only inside the function where it is declared

//block scope
if(true){
     let b ="Hello"; //block scope  //can only used inside the block
 }
 console.log("Outer" , b); //ReferenceError: b is not defined , because b is defined inside the block
                          // b is block scope and we are accessing it outside the block.


//function scope
let a = 10; //global ,can be used anywhere
function scope(){
    a=500; //function , can only used inside the function
    console.log("Inner :" , a); //Inner : 500
}
scope();
console.log("outer :", a);  //outer : 10         

//function scope example 2
function test(){
    let obj = {
        fName : "Neha Mishra",
        isEmployed : "true",
        companyName : "MFS"
    }
   console.log(obj.isEmployed); //true
}

test();
//console.log(obj.fName); //ReferenceError: obj is not defined
