(function () {
  'use strict';

  angular
      .module('ui')
      .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        })
        .state('home.dogs', {
          url: '/dogs',
          templateUrl: 'app/components/doglist/doglist.html',
          controller: 'DogListController',
          controllerAs: 'dogList'
        })
        .state('home.new', {
          url: '/new',
          templateUrl: 'app/components/adddog/adddog.html',
          controller: 'AddDogController',
          controllerAs: 'addDog'
        });

    $urlRouterProvider.otherwise('/home/dogs');
  }
})();
