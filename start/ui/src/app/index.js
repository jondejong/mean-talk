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
      });

    $urlRouterProvider.otherwise('/home');
  })
;
