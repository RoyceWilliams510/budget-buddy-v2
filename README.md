# budget-buddy
Introducing budget buddy the online economic day planner that utilizes node and mysql technologies. In this application there is a simple menu for users to add upcoming purchases to a to do list then check that list off when their shopping duties are completed.
 

## Demo
To demo this application you can try it out at our deployed website by clicking on the following badge.
[![Website naereen.github.io](https://img.shields.io/website-up-down-green-red/https/naereen.github.io.svg)](https://vast-crag-06901.herokuapp.com/)


## Review
This application is a product of the following technologies nodejs, express, and sql. Nodejs and express allow for the application to make post, delete, and put requests with the server, and with the help of sql the infromation transmitted in these requests end up being saved to the applications database that is hosted by jawsDB. When loocking at the directory of all of the files it may seem hard to see where certain files are situated, so to ease the process of familiarizing yourself with this directory, here is a model of all of the directories and files for this application

```
|----config
|       |____connection.js
|       |_____orm.js
|----controllers
|       |_____budgetController.js
|
|----db
|     |____schema.sql
|     |_____seeds.sql
|
|----models
|       |____budgets.js
|            
|----public
|       |------css
|       |       |____ style.css
|       |------js
|               |_____ budget.js
|
|-----views
|       |------layouts
|       |       |____ main.handlebars
|       |------partials
|       |        |_____ items-block.handlebars
|       |_______index.handlebars
|
|___package.json
|___server.js

```

In this project there are a lot of files to keep track of so here is a brief summary for each of them.

* connection.js: Responsible for connecting the application to the sql database.
* orm.js: Object model which is used for interacting with the database
* budgetController.js: Maps out the routes for the server.
* schema.sql: Table schema.
* budgets.js: Adapted ORM for each of the rows submitted to the table in the data base.
* budgets.js: JS for the listeners on the buttons on the page and creates requests.
* main.handlebars: Html framework.
* index.handlebars: Sub section of the html page and is used for the input box
* items-block.handlebars: Conditional section of the html page and is dictated by the inputed data.

## Built with 
* [Node](https://nodejs.org/en/download/)
* [express](https://www.npmjs.com/package/express)
* [SQL](https://dev.mysql.com/doc/)



## License
[MIT](https://choosealicense.com/licenses/mit/)