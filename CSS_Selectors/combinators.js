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

//use another website ecommerce 
//WEBSITE URL : https://www.myntra.com/

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


/*WEBSITE USED : https://www.amazon.in/

A simple example to make it understand
<div>
    <span>1</span>
    <span>2</span>
</div>

<a>3</a>
<a>4</a>

1. div span   --> selects both spans (1,2 descendants) 
2. div > span --> direct child (1,2)
3. div + a --> immediate next sibling
4. div ~ a

1. Descendant - 
example :
<div>
  <input>
     <input></input>
   </input>
</div>     

Search box :

div input    - Selects all <input> elements inside <div>, even if the input is nested several levels deep.
div label     - Selects all <label> elements inside <div>


2. child combinator

amazon logo 

cart icon
a) ID > tag
#nav-cart-count-container > span   
Selects <span> that is a direct child of the element having ID nav-cart-count-container

b) Class > tag   [amazon logo]
.nav-left > div
Selects <div> elements that are direct children of .nav-left

c) class > class
Amazon pay option
.nav-div > .nav-a
Selects elements having class .nav-a that are direct children of .nav-div

3. Adjacent -
returns and order
div + a   
Selects <a> because it immediately follows <div>.

4. General Sibling- 

<div>Returns</div>
<span>Something</span>
<p>Something else</p>
<a>Orders</a>
<a>Account</a>

div ~ a
Selects all <a> elements that come after the <div> and share the same parent.

*/