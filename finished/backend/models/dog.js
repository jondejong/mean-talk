var mongoose = require('mongoose');

var dogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number
});

var Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;


