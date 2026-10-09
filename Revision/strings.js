//Example1
let str = "Javascript";
for(let s of str){
    console.log(s);
}

//example 2
let str1 = "Playwright";
for(let i=0;i<str1.length;i++){
    console.log(i);
}

//example 3
let str3 = "Playwright";
let reverse = "";
console.log("Reverse a string");
for(let i=str3.length-1;i>=0;i--){
    reverse+= str3[i];
}
console.log(reverse);

//string is palindrom or not
let str4 = "Madam";
let pal = " ";
for(let i=str4.length-1;i>=0;i--){
    pal+=str4[i];
}
console.log(pal);
// if(pal === str4[i]){
//     console.log("String is Palindrome");
// }
// else{
//     console.log("String is not Palindrome");
// }
console.log(str4.length);
console.log(str4[0]);
console.log(str4[3]);

//template literals
let name = `Neha Mishra`;
console.log(`My name is ${name}`);

//string methods
let str6 = 'javascript';
console.log(str6.toUpperCase());
console.log(str6.charAt(1));
console.log(str6.charCodeAt(4));
console.log(str6.slice(3,8));
console.log(str6.indexOf('r'));

let str7 = "PLAYWRIGHT";
console.log(str7.toLowerCase());

let trim = "  ABCDE  ";
console.log(trim.trim());
console.log(trim.trimStart());
console.log(trim.trimEnd());

let s1 = "Hello!";
let s2 = "World";
console.log(s1.concat(s2));

let str8 = "Yellow";
console.log(str8.replace('Y', 'H'));
console.log(str8.replaceAll('l', 'a'));
