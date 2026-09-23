//user Inputs generally means interacting with fields

//Example - .fill()
//await page.locator("#user-name").fill("Neha Mishra");
//await page.locator("#password").fill("12345");

//.click()
//await page.locator("#login-button").click();

//input='name'

//using function
/*
User gives a value → function uses that value → function creates a CSS selector → Playwright uses that selector.


1. function createSelectot(tagName){
return '#' + tagName;
}

let selector = createSelector(tagName);
console.log(selector);

2. or using prompt

let input = prompt("Enter Username");
function createSelectot(tagName){
return '#' + tagName;
}

let selector = createSelector(input);
console.log(selector);

3. to use this in playwright :
let input = prompt("Enter Username");
function createSelectot(tagName){
return '#' + tagName;
}

let selector = createSelector(input);
console.log(selector);

await page.locator(selector).click();


4. or with Template literals : -

let input = prompt("Enter Username");
function createSelectot(tagName){
return `#${tagName}`;
}

let selector = createSelector(input);
console.log(selector);

await page.locator(selector).click();


*/