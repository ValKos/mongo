//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// var user = {
//   name: 'Val',
//   age: 25
// };
// var {name} = user; //ES6 destructure
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
  if (err) {
    return console.log('Error connection');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  //
  // }, (err,result) =>{
  //   if(err){
  //     return console.log('Error insert: ',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })


  // db.collection('Users').insertOne({
  //   //_id: 1,
  //   name: 'Valentin',
  //   age: 35,
  //   location: 'Saint-Petersburg'
  //
  // }, (err,result) =>{
  //   if(err){
  //     return console.log('Unable to insert: ',err);
  //   }
  //   //console.log(JSON.stringify(result.ops,undefined,2));
  //   console.log(result.ops[0]._id.getTimestamp());
  //
  // })

  db.close();
});
