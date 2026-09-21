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

input[data-test="lastName"]

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

10. :first-of-type    - first element of that particular tag type
used when there are only 2 elements of same name
on login page--
input:first-of-type     hightlights  username field

11. :last-of-type      - last element of that particular tag type
used when there are only 2 elements of same name
on login page --
input:last-of-type   highlights password field

12. :nth-of-type()
used when there are multiple similar tags and yant to access one particular
at https://www.saucedemo.com/cart.html cart page
button:nth-of-type(2)   highlights checkout button

child of type

*/


/*
WEBSITE USED : https://www.amazon.in/

1. Tag Selector
link   --> selects all tags with name link

2.ID selector
cart 
#nav-cart-count-container

3. Class Selector
Sign in or create account page of amazon 
.a-dropdown-container    --> selects Enter mobile number or email box

4. Multiple classes
Language
.nav-a.nav-a-2

5.Attribute selector
choose your location > enter your pincode

input[maxlength="6"]

6. Attribute exists
input[name]
input[type]

7. Attribute contains
search box

input[name*="field-keywords"]

8. Attribute starts with ^=
search box
input[name^="field"]

9. Attribute ends with $=
Buy now button of product Poco
input[title$="Now"]

10. :first-of-type 
at your orders page > selects ALL dropdown at the top
select:first-of-type

11. :last-of-type
at your orders page > selects part 3 months drop down
select:last-of-type

12. :nth-of-type()
selects the search icon
 form > div:nth-of-type(2)

13. :nth-child()  : is used to select an element based on its position among all its siblings.

https://www.amazon.in/ref=nav_logo
.a-carousel > li:nth-child(2)

difference between :nth-child() & :nth-of-type()
:nth-child() → count EVERY child.
:nth-of-type() → count ONLY the same tag type.

<div class="a-section">
    <h2>Amazon</h2>
    <a>Today's Deals</a>
    <a>Your Orders</a>
    <a>Customer Service</a>
</div>

:nth-child() -> .a-section > a:nth-child(2)   --> Today's deal
:nth-of-type() -> .a-section > a:nth-of-type(2) --> Your Orders

*/