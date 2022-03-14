//const mongoose = require('mongoose');

//var mongo = require('mongodb');

//var url = "mongodb://localhost:27017/mydb";

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.2:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  }); 