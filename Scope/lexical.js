//lexical scope -> function can access variables from the scope in which it was defined

function fun1(){
    let x =25;
     function fun2(){
        let y =55;
        console.log(x+y); //80
     }
     fun2()
}
fun1()

//example 2 
function firstName(){
    let str1 = "Neha";
    function lastName(){
        let str2 = "Mishra";
        console.log("Full name is :" , str1 + " " +  str2 ); //Full name is : Neha Mishra
    }
    lastName();
}
firstName();

//example 3 
//Outer function (in simple words parent func) can share scope(value) to inner function (in simple child func)
//but two inner functions (in simple child functions) will not share scope(value) to each other.
//also outer function can't access scope(value) of inner function 
function outer(){
    let car = "Fortuner";
    function inner(){
        let car1 = "MG Hector";
        console.log("Inner" , car); //Inner Fortuner , outer function can share value to inner function
    }
        function innerTwo(){
            let car2 = "Thar";
            console.log("Inner two", car); //Inner two Fortuner ,outer function can share value to inner function
            // console.log('inner',car1); //ReferenceError: car1 is not defined , two inner functions cannot share values.

        }
        inner()
        innerTwo()
    }
outer()
//console.log(car1); //ReferenceError: car1 is not defined
