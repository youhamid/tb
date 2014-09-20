'use strict';

angular.module('mean.pdv').controller('PdvController', ['$scope', 'Global', 'Pdv',
  function($scope, Global, Pdv) {
    $scope.global = Global;
    $scope.package = {
      name: 'pdv'
    };
  }
]);
