//Generator - is a special function created using function* that can pause and resume execution using yield.
//way to create iterator
// Generators automatically return an iterator.

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
