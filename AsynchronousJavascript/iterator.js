//An iterator is an object that allows you to access elements one at a time
//It has special method next() -> returns object with two properties
// 1. value : actual current value
// 2. done : boolean value(true/false), if true it means sequence finished otherwise it will give false

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

