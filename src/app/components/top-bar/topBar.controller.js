(function(){'use strict';
  angular.module('topBar')
    .controller('topBarController', [
      '$rootScope',
      '$scope',
      'User',
      topBarController
    ]);

    function topBarController($rootScope, $scope, User){
      $scope.showFrm = false;
      $scope.loginFrm = {};
      $scope.doShowFrm = function doShowFrm(){
        $scope.showFrm = true;
      };

      $scope.logIn = function logIn(){
        $scope.loginResult = User.login($scope.loginFrm,
          function(){
          $rootScope.loggedIn = true;
          $scope.showFrm = false;
        }, function(err){
          console.log(err);
          $scope.showFrm = false;
        });
      };

      $scope.logOut = function logOut(){
        localStorage.clear();
        $rootScope.loggedIn = false;
      }
    }
}());
