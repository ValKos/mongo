var mongoose = require('mongoose');

var User = mongoose.model('User',{
  user: {
    type: String,
    required: true
    //http://mongoosejs.com/docs/validation.html
    //ref: http://mongoosejs.com/docs/guide.html
  },
  email: {
    type: String,
    required: true,
    minlenght: 6,
    trim: true
  }
})

module.exports = {User} // return a so-called variable
