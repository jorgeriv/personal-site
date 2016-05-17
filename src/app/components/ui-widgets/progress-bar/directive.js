angular.module('progress-bar')
  .directive('progressBar', function(){'use strict';
    return{
      restrict: 'E',
      templateUrl: 'app/components/ui-widgets/progress-bar/template.html',
      scope: {
        progress: '=',
        label: '=',
        description: '='
      }
    };
  });
