//rest = collect

function num(...numbers) {
    console.log(numbers);
}
num(10, 20, 30); //[10, 20, 30]

//calculate sum
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    return total;
}
console.log(sum(10, 20, 30)); //60

/* IMP NOTE :
the rest parameter should be added last one
ex : function test(1,b,...rest){
console.log(rest);
}
adding at starting is not possibe because JavaScript doesn't know where the rest collection should stop.
ex : function test(...rest,a,b){
console.log(rest);
}
*/