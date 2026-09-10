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

//string iterator
let str = "Neha";
const newStr = str[Symbol.iterator]();
console.log(".....First Iteration.....");
console.log(newStr.next());
console.log(".....Second Iteration.....");
console.log(newStr.next());
console.log(".....Third Iteration.....");
console.log(newStr.next());
console.log(".....Fourth Iteration.....");
console.log(newStr.next());
console.log(".....Fifth Iteration.....");
console.log(newStr.next());

/*output------
.....First Iteration.....
{ value: 'N', done: false }
.....Second Iteration.....
{ value: 'e', done: false }
.....Third Iteration.....
{ value: 'h', done: false }
.....Fourth Iteration.....
{ value: 'a', done: false }
.....Fifth Iteration.....
{ value: undefined, done: true }
 */

//Set iterator--------------
let set = new Set([10,20,30,40,50,10,20]);
let newSet = set[Symbol.iterator]();
console.log(newSet.next());
console.log(newSet.next());
console.log(newSet.next());
console.log(newSet.next());
console.log(newSet.next());
console.log(newSet.next());
console.log(newSet.next());

//this code will iterate till 50 and removes duplicates from array, that's why is giving undefine and true after 50
/*output
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: 40, done: false }
{ value: 50, done: false }
{ value: undefined, done: true }
{ value: undefined, done: true }
 */

//Map iterator
let info = new Map([
   ["name" , "Neha"],
   ["age" , "31"],
   ["loaction",'Ghaziabad']
])
let newInfo = info[Symbol.iterator]();
console.log(newInfo.next());
console.log(newInfo.next());
console.log(newInfo.next());
console.log(newInfo.next());
/*output ----
{ value: [ 'name', 'Neha' ], done: false }
{ value: [ 'age', '31' ], done: false }
{ value: [ 'loaction', 'Ghaziabad' ], done: false }
{ value: undefined, done: true }
*/

//custom iterator example 1
let evenNum = {
   [Symbol.iterator](){ //[symbole.iterator]() means we are telling JS how to iterate 
                           //inside this we need to return an object containing next()
      let num =2;
      return {
         next(){ //next() function will give us value
            if(num<=10){
               let value =num;
               num+=2;
              return{
               value : num,
               done : false
              };
              
            return {
                  value :undefined,
                  done : true
               }; 
            }
         }
      }
   }
};
let iterator1 = evenNum[Symbol.iterator]();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
/*output--
{ value: 4, done: false }
{ value: 6, done: false }
{ value: 8, done: false }
{ value: 10, done: false }
{ value: 12, done: false }
undefined
*/


//custom iterator example 2
let numbers= {
   start: 1,
    end: 5,
[Symbol.iterator]() {
   let current =1;
   return {
      next(){
         if(current<=5){
            let value = current;
            current++;
            return{
               value : value,
               done : false
            };
         }
         else{
            return {
               value : undefined,
               done : true
            };
         }
      }
   }

}
};
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*output -
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
{ value: undefined, done: true }
 */





