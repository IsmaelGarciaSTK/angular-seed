(function () {
  'use strict';
  angular.module('MyApp')
  .factory('UserService',UserService);

  function UserService() {
    return {
      user:{}
    }
  }

})()
