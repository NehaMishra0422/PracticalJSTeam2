let details = new Map();
details.set("Name", "Shipra Mishra");
details.set("age","31");
details.set("role","tester");
console.log(details);

console.log(details.get("age"));

console.log(details.has("role"));

//example
let Lname = ['neha', 'shipra','avnish'];
let upper = Lname.map((nam) =>{
    return nam.toUpperCase();
})
console.log(upper);

//example
let num = [20,30,45,66,89,100];
let even = num.map((n)=>{
    if(n%2===0){
        return n;
    }
})
console.log(even);

let result = [
{ id: 1, status: "Pass" },
{ id: 2, status: "Pass" },
{ id: 3, status: "Pass" },
{ id: 4, status: "Fail" },
{ id: 5, status: "Fail" }
]
let status = result.filter((res)=>{
    return res.status === "Fail";
})
console.log(status);

const testCases = [
{ name: "Login", status: "Pass", executionTime: 10 },
{ name: "Checkout", status: "Fail", executionTime: 20 },
{ name: "Search", status: "Pass", executionTime: 15 },
{ name: "Payment", status: "Fail", executionTime: 30 }
]
let failedTests = 0;
for(let test of testCases){
    if(test.status === "Fail"){
        failedTests += test.executionTime;
    }
    
}
console.log(failedTests);