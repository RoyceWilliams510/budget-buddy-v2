var connection = require("./connection.js");
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
var orm = {
  
    create: function(table,columms,values,cb){
        var queryString = "INSERT INTO "+ table;
        queryString += " ( "
        queryString += columms.toString();
        queryString += " ) VALUES ("
        queryString += printQuestionMarks(values.length)
        queryString += " ) "
        console.log(queryString);
        connection.query(queryString,values,function(err,results){
            if(err) throw err;
            cb(results);
        })
    },
    update: function(table,column, newValue,target,targetVal,cb){
        var queryString = "UPDATE " + table;
        queryString+= " SET " +column;
        queryString+= " =  ?  WHERE  " +target;
        queryString+= " =  ? "
        connection.query(queryString,[newValue,targetVal],function(err,results){
            if(err) throw err;
            cb(results);
        })
    },
    findAll: function(table,cb){
        var queryString = "SELECT * FROM "+ table + ";";
        connection.query(queryString,function(err,results){
            if(err) throw err;
            cb(results);
        })
    },
    delete: function(table,target,targetVal,cb){
        var queryString = "DELETE FROM " + table;
        queryString+= " WHERE  " +target;
        queryString+= " =  ? "
        console.log(queryString);
        connection.query(queryString,targetVal,function(err,results){
            if(err) throw err;
            cb(results);
        })
    }
}

module.exports = orm;
