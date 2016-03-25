(function(){'use strict';
angular.module('postEditor')
.directive('postEditor', ['Post', postEditor]);

function postEditor(Post){
  return {
    templateUrl:'app/components/blog/post-editor/post-editor.template.html',
    restrict: 'E',
    scope: {},
    controller: ['$scope', function($scope){
      var tinymceConfig = {
        selector: '#wysiwyg-editor',
        menubar: false,
        toolbar: 'undo redo | styleselect | bold italic | link image'
      };

      function savePost(){
        $scope.post.content = tinymce.get('wysiwyg-editor').getContent();
        $scope.post.date = new Date();
        $scope.post.$save()
        .then(function(result){
          $scope.$parent.posts.unshift(result);
          $scope.discard();
        })
        .catch(function(err){
          console.error(err);
        });
      }

      $scope.active = false;
      $scope.toggleState = function toggleState(){
        $scope.active = !$scope.active;
      };

      tinymce.init(tinymceConfig);
      $scope.post = new Post();

      $scope.discard = function discard(){
        tinymce.get('wysiwyg-editor').setContent('');
        $scope.post = new Post();
        $scope.toggleState();
      };

      $scope.saveDraft = function saveDraft(){
        $scope.post.status = 'draft';
        savePost();
      };

      $scope.publish = function publish(){
        $scope.post.status = 'published';
        savePost();
      };

    }],
    link: function(scope, element, attr){

    }
  };
}
}());
