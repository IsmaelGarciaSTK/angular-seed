(function () {
  'use strict';

  angular.module('MyApp')
  .controller('FormController',FormController);

  FormController.$inject=['$scope','UserService'];

  function FormController($scope,UserService){
    $scope.user = UserService.user;
  }

})();
