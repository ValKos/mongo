//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
  if (err) {
    return console.log('Error connection');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({completed:false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  //
  // }, (err) => {
  //   console.log('Unable to fetch data',err);
  // })

  db.collection('Users').find({name:'Valentin'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));

  }, (err) => {
    console.log('Unable to fetch data',err);
  })

  //docs: https://docs.mongodb.com/manual/reference/method/cursor.count/


  // db.collection('Todos').find({
  //   _id:new ObjectID('5afd9d8f44a9b808777e7a0e')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  //
  // }, (err) => {
  //   console.log('Unable to fetch data',err);
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err) => {
  //   console.log('Unable to fetch data',err);
  // })

  //db.close();
});
