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

//using [] notation - this is used when key contains multiword property name
let user = {
    name : "neha Mishra",
    age : 31,
    "is employed" : true,
}
console.log(user);
console.log(user["is employed"]); //true

//access using user input
// let product = {
//     pName : "Mobile",
//     price : 20000,
//     description : "This is a mobile",
// }
// let input = prompt("What is the decription of the product?" , product.description);


//looping over object properties using for-in loop
for(let key in obj){
    console.log("key :", key);
    console.log("value : ", obj[key]);
}

//area of square
let square = {
    width : 200,
    height : 300,
}
 function areaofsquare(square){
     let area =square.width * square.height;
     return area;
 }
 areaofsquare(square);
 console.log(`Area of square : ${areaofsquare(square)}`);