(function () {
  'use strict';

  angular
      .module('ui')
      .controller('DogListController', DogListController);

  /** @ngInject */
  function DogListController($http) {

    var ctrl = this;

    $http.get('http://localhost:4000/dogs').then(function(response) {
      ctrl.dogs = response.data;
    });
  }
})();
