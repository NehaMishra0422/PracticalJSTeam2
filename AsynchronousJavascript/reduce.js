// reduce() -> returns one final value

//example 1
/* pValue = previous value, here 0 as mentioned after the arrow function
cValue = current value
pValue = 0,cValue= 2 => pvalue + cValue = 0 + 2 = 2
pValue = 2,cValue= 4 => pvalue + cValue = 2 + 4 = 6
pValue = 6,cValue= 6 => pvalue + cValue = 6 + 6 = 12
pValue = 12,cValue= 8 => pvalue + cValue = 12 + 8 = 20
pValue = 20,cValue= 10 => pvalue + cValue = 20 + 10 = 30
if we add 1 instead of 0 then previouse value will become 1
*/

let num = [2,4,6,8,10];
let newNum = num.reduce((pValue,cValue)=> pValue + cValue ,0);
console.log(newNum); //30

//example 2
let shoppingCart = [
    { product : "Kajal", price : 299},
    { product : "Eyeliner", price : 699},
    { product : "Lipstick", price : 2999},
    { product : "Mascara", price : 999},
    { product : "Foundation", price : 4800},
]
let cart = shoppingCart.reduce((pValue,item)=> pValue + item.price, 0);
console.log(cart); //9796
