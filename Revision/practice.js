//swap two numbers using third variable
let a =20;
let b=30;
for(let i=0;i<1;i++){
    let thirdVar = a;
    a=b;
    b=thirdVar;
}
console.log(a); //30
console.log(b);  //20

//sort an array
let arr = [5,2,8,1,3,9,4];
// first= arr[0];
//let second = arr[1];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j< arr.length;j++){
    if(arr[i] > arr[j]){
        let temp =arr[i];
        arr[i] = arr[j];
        arr[j] = temp
    }
    }
}

console.log(arr);

//example
let browserName = "Chrome";
if (true) {
let browserName = "Firefox";
console.log(browserName);
}
console.log(browserName);

//example
function read(){
var text = "Hello World!"
console.log(text)    
if(true){
console.log(text)
}
}
read()
console.log(text)

//example
const testCases = [
{ name: "Login", status: "Pass", executionTime: 10 },
{ name: "Checkout", status: "Fail", executionTime: 20 },
{ name: "Search", status: "Pass", executionTime: 15 },
{ name: "Payment", status: "Fail", executionTime: 30 }
]
let failedCases = testCases.filter((testcase)=>{
    return testcase.status === 'Fail';
})
console.log(failedCases);
let sum = failedCases.reduce((pval , cval)=> {
    return pval + cval.executionTime ,0});
console.log(sum);

//sum of numbers using arrow function
let s = ((a,b)=> {
    return a + b;
})
console.log(s(10,30));

//array
let car = ["Mahindra","Tyota","Hector"];
car.push("Maruti");
console.log(car);
car.pop();
console.log(car);

car.shift();
console.log(car);

car.unshift("wagonR");
console.log(car);

let array = [10,20,30,40,50];
console.log(array.slice(2,4));
console.log(array.splice(1,1,100));
console.log(array);


let array2 = array;
console.log(array2);

let s3 = "10,20,30";
console.log(s3.split());

let sentence = "I am learning Javascript";
let words = sentence.split(" ");
let shortWord = words[0];
for(let i=1;i<sentence.length;i++){
    if(sentence.length < shortWord){
        shortWord = sentence.length;
    }
}
console.log(shortWord);

//example
let sen = "working in Mindfire";
let newSen = sen.split(" ");
let w = newSen[0];
console.log(newSen);
for(let i=1;i<newSen.length;i++){
    if(newSen[i].length < w.length){
        w = newSen[i];
    }
}
console.log(w);

//example
let info = "My name is Neha Mishra";
let newInfo = info.split(" ");
let n = newInfo[0];
for(let i=1;i<newInfo.length;i++){
    if(n[i] < newInfo[i].length){
        n = newInfo[i];
    }
}
console.log(n);

//pattern
function stringPattern(){
    for(let i=1;i<=5;i++){
        let row = "";
        for(let j=1;j<=i;j++){
            row+= String.fromCharCode(64 + j) + " ";
        }
        console.log(row);
    }
    
}
stringPattern();

//triangle pattern
    for(let i=1;i<=5;i++){
        let row1= "" ;
        for (let j=1;j<=5-i;j++){
            row1+= "";
        }
            for(let k=1;k<=i;k++){
                row1+= "*" + " ";
            }
            console.log(row1);
        }
        
//example
let fun = (num)=> num*num*num;
console.log(fun(5));  

//substring()
let s1 = "Javascript";
console.log(s1.substring(0,5));
console.log(s1.substring(6));


//reverse string
let s2 = "Playwright";
let rev = "";
for(let i=s2.length-1;i>=0;i--){
    rev +=s2[i];
}
console.log(rev);

//using inbuild function
let s4 = "Java";
let reverse1 = s4.split("").reverse().join("");
console.log(reverse1);


//longest word in a string
let string = "This is Javascript review";
let long = string.split(" ");
console.log(long);
let longWord = long[0];
for(let i=1;i<long.length;i++){
    if(longWord.length < long[i].length ){
        longWord = long[i];
    }
}
console.log(longWord);