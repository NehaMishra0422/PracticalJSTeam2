//Check if student has passed or not
let score = 85;
if (score>75){
    console.log("Passed with Grade A");
}
else if(score<50){
    console.log("Passed with Grade B");
}
else{
    console.log("Failed with Grade C");
}


//user can login or not
let password = "Javascript@123";
let userName = "Neha";
if(userName === "Neha" &&password==="JS@123"){
    console.log("Access Denied! Please try again");
}
else if (userName === "Neha" && password === "Javascript@123"){
    console.log("User get logged in");
}
else {
    console.log("User doesn't exist");
}