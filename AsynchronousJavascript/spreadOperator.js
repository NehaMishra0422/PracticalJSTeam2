//Spread operator - It expands/unpacks the elements of an array or the properties of an object.
//it is written as ...
//spread = unpack

//spread with array
let fruits = ["Apple","Banana","Kiwi","Orange","Grapes"];
let newFruit = [...fruits];
console.log("Using Spread Operator :", newFruit); //Using Spread Operator : [ 'Apple', 'Banana', 'Kiwi', 'Orange', 'Grapes' ]
console.log(fruits); //[ 'Apple', 'Banana', 'Kiwi', 'Orange', 'Grapes' ]

//combine two arrays
let color1 = ["Blue","Green"];
let color2 = ["Red", "Yellow"];
let newColor = [...color1,...color2];
console.log(newColor); //[ 'Blue', 'Green', 'Red', 'Yellow' ]

//without spread
let newColor1 = [color1,color2];
console.log(newColor1); //nested array : [ [ 'Blue', 'Green' ], [ 'Red', 'Yellow' ] ]

//add new numbers while copying
let num = [10,20,30];
let newNum = [5,...num,40];
console.log(newNum); //[ 5, 10, 20, 30, 40 ]

//copy an array
let arr1 = [10,20,30];
let arr2 = [...arr1];
let newArr = arr2.push(60);
console.log(arr2); //[ 10, 20, 30, 60 ]

//spread with objects
let person = {
    name : 'Neha',
    age : 31,
    location : 'Ghazaiabad'
}
let newPerson = {...person};
console.log(newPerson); //{ name: 'Neha', age: 31, location: 'Ghazaiabad' }

//Add properties to an object
let person1 = {
    name : 'Neha',
    age : 31,
    location : 'Ghazaiabad'
}
let employee = {...person1,
    role : 'Sr. Software Test Engineer'
}
console.log(employee);

/*output
{
  name: 'Neha',
  age: 31,
  location: 'Ghazaiabad',
  role: 'Sr. Software Test Engineer'
}
  */

//update property to an object
let employee1 = {
      name : 'Shipra',
      age : 30,
      location : 'Ghaziabad'
}
let updateEmployee1 = {...employee1,
    age : 31
}
console.log(updateEmployee1); //{ name: 'Shipra', age: 31, location: 'Ghaziabad' }