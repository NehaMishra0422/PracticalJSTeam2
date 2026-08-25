//.toUpperCase() - connvert string to Uppercase,gives new string
let fullName = "neha mishra";
let newName = fullName.toUpperCase();
console.log(fullName);
console.log(newName);

//.toLowerCase() - covert string to lower ,gives new string
let lastName = "SHUKLA";
let newName1 = lastName.toLowerCase();
console.log(lastName);
console.log(newName1);

//.trim() - removes whitespace from start and end
let space = "   Whitespace   ";
let newSpace = space.trim();
console.log(space);
console.log(newSpace);

//.trimStart() - removes whitespace from the start
console.log(space.trimStart());

//.trimEnd() - remove whitespace from end
console.log(space.trimEnd());

//.slice() - return part of string
let mobile = "Iphone";
let newMobile = mobile.slice(2,5);
let newMobile1 = mobile.slice(2,7); 
let newMobile2 = mobile.slice(-2,5); 
let newMobile3 = mobile.slice(5,2);                                                
console.log(mobile); //Iphone
console.log(newMobile); //hon ,it will not give error as because end number is greater than string length
console.log(newMobile1); //hone 
console.log(newMobile2); //n , //I  p  h  o  n  e  //here -2 will convert into 4 and ans is n
                                //  0  1  2  3  4  5    //negative index -> positive index
                                //  -6 -5 -4 -3 -2 -1 
console.log(newMobile3); //empty string, it doesn't swap index

//.charAt(idx) - give character at the index
let phone = "Samsung";
console.log(phone.charAt(2)); //m 
console.log(phone.charAt[2]); // undefined, because square bracket is used and 
                              // charAt() is a method where paranthesis used
                              // if [2] is used that means we are trying to access the property of charAt function
console.log(phone.charAt[-3]); //undefined, because square bracket is used
console.log(phone.charAt(-2)); // empty string, chatAt() doesn't support negative index

console.log(phone.at(-2)); //n , at() supports negative index.

//.charCodeAt(index)- returns code of specific character
let language = "Typescript";
console.log(language.charCodeAt(5)); //99
console.log(language.charCodeAt(0)); // 84
console.log(language.charCodeAt(-5)); //NaN --> because charCodeAt() expect positive indexes and
                                       // it doesn't convert -ve index into +ve or count backward like slice()
                                       
//.indexOf()
let dish = "Matar Paneer";
console.log(dish.indexOf("Paneer")); //6                                      
console.log(dish.indexOf("Palak")); //-1 because string not found

//.lastIndexOf()
let text = "Please Locate where 'Locate' occurs";
console.log(text.lastIndexOf("Locate")); //21

//.substring(start,end) - extract characters from start index but not including end index char
let substring = "Typescript";
console.log(substring.substring(3,7)); //escr // will not include end index character
console.log(substring.substring(7,3)); //escr // if start index > end index, it automatically swaps the indexes
console.log(substring.substring(-3,7)); //Typescr // negative becomes 0, (0,7)

//.substr(start,length) - here it will extract the string till the specified length
console.log(substring.substr(2,6)); //pescri
console.log(substring.substr(-2,6)); //pt , counts from the end -2 --> p & 6 is the length 
                                      //but only 2 characters are available so result will be pt 
console.log(substring.substr(2,-6)); //return empty string when length is negative

//.startWith()
console.log(substring.startsWith("Ty")); //true
console.log(substring.startsWith("00")); //false
console.log(substring.startsWith("pt")); //false

//.endsWith()
console.log(substring.endsWith("pt")); //true
console.log(substring.endsWith("12")); //false

//.replace() -
let rep = "Football";
console.log(rep.replace("F", "H")); //Hootball , returns new string
console.log(rep.replace("I", "A")); //Football , returns new string
console.log(rep);

//.replaceAll()
console.log(rep.replaceAll("o", "e")); //Feetball

//concatinating string
let s1 = 'Battery';
let s2 = '50%';
console.log(s1.concat(" is ",s2)); //Battery is 50%
console.log(s1.concat("Neha" , "Less")); //BatteryNehaLess

//padding in string
let p = "456";
console.log(p.padStart(5 , "0" )); //00456 , will add two 0 at the start to make string length to 5
console.log(p.padStart(10 , "NEHA")); //NEHANEH456
console.log(p.padEnd(6, "1")); //456111, will add three 1 at the end to make string length to 1

//.split() - string--> array ,splits strings and returns as array 
let url = "https://www.google.com";
console.log(url.split("/")); //[ 'https:' , '' , 'www.google.com']

let myName = 'Neha Mishra';
console.log(myName.split("")); //['N', 'e', 'h', 'a',' ', 'M', 'i', 's','h', 'r', 'a'] , this will split on characters

let arr = "Apple,Banana,Watermelon,Mango,Kiwi";
console.log(arr.split(",")); //['Apple' , 'Banana' , 'Watermelon' , 'Mango' , 'Kiwi']
console.log(arr.split(" , ")); //[ 'Apple,Banana,Watermelon,Mango,Kiwi' ] ,if space is given before and after ,

//Array--> String , join()
let array = ['Blue','Green','Pink','Red','Orange'];
console.log(array.join(',')); //Blue,Green,Pink,Red,Orange

//modifying original string is not possible because strings are immutable
let char = "Hello!";
char[0] = "h";
console.log(char); //Hello!

///string--> number, Number()
let num = '455909';
console.log(Number(num)); //455909

let friend = "Shipra";
console.log(Number(friend)); //NaN

//another way with +
console.log(+num); //455909

//string--> int , parseInt()
let integer = "456.05";
console.log(parseInt(integer)); //456
console.log(parseInt(friend)); //NaN

//stirng-->float(), parseFloat()
let float = "909.505";
console.log(parseFloat(float));

// + - string and number
// +
console.log(50 + 30); //80
console.log("50" + 30); //5030 , when string is included with +,JS convert number to string
console.log(50 + "30"); //5030 , when string is included with +,JS convert number to string
console.log("50" + "30"); //5030 , JS convert number to string
console.log("Neha" + "30"); //Neha30
console.log("Neha" + 30); //Neha30

//-
console.log(50 - 30); //20
console.log("50" - 30); //20  when string is included with - ,JS converts string to number
console.log(50 - "30"); //20   when string is included with - ,JS converts string to number
console.log("50" - "30"); //20  when string is included with - ,JS converts string to number
console.log("Neha" - 50); //NaN , JS will not convert "Neha" into a number


