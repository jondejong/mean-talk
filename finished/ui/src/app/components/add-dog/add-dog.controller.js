'use strict';

angular.module('ui')
    .controller('AddDogCtrl', function ($http, $state) {
      var self = this;

      self.dog = {};

      self.save = function() {
        $http.post('http://localhost:4000/dogs', self.dog).then(function() {
          $state.go('home.dogs');
        });
      }
    });
