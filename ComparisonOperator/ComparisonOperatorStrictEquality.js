let x = 123;
let y = "123";

console.log( x === y);   //false
console.log( x === 'abc');  //false
console.log( x === '123');   //false
console.log( y === "123");  //true
console.log( NaN === undefined) //false
console.log(NaN === NaN);  //false
console.log(undefined === undefined);  //true 