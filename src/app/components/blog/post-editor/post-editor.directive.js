(function(){'use strict';
angular.module('postEditor')
.directive('postEditor', ['Post', postEditor]);

function postEditor(Post){
  return {
    templateUrl:'app/components/blog/post-editor/post-editor.template.html',
    restrict: 'E',
    scope: {},
    controller: ['$scope', function($scope){
      $scope.post = Post.create({});

      $scope.discard = function discard(){
          $scope.post = Post.create({});
      };

      $scope.saveDraft = function saveDraft(){
        $scope.post.content = tinymce.get('wysiwyg-editor').getContent();
        $scope.post.status = 'draft';
        $scope.post.date = new Date();
        $scope.post.$save()
          .then(function(result){
            $scope.$parent.posts.unshift(result);
          })
          .catch(function(err){
            console.error(err);
          });
      };

      $scope.publish = function publish(){
        $scope.post.content = tinymce.get('wysiwyg-editor').getContent();
        $scope.post.status = 'published';
        $scope.post.date = new Date();
        $scope.post.$save();
      };

    }],
    link: function(scope, element, attr){
      tinymce.init({
        selector: '#wysiwyg-editor',
        menubar: false,
        toolbar: 'undo redo | styleselect | bold italic | link image'
      })
    }
  };
}
}());
