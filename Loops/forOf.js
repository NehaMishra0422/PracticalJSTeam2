//iterate over array
let fruits = ["Apple" , "Banana" , "Orange" , "Grapes" , "Mango"];
for(const value of fruits){
    console.log(value);
}

//iterate over string
let str = "hello";
for(let string of str){
    console.log(string);
}

//iterate over map
let map  = new Map([
    ["a" , 1],
    ["b" , 2],
    ["c" , 3]
])
for(let data of map){
    console.log(data);
}

//iterate over set
let set = new Set(['Neha','Shipra','Meera','Hari']);
for(let name of set){
    console.log(name);
}