/*

WEBSITE URL : https://www.saucedemo.com/

 1. Tag Selector 

 button        --> find all <button> element

 2. ID Selector  --> ID represented using #

 #shopping_cart_container

 3. Class Selector --> class represented using dot(.)
 shopping cart icon
 .shopping_cart_link

 4. Multiple classes
 remove button
HTML -> <button class ="btn btn_secondary btn_small btn_inventory" .......</button>
here class has multiple classes so we can write like below

 .btn.btn_secondary  

5. Attribute Selector
example -> at checkout product [https://www.saucedemo.com/checkout-step-one.html]
input[type="text"]    this means get the input whose type is text
here in the ablove, it will show all 2 input fields.
to get any particluar field we can use # to get it by using ID
#first-name

6. Attribute exists
used to check whether the attribute exists or not
input[type]
input[data-set]
input[name]

7. Attribute contains *=
*= means that attribute value contains this text
input[name*="lastName"]

8. Attribute starts with ^=
continue button at checkout page 
this tells that attribute value starts with say here continue
input[id^="continue"]

9. Attribute ends with $=
Add to cart button
button[name$="shirt"]
this tells that attribute name ends with shirt

9. :first-of-type 
used when there are only 2 attributes
on login page--
input:first-of-type     hightlights  username field

10. :last-of-type
used when there are only 2 attributes
on login page --
input:last-of-type   highlights password field

11. :nth-of-type()
used when there are multiple similar tags and yant to access one particular
at https://www.saucedemo.com/cart.html cart page
button:nth-of-type(2)   highlights checkout button

*/