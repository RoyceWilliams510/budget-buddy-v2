var orm = require("../config/orm.js");

var budgets = {
    
    create: function(values,cb){
        orm.create("budget",["item","price","purchased"],values,function(results){
            cb(results)
        });
    },
    findAll: function(cb){
        orm.findAll("budget",function(res){
            cb(res);
        });
    },
    update: function(column,newValue,target,cb){
        orm.update("budget",column,newValue,"id",target,function(res){
            cb(res);
        });
    },
    delete: function(id,cb){
        orm.delete("budget","id",[id],function(res){
            cb(res);
        })
    }

}
module.exports = budgets;