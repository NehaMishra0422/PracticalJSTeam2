//compare 2 strings

console.log( "a > b" , 'a' > 'b'); //false
console.log("a < b " , 'a' < 'b'); //true
console.log("aa < ab", 'aa' < 'ab'); //true //lexical order which means arrangements based on alphabetical or
                                            // dictionary order of individual character
console.log("aa > ab", 'aa' > 'ab'); // false
console.log("apple < banana",'apple' < 'banana'); //true
console.log("cat > dog", 'cat' > 'dog'); //false
console.log('a == b' , 'a' == 'b'); //false
console.log("a === b", 'a' === 'b'); //false
console.log("5 == '5' " , 5 == '5'); //true, JS automatically converts '5' into number 
console.log("5 === '5' " , 5 === '5'); //false
console.log("10 == '' ", 10 == ''); //false, here JS converts empty string to number 0
console.log("c == ' ' ", 'c' == ' '); //false , JS converts space to number 0
console.log("A == a" , 'A' == 'a'); //false

let string1 = "Hello";
let string2 = "World";
console.log("string 1 == string2 ?", string1 == string2); //false
console.log("string 1 === string2 ?", string1 === string2); //false
console.log("string 1 < string2 ?", string1 < string2); //true
console.log("string 1 > string2 ?", string1 > string2); //false

//.localeCompare() - used to compare 2 strings 
console.log('a'.localeCompare('b')); //-1 , here a occurs before b that's why it returns -1
console.log('b'.localeCompare('a')); //1 , here b occures after a that's why it return 1
console.log('a'.localeCompare('a')); //0 , since both are equivalent

console.log('cat'.localeCompare('dog')); //-1
console.log('banana'.localeCompare('apple')); //1
console.log('dog'.localeCompare('dog')); //0

//case-insensitive
let veg1 = 'Onion';
let veg2 = 'onion';
console.log('veg1 === veg2', veg1 === veg2); //false , case insensitive
console.log('veg1 > veg2', veg1 > veg2); //false
console.log('veg1 < veg2', veg1 < veg2); //true , uppercase have lower unicode value
 
//.toLowerCase() & .toUpperCase()
console.log(veg1.toLowerCase() === veg2.toLowerCase()); //true
console.log(veg1.toUpperCase() === veg2.toUpperCase()); //true
