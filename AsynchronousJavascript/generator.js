//Generator - is a special function created using function* that can pause and resume execution using yield.
//way to create iterator
// Generators automatically return an iterator.
//Generator can return multiple values one by one
//when generator function is called,it returns a generator object not a value like { value: 10, done: false }
//with result.next() -> manually get next value
//with for..of loop -> automatically get yielded value,ie it automatically calls .next() until done : true

//example 1
function* numbers(){      //function* this tells JS that this is a generator function
    yield 10;  //yield means give the value and PAUSE, and resumes from where it has paused
    yield 20;
    yield 30;
} 
 let result = numbers();
 console.log(result.next());
 console.log(result.next());
 console.log(result.next());
 console.log(result.next());
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

//return() and throw() method left