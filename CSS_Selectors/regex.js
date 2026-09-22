/*
Regex = Regular Expresssion
It is a pattern used to find, match, or validate text

Regex Syntax - >  /  /   -> inside these slashes there is text present which we want to find,match & validate
Example :  /hello/
this mean find text 'hello'

1. Literal Character : searches exact character
ex 1 -> let name = 'Neha'
regex = /'Neha'/
ex 2 -> let order ID = ORD-2026-4567
regex = ORD

2. Digit = /d  -> any single digit from 0-9
ex1 -> let num = 34566;
regex = /d   
output -> 3

3. Multiple digits : how many times = {}
if you want to search for multiple digits then we can write like
EX -> let num = 123214
regex = /d{6}

4.Word Character = /w  -> means a letter,digit and underscore
Ex -> let word = Neha2204
regex = /w
output - N
or
/w+ ,
Ex -> let word = Neha2204
regex = /w+
output - Neha2204
gives one or more letter and digits

5. one or more = +
/d+ -> one or more digits
/w+ -> one or more letter , digit and underscore

Ex -  My name is Neha and no is 7838455909
/d+  -> 7838455909  (keep searching as long as it satisfies the pattern)
/w+   -> My name is Neha and no is 7838455909

Example : /ab+/
a  (invalid)
ab
abb
abbb

6. zero or more = *   means a followed by zero or more b's
Ex -> /ab*/
/*
a
ab
abb

7. Zero or one =  ?
ex = behaviou?r
matches : 
behaviour
behavior

this means that u may or may not present

8. Any character -> /. /
Example : /n.a/
neha
nea
neta

9. character set -> /[]/ -> match atlease one character inside []
Example : /[abc]/
banana
cat
apple
owl   (invalid)

10. Any digit -> matches any digit inside []
Example : /[0-9]/
0
1
2
.
.
9

11. A-Z -> any upper letter from A to Z
similarly  a-z , any lower letter from a to z

12. [A-Za-z] -> any english character Uppercass or LowerCase

Ex - JavaScript  -> [A-Za-z]+

13. Starts with -> /^ /
Example : /^hello/

14. Ends with -> /$ /
Example : /$hello/

15. OR => |
Ex - Neha | Shipra , means find Neha or Shipra


1. Find text Electronics
Go to Browser console,
type 
const text = document.body.innerText
text.match(/Electronics/g)
gives result 6

text.match(/Amazon/g)

here 'g' means find all matches

2. Find prices 
text.match(/₹\d+/g)

3. find exaclty 4 digits
text.match(/\d{4}/)

4. Find Order ID's from Order page of Amazon
regex = /\d{3}-\d{7}-\d{7}/g
test.match(/\d{3}-\d{7}-\d{7}/g)
or
order ID including ORDER #

test.match(/ORDER\s*#?\s*\d{3}-\d{7}-\d{7}/g)
\s is for space

5. Find all th prices under orders page
test.match(/₹\d+/g)

6. find price 1,439
test.match(/₹\d{1,3},\d{3}/)

7. FInd year from orders page
test.match(/\d{4}/)
2026

8. Find any product TIED or ENVY
test.match(/TIED|ENVY/g)


*/




