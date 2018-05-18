var express = require('express')
var bodyParser = require('body-parser');


var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo'); //pull up variables
var {User}=require('./models/user'); //pull up variables

var app = express();

app.use(bodyParser.json());

app.post ('/todos',(req,res) => {
  //console.log(req.body);
  var todo = new Todo ({
    text: req.body.text,
    completed: req.body.completed
  })
  todo.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  })


})

app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
    res.send({
      todos,
      code: 'okay'
    })
  }, (e) => {
    res.status(400).send(e);
  })
})


app.listen(3000, () => {
  console.log('Started on port 3000');
})

module.exports = {app};





// var Todo = mongoose.model('Todo',{
//   text: {
//     type: String,
//     required: true,
//     minlenght: 1,
//     trim: true // trimming white spaces
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// })
//
//
//
// // var newTodo = new Todo({
// //   text: 'Cook dinner'
// // });
//
// // newTodo.save().then((doc)=>{
// //   console.log('Saved todo',doc);
// // }, (e) = > {
// //   console.log('Unable to save todo');
// // })
// // // save new something
//
//
//
// var altTodo = new otherTodo({
//   user: 'Val',
//   email: '      6501764@gmail.com'
//
// });
//
// altTodo.save().then((doc)=>{
//   console.log('Saved todo',doc);
// }, (e) => {
//   console.log('Unable to save todo',e);
// })
