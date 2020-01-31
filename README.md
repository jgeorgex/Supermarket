## Supermarket

(WIP) A supermarket built with Javascript, Node, Express, Mocha and Chai.

## Instructions

1. Clone repositoiry
2. npm install (from root directory) (installs dependancies)
3. npm start (from root directory) (starts server)
4. mocha test.js or npm test (from root directory) (runs tests)

## Resources Used

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction <br>
https://mochajs.org/ <br>
https://www.chaijs.com/

## Approach / Plan

1. Setup environment including test framework and expected dependancies.
2. Create supermaket stock in json format.
3. Access read stock in json file from app.js creating goodsInStock object to be exported and used throughout program.
4. Test json file is readable.
5. TDD route to display Supermarket stock.
6. Add select buttons for each stock item. On event add to basket array.
7. TDD route to view basket array of items selcted.
8. Add currency selector linked to API.
9. TDD route to view:
   “subtotal" : <sub-total of the basket, before discounts>,
   “discounts" : <list of discounts applied. Empty if no discounts>,
   “discountAmt": <total of the discounts. Zero if no discounts>,
   “total": <total of the basket, after discounts>,
   “currency": <the currency of the basket totals>}
10. Manual feature test goods selection and curreny updates.
11. TDD discounts business logic.
12. Review and refactor.
