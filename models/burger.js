// Export the database functions for the controller (BurgersController.js).
var orm = require("../config/orm.js");

const burger = {
    all: function(cb){
        orm.all((data)=>{
            cb(data)
        })
    }
}

module.exports = burger;