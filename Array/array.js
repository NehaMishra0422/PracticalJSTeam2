//Array : collection of data
let marks = [50,25,68,90,44,50,100,75]; //array creation 

//declaring array using new Array() keyword
let sports = new Array("Basketball" , "Cricket", "Badminton", "Hockey");
console.log(sports.length); //4
console.log(sports[3]); //Hockey
console.log(sports[5]); //undefined


//accessing array
console.log("MARKS = " , marks.length); //8
console.log("MARKS = " , marks[5]); // 50
console.log("MARKS = " , marks[8]); //undefined bcoz index 8 doen't exist

//replacing array value
let arr = [10,20,40,50,90];
arr[2] = 55;
console.log(arr);
console.log(arr[2]);

//user input array
// let userArr = Number(prompt("How many numbers you want?"));
// let a = [];
// for(let i =0; i<userArr ;i++){
//      a[i] = Number(prompt("enter number for array"));
//      console.log(a[i]);
// }

//one more example
// let str = prompt("how many string you want?");
// let s = [];
// for(let i = 0; i<str ; i++){
//     s[i] = prompt("enter names");
//     console.log(s[i]);
// }


//loop through array
 let channels = ['NewsIndia','DDNews','AajTak','Colors','StarPlus'];
for(let i = 0 ; i< channels.length ; i++){
    console.log(channels[i]);
 }

//average of score
let score = [85,97,44,37,76,60];
let sum = 0;
let avg;
for (let i of score){
    sum = sum + i;
    avg = sum/score.length;
}
console.log("Sum of score :" , sum)
console.log("Average of score : " , avg);