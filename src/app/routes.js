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
            controller: 'homeController'
          })
          .when('/blog', {
            templateUrl: 'app/components/blog/blog.template.html',
            controller: 'blogController'
          })
          .when('/resume', {
            templateUrl: 'app/components/resume/resume.template.html',
            controller: 'resumeController'
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
