//Generator - is a special function created using function* that can pause and resume execution using yield.
//a convinent/simpler way to create iterator
// Generators automatically return an iterator.
//Generator can return multiple values one by one
//when generator function is called,it returns a generator object not a value like { value: 10, done: false }
//with result.next() -> manually get next value
//with for..of loop -> automatically get yielded value,ie it automatically calls .next() until done : true

//example 1
function* numbers(){ 
    console.log("start..")     //function* this tells JS that this is a generator function
    yield 10; 
     console.log("first pause");     //yield means give the value and PAUSE, and resumes from where it has paused
    yield 20;
     console.log("second pause"); 
    yield 30;
   
} 
 let result = numbers();
 console.log(result.next());
 console.log(result.next());
//  console.log(result.next());
//  console.log(result.next());
/* output
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: undefined, done: true }
*/ 

//with  for...of loop
function* num(){      //function* this tells JS that this is a generator function
    yield 10;  //yield means give the value and PAUSE, and resumes from where it has paused
    yield 20;
    yield 30;
} 
 let result1 = num();

for(let value of num()){
    //console.log(result1.next());  // doesn't required in for...of loop
// { value: 10, done: false }
// { value: 20, done: false }
// { value: 30, done: false }
    console.log(value); //10
                        //20
                        //30
}

//generator with loop
function* val(){
    for(let i=1;i<=5;i++){
        yield i;
    }
}
let v = val();
console.log("starts from here...");
console.log(v.next().value);
console.log("next iteration");
console.log(v.next().value);
console.log(v.next().value);
console.log(v.next().value);
console.log(v.next().value);
console.log(v.next().value); 
/*output--
starts from here...
1
next iteration
2
3
4
5
undefined
*/

//for even num
function* num(){
    for (let i=1;i<=10;i++){
        if(i%2===0){
            yield i;
        }
    }
}
let n= num();
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value); //2 4 6 8 10 undefined

//generator as return
function* test(){
    yield 1;
    yield 2;
    yield 3
    return 4;
    yield 5;
}
let t = test();
console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log(t.next());
/* output
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
 here, once return is reached, the generator is finished
 */

 //generators with parameters
 function* message(){
    let msg = yield "Learning Javascript";
    console.log("Currently learning topic : " ,msg ); // here value of msg will be taken from next("Generators")
 }
 let m = message();
 console.log(m.next());
 console.log(m.next("Generators"));
/* output -
{ value: 'Learning Javascript', done: false }
Currently learning topic :  Generators
{ value: undefined, done: true }
 
here first it will pause and give value ie Learning Javascript
then take valuse from next("Generators") sends back to generator
*/