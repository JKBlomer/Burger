var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll(function(data){
            callback(data);
        });
    },
    insertOne: function(burName, boolVal, callback){
        orm.insertOne(burName, boolVal, function(data){
            callback(data);
        });
    },
    updateOne: function(burName, callback){
        orm.updateOne(burName, function(data){
            callback(data);
        })
    }
};

module.exports = burger;