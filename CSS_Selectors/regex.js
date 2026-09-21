/*
Regex = Regular Expresssion
It is a pattern used to find, match, or validate text

1. Regex Syntax - >  /  /   -> inside these slashes there is text present which we want to find,match & validate
Example :  /hello/
this mean find text 'hello'

2. Starts with -> /^ /
Example : /^hello/

3. Ends with -> /$ /
Example : /$hello/

4. Any character -> /. /
Example : /n.a/
neha
nea
neta

5. Zero or more -> *   -> means a followed by zero or more b's
Example : /ab*/
/* ab
   abb
   abbb
   abbbb

6. one or more -> +  -> atleast a is followed by one b
Example : /ab+/
a  (invalid)
ab
abb
abbb

7. character set -> /[]/ -> match atlease one character inside []
Example : /[abc]/
banana
cat
apple
owl   (invalid)

8. Any digit -> matches any digit inside []
Example : /[0-9]/
0
1
2
.
.
9

9. Digit -> [\d]
instead of /[0-9]/  -> we can write  -> /\d/
or /\d+/  -> means one or more digits

*/




