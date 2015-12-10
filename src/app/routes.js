(function(){
  'use strict';

  angular.module('personal-site')
    .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/home', {
          templateUrl: 'app/components/home/home.template.html',
          controller: 'homeCtrlr'
        })
        .when('/blog', {
          templateUrl: 'app/components/blog/blog.template.html',
          controller: 'blogCtrlr'
        })
        .otherwise({
          redirectTo: '/home'
        });
    }]);
}());
