//Adding or removing array elements

//push() :  add at the end, make changes to original array
let vegetables = ['Potato' , 'onion' , 'Cauliflower' , 'Corriander'];
console.log("Push");
console.log(vegetables);
vegetables.push('Capsicum');
console.log(vegetables);

//pop() : Remove from end, make changes into end
let fruits = ['Apple','Orange','Grapes','Mango','Watermelon'];
console.log("Pop");
console.log(fruits);
fruits.pop();
console.log(fruits);

//shift() : works as pop() but here it remove from begining
let colors = ['Blue','Green','Pink','Yellow','Red'];
console.log("Shift");
console.log(colors);
colors.shift();
console.log(colors);

//unshift() : works as push() but here it add from start
let empID = [123,456,789,256,376];
console.log("Unshift");
console.log(empID);
empID.unshift('445');
console.log(empID);

//splice() : add, remove or replace element at specific indes
let elements = [10,20,30,40,50,60];
console.log("Splice");
elements.splice(2,3,90,80,100); //here 2-> start point from where it should start
                               //3-> number of elements to remove
                               //90,80,100--> will get added in place of elements removed
console.log(elements);


//coverting array into string - returns new string
let num = [11,22,33,44,55,66,77,88,99];
console.log("convert array into string");
console.log(num);
let newNum = num.toString();
console.log(newNum);

//transforming or creating new arrays

//concat() : joins 2 or more arrays and returns new array
let arr1 = [1,2,3,4,5,6,7,8,9];
let arr2 = ["Neha","Shipra","Meera","HK","Avnish","Pooja","Sharad","Abhinav"];
console.log("Concat");
console.log(arr1.concat(arr2));

//slice() : returns a piece of array
let games = ['Football','Cricket','Vollyball','Basketball','Hockey'];
console.log("Slice");
console.log(games);
let newGames= games.slice(1,3);
console.log(newGames);

