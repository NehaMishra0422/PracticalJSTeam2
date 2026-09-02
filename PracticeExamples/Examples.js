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
// A
// AB
// ABC
// ABCD
// ABCDE
let newString = "";
function pattern(string1){
    for(let i=0;i<string1.length;i++){
         newString += string1[i]; 
         console.log(newString);
    } 
}
pattern("ABCDE");

//ABCDE pattern using String.fromCharCode()
//String.fromCharCode() converts number in a character.
// A=65, B=66, C=67, D=68, =69
function stringPattern(){
    for(let i=1;i<=5;i++){
        let row8 = "";
        for(let j=1;j<=i;j++){
            row8+=String.fromCharCode(64 +j) + " ";
        }
        console.log(row8);
    }
}
stringPattern();

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
// 1st iteration -         2nd iteration -       3rd iteration -                4th iteration -
// i=1                      i=2                     i=3                           i=4
//  j=1 -> *                 j=1 -> **               j=1 -> ***                    j=1 -> ****
//  j=2 -> *                 j=2 -> **               j=2 -> ***                    j=2 -> ****
//  j=3 -> *                 j=3 -> **               j=3 -> ***                    j=3 -> ****
//  j=4 -> *                 j=4 -> **               j=4 -> ***                    j=4 -> ****

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
//here j will run depending on value of i
//1st iteration     2nd iteration   3rd iteration    4th iteration     5th iteration
// i=1               i=2             i=3               i=4              i=5
// j=1 -> *          j=1 -> *        j=1 -> *          j=1 -> *         j=1 -> *
//                   j=2 -> **       j=2 -> **         j=2 -> **        j=2 -> **
//                                   j=3 -> ***        i=3 -> ***       j=3 -> ***
//                                                     i=4 -> ****      j=4 -> ****
//                                                                      j=5 -> *****

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
//i=row ,j=space ,k=stars
//1st iteration   2nd iteration   3rd iteration    4th iteration      5th iteration
//i=1              i=2              i=3              i=4                 i=5
//j=4 -> 4space    j=3 -> 3space    j=2 -> 2space    j=1 -> 1space       j=0 -> 0space
//k=1->    *       k=1 ->   *       k=1 ->  *        k=1 -> *            k=1 ->*
//prints           k=2 ->   * *     k=2 ->  * *      k=2 -> * *          k=2 ->* *
//    *            prints           k=3 ->  * * *    k=3 -> * * *        k=3 ->* * *
//                    *             k=4 -> * * * *   k=4 ->* * * *       k=4 ->* * * *
//                   * *           prints                                k=5 ->* * * * *
//                                   *                 prints                  prints
//                                  * *                   *                      *
//                                 * * *                 * *                    * *
//                                                      * * *                  * * *
//                                                     * * * *                * * * *
//                                                                           * * * * * 

console.log("Pyramid");
for(let i=1;i<=5;i++){
    let row7 = ""; 

    //loop for spaces
    for(let j=1;j<=5-i;j++){
        row7 += " " ;   
    }

    //loop for stars
    for(let k=1;k<=i;k++){
        row7 += "*" + " "  ;
        
    }
    console.log(row7);
}

//floyds triangle
// 1
// 23
// 456
// 78910
console.log("Floyd's Triangle");
let num=1;
for(let i=1;i<=4;i++){
    let row8= " ";
    for(j=1;j<=i;j++){
        row8+= num ;
        num+= 1;
    }
    console.log(row8);
}

//Repeated Alphabet pattern
//A
//BB
//CCC
//DDDD
//EEEEE
console.log("Repeated Alphabet Pattern");
for(let i=1;i<=5;i++){
    let row9 = " ";
    for(let j=1;j<=i;j++){
        row9+= String.fromCharCode(64+i);
    }
    console.log(row9);
}

//count vowels in a string
let str1 = "Javascript";
let count = 0;
for(let i=0;i<str1.length;i++){
    if(str1[i] === 'a' || str1[i] === 'i' || str1[i] === 'o' || str1[i] === 'u' || str1[i] === 'e'){
           count++;      
    } 
}
 console.log("Number of vowels in a given string is:" ,count); //Number of vowels in a given string is: 3

 //count how many times character 'a' occurs
 let str2= "Javascript Learning";
 let count1 =0;
 for(let i=0;i<str2.length;i++){
    if(str2[i]=== 'a'){
        count1++;
    }
 }
 console.log("occurance of character 'a' :", count1); //occurance of character 'a' : 3

 //Duplicate characters
 //i loop is for current char
 //j loop for char after the current char
 //1st iteration
 //i=0,j=1
 //str3[0]===str3[1]
 //j===a (X)
 //j=2
 //j===v(X) and so on
 let str3 = "javascript";
 for(let i=0;i<str3.length;i++){
    for(let j=i+1;j<str3.length;j++){
         if(str3[i]===str3[j]){
            console.log("Duplicate char", str3[i]); //a
            break;
         }
        }
 }
 
 //find second largest number
 let arr2 = [10,20,5,25,65,55];
 let largest = arr2[0];
 let secondLargest = arr2[0];
 for(let i=1;i<arr2.length;i++){
    if(arr2[i]>largest){
        secondLargest =largest;
        largest = arr2[i];
    }
    else if(arr2[i]> secondLargest && arr2[i] !== largest){
        secondLargest =  arr2[i];
    }
 }
 console.log("Second Largest number is" , secondLargest); //55