// gets data from API via a function which is exported out
var connection = require("../config/connection.js");

const orm = {
    all: function (userid,cb) {
            connection.query("select * from burgers where userid=?",[userid], function (err, data) {
                if(err) throw err;
                cb(data);
            });
    },
    add: function (burgerName,userid,cb) {
        connection.query("INSERT INTO `burgertown`.`burgers` (`burger_name`,'userid') VALUES (?)",[burgerName,userid], function (err, data) {
            console.log("added Burger")
            if(err) throw err;
            cb(data);
        });
    },
    update: function(id,cb){
        connection.query("update burgers set devoured = 1 where id=? and userid=?",[id,userid],function(err,data){
            if(err) throw err;
            cb(data);
        })
    },
    getuser: function(username,cb){
        connection.query("select * from users where username=?",[username],function(err,data){
            if(err) throw err;
            cb(data)
        })
    }
}

module.exports = orm;
