//set removes duplicates from list of collection that means it is a collection of unique values
let arr = new Set([2,4,6,8,2,5,5,9,8]);
console.log(arr);

//exmple 2
let colors = new Set(["orange","Green","purple","blue","purple","green"]);
console.log(colors);

//to add values to set
let num = new Set();
num.add(4);
num.add(6);
num.add(8);
console.log(num);
console.log(num.has(3)); //false


//map() -> creates new array from calling function to every element
let names = ["neha","shipra","avnish"];
let m = names.map((name)=>{
   return name.toUpperCase();
})
console.log(m);

//example
let multiply = [1,2,3,4,5];
let newNum = multiply.map((mul)=>{
    return mul*5;
})
console.log(newNum);

//example
let even = [1,2,3,4,5,6,7,8,9,10];
let check = even.map((e)=>{
    if (e%2===0){
        return "number is even";
    }
    else {
        return "Number is odd";
    }
})
console.log(check);

//filter -> creates an array by matching a condition by iteraing over each elemet using function which returns matching value
let num1 = [20,40,50,90,100,25,60];
let newNum1 = num1.filter((n)=>{
    if(n>40){
        return n;
    }
})
console.log(newNum1);

//reduce => gives one value
let numbers = [10,30,40,55,95];
let r = numbers.reduce((pValue , cValue)=>pValue + cValue , 2);
console.log(r);

//forEach() -> it only iterate over each element using function
let arr1 = [56,79,30,45,69];
let newArr = arr1.forEach((a)=>{
    console.log(a);
})


let arr2 = [10, 20, 30];
let result = arr2.forEach((num) => {
    console.log(num * 2);
});


//find() ->  iterates over each element and stops when first match found
let color = ["blue","green","pink","orange"];
let newC = color.find((c)=>{
    if(c === 'pink'){
        console.log(c);
    }
})