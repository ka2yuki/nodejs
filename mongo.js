var MongoClient = require('mongodb').MongoClient,
    set = require('./settings');
MongoClient.connect("mongodb://localhost/"+set.db, function(err, db) {
  if (err) { return console.dir(err);  }
  console.log("connected to db");
  db.collection("users", function(err, collection){
    var docs = [
      {name: "a", score: 40},
      {name: "b", score: 80},
      {name: "c", score: 60}
    ];
    // collection.find({name: "a"}).toArray(function(err,docs) {
    //   console.log(docs);
    // });
    var stream = collection.find().stream();
    stream.on('data',function(item){
      console.log(item);
    });
    stream.on('end',function(){
      console.log('finished..');
    });
  });
});
