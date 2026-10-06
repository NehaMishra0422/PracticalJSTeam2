//number
let n =25;
let a =70.5;
console.log(n,a);
console.log(typeof n);
console.log(typeof a);

//string
let name = "Neha Mishra";
let str = 'JS training';
console.log(name);
console.log(str);
console.log(typeof str);

//boolean
let bool = true;
console.log(bool);
console.log(typeof bool);

//undefined
let d ;
console.log(d);
console.log(typeof d);

//null
let e = null;
console.log(e);
console.log(typeof e);

//bigInt
let int = 123456789012345576768;
console.log(int);
console.log(typeof int);

//Symbol
let sm = Symbol("different value");
console.log(sm);
console.log(typeof sm);

//NaN
let nan = NaN;
console.log(nan);
console.log(typeof nan);

//object - represents key : value pair
let obj = {
    name : "Neha Mishra",
    age : 31,
    Company : "Mindfire Digital LLP",
    place : 'Ghaziabad',
    Designation : "Sr. Software Test Engineer"
}
console.log(obj);
console.log(typeof obj);

//array - list of ordered values
let arr = ["Green" , "Blue", "orange","Red","Pink"];
let num =["20","30","50","90","60"];
console.log(arr);
console.log(typeof arr);
console.log(num);
console.log(typeof num);

//Date
const date = new Date();
console.log(date);  //2026-09-26T10:41:29.238Z
console.log(date.toString());  //Sat Sep 26 2026 16:11:29 GMT+0530 (India Standard Time)
console.log(date.toDateString()); //Sat Sep 26 2026
console.log(date.toTimeString());  //16:11:29 GMT+0530 (India Standard Time)
console.log(date.toISOString()); //2026-09-26T10:41:29.238Z
console.log(date.toUTCString());  //Sat, 26 Sep 2026 10:41:29 GMT
console.log(date.toLocaleDateString()); //26/9/2026
console.log(date.toLocaleTimeString());  //4:11:29 pm
console.log(date.toLocaleString());  //26/9/2026, 4:11:29 pm
console.log(date.toJSON());  //2026-09-26T10:41:29.238Z


console.log("***** Get Date *****");

const birthday = new Date("1995-04-22T08:24:00");
console.log(birthday.getMonth());  //3 (because counting starts from 0)
console.log(birthday.getFullYear()); //1995
console.log(birthday.getDate());   //22
console.log(birthday.getUTCDate());  //22
console.log(birthday.getDay());  //6
console.log(birthday.getUTCDay());  //6
console.log(birthday.getHours());  //8
console.log(birthday.getUTCHours()); //2
console.log(birthday.getMinutes());  //24
console.log(birthday.getUTCMinutes());  54
console.log(birthday.getSeconds()); //0
console.log(birthday.getUTCSeconds());  //0
console.log(birthday.toString()); //Sat Apr 22 1995 08:24:00 GMT+0530 (India Standard Time)
console.log(Date.now());

console.log("***** Set Date *****");

//set date - its return type is timestamp in milliseconds
let date1 = new Date("August 18, 2025");
date1.setFullYear(2026); 
console.log(date1.toDateString());  // Tue Aug 18 2026
date1.setDate(20);
console.log(date1.toDateString()); //Thu Aug 20 2026
date1.setMonth(8);
console.log(date1.toDateString()); //Thu Sep 20 2026

//add month
date1.setMonth(date1.getMonth() + 1);
console.log(date1);  //2026-10-19T18:30:00.000Z
console.log(date1.toDateString()); //Tue Oct 20 2026

//add date
date1.setDate(date1.getDate() + 1);
console.log(date1); //2026-10-20T18:30:00.000Z
console.log(date1.toDateString());  //Wed Oct 21 2026

//subtract year
date1.setFullYear(date1.getFullYear() - 1);  
console.log(date1);  //2025-10-20T18:30:00.000Z
console.log(date1.toDateString());  //Tue Oct 21 2025

//coversion

console.log("Convert IST --> New York ");
let NYDate = new Date("2026-10-22T14:30:00+05:30");
console.log(NYDate.toLocaleString("en-US",{
    timeZone : "America/New_York"
}));  //10/22/2026, 5:00:00 AM

console.log("Convert IST --> Chicago ");
let chicagoDate = new Date("2026-10-22T14:30:00+05:30");
console.log(chicagoDate.toLocaleString("en-US",{
    timeZone : "America/Chicago"
}));  //10/22/2026, 4:00:00 AM

console.log("Convert IST --> Denver");
let denverDate = new Date("2026-10-22T14:30:00+05:30");
console.log(denverDate.toLocaleString("en-US",{
    timeZone : "America/Denver"
}));   //10/22/2026, 3:00:00 AM

console.log("COnvert IST --> Los Angeles");
let LADate = new Date("2026-10-22T14:30:00+05:30");
console.log(LADate.toLocaleString("en-US",{
    timesZone : "America/Los_Angeles"
}));  //10/22/2026, 2:30:00 PM





