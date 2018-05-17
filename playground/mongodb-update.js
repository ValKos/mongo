//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=> {
  if (err) {
    return console.log('Error connection');
  }
  console.log('Connected to MongoDB server');

//ref: https://docs.mongodb.com/manual/reference/method/js-collection/index.html
//https://docs.mongodb.com/manual/reference/operator/update/
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5afd9d8f44a9b808777e7a0e')
// },{
//   $set: {//https://docs.mongodb.com/manual/reference/operator/update/
//   completed: false
// }
// },{
//   returnOriginal: false
// }).then((result)=> {
//   console.log(result);
// });
//
//   //db.close();
// });

// db.collection('Users').findOneAndUpdate({
//   name: 'Valentina'
// },{
//   $set: {//https://docs.mongodb.com/manual/reference/operator/update/
//   name: 'Valentin'
// }
// },{
//   returnOriginal: false
// }).then((result)=> {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  name: 'Valentin'
},{
  $inc: {//https://docs.mongodb.com/manual/reference/operator/update/
  age: +10
}
},{
  returnOriginal: false
}).then((result)=> {
  console.log(result);
});



  //db.close();
});
