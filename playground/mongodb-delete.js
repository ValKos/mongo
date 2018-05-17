//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
  if (err) {
    return console.log('Error connection');
  }
  console.log('Connected to MongoDB server');

  //delete many
  db.collection('Users').deleteMany({name:'Valentin'})
  .then((result)=> {
    console.log(result);
  });

  // delete one
  // db.collection('Todos').deleteOne({text:'eat lunch'})
  // .then((result)=> {
  //   console.log(result);
  // });

  //find and delete
  db.collection('Users').findOneAndDelete({_id:new ObjectID('5afcb7f4a35a694f8022df84')})
  .then((result)=> {
    console.log(result);
  });

  //db.close();
});
