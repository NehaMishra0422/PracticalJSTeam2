if(0){
    let x = 9;
    let y = 8;
    console.log( x + y);
}
if (-0) {
    console.log("JS Training");
}

if(1){
    console.log("Truthy");
}

console.log(Boolean(-0)); //false
console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false