
let text = "My Name is Neha and age is 30";
console.log(text.match(/is/g)); //[ 'is','is' ]
console.log(text.match(/\d{2}/g));  //[ '30' ]

let orderID = '#ORD-123-4567-8900';
console.log(orderID.match(/\d{3}/));
//output - [ '123', index: 5, input: '#ORD-123-4567-8900', groups: undefined ]
console.log(orderID.match(/\d{3}/g));
//output - [ '123', '456', '890' ]
console.log(orderID.match(/\d{4}/g));
//output - [ '4567', '8900' ]
console.log(orderID.match(/#ORD-\d{3}-\d{4}-\d{4}/g));
//output - [ '#ORD-123-4567-8900' ]
console.log(orderID.match(/#ORD/g));
//output - [ '#ORD' ]

let email = 'neham@mindfiresolutions.com'
console.log(email.match(/@.+/g));
//output - [ '@mindfiresolutions.com' ]  , 
//. -> any Character
//+ -> one or more character

console.log(email.match(/[A-Za-z]+@.*/g));
//output - [ 'neham@mindfiresolutions.com' ]

let price = ['₹1499', '₹2,999', '₹4999.45'];
console.log(price[0].match(/₹\d{4}/g));
//output - [ '₹1499' ]
console.log(price[1].match(/₹\d{1,3},\d{3}/g));
//output - [ '₹2,999' ]
console.log(price[2].match(/₹\d{1,4}.\d{2}/g));
//[ '₹4999.45' ]

//using function and map
let price1 = ['₹1499', '₹2999', '₹4999.45'];
console.log(price1.map(p => p.match(/₹\d{4}/g)));
//output - [ [ '₹1499' ], [ '₹2999' ], [ '₹4999' ] ]
//first - ₹1499.match(/₹\d{4}/g), -> [₹1499].....so on

let date = '24 september 2026';
console.log(date.match(/\d{4}/g));  //[ '2026' ]

let product = ['Samsung' , 'Nokia' , 'Iphone'];
console.log(product.map(m=> m.match(/Poco|Iphone/g) )); //[ null, null, [ 'Iphone' ] ]

let email1 = 'Contact at neham@mindfiresolutions.com or nemishra2295@gmail.com';
console.log(email1.match(/\w+@.\w+.\w+/g));
//output - [ 'neham@mindfiresolutions.com', 'nemishra2295@gmail.com' ]
//\w+ -> name , \w+ -> domain , \w+ -> extension

//words starting with A
let text1 = "Apple Amazon Banana Avocado Mango";
console.log(text1.match(/\s*A\w*/g));
//output - [ 'Apple', 'Amazon', 'Avocado' ]
//console.log(text1.match(/\b*A\w*/g));
// \b -> word boundary means a boundary between word char and non-word char ? how to identify word boundary

let text2 = "Testing coding running swimming code test";
console.log(text2.match(/i.g\s*/g));
//output - [ 'ing ', 'ing ', 'ing ', 'ing' ]
console.log(text2.match(/\w+ing\s*/g));
//output - [ 'Testing ', 'coding ', 'running ', 'swimming ' ]

let mobNo = "contact me at 7838455909 or 9999440272";
console.log(mobNo.match(/\d{10}/g));
//output - [ '7838455909', '9999440272' ]

let dates = "Birth dates are 22-04-1995 and 07-06-1995";
console.log(dates.match(/\d{2}-\d{2}-\d{4}/g));
//output - [ '22-04-1995', '07-06-1995' ]

let capLetters = "Hello World! JavaScript";
console.log(capLetters.match(/[A-Z]+/g));
//[ 'H', 'W', 'J', 'S' ]
//find lower case
console.log(capLetters.match(/[a-z]/g));
//outpur - [
//   'e', 'l', 'l', 'o',
//   'o', 'r', 'l', 'd',
//   'a', 'v', 'a', 'c',
//   'r', 'i', 'p', 't'
// ]

let amount = "prices are ₹999.50, ₹2,499.99 and ₹100.00";
console.log(amount.match(/₹[\d,]+.\d{2}/g));
//output- [ '₹999.50', '₹2,499.99', '₹100.00' ]
//[\d,] -> \d, digita from 0-9 and with comma
//[\d,]+ - repeating pattern

let url = "Visit https://google.com and http://amazon.in";
console.log(url.match(/https?:\/\/\S+/g));
//output - [ 'https://google.com', 'http://amazon.in' ]
//https? -> means s is optional ie find http or https
//:/\/\ -> :// because reges is written isnide / / so we cant direclty typ like ://
//  /S -> anything except space
//   /S+ - keep searching until it reaches to space

let repeat = "bookkeeper committee coffee";
console.log(repeat.match(/(.)\1/g));
//output -
// [
//   'oo', 'kk', 'ee',
//   'mm', 'tt', 'ee',
//   'ff', 'ee'
// ]

//() -> capture/group that char
// . any single char
// \1 -> same character again