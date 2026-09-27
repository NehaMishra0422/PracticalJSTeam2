//Example 1
let userName = 'Neha Mishra';
let password = '12345';
console.log(userName === 'Neha' && password === '12345');  //false 
console.log(userName === 'Neha Mishra' && password === '12345');  //true

//Example 2
let age = 25;
let hasTicket = false;
let isVIP = true;

console.log(age >= 18 && hasTicket); //false
console.log(age >= 18 || hasTicket);  //true
console.log(!isVIP);  //false
console.log(hasTicket || isVIP);  //true

//Example 3
let isBlocked = false;
let isLoggedIn = true;
if(!isBlocked && isLoggedIn) {
     console.log("User can access the application"); 
}
else {
    console.log("Access Denied!");
}

//Example 4
let a = true;
let b = false;
let c = true;
console.log(a && b || c);  //true

//Example 5
let value = null;
console.log( value && "Hello");  // null , null is falsy
console.log( value || "Hello");  //Hello 

//Example 6
let x;
console.log( x && "Javascript");  //undefined , undefined is falsy
console.log( x || "Javascript");  //Javascript
console.log( !x && "Hello");  //Hello
console.log( !x || "Hello");  //true

//Example 7
console.log( "Hello" && "World");  //World, because both values are true so it returns last value
console.log( "Hello" || "World");  //Hello, because 'Hello' is already true

//Example 8
console.log(null && "Hi");  //null
console.log(undefined && "JS");  //undefined
console.log(NaN && 100);  //NaN
console.log(0 && "Practice");  //0
console.log("" && "practice");  //""
console.log(null || 'Hi');  //Hi
console.log(undefined || "JS" ); //JS
console.log(NaN || 100);  //100
console.log(0 || "Practice");  //Practice
console.log("" || "Practice");  //Practice