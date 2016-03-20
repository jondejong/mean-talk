var async = require('async');
var _ = require('lodash');
var fs = require('fs-extra');

fs.readJson('./data.json', function(err, things) {
  var funcs = _.map(things, function(thing) {
    return function(cb) {
      thing.value = thing.value * 2;
      cb();
    }
  });
  async.parallel(funcs, function(err) {
    var total = _.reduce(things, function(sum, thing) {
      return sum + thing.value;
    }, 0);

    _.each(things, function(thing) {
      console.log(thing.name + ': ' + thing.value);
    });
    console.log('Total: ' + total);

  });
});

