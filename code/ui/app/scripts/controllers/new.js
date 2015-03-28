'use strict';

angular.module('uiApp').controller("NewDogCtrl", function ($scope, dogService, $location) {

  $scope.dog = {};

  $scope.save = function() {
    console.log('saving dog:', $scope.dog);
    dogService.save($scope.dog).then(function() {
      $location.url('/');
    });
  };

});
