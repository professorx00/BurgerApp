// Export the database functions for the controller (BurgersController.js).
var orm = require("../config/orm.js");

const burger = {
    all: function(cb){
        orm.all((data)=>{
            cb(data)
        })
    },
    add:function(burgerName,cb){
        orm.add(burgerName,function(res){
            cb(res)
        })
    },
    update:function(id,cb){
        orm.update(id,function(res){
            cb(res);
        })
    },
    getuser:function(username,cb){
        orm.getuser(username,function(res){
            cb(res)
        })
    }
}

module.exports = burger;