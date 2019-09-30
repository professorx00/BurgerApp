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
        connection.query("INSERT INTO 'BURGERS' (devoured,burger_name) values (0,?)",[burgerName], function (err, data) {
            if(err) throw err;
            cb(data);
        });
}
}

module.exports = orm;
