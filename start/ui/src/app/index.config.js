(function() {
  'use strict';

  angular
    .module('ui')
    .config(config);

  /** @ngInject */
  function config($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('deep-orange')
        .accentPalette('orange')
        .backgroundPalette('blue-grey',{
          'default': '50'
        });

  }

})();
