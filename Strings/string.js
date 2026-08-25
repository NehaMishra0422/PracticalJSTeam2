//String : used to store and manipulate text.

//string creation
//using double quotes
let string = "Neha Mishra" ;
console.log(string);
console.log("Length of string is" , string.length); //give lenth of string here 11

//using single quotes
let fullName = 'Neha Mishra';
console.log(fullName);
console.log("Length of string is" , fullName.length); // 11

//using template literals
let price = 250;
let product = `The price of nampkin is ${price}`;
console.log(product);

//escape sequences : this is used to add special characters inside a string and always starts with \
let word = 'Bana\'na';
console.log(word);
console.log(word.length); //7 --> \' treat as one character

//add new line
let line = "Hello\nNeha";
console.log(line);
console.log(line.length); // 10 --> \n treat as one character

//tab space
let tab = "Hello\tNeha";
console.log(tab);
console.log(tab.length); // 10 --> \t treat as one character

//template literal- created with back ticks(``), used to add multistring
let myName = `Shipra Mishra`;
console.log(myName);

//multistring
let names= `Hello!   
This side Neha Mishra ,
Learning Javascript`;
console.log(names);

let sentence = `My name is ${myName}`; //string interpolation- adding expression or variables
                                       // inside template literals
console.log(sentence);                                       

//replacing character in string is impossible ie strings are immutable
let char = "Hello!";
char[0] = "h";
console.log(char); //Hello!
