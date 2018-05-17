var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    required: true,
    minlenght: 1,
    trim: true // trimming white spaces
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

module.exports = {Todo} // return a so-called variable
