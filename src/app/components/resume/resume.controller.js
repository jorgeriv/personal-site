(function(){ 'use strict';
  angular.module('resume')
    .controller('resumeController',['$scope', resumeController]);
    function resumeController($scope){
      $scope.librariesAndFrameworks = [
        {name: 'jQuery'},
        {name: 'Express.js'},
        {name: 'Angular.js'},
        {name: 'Backbone.js'},
        {name: 'Bootstrap'},
        {name: 'Purecss'},
        {name: 'Sass'},
        {name: 'Require.js'}
      ];

      $scope.tools = [
        {name: 'GIT'},
        {name: 'SVN'},
        {name: 'REST'},
        {name: 'Gulp'}
      ];
    }
}());
