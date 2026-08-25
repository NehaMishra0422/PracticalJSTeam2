//while loop is used when the number of iteration is unknown

let n = 5;
while(n<5){
    n++;
}
console.log(n);

//print numbers from 1 to 10
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

//traverse an array
console.log("Traverse an array");

let arr = [10,20,30,40,50];
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

//print even number
let num = 1;
while(num<=10){
    if(num%2===0){
        console.log("Even number is", num);
         
    }
    num++;
}

//print numbers from 10 to 1
let a = 10;
while(a>=1){
    console.log(a);
    a--;
}

//sum of numbers from 1 to 10
let sum = 0;
let b = 1;
while(b<=10){
    sum = sum + b;
    b++;  
}
console.log("sum of numbers" , sum);

//multiplication of 5
let x = 1;
while(x<=10){
    console.log("multiple of 5", x*5);
    x++;
}

// print from 1 to 20 but stop after 10
let y = 1;
while(y<=20){
   
    if(y === 11){
        break;
    }
    console.log(y);
    y++;
}
 
//find largest number
let array = [10,20,25,60,35,40];
let largest = array[0];
let z = 0;
while(z<=array[z]){
    largest =  array[z];
    z++;
}
console.log("Largest number is" , largest);

//print array
let ar = [ "Apple", "Mango", "Orange","Banana","Grapes"];
let d = 0;
while(d<ar.length){
    console.log(ar[d]);
    d++;
}

//reverse an array
let newArray = [ "Apple", "Mango", "Orange","Banana","Grapes"];
let q = newArray.length - 1;
while(q>=0){
     console.log(newArray[q]);
     q--; 
}
 