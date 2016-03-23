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
          templateUrl: 'app/components/editdog/editdog.html',
          controller: 'AddDogController',
          controllerAs: 'editDog'
        })
        .state('home.edit', {
          url: '/edit/:id',
          templateUrl: 'app/components/editdog/editdog.html',
          controller: 'EditDogController',
          controllerAs: 'editDog'
        });

    $urlRouterProvider.otherwise('/home/dogs');
  }
})();
