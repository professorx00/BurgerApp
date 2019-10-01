const SQL= require("sequelize");
const model = require("../config/connection.js");

const burger = model.define('burgers',{
    burgerName:{
        type:SQL.STRING,
        allowNull: false
    },
    devoured:{
        type:SQL.BOOLEAN,
        defaultValue: false,
    }
});

burger.sync({force:true});

module.exports = burger;