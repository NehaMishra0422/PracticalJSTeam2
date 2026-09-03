//closure - a function plus the lexical environment in which it was created

function outer() {
  let message = "Hello, World!";

  function inner() {
    console.log(message);
  }

  return inner;
}

const greet = outer();
greet(); // Hello, World!

