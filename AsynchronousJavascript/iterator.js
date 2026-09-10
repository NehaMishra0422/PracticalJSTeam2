//An iterator is an object that allows you to access elements one at a time
//It has special method next() -> returns object with two properties
// 1. value : actual current value
// 2. done : boolean value(true/false), if true it means sequence finished otherwise it will give false
//Symbol.iterator - used to get the iterator from an iterable object

//example 1
const num = [10,30,50,70,25,55,60];
const iterate = num[Symbol.iterator]();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
/*output - 
{ value: 10, done: false }
{ value: 30, done: false }
{ value: 50, done: false }
{ value: 70, done: false }
{ value: 25, done: false }
{ value: 55, done: false }
{ value: 60, done: false }
{ value: undefined, done: true }
 */

//Iterator.from() -> create iterator object from existing iterable
//converts given value into iterator
let myIterator = Iterator.from([5,10,15,20,25]); //
let element = "";
for(let x of myIterator){
   element+= x + " ";
}
console.log(element); //5 10 15 20 25

//every(fn) -> method returns true if all elements in the iterator satisfy the provided test function.
const myIterator1 = Iterator.from("123456789"); // Create an Iterator
let result = myIterator1.every(x => x > 7); //// Is every Element greater than 7?
console.log(result); //false

//find(fn) -> method returns the first element that satisfies a test function.
const myIterator2 = Iterator.from([3, 10, 18, 30, 20]);
let result1 = myIterator2.find(x => x > 18);// Find first greater than 18
console.log(result1); //30




