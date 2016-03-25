(function(){ 'use strict';
  angular.module('blog')
    .controller('blogController', ['$scope', 'Post', blogController]);

    function blogController($scope, Post){
      $scope.posts = Post.find({filter:{order: '_id DESC', limit: 10}});
    }
}());
