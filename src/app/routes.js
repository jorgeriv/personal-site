(function(){
  'use strict';

  angular.module('personal-site')
    .config([
      '$routeProvider',
      '$locationProvider',
      function($routeProvider, $locationProvider){
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
          /*
        $locationProvider
          .html5Mode(true);
          */
    }]);
}());
