const SQL= require("sequelize");
const model = require("../config/connection.js");

const burger = model.define('burgers',{
    burgerName:{
        type:SQL.STRING,
        allowNull: false,
        validate:{
            len:[1,150],
        }
    },
    devoured:{
        type:SQL.BOOLEAN,
        defaultValue: false,
    }
});

burger.sync();

module.exports = burger;