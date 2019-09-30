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

router.post("/",function(req,res){
    console.log("routing post request")
    console.log(req.body.burger)
    burger.add(req.body.burger,function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
    
})

router.put("/",function(req,res){
    console.log("updating burger");
    burger.update(req.body.id, function(result){
        res.json({ id: result.insertId });
    });
})

module.exports = router;