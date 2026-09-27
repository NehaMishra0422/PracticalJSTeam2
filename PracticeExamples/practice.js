//Example 1- For Loop
console.log( ".....Print 0-10 numbers.....");
for(let i=0;i<=10;i++){
    console.log(i);
}

//Example 2
console.log(".....Print Neha Mishra 5 times.....");
let str = "Neha Mishra";
for(let i=1;i<=5;i++){
    console.log(str);
}

//Example 3
console.log(".....Print odd numbers.....");
for(let i=1;i<=10;i++){
    if(i%2 !==0){
        console.log("Number is odd", i);
    }
}

//Example 4
console.log("Print Reverse numbers from 10-0");
for (let i=10;i>=0;i--){
    console.log(i);
}

//Example 5
console.log("Sum of Numbers");
let sum=0;
for(let i=1;i<=10;i++){
    sum+=i;
}
console.log(sum);

//Example 6
console.log(".....Reverse a string.....");
let string = "Javascript";
let reverse = "";
for (let i=string.length-1;i>=0;i--){
    reverse+=string[i];
}
console.log(reverse);

//Example 7
let fruits = ["Apple", "Banana", "Kiwi", "Orange", "Mango"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//Example 8
let num = [10,20,55,35,75,90];
let largest = num[0];
for(let i=1;i<=num.length;i++){
    if(num[i]>largest){
        largest = num[i];
    }
}
console.log("Largest number is", largest);

//Example 9
console.log(".....Sum of even numbers.....");
let arr = [10,20,55,35,75,90];
let sum1 = 0;
for(let i=1;i<=arr.length;i++){
    if(arr[i]%2 === 0){
        sum1+=arr[i];
    }
}
console.log("Sum of even Numbers are" , sum1);

//Example 10
console.log("count odd numbers in an array");
let arr1 = [10,20,55,35,75,90];
let  count=0;
for(let i=0;i<arr1.length;i++){
    if(arr1[i]%2 !== 0){
        count++;
    }
}
console.log("Number of odds are" , count);

//Example 11
let str2 = 'Level';
let palindrome ="";
for(let i = str2.length-1;i>=0;i--){
     palindrome+= str2[i];   
}
console.log(palindrome);

//Example 12
console.log("print multiplication of 5");
for (let i=1;i<=100;i++){
    if(i%5 ===0){
        console.log(i);
    }
}

//Do while
//Example 1
let i=1;
while(i<=10){
    console.log(i);
    i++;
}

//Example 2
let j=0;
while(j<=10){
    if(j%2===0){
        console.log(j);
    }
    j++;
}

//Example 3
let arr3 = [10,40,50,30,74,55];
let a = 0;
while(a<arr3.length){
    console.log(arr3[a]);
    a++;
}

//Example 4
let sum2 = 0;
let x = 1;
while(x<=10){
    if(x%2===0){
        sum2+=x;
    }  
    x++;
}
console.log(sum2);


//Do-While
//Example 1
let n = 1;
do {
    console.log(n);
    n++;
}
while(n<=5)

//Example 2
console.log("Sum of numbers");
let b = 1;
let s = 0;
do {
    s = s + b;
    b++;
}
while(b<=10) 
    console.log(s);   


//for of
//Example 1
let fruit = ["Apple","Mango","Orange","Kiwi","Grapes"];
for(let fruits of fruit){
    console.log(fruits);
}


//for in - objects
//example 1
let object = {
    a : 1,
    b : 2,
    c : 3
}
for(let key in object){
    console.log("Key" ,key ,"value" ,object[key]);
}