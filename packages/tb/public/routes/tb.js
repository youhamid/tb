'use strict';

angular.module('mean.tb').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('tb example page', {
      url: '/tb/example',
      templateUrl: 'tb/views/index.html'
    });
  }
]);
