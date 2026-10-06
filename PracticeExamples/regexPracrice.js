let text = "min 50% Off";
console.log(text.match(/\d{2}/g)); //[ '50' ]
console.log(text.match(/\d{2}%/g)); //[ '50%' ]
console.log(text.match(/\w+\s\d{2}%\s\w+/g)); //[ 'min 50% Off' ]

let text2 = "min 50% off, max 70% off";
console.log(text2.match(/\d{2}%/g)); //[ '50%', '70%' ]
console.log(text2.match(/\w+\s\d{2}%\s\w+./g)); //[ 'min 50% off', 'max 70% off' ]

let email = "Contact us at nemishr2295@gmail.com";
console.log(email.match(/\d{4}/g)); //[ '2295' ]
console.log(email.match(/\w+\d{4}@\w+.\w+/g)); //[ 'nemishr2295@gmail.com' ]

