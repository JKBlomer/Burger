var connection = require("./connection.js");

var orm = {

    selectAll: function(callback){
        var queryString = "Select * from burgers";
        connection.query(queryString, function(err, data){
            if(err)throw err;
            console.log(data);
            callback(data);
        });
    },
    insertOne: function(burgerName, boolValue, callback){
        var queryString = "insert into burgers (burger_name, devoured) values ('" + burgerName + "', " + boolValue + ")";
        connection.query(queryString, function(err, data){
            if(err)throw err;
            console.log(data);
            callback(data);
        });
    },

    updateOne: function(burgerName, callback){
        var queryString = "update burgers set devoured = true";
        queryString += " where burger_name = '" + burgerName + "'";
        
        connection.query(queryString, function(err, data){
            if(err)throw err;
            
            callback(data);
        });
    }
};

module.exports = orm;