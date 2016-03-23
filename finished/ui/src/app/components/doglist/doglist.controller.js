(function () {
  'use strict';

  angular
      .module('ui')
      .controller('DogListController', DogListController);

  /** @ngInject */
  function DogListController($http, $state) {

    var ctrl = this;

    var loadDogs = function() {
      $http.get('http://localhost:4000/dogs').then(function(response) {
        ctrl.dogs = response.data;
      });
    };

    ctrl.edit = function(dog) {
      $state.go('home.edit', {id: dog._id});
    };

    ctrl.delete = function(dog) {
      $http.delete('http://localhost:4000/dogs/' + dog._id).then(function() {
        loadDogs();
      });
    };

    loadDogs();
  }
})();
