(function () {
  'use strict';

  angular
      .module('ui')
      .controller('AddDogController', AddDogController);

  /** @ngInject */
  function AddDogController($http, $state) {
    var ctrl = this;

    ctrl.dog = {};

    ctrl.save = function() {
      $http.post('http://localhost:4000/dogs', ctrl.dog).then(function() {
        $state.go('home.dogs');
      });
    };

    ctrl.cancel = function() {
      $state.go('home.dogs');
    };
  }
})();
