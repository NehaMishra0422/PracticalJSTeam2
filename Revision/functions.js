//functions -> resuable block of code that performs some specific task which will return some output
//Example1
function waiter(){
      console.log("Waiter will take order from counstomer and give it to cookk");
}
waiter();

//sum of numbers
function sum(a,b){
    return a + b;
}
let s = sum(20,50);
console.log(s);

//vowels
function vowels(string){
    let count =0;
    for(let char of string){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    return count;
}

let vow = new vowels("Javascript");
console.log(vow);




    
