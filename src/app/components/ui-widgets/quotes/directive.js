function quotes($http){'use strict';
return {
  restrict: 'E',
  templateUrl: 'app/components/ui-widgets/quotes/template.html',
  scope: {},
  link: function(scope){
    $http.get('app/assets/quotes.json')
      .success(function(quotes){
        let quotesSize = quotes.length;
        let index = Math.round(Math.random() * (quotesSize - 1));
        scope.quote = quotes[index];
      });
  }
};
}
angular.module('quotes')
.directive('quoteBlock', ['$http', quotes]);
