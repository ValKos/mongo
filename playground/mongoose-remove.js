//mongoosee methods
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

//Remove all
// Todo.remove({}).then((result) => {
//   console.log(result);
// })

//Other methods
//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5b009c255b924df419d7863d'})
.then((todo) => {
  console.log(todo);
})

Todo.findByIdAndRemove('5b009c255b924df419d7863d').then((todo) => {
  console.log(todo);
})
