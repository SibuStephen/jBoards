'use strict';

angular.module('jBoardsApp.auth', [
  'jBoardsApp.constants',
  'jBoardsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
