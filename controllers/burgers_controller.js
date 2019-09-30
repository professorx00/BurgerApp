const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js") 
// this calls for the DATA

router.get("/", function(req,res){
    burger.all((data)=>{
        let burgers = []
        data.forEach(element => {
            burgers.push({burger_name:element.burger_name,devoured:element.devoured,id:element.id})
        });
        let hbsObject ={
            burgers: burgers
        }
        console.log(data);
        res.render("index",hbsObject)
    });
});


module.exports = router;