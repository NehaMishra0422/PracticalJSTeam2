//Map()-> A Map stores data in key-value pairs.
let info = new Map(); //creates map
//here in Map(), .set is used to add values
info.set("Name", "Neha Mishra");
info.set("isEmployed", "true");
info.set("Location", "Ghaziabad");
console.log(info);
//output :
// Map(3) {
//   'Name' => 'Neha Mishra',
//   'isEmployed' => 'true',
//   'Location' => 'Ghaziabad'
// }

//get -> used to get the value associated with the key
let getInfo = info.get("Location");
console.log(getInfo); //Ghaziabad

//has -> checkes whether a key exists
let exists = info.has("Name");
console.log(exists); //true

//delete -> deletes key value pair
let del = info.delete("isEmployed");
console.log(del); //true, why?
console.log(info); //Map(2) { 'Name' => 'Neha Mishra', 'Location' => 'Ghaziabad' }

//size 
console.log(info.size); //2

//looping through map
for (let [Key, value] of info) {
    console.log("Key,Value:",Key, value); //Key,Value : Name Neha Mishra
}                            //Key,Value : Location Ghaziabad

for (let [key] of info){
    console.log("Key :",key); //Key : Name
}                             //Key : Location

for (let [value] of info){
    console.log("Value :",value); //Value : Name
}                                 //Value : Location

//array map() - creates a new array from calling a function for every array element.
//array method 
//always creates a new array

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newArr); //[ 650, 440, 120, 40 ]

//convert name to uppercase
let names = ["Neha", "Rahul", "Amit"];

let result = names.map((name) => {
    return name.toUpperCase();
});

console.log(result); //[ 'NEHA', 'RAHUL', 'AMIT' ]

//get length of each names
let names1 = ["Neha", "Rahul", "Amit"];

let result1 = names.map((name) => {
    return name.length;
});

console.log(result1); //[ 4, 5, 4 ]

//as arrow fun
let result2 = numbers.map(num => num * 2);
console.log(result2); //[ 130, 88, 24, 8 ]

//using object
let users = [
    { name: "Neha", age: 31 },
    { name: "Rahul", age: 28 },
    { name: "Amit", age: 25 }
];

let names3 = users.map(user => user.name);

console.log(names3); //[ 'Neha', 'Rahul', 'Amit' ]

//map() chaining
let nums = [1,3,5,7,9,11];
let output =  nums.map((num=> num * 10)).map((num=> num + 1));
console.log(output); //[ 11, 31, 51, 71, 91, 111 ]

/* Here value of first map will be transfered to second map
like : first map- num * 10 => 1 * 10 => 10
       second map => num + 1 => 10 + 1 => 11
*/       