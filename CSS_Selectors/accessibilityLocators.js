/*

WEBSITE USED : https://www.amazon.in/

1. getByRole() -  finds an element based on its role.

we have many types of roles
button
checkbox
radio
searchbox
link

all flyout menu

CSS selector - button [role="button"]

when there are many buttons then specify button name :
await page.getByRole("button" ,{name : "Login"}).click();


button -> role
Login -> Accessibility name

when only single button
await page.getByRole("button").click();


2.getByLabel() - finds a form element using its label.
any tag starts with label

search Amazon.in

await page.getByLabel("twotabsearchtextbox").fill("Mobile");

3. getByPlaceholder() - Sometimes an input doesn't have a visible label but has a placeholder

await page.getByPlaceholder("Search Amazon.in").fill("Mobile");

4. getByText() - finds an element based on the visible text.

Sign in page - password
await page.getByText("Password");

5. getByAltText()

WEBSITE USED : https://www.flipkart.com/
flipkart  yellow button
<img src ="nfgkfgnff" alt="Image"......./>

await page.getByAltText("Image");

6. getByTitle() - finds an element using its title attribute

WEBSITE USED : https://www.flipkart.com/
flipkart -> My Profile

await page.getBYTitle("My Profile").click();



CSS selector
     ↓
Looks at HTML structure/attributes

Accessibility locator
     ↓
Looks at how the element is exposed to users/assistive technology


## ARIA Role Locators
by combining its role and accessibility locator-
button[role="button"][aria-label="Open All Categories Menu"]
button[aria-label="Open All Categories Menu"]
[role="searchbox"][aria-label="Search Amazon.in"]


ex in playwright -> 
basic syntax for aria-label with getByRole()

Syntax - page.getByRole("ROLE", { name: "ARIA-LABEL VALUE" })
await page.getByRole("searchbox" , {name : "Search Amazon.in").click();

## Accessible Name Locators
An accessible name is basically the name that accessibility tools such as screen readers can use to identify an element.

aria-label  --> when there is no visible text but aria-label have some word using that we can access the element
aria-label : Search Amazon.in

## State and Relationship locators
ARIA attributes can tell us the current state of an element

1.aria-expanded -> tells true or false state of the dropdown
Amazon-
Account&Lists
[role="button"][aria-expanded="false"]

2. aria-invalid -> Used for form Validation
if aria-invalid:true
this tells accessiblity tools that it has invalid value


## Semantic HTML element locators
HTML elements whose name already tells what they represent
 ex <button> - button
    <nav> - navigation
    <main> - main content 

*/


