(function(){'use strict';
angular.module('postEditor')
.directive('postEditor', [postEditor]);

function postEditor(){
  return {
    templateUrl:'app/components/blog/post-editor/post-editor.template.html',
    restrict: 'E',
    scope: {},
    controller: ['$scope', function($scope){
      $scope.tags = [
        { text: 'just' },
        { text: 'some' },
        { text: 'cool' },
        { text: 'tags' }
      ];
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
