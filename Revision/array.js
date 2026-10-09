let marks = [55,75,65,85,99,100];
let sum =0;
let avg;
for(let i=0;i<marks.length;i++){
      sum+=marks[i];
      avg = sum/marks.length;
}
console.log(sum);
console.log(avg);
console.log(marks.length);
console.log(marks[2]);
marks[4] =95;
console.log(marks);

//methods in array
let colors = ["Blue","Orange","Green","Pink","Purple"];
let c = colors.pop();
console.log(c);
console.log(colors);
let c1 =colors.push("Yellow");
console.log(c1);
console.log(colors);

let fruits = ["Kiwi","orange","banana","Apple"];
let f1 = fruits.unshift("Peach");
console.log(fruits);
let f2 = fruits.shift();
console.log(fruits);
console.log(fruits.slice(2,5));


let num = [20,45,95,66,75,80];
console.log(num.splice(2,2,88,99));
console.log(num);
console.log(num.splice(2,1));
console.log(num);

//example 
let marks1 = [77,65,88,98,90,54,99,100];
let m = marks1.filter((score)=>{
    
    return score>90;
})
console.log(m);