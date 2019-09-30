// gets data from API via a function which is exported out
var connection = require("../config/connection.js");

const orm = {
    all: function (cb) {
            connection.query("select * from burgers", function (err, data) {
                if(err) throw err;
                cb(data);
            });
    },
    add: function (burgerName,cb) {
        connection.query("INSERT INTO `burgertown`.`burgers` (`burger_name`) VALUES (?)",[burgerName], function (err, data) {
            console.log("added Burger")
            if(err) throw err;
            cb(data);
        });
    },
    update: function(id,cb){
        connection.query("update burgers set devoured = 1 where id=?",[id],function(err,data){
            if(err) throw err;
            cb(data);
        })
    }
}

module.exports = orm;
