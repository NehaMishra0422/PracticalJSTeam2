//reverse a string -using for loop
let str = "Javascript";
let reversed = "";
for (let i= str.length-1; i>=0; i--){
reversed+=str[i];
}
console.log(reversed); //tpircsavaJ

//revers string using built in function
// let s = "Javascript";
// console.log(s.split("").join().reverse()); //tpircsavaJ
//fist it will split the sting into an array of char, then it will reverse the array and join the array.

//revese using fuction
// let str1 = "Javascript";
let reversed1 = "";
function reverseString(str1){
    for (let i= str1.length-1; i>=0; i--){
     reversed1+=str1[i];
}
 console.log(reversed1);//tpircsavaJ
}
reverseString("Javascript");

//string is a palindrome or not
//let pal = "level";
function palindrome(p){
    
    let pal = "";
    for(let i=p.length-1;i>=0;i--){
        pal+= p[i];
    }
//console.log(pal);
if(p===pal){
    console.log("The string is a palindrome");
}
else{
    console.log("The string is not a palindrome");
}
}

palindrome("level");

//ABCDE in pattern

let newString = "";
function pattern(string1){
    for(let i=0;i<string1.length;i++){
         newString += string1[i]; 
         console.log(newString);
    } 
}
pattern("ABCDE");

//lagest number in an array
let arr = [20,40,60,30,55,90,99];
function largerstNum(arr){
    let largest = arr[0];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
       console.log("Largest number is" ,largest);
}
largerstNum(arr);

//smallest number in an array
let arr1 = [20,40,60,30,55,90,99];
let smallest = arr[0];
function smallestNum(arr1){
    for (let i=0;i<=arr1.length;i++){
        if(arr1[i]<smallest){
            smallest =arr[i];
        }
    }
    console.log("Smallest number is" , smallest);
}
smallestNum(arr1); 

// ****
// ****
// ****
// ****

let n = 4;
for (let i=1;i<=n;i++){
    let row = "";
    for(let j=1;j<=n;j++){
        row += "*";
    }
    console.log(row);
}

//right triangle
// *
// **
// ***
// ****
// *****
console.log("Right Triangle");
for(let i=1;i<=5;i++){
    let row1 = "";
    for(let j=1;j<=i;j++){
        row1+="*";    
    }
    console.log(row1);
}

//inverted triangle
// *****
// ****
// ***
// **
// *
console.log("Inverted Triangle");
for(let i=5;i>=1;i--){
    let row2 = "";
    for(let j=i;j>=1;j--){
        row2 += "*";
    }
    console.log(row2);
}

//Number triangle
//1
//12
//123
//1234
//12345
console.log("Number Triangle");
for(let i=1;i<=5;i++){
    let row4= "";
    for(let j=1;j<=i;j++){
         row4 += j + " ";
    }
    console.log(row4);
}

//inverted number triangle
//12345
//1234
//123
//12
//1

console.log("Inverted number tringle");
for(let i=5;i>=1;i--){
    let row5 = "";
    for(let j=i;j>=1;j--){
        row5 += j + " ";
    }
    console.log(row5);
}

//same number pattern
// 1
// 22
// 333
// 4444
// 55555
console.log("Same number pattern");
for(let i=1;i<=5;i++){
    let row6 = "" ;
    for(let j=1;j<=i;j++){
        row6+=  i ;
    }
    console.log(row6);
}

//pyramid
//    *
//   * *
//  * * *
// * * * *
//* * * * *
console.log("Pyramid");
for(let i=1;i<=5;i++){
    let row7 = ""; 

    //loop fpr spaces
    for(let j=1;j<=5-i;j++){
        row7 += " " ;   
    }

    //loop for stars
    for(let k=1;k<=i;k++){
        row7 += "*" + " ";
        
    }
    console.log(row7);
}
