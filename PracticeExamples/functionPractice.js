//Example 1
function sum(){
    let a = 20;
    let b = 40;
    console.log("sum of two numbers are :" , a + b);
}
sum();  //sum of two numbers are : 60

//Or with parameters and arguments

function sum1(a,b){
    let sum = a + b;
    return sum;
}
let s = sum1(30,55);
console.log(s);


//example 2
function isEven(a){
    if(a%2===0){
        console.log("Number is Even");
    }
    else {
        console.log("Number is odd");
    }
}
isEven(15);  //Number is odd
isEven(50);  //Number is Even

//Example 3
//print numbers from 1 to 10
function print(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}
print();

//Example 4
//Mean of 5 numbers
function mean(){
    let s1 = 0
    for (let i=1;i<=5;i++){
        s1+=i;
    }
    return s1;
}
let m = mean();
console.log("Sum of 5 numbers are", m);
let mean1 = mean()/5;
console.log("mean of 5 numbers are" , mean1);

//Exmaple 5
//Largest number
function largestNum(){
    let num = [10,20,45,55,60,30];
    let largest =num[0];
    for(let i=0;i<num.length;i++){
        if(num[i]>largest){
            largest = num[i];
        }
    }
    return largest;
}
let l = largestNum();
console.log("Largest number is" , l);

//Example 6
//smallest number 
function smallestNum(){
    let num1 = [20,34,50,15,45,55,10,5];
    let smallest = num1[0];
    for(let i=0;i<num1.length;i++){
        if(num1[i]<smallest){
          smallest = num1[i];
        }
    }
    return smallest;
}
let small = smallestNum();
console.log("smallest number is", small);  //smallest number is 

//Arrow function
//Example 1
let userName = () => {
    return "Neha Mishra";
}
let nam = userName();
console.log(nam);

//Example 2
let sum2 = (a,b)=> {
    return a+b;
}
let s2 = sum2(25,10);
console.log(s2);  //35

//example
//count odd numbers
function oddNum(){
    let count=0;
    for (let i=1;i<=10;i++){
        if(i%2 !==0){
            count++;
        }
    }
    return count;
}
let odd = oddNum();
console.log(odd);

//Example
//find even numbers from an array
function evenNum(array){
    let result =[];
    for(let i=0;i<array.length;i++){
        if(array[i]%2 === 0){
            result.push(array[i]);
        }
    }
    return result;
}
let even = evenNum([10,20,45,60,30,22,89]);
console.log(even);