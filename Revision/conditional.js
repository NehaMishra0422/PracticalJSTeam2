//if
let color = "Blue";
if(color === "Blue"){
    console.log("waering blue t-shirt");
}

//example 2
let age = 20;
if(age>18){
    console.log("User can vote");
}

//if-else
let age1 = 25;
if(age1>18){
    console.log("Eligible for applying for driving license");
}
else {
    console.log("Not Eligible for applying for driving license");
}

//example 4
let name = "Neha Mishra";
let password = "12345";
if(name === "Neha Mishra" && password === "12345"){
    console.log("Access Granted!");
}
else {
    console.log("Access Denied!");
}

//else-if
let score = 75;
if(score > 90){
    console.log("Student passed with Grade A");
}
else if (score < 80){
    console.log("Student passed with Grade B");
}
else if( score < 50){
    console.log("Student failed with Grade C");
}
else {
    console.log("Supplementry");
}

//switch
let day = 2;
switch(day) {
    case 1 : "Monday";
    console.log("Today is Monday");
    break;
    case 2 : "Tuesday";
    console.log("Today is Tuesday");
    break;
    case 3 : "Wednesday";
    console.log("Today is wednesday");
    break;
    default : "Today is Sunday";
}

//one more example
let language = "Javascript";
switch(language){
    case "Python" :
    console.log("Learning Python");
    break;
    case "Java":
    console.log("Learning Java");
    break;
    case "C++" :
    console.log("Learning C++");
    break;
    case  "Javascript" :
    console.log("Learning Javascript");
    break;
    default :
    console.log("Learning other language");
}