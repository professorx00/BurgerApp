const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js") 
// this calls for the DATA
router.get("/",function(req,res){
    res.render("user",{});
})


router.get("/burger", function(req,res){
    burger.all((data)=>{
        let burgers = []
        data.forEach((element,index) => {
            burgers.push({burger_name:element.burger_name,devoured:element.devoured,id:element.id,userid:element.userid,number:index})
        });
        let hbsObject ={
            burgers: burgers
        }
        console.log(data);
        res.render("index",hbsObject)
    });
});

router.post("/burger",function(req,res){
    console.log("routing post request")
    console.log(req.body.burger)
    burger.add(req.body.burger,req.body.userid,function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
    
})

router.put("/burger",function(req,res){
    console.log("updating burger");
    burger.update(req.body.id,res.body.userid, function(result){
        res.json({ id: result.insertId });
    });
})

router.get("/users/:user",function(req,res){
    let userName = req.params.user;
    burger.getUser(userName,function(results){
        res.json({userid: results.userid,username: results.username})
    })
})

module.exports = router;