// app/models/user.js

var mongoose     = require('mongoose');

var Schema       = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/Poonam_database');//turdb

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});



var UserSchema   = new Schema({
    firstname: String,
    lastname: String
});

module.exports = mongoose.model('User', UserSchema);
//module.exports = mongoose.model('User', kitty);