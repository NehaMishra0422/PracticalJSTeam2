/*
Pagination -> Pagination is when a website divides a large list of data into multiple pages.

WEBSITE USED : https://practice.expandtesting.com/dynamic-pagination-table?utm_source=chatgpt.com

previous 1 2 3 4 5 next

1. To Select Pagination container 
.pagination   (this will select the class pagination)

2. To select all page links
.pagination a 

here 'a' is element tag <a> inside .pagination

3. To select a specific page
 .pagination li:nth-of-type(4) a

 this will select page link 3

 this means first it will select the class .pagination
 then will select the element tag <li> inside .pagination
 then selects 4th <li> elements from <li> siblings
 then finds <a> inside 4th <li> element

4. To select last page
.pagination li:last-child a   (selects Next)

5. To select first page
.pagination li:first-child a    (selects previous)

  


for remembering

.pagination
      ↓
pagination container

.pagination a
      ↓
all pagination links

.pagination a:nth-child(3)
      ↓
3rd child

.pagination a:nth-of-type(3)
      ↓
3rd <a> element

.pagination a:first-child
      ↓
first child

.pagination a:last-child
      ↓
last child

.pagination a[aria-label="Next"]
      ↓
Next link based on attribute

*/

/*
one more example
WEBSITE USED : https://datatables.net/examples/core/basic_init/zero_configuration.html?utm_source=chatgpt.com

1. To select pagination container
.dt-paging

2. shows all elements with same class name
.dt-paging .dt-paging-button

3. select particular page 
<<  <  1  2  3  4  5  6  >  >>
1   2  3  4  5  6  7  8  9  10

.dt-paging .dt-paging-button:nth-of-type(6)     (selects page 4)

4. last page
.dt-paging .dt-paging-button:nth-of-type(10)    (selects >>)
or
.dt-paging .dt-paging-button:last-child          (selects >>)

5. first page
.dt-paging .dt-paging-button:nth-of-type(1)    (selects <<)
or
.dt-paging .dt-paging-button:first-child        (selects <<)

6. using aria label
.dt-paging .dt-paging-button[aria-label="Previous"]

*/

