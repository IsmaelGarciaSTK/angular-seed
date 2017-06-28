(function () {
  'use strict';

  angular.module('MyApp')
  .controller('MyController',MyController);

  MyController.$inject=['$scope'];

  function MyController($scope){
    $scope.name='';
    $scope.numbers=[1,2,3];
    $scope.showMessage=false;
    $scope.age;
    $scope.names = [{name:'Luis',edad:20},{name:'Pedro',edad:21}];
    $scope.contador=0;
    $scope.add=function () {
      if($scope.name){
        $scope.names.push({name:$scope.name,edad:$scope.age});
      }
      else {
        $scope.showMessage=true;
      }

    }
    $scope.addNumber=function () {
      $scope.numbers.push($scope.number)
    }
  }

})();
