var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var Dog = require('../models/dog');

var dogController = {};

dogController.list = function(req, res) {
  Dog.find(req.query, function(err, list){
    res.json(list);
  });

};

dogController.save = function(req, res) {
  var dog = new Dog();
  dog.name = req.body.name;
  dog.breed = req.body.breed;
  dog.age = req.body.age;

  dog.save(function(err) {
    res.json({
        message: dog.name + ' has been added.'
      });
  });
};

dogController.get = function(req, res) {
  Dog.findById(req.params.id, function(err, dog){
    res.json(dog);
  });
};

dogController.update = function(req, res) {
 var id = new ObjectId(req.params.id);
  Dog.update({_id: id}, {$set: req.body}, function(err) {
    if(err) {
      res.json({message: 'an error occurred'});
    } else {
      res.json(req.body.name + ' updated.');
    }
  });

};

dogController.delete = function(req, res) {
  var id = new ObjectId(req.params.id);
  Dog.remove({_id: id}, function(err) {
    res.json('dog deleted');
  });
};

module.exports = dogController;
