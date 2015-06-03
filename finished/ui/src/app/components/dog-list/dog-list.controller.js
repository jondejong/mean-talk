'use strict';
angular.module('ui')
    .controller('DogListCtrl', function ($http) {
      var self = this;

      $http.get('http://localhost:4000/dogs').then(function(response) {
        self.dogs = response.data;
      });

    });