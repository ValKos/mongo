//mongoosee methods
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5aff2ed21fb3fa0d208a63af';

if (!ObjectID.isValid) {
  console.log('Id not valid!');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos',todos);
})

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todos',todo);
})

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todos',todo);
}).catch((e) => {
  console.log(e);
})
