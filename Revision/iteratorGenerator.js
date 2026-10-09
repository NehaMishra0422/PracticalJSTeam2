//iterator : an objects which iterate over eac element one by one .
//it has one special method .next() which give 2 output value & done.
//value-> acutal current value
//done -> return boolean value true of false , if it reaches sequence then it will give true otherwise false

let num = [ 10,40,56,90,88];
let iterate = num[Symbol.iterator]();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());


//gnerator = a special function that is created using function* that can pause and resume the execution from where it has paused
//using yield
//it is a easy way of creating iterator
function* n(){
    yield 10;
    yield 40;
    yield 50;
}
let output = n();
console.log(output.next());
console.log(output.next());
console.log(output.next());
console.log(output.next());

//using for ..of..loop
function* val(){
    for(let i=1;i<=5;i++){
        yield i;
    }
}
let res = val();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());

