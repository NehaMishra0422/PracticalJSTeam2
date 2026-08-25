//function : block of code that performs specified task and can be invoked anytime whenever needed

//print name : without parameter & argument
function fullName(){
    console.log("My Name is Neha Mishra");
}
fullName();

//print numbers from 1 to 10
function print(){
    for(let i=1 ; i<=10 ; i++){
        console.log("number", i);
        }
}
print();

// sum of two numbers : with parameter and argument
function sum(a,b){ // a and b are parameters
    console.log("sum of two numbers", a + b);
     //let result = a + b;
    //console.log("Sum of two numbers" , result);
}
sum(10,20); //calling function // 10 and 20 are arguments


//another example
function multiply(d,f){
    let mul = d * f;
    return mul;
}
let answer = multiply(10,5);
console.log("Multiplication of two numbers" , answer);

//mean of 5 numbers
function add(){
    let count = 0;
    for(let i =1 ; i<=5 ; i++){
        count = count + i;
    }
    return count; //if we add console.log(count); it will show undefined because it only displays the value
                //it doesn't send back the value from where the function is called.
            
}
function mean(){
    let m = add()/5;
    return m;
}

let s = add();
console.log("sum of numbers", s);
let ans = mean();
console.log("Mean of 5 numbers" , ans);

//check number is even or odd
function checkNumber(a){
    if(a%2===0){
        console.log("Number is even");
    }
    else {
        console.log("Number is odd");
    }
}
checkNumber(10);

//find larger number
function largerNum(){
    let arr = [10,25,45,30,80,100];
    let largest = arr[0];
    for(let i of arr){
    if(largest<i){
        largest = i; 
    }  
}
return largest;
}
let large = largerNum();
console.log("Largest number is : " , large);

//function calling other function

// If marks >= 90 → "A"
// If marks >= 75 → "B"
// If marks >= 60 → "C"
// If marks >= 40 → "D"
// Otherwise → "Fail"

function checkMarks(marks){
    console.log("Check Marks");
    if(marks>=90){
        gradeA(marks);  //chec fun grad(A)
    }
    else if(marks>=75){
        gradeB(marks);
    }
    else if(marks>=60){
        gradeC(marks);
    }
    else if(marks>=40){
        gradeD(marks);
    }
    else{
        fail(marks);
    }
    }

    function gradeA(marks){
        {
            console.log("Pass with Grade A");
        }
    }
    function gradeB(marks){
        {
            console.log("Pass with Grade B");
        }
    }
    function gradeC(marks){
        {
            console.log("Pass with Grade C");
        }
    }
    function gradeD(marks){
        {
            console.log("Pass with Grade D");
        }
    }
    function fail(marks){
        {
            console.log("fail");
        }
    }
checkMarks(68);

//arrow function : shorter way for writing function. In this ,keyword function is not written.
//sum of 2 numbers
const arrFun = (x,y) => {
return x + y;
};
let result = arrFun(8,10);
console.log("Sum of 2 numbers", result);

//multiplication
let mul = (num1,num2) =>{
    return num1 * num2;
}
let n = mul(5,8);
console.log("Multiplication of 2 numbers" , n);