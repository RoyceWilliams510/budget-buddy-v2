var budget = require("../models/budgets.js");
var express = require("express");
var router = express.Router();



// Export routes for server.js to use.

router.get("/",function(req,res){
    budget.findAll(function(items){
        res.render("index",{items:items});
    })
})

router.post("/api/items",function(req,res){
    var item = req.body.item;
    var price = req.body.price;
    console.log(item);
    console.log(price);
    budget.create([item,price,false],function(results){
        console.log(results);
        res.json(results);
    })
})

router.put("/api/items/:id",function(req,res){
    var id = req.params.id
    console.log(id);
    budget.update("purchased",true,id,function(results){
        console.log(results);
        res.send("/");
    })
})
router.delete("/api/items/:id",function(req,res){
    var id = req.params.id
    console.log(id);
    budget.delete(id,function(results){
        console.log(results);
        res.send("/");

    })
})

module.exports = router;
