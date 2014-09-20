'use strict';

angular.module('mean.pdv').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('pdv example page', {
      url: '/pdv/example',
      templateUrl: 'pdv/views/index.html'
    });
  }
]);
