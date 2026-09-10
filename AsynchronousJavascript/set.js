//Set - collection of unique value that means it doesn't allow duplicates

//example 1 - normal array
let arr = new Set([30,20,5,10,30,5,5]);
console.log(arr); //Set(4) { 30, 20, 5, 10 } , removed duplicate values ie 30,5

//creating set
//add() - use dto add value
let colors = new Set();
colors.add("Blue");
colors.add("Green");
colors.add("Orange");
colors.add("Lilac");
colors.add("Pink");
colors.add("Yellow");
colors.add("Blue");
colors.add("Green");
console.log(colors); //Set(6) { 'Blue', 'Green', 'Orange', 'Lilac', 'Pink', 'Yellow' } 
                    //removed duplicate value ie Blue , Green

//has()- checks whether a value exists
let fruits = new Set(["Apple","Mango","Kiwi","Orange","Banana"]);
console.log(fruits.has("Kiwi")); //true
console.log(fruits.has('apple')); //false

//delete() - removes value from a set
console.log(fruits.delete("Apple")); //true, why it is giving true?
console.log(fruits); //Set(4) { 'Mango', 'Kiwi', 'Orange', 'Banana' }

//size - tells number of value
console.log(fruits.size); //4

//looping through set
let f = new Set(["Apple", "Mango", "Banana"]);

for (let fruit of f) {
    console.log(fruit);
}
//output :
// Apple
// Mango
// Banana

//removing duplicates from an array
let array = [10,15,20,25,10,5,55,25,5,20];
let removeDuplicate = new Set(array);
console.log(removeDuplicate); //Set(6) { 10, 15, 20, 25, 5, 55 }

//if you want output as an array
let array1 = [10,15,20,25,10,5,55,25,5,20];
//let removeDuplicate1 = [new Set(array1)]; //[ Set(6) { 10, 15, 20, 25, 5, 55 } ] if ... is not added before new then we will get this output
let removeDuplicate1 = [...new Set(array1)]; //[ 10, 15, 20, 25, 5, 55 ]
console.log(removeDuplicate1); 