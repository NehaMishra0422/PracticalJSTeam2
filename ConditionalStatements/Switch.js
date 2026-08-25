//switch statement 
let fruit = "Apple";
switch(fruit){
    case 1 : "Banana";
    break;
    case 2 : "Mango";
    break;
    case 3 : "Orange";
    break;
    case 4 : "Apple";
    break;
    case 5 : "Grapes";
    break;
    default : "Fruit not found";
}
console.log(`Fruit Name is ${fruit}`);

//one more example
let language = "Javascript";
let info;
switch(language){
    case 'Java' :
    info = "You are learning Java";
    break;
    case  'Python' :
    info = "You are learning Python";
    break;
    case 'C++' :
    info = "You are learning C++";
    break;
    case  'Javascript' :
    info = "You are Learning Javascript";
    break;
    case 'C#' :
    info = "You are learning C#";
    break;
    default : "Language not found";
}
console.log(`Language Name which you are learning is ${language}`);
console.log(info);

//example 
let browser = "Safari";
switch(browser) {
    case 'Chrome' :
        console.log("You are using Chrome");
        break;
    case 'Safari' :
        console.log("You are using Safari");
        break;
    case 'Edge' :
        console.log("You are using Edge");
        break;
    case 'Firefox' :
        console.log("Yor are using Firefox");
        break;
    default : 'Browser not found';                
}
console.log(browser);

// multiple cases with same result
let day = 'Saturday';
switch(day){
    case 'Saturday' :
    case 'Sunday' :
        console.log("Weekend");
        break;
    case 'Monday' :
    case 'Tuesday' :
    case 'Wednesday' :
    case 'Thursday' :
    case 'Friday' :
        console.log("Weekdays");
        break;
    default : 'Invalid day';                
}
console.log(day);

//calcuator
let a = 20;
let b = 10;
let operator = "*";
switch(operator){
    case "+" :
        console.log("Sum of a & b is" , a+b);
        break;
    case "-" :
        console.log("Minus of a & b is" , a-b);
        break;
    case "*" :
        console.log("Multiply of a & b is" , a*b);
        break;
    case "/" :     
        console.log("Division of a & b is" , a/b);
        break; 
    default : 'not valid operation';       
        
}
console.log(operator);
