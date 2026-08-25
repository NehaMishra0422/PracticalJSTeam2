//used when we know the exact no of iterations

//Print Javascript Training 5 times
let str = "Javascript Training";
for (let i = 0; i<=5 ; i++){
    console.log(str);
}

//print even numbers
for (let i = 0 ; i<=10 ; i++){
    if(i%2===0){
    console.log("Even number is" , i);
}
}

//print reverse numbers
for (let i=10 ; i>=1 ; i--){
   console.log("Reverse number : " , i);
}

//sum of numbers
let sum = 0;
for (let i =0 ; i<= 10 ; i++){
    sum = sum + i ; 
}
console.log("sum of numbers =" , sum);

//with array
let fruits = [ "Apple" , "Mango" ,"Orange", "Grapes" , "Banana"];
for(let i=0 ; i<fruits.length; i++){
    console.log(fruits[i]);
}

//find largest number in array
let num = [10,25,50,15,85,70];
let largest = num[0];
for (let i=1 ; i<= num.length ; i++){
    if(num[i]>largest){
        largest = num[i];
    }
}
console.log("Largest number is", largest);

//count even numbers in an array
let arr = [10,20,15,22,14,33,40];
let count = 0;
for ( let i=0 ; i<= arr.length ; i++){
    if(arr[i]%2===0){
        count++;
    }
}
console.log("Number of even numbers" , count);

//reverse string
let reverseStr = "Neha Mishra";
let reverse = "";
for( let i=reverseStr.length-1 ; i>=0 ; i--){
    reverse = reverse +  reverseStr[i];
}
console.log(reverse);

//print multiple of 5 from 1 to 100

for(let i = 1; i<=100 ; i++){
    if(i%5===0){
        console.log("Multiplication of 5" , i);

    }
}

//factorial of 5
let fact = 1;
for(let i = 1 ; i<=5 ; i++){
    fact = fact * i;
}
console.log("Factorial of 5" , fact);

//count numbers greater than 50 in array
let arrNum = [20,30,60,45,10,75];
let con = 0;
for (let i= 0 ; i<=arrNum.length ; i++){
    if(arrNum[i]>50){
        con++;
    }
}
console.log("Count of numbers greater than 50", count);

//smallest number in array
let array = [10,40,12,67,90,1,-5];
let smallest = array[0];
for (let i = 0 ; i<=array.length ; i++){
    if(array[i]<smallest){
        smallest = array[i];
    }
}
console.log("Smallest number in array is" , smallest);

//palindrome
let string = "level";
let palindrome = "";
for(let i=string.length-1; i>=0 ; i--){
    palindrome = palindrome + string[i] ;
}
console.log(palindrome);

//nested for loop
for(let i = 1 ; i<=5 ; i++){
    let result = "";
    for(let j = 1 ; j<=i ; j++){
        result = result + j;
        
    }
    console.log(result);
}

//print multiplicaton of 5
for (let i=1 ; i<=5; i++){
    console.log("table of 5");
    for(let j=1 ; j<=10 ; j++){
        console.log( i*j );
    }

}