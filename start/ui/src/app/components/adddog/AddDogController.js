(function () {
  'use strict';

  angular
      .module('ui')
      .controller('DogAddController', DogAddController);

  /** @ngInject */
  function DogAddController($http, $state) {
    var self = this;

    self.dog = {};

    $http.post('http://localhost:4000/dogs', self.dog).then(function(response) {
        $state.go('home.dogs');
    });

  }
})();
