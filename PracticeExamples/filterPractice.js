let arr = [10,30,40,50,55,27,19,23];
let even = arr.filter((num)=>{
    if(num%2 === 0){
        return num;
    }
});
console.log(even);
