function Employee(name, isEmployed){
    return isEmployed(name);
}
function isEmployed(name){
    console.log(name, "is Employed in Mindfire Solutions");
}
Employee("Neha Mishra", isEmployed);  //Neha Mishra is Employed in Mindfire Solutions

//using set timeout
function calculator(a,b,operation){
    return operation(a,b);
}
function add(a,b){
    return setTimeout(()=>{
        console.log("Addition", a + b);
    },4000);
}
function sub(a,b){
    return setTimeout(()=>{
        console.log("Subtraction", a - b);
    },1000);
}
calculator(50,80,add);
calculator(90,100,sub);
//output -
//Subtraction -10
//Addition 130