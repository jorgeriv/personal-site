(function(){ 'use strict';
angular.module('REST')
.factory('RESTuser', ['$resource', userFactory]);

function userFactory($resource){
  return $resource('/api/Users/:id', null, {
    'login': {
      method: 'POST',
      params: {
        email: '@email',
        password: '@password'
      }
    }
  });
}
}());
