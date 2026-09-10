// reduce() -> returns one final value

//example 1
/* pValue = previous value, here 0 as mentioned after the arrow function
cValue = current value
pValue = 0,cValue= 2 => pvalue + cValue = 0 + 2 = 2
pValue = 2,cValue= 4 => pvalue + cValue = 2 + 4 = 6
pValue = 6,cValue= 6 => pvalue + cValue = 6 + 6 = 12
pValue = 12,cValue= 8 => pvalue + cValue = 12 + 8 = 20
pValue = 20,cValue= 10 => pvalue + cValue = 20 + 10 = 30
if we add 1 instead of 0 then previouse value will become 1
*/

let num = [2,4,6,8,10];
let newNum = num.reduce((pValue,cValue)=> pValue + cValue ,0);
console.log(newNum); //30

//example 2
let shoppingCart = [
    { product : "Kajal", price : 299},
    { product : "Eyeliner", price : 699},
    { product : "Lipstick", price : 2999},
    { product : "Mascara", price : 999},
    { product : "Foundation", price : 4800},
]
let cart = shoppingCart.reduce((pValue,item)=> pValue + item.price, 0);
console.log(cart); //9796

//find maximum numbers
let n = [25,55,10,5,80,75,60];
let newN = n.reduce((max,curr)=>{
    if (curr>max){
        return curr
    }
    else {
        return max
    }
},n[0]);
console.log(newN); //80

//minimum number
let arr = [10,5,66,7,10,24,59];
let m = arr.reduce((min,curr)=>{
    if(curr<min){
        return curr;
    }
    else {
        return min;
    }
}, arr[0]);
console.log(m); //5

//count number of pass and fail
let result = [
     {name : 'Neha' , status : 'pass'},
     {name : 'Shipra', status : 'pass'},
     {name : 'Avnish', status : 'pass'},
     {name : 'Amit', status : 'fail'},
     {name : 'Rahul', status : 'fail'}
    ]
 let count = result.reduce((output,state) => {
    output[state.status] = (output[state.status] || 0) + 1;
    return output;
 }, {}); 
 console.log(count); //{ pass: 3, fail: 2 }
 /* 1st iteration -----
 output = {} , state = {name: 'Neha, status : 'pass'}, state.status = pass
 output[pass] = (pass || 0) + 1, 0 + 1 => 1  
 output = {pass : 1}
 2nd iteration -----
 output = {pass : 1}, state = {name :'Shipra',status : 'pass'},state.status =pass
 output[pass] = (1 || 0), 1 + 1 => 2
 output = {pass : 2 }
 3rd iteration -----
 output = {pass : 2}, state = {name :'Avnish',status : 'pass'},state.status =pass
 output[pass] = (2 || 0), 2 + 1 => 3
 output = {pass : 3 }
 4th iteration -----
 output = {pass : 2}, state = {name :'Avnish',status : 'pass'},state.status =pass
 output[pass] = (2 || 0)+1, 2 + 1 => 3
 5th iteration -----
 output = {pass : 3 },state = {name : 'Amit, status : 'fail'},state.status = fail
 output[fail]= (fail || 0)+1 , 0+1 =1
 output = {pass : 3, fail :1}
 6th iteration -----
 output = {pass : 3 },state = {name : 'Rahul, status : 'fail'},state.status = fail
 output[fail]= (1 || 0)+1 , 1+1 =1
 output = {pass : 2, fail :2} */