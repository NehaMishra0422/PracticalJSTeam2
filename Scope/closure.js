//closure - a function plus the lexical environment in which it was created

//example 1
function outer() {
  let message = "Hello, World!";

  function inner() {
    console.log(message);
  }

  return inner;
}

const greet = outer();
greet(); // Hello, World!

//example 2
//nested function + closure + function chaining

function sum(a){
  let e = 10;
  return function sum1(b){
    return function sum2(c){
      return function sum3(d){
        return a+b+c+d+e; //a from sum(a), b from sum1(b) , c from sum2(c) , d from sum3(d) , e from sum(a)
      };                  
    };
  };
}
let s = sum(5); //sum(a) = sum(5), returns sum1(b) and remember through closure a=5,e=10  s=sum1
let s1= s(15);  // here b=15 and returns sum2() , so s1=sum2
let s2 = s1(20); // here c=20 and returns sum3, so s2=sum3
let s3 = s2(25); // d=25, a=5,b=15,c=20,e=10 

console.log(s3); //75

//example 3
function counter(){
  let count = 0;
  return function(){
    count++;
    return count;
  };
}
let increment = counter(); //counter() returns inner function so increment remembers count
console.log(increment()); //count =0 , count++ , count =1
console.log(increment()); //count =1 , count++ , count =2
console.log(increment()); //count =2 , count++ , count =3
console.log(increment()); //count =3 , count++ , count =4
console.log(increment()); //count =4 , count++ , count =5