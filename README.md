# Burger Town

Web app to keep track of which burgers you have and have not eaten.

## Installation
### Create Database:
Create a database named 'burgertown' or use the following code:

```*.sql
CREATE TABLE `burgertown`
```
update the ./config/connection.js with database connection.
```js
var sequelize = new Sequelize(MYSQL DATABASE SQL STRING HERE);
```
run npm install on directory of app.

Deploy the App or run local with ```node server.js``` command

## Usage
Once deploy you should be able to access by going to home direct "/"

Once page is load there will be a text area in the bottom of the page. You can then add a burger. This will cause the burger to be added to the list at the top. 

To Devour the burger press the devour button. This will bring the burger over to Eaten with a strike through it.

<img src="/assets/img/BurgerTownScreenShot.png"
     alt="Burger Town Screen Shot"
     style="float: left; margin-right: 10px;" /><br>

## Required:
### Dependencies
    1) express: ^4.17.1
    2) express-handlebars: 3.1.0
    3) mysql2: ^1.7.0
    4) sequelize: ^5.19.2


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.



## License
[MIT](https://choosealicense.com/licenses/mit/)