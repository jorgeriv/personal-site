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

      $scope.programmingLanguages = [
        {name: 'JavaScript', proficency:95, level:'Expert'},
        {name: 'HTML5', proficency:90, level:'Advanced'},
        {name: 'CSS3', proficency:88, level:'Advanced'},
        {name: 'Python', proficency:25, level:'Beginner'},
        {name: 'SQL', proficency:18, level:'Beginner'},
      ];
    }
}());
