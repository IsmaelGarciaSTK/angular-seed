(function () {
  'use strict';

  angular.module('MyApp')
  .controller('UserTableController',UserTableController);

  UserTableController.$inject=['$scope','UserService'];

  function UserTableController($scope,UserService){
    $scope.user = UserService.user;
  }

})();
