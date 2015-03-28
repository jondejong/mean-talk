var dogController = {};
var mongoose = require('mongoose');
var Dog = require('../models/dog');


dogController.list = function(req, res) {
  Dog.find(function(err, list){
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
        message: 'success'
      });
  });
};

dogController.get = function(req, res) {
  Dog.findById(req.params.id, function(err, dog){
    res.json(dog);
  });
};

module.exports = dogController;
