//filter() - an array method used to select elements that match a condition.
//it takes callback funtion and iterates over each value and return the value when it meets the matching condition

//example1
let num = [10,2,15,5,18,20];
let result = num.filter((numbers)=> numbers >10); //numbers is a callback funtion
                                                  //numbers > 10 is a condition
console.log(result); //[ 15, 18, 20 ] , retur results those are matching with the condition

//exmple 2
let bookDetails = [
    {title : "Book one", genre : 'Non-Fiction', publish : 1991, edition : 2004},
    {title : "Book two", genre : 'Fiction', publish : 1999, edition : 2008},
    {title : "Book three", genre : 'science', publish : 1998, edition : 2010},
    {title : "Book four", genre : 'History', publish : 1992, edition : 2000},
    {title : "Book five", genre : 'science', publish : 1991, edition : 2001},
];
//let userBooks = bookDetails.filter((book) => book.genre === "science");
let userBooks1 = bookDetails.filter((book) => {
    return book.publish > 1991 //Here we used { }, so you created a function body.
});  
let userBooks2 = bookDetails.filter((book)=>{
    return book.edition >2001 && book.genre === "science"
})                          // When we use { }, JavaScript does not automatically return the result
//console.log(userBooks);
console.log(userBooks1);
console.log(userBooks2);
/*output - for userBooks
[
  {
    title: 'Book three',
    genre: 'science',
    publish: 1998,
    edition: 20010
  },
  {
    title: 'Book five',
    genre: 'science',
    publish: 1991,
    edition: 2001
  }
]
*/  