var Dog = require('../models/dog');

var dogController = {};

dogController.list = function(req, res) {
  Dog.find({}, function(err, dogs) {
    if(err) {
      console.log('could not find dogs', err);
    }
    res.json(dogs);
  });
};

dogController.save = function(req, res) {
  var dog = new Dog();
  dog.name = req.body.name;
  dog.breed = req.body.breed;
  dog.age = req.body.age;

  dog.save(function(err, savedDog) {
    res.json({message: savedDog.name + ' saved with id ' + savedDog._id})
  });

};

module.exports = dogController;
