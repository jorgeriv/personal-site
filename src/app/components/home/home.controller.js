(function(){
  'use strict';

  angular.module('personal-site')
    .controller('homeController', ['$scope', homeController]);

    function homeController($scope){
      $scope.pagina = 'home';
    }

}());
