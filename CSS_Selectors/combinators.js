//Combinators tells us the relationship between two 0r more selectors
//they are of 4 types
//1. Descendant (space) - element inside other element
//2. Child  (>) - direct child
//3. Adjacent (+) - immediately next sibling
//4. General Sibling (~)- any following sibling

//let say A B
// A B  -> B anywhere inside A
// A > B -> B directly inside A
// A + B -> B immediatly after A
// A ~ B --> B after A

//WEBSITE URL : https://www.saucedemo.com/

//1. Descendant - 
// find input somewhere inside .Login_container
// .Login_container input   //

//2. Child Combinator - >     (parent > direct child)
//login button
//tag + tag
// form > input    //means input is a direct child of form

//class + tag 
//find input directly inside class .form_group
//.form_group > input  //  (username & password)

//ID +  tag
//#password > input (just for syntax, this won't show anything)

//cass +  class 
//url used : https://www.saucedemo.com/inventory.html
//find all Add to cart button
//.pricebar > .btn

//3. Adjacent -> +
//login button
// div + input

//4. General sibling
// div ~ input    //login button