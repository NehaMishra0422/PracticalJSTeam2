//for loop - used when we know the number of iterations
for(let i=1;i<=5;i++){
    console.log(i);
}

//example 2
for (let i=1;i<=5;i++){
    let row =" ";
    for (let j=1;j<=i;j++){
        row += '*';
    }
    console.log(row);
}

//example 3
let sum = 0;
for(let i=1;i<=5;i++){
    sum+=i;
}
console.log(sum);

//while loop - used when we don't know number of iterations in advance
let i=1;
let sum1 =0;
while(i<=5){
    sum1+= i;
    i++;
}
console.log(sum1);

//do-while loop - runs atleast one tme even if the condition is false

let k=1;
do{
    console.log("k",k);
    k++;
}
while(k<=10)

//for-of.. loop
let arr = [10,25,35,45,55];
for(let a of arr){
    console.log(a);
}

//sum of array
let arr1 = [10,25,35,45,55];
let sum2 = 0;
for(let s of arr1){
    sum2+=s;
}
console.log(sum2);

//for-in loop 
let obj = {
    name : "Neha",
    age : 31,
    role : "QA"
}
for(let key in obj){
    console.log(obj[key]);
    console.log(key);
}