const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js") 
const SQL= require("sequelize");
// this calls for the DATA
const Op = SQL.Op

router.get("/", function(req,res){
    let burgers=[]
    burger.findAll({}).then((result)=>{
        result.forEach(element => {
            burgers.push({
                id: element.dataValues.id,
                burgerName: element.dataValues.burgerName,
                devoured: element.dataValues.devoured,
            })
            console.log(element.dataValues.burgerName)
        });
        res.render("index",{burgers: burgers});
    }).catch(err=>{
        console.log(err);
        res.status(500).end();
      });
});

router.post("/",function(req,res){
    burger.create({
        burgerName: req.body.burger
    }).then((results)=>{
        console.log(results);
        res.status(200).end()
    }).catch(err=>{res.status(500).end()})
})

router.put("/",function(req,res){
    burger.update({
        devoured: 1
    },{
        where:{
            id:{
                [Op.eq]: req.body.id
            }
        }
    }).then((result)=>{
        res.send(result).status(200).end()
    }).catch(err=>{
        console.log(err);
        res.status(500).end();
      });
})

module.exports = router;