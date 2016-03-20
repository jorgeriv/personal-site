(function(){'use strict';
  angular.module('topBar')
    .controller('topBarController', ['$scope', 'RESTuser', topBarController]);

    function topBarController($scope, RESTuser){
      $scope.signedIn = false;
      $scope.showFrm = false;
      $scope.loginFrm = {};
      $scope.doShowFrm = function doShowFrm(){
        $scope.showFrm = true;
      };

      $scope.logIn = function logIn(){
        var login = new RESTuser();
        login.email = $scope.loginFrm.email;
        login.password = $scope.loginFrm.password;
        login.$save()
          .then(function(res){
            $scope.signedIn = true;
            return console.log(res);
          })
          .catch(function(err){
            return console.error(err);
          });
      };
    }
}());
