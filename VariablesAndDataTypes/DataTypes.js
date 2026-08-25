//number
let n =25;
let a =70.5;
console.log(n,a);

//string
let name = "Neha Mishra";
let str = 'JS training';
console.log(name);
console.log(str);

//boolean
let bool = true;

//undefined
let d ;
console.log(d);

//null
let e = null;
console.log(e);

//bigInt
let int = 123456789012345576768;
console.log(int);

//Symbol
let sm = Symbol ("different value");
console.log(sm);

//object - represents key : value pair
let obj = {
    name : "Neha Mishra",
    age : 31,
    Company : "Mindfire Digital LLP",
    place : 'Ghaziabad',
    Designation : "Sr. Software Test Engineer"
}
console.log(obj);

//array - list of ordered values
let arr = ["Green" , "Blue", "orange","Red","Pink"];
let num =["20","30","50","90","60"];
console.log(arr);
console.log(num);

//Date
const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toUTCString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString());
console.log(date.toJSON());


console.log("***** Get Date *****");

const birthday = new Date("1995-04-22T08:24:00");
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getUTCDate());
console.log(birthday.getDay());
console.log(birthday.getUTCDay());
console.log(birthday.getHours());
console.log(birthday.getUTCHours());
console.log(birthday.getMinutes());
console.log(birthday.getUTCMinutes());
console.log(birthday.getSeconds());
console.log(birthday.getUTCSeconds());
console.log(birthday.toString());
console.log(Date.now());

console.log("***** Set Date *****");

//set date - its return type is timestamp in milliseconds
let date1 = new Date("August 18, 2025");
date1.setFullYear(2026);
console.log(date1.toDateString());
date1.setDate(20);
console.log(date1.toDateString());
date1.setMonth(8);
console.log(date1.toDateString());

//add month
date1.setMonth(date1.getMonth() + 1);
console.log(date1);
console.log(date1.toDateString());

//add date
date1.setDate(date1.getDate() + 1);
console.log(date1); 
console.log(date1.toDateString());

//subtract year
date1.setFullYear(date1.getFullYear() - 1);
console.log(date1);
console.log(date1.toDateString());

//coversion

console.log("Convert IST --> New York ");
let NYDate = new Date("2026-10-22T14:30:00+05:30");
console.log(NYDate.toLocaleString("en-US",{
    timeZone : "America/New_York"
}));

console.log("Convert IST --> Chicago ");
let chicagoDate = new Date("2026-10-22T14:30:00+05:30");
console.log(chicagoDate.toLocaleString("en-US",{
    timeZone : "America/Chicago"
}));

console.log("Convert IST --> Denver");
let denverDate = new Date("2026-10-22T14:30:00+05:30");
console.log(denverDate.toLocaleString("en-US",{
    timeZone : "America/Denver"
}));

console.log("COnvert IST --> Los Angeles");
let LADate = new Date("2026-10-22T14:30:00+05:30");
console.log(LADate.toLocaleString("en-US",{
    timesZone : "America/Los_Angeles"
}));





