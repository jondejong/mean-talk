'use strict';

/**
 * @ngdoc function
 * @name uiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiApp
 */
angular.module('uiApp')
  .controller('MainCtrl', function ($scope, dogService, $location) {

    //Step 1
    //$scope.dogs = [
    //  {
    //    name: 'Jon', breed: 'lab', age: 9
    //  },
    //  {
    //    name: 'bob', breed: 'collie', age: 3
    //  }
    //];

    // Step 2
    //$scope.dogs = dogService.list();

    // Step 3
    $scope.dogs = [];
    dogService.list().then(function (dogs) {
      $scope.dogs = dogs;
    });


    // Add new
    $scope.addNew = function () {
      $location.url('new');
    };
  });
