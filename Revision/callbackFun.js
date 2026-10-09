//callback function is a function passed as n argument to another function and executes later whenever needed
//example
function hello(name,callback){
    return callback();
}
function bye(name){
    console.log("Good Morning", name);
    console.log("Good bye", name);
}
bye("Neha Mishra");

