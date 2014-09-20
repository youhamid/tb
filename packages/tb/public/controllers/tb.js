'use strict';

angular.module('mean.tb').controller('TbController', ['$scope', '$http' , 'Global', 'Tb',
  function($scope, $http, Global, Tb) {
    $scope.global = Global;
    $scope.package = {
      name: 'tb'
    };
    $http.get('tb/assets/bd.json').success(function(data) {
      $scope.bd = data;
    });
  }
]);
