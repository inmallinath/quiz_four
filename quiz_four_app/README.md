# QUIZ FOUR
---

## Question 1
Visit this page http://vancouver.craigslist.ca and write a piece of jQuery code that changes all the links on the home page to have a color red if the link's anchor text includes the pattern eal (20%)
## Solution
> *$('a:contains("eal")').css('color','red');*

## Question 2
Visit a Wikipedia page like this one: https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming) then write a peice of jQuery code that will fadeOut any link you click on without following the link. (15%)
## Solution
```Javascript
*$('a').on('click', function(e){
  e.preventDefault();
  $(this).fadeOut(1000);
});*
```
## Question 3
Write a Rails application that has a company model and a product model. It should be set up as: company has many products. Your application should generate a JSON when you visit a link like (25%):http://localhost:3000/companies.json that looks like:
```JSON
{"companies":
  [
    {"name": "Apple", "products": ["iMac", "iPhone", "iPad"]},
    {"name": "Toyota", "products": ["Corolla", "Matrix", "Rav4"]}
  ]
}
```
## SOLUTION
The solution is posted in the `quiz_four_app`.

## Question 4
Build an HTML page separate from your Rails application with jQuery that connects via AJAX to the Rails application and then lists all the companies with the products they have separated by commas. (20%)

## SOLUTION
`client.html` and `client.js` were coded to provide this solution while running the rails app to receive the JSON. Open `client.html` to see the list of companies and products separated by commas.


## QUESTION - BONUS 1
Redo Part 2 using API versioning and have display JSON without adding .json to the end. The url should be something like: http://localhost:3000/api/v1/campaigns (+10%)
