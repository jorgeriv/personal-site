(function(){
  'use strict';
  let myApp = angular.module('personal-site', [
    'ngRoute',
    'ngSanitize',
    'lbServices',
    'blog',
    'resume',
    'home',
    'topBar',
    'progress-bar',
    'quotes'
  ]);
}());
