(function () {
  'use strict';

  angular
      .module('ui')
      .controller('EditDogController', EditDogController);

  /** @ngInject */
  function EditDogController($http, $state, $stateParams) {
    var ctrl = this;

    ctrl.dog = {};

    $http.get('http://localhost:4000/dogs/' + $stateParams.id).then(function(response) {
      ctrl.dog = response.data;
    });

    ctrl.save = function() {
      $http.put('http://localhost:4000/dogs/' + $stateParams.id, ctrl.dog).then(function() {
        $state.go('home.dogs');
      });
    };

    ctrl.cancel = function() {
      $state.go('home.dogs');
    };
  }
})();
