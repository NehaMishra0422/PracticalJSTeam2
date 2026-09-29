//example 1
let array = [10,30,40,50,70];
console.log(array);
console.log(array[2]);
console.log(array.length);
console.log(typeof array[4]);

//example 2
let fruits = ["Apple","Mango","Kiwi","Orange","Grapes"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//example 3
//average of score
let score =[100,50,75,69,90,88];
let sum = 0;
let avg ;
for(let i of score){
    sum+=i;
}
console.log("Sum of score",sum);     
avg = sum/score.length;
console.log("Average of score",avg);

//Array method
//push - add at the last
let sports = ["Basketball","Baseball","Tennis","Badminton"];
sports.push("Cricket");
console.log(sports);

//pop - removes from end
console.log(sports.pop());
console.log(sports);

//shift - removes from starting
let colors = ["Blue","Green","Yellow","Red","Orange"];
console.log(colors.shift());
console.log(colors);

//unshift - add from starting
colors.unshift("Purple");
console.log(colors);

//splice 
let num = [10,30,40,20,90,100,60];
num.splice(1,3,50,15,55);
console.log(num);

//slice
let names = ["Neha","Shipra","Avnish","Meera","Hari"];
let newName = names.slice(1,4);
console.log(names);
console.log(newName);

//concat
let arr1 = [10,20,30];
let arr2 = [40,50];
let newArr = arr1.concat(arr2);
console.log(newArr);