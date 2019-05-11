//imports the connections
var connection = require("../config/connection.js");

// this is to see the ????? 
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }


var orm = {

//seclectAll()
all: function(tableInput, cb){
    var queryAll = "select * from " + tableInput + ";"; 
    connection.query(queryAll, function(err, res){
        if (err){
            throw err;
        }
        cb(res);
    });
},
//insertOne()
create: function(table, cols, vals, cb){
    var queryAdd = "insert into " + table;

    queryAdd += " (";
    queryAdd += cols.toString();
    queryAdd += ") ";
    queryAdd += "values (";
    queryAdd += printQuestionMarks(vals.length);
    queryAdd += ") ";

    console.log(queryAdd);

    connection.query(queryAdd, vals, function(err, res){
        if (err){
            throw err;
        }    
    CDATASection(res);
})
},
//updateOne()
update: function(table, objColVals, condition, cb){
    var queryUpdate = "update " + table;

    queryUpdate += " set ";
    queryUpdate += objToSql(objColVals);
    queryUpdate += " where ";
    queryUpdate += condition;

    console.log(queryUpdate);
    connection.query(queryUpdate, function(err, res){
        if (err){
            throw err;
        }
        cb(res)
    });
}


};
// Export the orm object for the model (burgers.js).
module.exports = orm;