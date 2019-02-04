

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");



router.get("/", function (req,res){
    burger.selectAll(function(burg){
        var burgerObject = {
            burgers: burg
        };
        
        res.render("index", burgerObject);
    });
});

router.post("/add", function(req,res){
    burger.insertOne(req.body.burger_name, req.body.devoured, function(burgerData){
        
        res.json(burgerData);
    });
}); 

router.put("/", function(req,res){
    
    for(var key in req.body)
    {
        var burgerName = key;
    }
    
    burger.updateOne(burgerName, function(data){

        res.json(data);
    });
    
});

module.exports = router;