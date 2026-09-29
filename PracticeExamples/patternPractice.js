//Reverse a string
let str = "Javascript";
let reverse = "";
for(let i=str.length-1;i>=0;i--){
    reverse+= str[i];
}
console.log("reverse a string" ,reverse);

//using function
function reverseS(str1){
    let rev =""
    for(let i=str1.length-1;i>=0;i--){
        rev+=str1[i];
    }
console.log(rev);
}
reverseS("Apple");

//string is palindrome or not
function palindrome(p){
    let pal ="";
    for (let i=p.length-1;i>=0;i--){
        pal+=p[i];
    }
    if(p===pal){
        console.log("String is a Palindrome");
    }
    else {
        console.log("String is not a palindrome");
    }
}
palindrome("level");

//reverse string using inbuilt function

let s= "Python";
console.log(s.split("").reverse().join(""));

//abcde in pattern
function pattern(s){
let str3 = "";
for(let i=0;i<s.length;i++){
    str3+=s[i];
    console.log(str3);
}
}
pattern("ABCDE");

//by using String.fromCharCode()
for (let i=1;i<=5;i++){
    let row ="";
    for (let j=1;j<=i;j++){
        row+=String.fromCharCode(64 + j) + " ";
    }
    console.log(row);
}

//inverted pattern
/* 
E D C B A
D C B A
C B A
B A
A
*/

for (let i=5;i>=1;i--){
    let row1= "";
    for(let j=i;j>=1;j--){
        row1+=String.fromCharCode(64 + j) + " ";
    }
    console.log(row1);
}

//square pattern
// *****
// *****
// *****
// *****
// *****
for(let i=1;i<=5;i++){
    let row2 = "";
    for(let j=1;j<=5;j++){
        row2+= '*' ;
    }
    console.log(row2);
}

//right triangle pattern
for(let i=1;i<=5;i++){
    let row3="";
    for(let j=1;j<=i;j++){
        row3+= '*';
    }
    console.log(row3);
}

//inverted triangle
for(let i=5;i>=1;i--){
    let row4="";
    for(let j=i;j>=1;j--){
        row4+= '*';
    }
    console.log(row4);
}

//Number triangle
for(let i=1;i<=5;i++){
    let row5= "";
    for(let j=1;j<=i;j++){
        row5+= j + " ";
    }
    console.log(row5);
}

//inverted number triangle
for (let i=5;i>=1;i--){
    let row6= "";
    for(let j=i;j>=1;j--){
        row6+= j + " ";
    }
    console.log(row6);
}

//same number pattern triangle
for (let i=1;i<=5;i++){
    let row7 = "";
    for(let j=1;j<=i;j++){
        row7+= i ;
    }
     console.log(row7);
} 

//Pyramid
for(let i=1;i<=5;i++){
    let row8 = "";
    for(let j=1;j<=5-i;j++){
        row8+= " ";
    }
    for(let k=1;k<=i;k++){
        row8+= '*' + " ";
    }
    console.log(row8);
}

//Floyd's triangle
let n=1;
for(let i=1;i<=5;i++){
    let row9 = "";
    for(let j=1;j<=i;j++){
        row9+= n;
        n+= 1;
    }
    console.log(row9);
}

//A
//B B
//C C C
//D D D D
//E E E E E
for(let i=1;i<=5;i++){
    let row10= " ";
    for(let j=1;j<=i;j++){
        row10+= String.fromCharCode(64 + i);
    }
    console.log(row10);
}

//count vowels in a string
let string = "Google";
let count = 0;
for(let i=0;i<string.length;i++){
    if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
        count+=1;
    }
}
console.log('No. of vowels in a string is :' ,count);

//duplicate character
let str3 = "Javascript";
let seen = " ";
for(let i=0;i<str3.length;i++){
    if(seen.includes(str3[i])){
        console.log("Duplicate character", str3[i]);
    }
    else {
        seen += str3[i];
    }
}


//second largest number
let arr2 = [10,20,5,25,65,55];
let largest = arr2[0];
let secondLargest = arr2[0];
for(let i=1;i<arr2.length;i++){
    if(arr2[i]>largest){
        secondLargest = largest;
        largest = arr2[i];
    }
     else if(arr2[i]> secondLargest && arr2[i] !== largest){
        secondLargest =  arr2[i];
    }
 }
console.log(secondLargest);

//Diamond pattern
for(let i=1;i<=5;i++){
    let row11 ="";
    for(let j=1;j<=5-i;j++){
        row11+= " ";
    }
    for (let k=1;k<=i;k++){
        row11+= '*' + " ";
    }
    console.log(row11);
    }
for(let i=5;i>=1;i--){
    let row12= "";
    for(let j=5-i;j>=1;j--){
        row12+= " ";
    }
    for(let k=i;k>=1;k--){
        row12+= '*' + " ";
    }
    console.log(row12);
}

//Strings
let string1 = "  Selenium  ";
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());
console.log(string1.trim());
console.log(string1.trimStart());
console.log(string1.trimEnd());
console.log(string1.slice(2,6));
console.log(string1.slice(-5,11));
console.log(string1.charAt(-4));
console.log(string1.charAt(5));
console.log(string1.charCodeAt(-4));
console.log(string1.charCodeAt(5));
console.log(string1.substring(4,9));
console.log(string1.slice(9,5));
console.log(string1.substring(-7,8));

let array = ['A', 'B','C','D','E'];
console.log(array.join(','));

let num ="123456";
console.log(Number(num));

let float = "100.95";
console.log(parseFloat(float));
console.log(parseInt(float));