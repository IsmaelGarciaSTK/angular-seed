(function () {
  'use strict';
  angular.module('MyApp')
  .directive('formulario',DirectiveFunction);

  function DirectiveFunction(){
    return {
      restrict:'AE',
      templateUrl:'./components/form/form.template.html',
      controller:'FormController'
    }
  }

})();
