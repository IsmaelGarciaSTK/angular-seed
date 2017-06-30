(function () {
  'use strict';
  angular.module('MyApp')
  .directive('userTable',DirectiveFunction);

  function DirectiveFunction(){
    return {
      restrict:'AE',
      templateUrl:'./components/usertable/usertable.template.html',
      controller:'UserTableController'
    }
  }

})();
