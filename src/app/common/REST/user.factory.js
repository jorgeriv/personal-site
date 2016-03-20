(function(){ 'use strict';
angular.module('REST')
.factory('RESTuser', ['$resource', userFactory]);

function userFactory($resource){
  return $resource('/api/Users/login', null, {
    'login': { method: 'POST' }
  });
}
}());
