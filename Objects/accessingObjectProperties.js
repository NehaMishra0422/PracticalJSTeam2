//using .notation
let obj = {
    fullName : "Neha Mishra",
    age : 31
};
console.log(obj); //{fullName : "Neha Mishra", age : 31}
console.log(obj.fullName); //Neha Mishra
console.log(obj.age); //31

//access keys in object
console.log(Object.keys(obj)); // ['fullName', 'age']

//access values in object
console.log(Object.values(obj)); // ['Neha Mishra', 31]

//accessing both key and values in object
console.log(Object.entries(obj)); //[ [ 'fullName', 'Neha Mishra' ], [ 'age', 31 ] ]

//using [] notation
console.log(obj["fullName"]); //Neha Mishra
console.log(obj["age"]);  //31

//looping over object properties using for-in loop
for(let key in obj){
    console.log("key :", key);
    console.log("value : ",obj[key]);
}