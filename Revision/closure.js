//example
function fun1(){
    let a = 20;
    let name = "Neha Mishra";
   function fun2(){
        let b = 30;
        console.log("Sum", a + b); //Sum 50
        console.log(name);  //Neha Mishra
   }
 return fun2();  
}
fun1();