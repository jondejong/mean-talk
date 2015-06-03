'use strict';

angular.module('ui', ['ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('deep-orange')
        .accentPalette('orange')
        .backgroundPalette('blue-grey',{
          'default': '50'
        });

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      }).state('home.dogs', {
          url: '/dogs',
          templateUrl: 'app/components/dog-list/dog-list.html',
          controller: 'DogListCtrl',
          controllerAs: 'dogListCtrl'
        }).state('home.new', {
          url: '/new',
          templateUrl: 'app/components/add-dog/add-dog.html',
          controller: 'AddDogCtrl',
          controllerAs: 'addDogCtrl'
        });

    $urlRouterProvider.otherwise('/home/dogs');
  })
;
