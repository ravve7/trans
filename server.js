var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
var url = "mongodb://localhost:27017/";
var cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/', function(req, res){
   res.send("Hello world!hhhhhhhhhhh\n");
});

app.post('/saveTranslation', function(req, res){
  console.log(req.body)
  var record = req.body
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("TransDB");

    dbo.collection("Translations").insertOne(record, function(err, res) {
      if (err) throw err;
      console.log("Data inserted in Table");
      db.close();
    });
  });
   res.send("Saved");
});

app.listen(3000);

console.log('Server running at http://localhost:3000/');
