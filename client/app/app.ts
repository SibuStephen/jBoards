'use strict';

angular.module('jBoardsApp', [
  'jBoardsApp.auth',
  'jBoardsApp.admin',
  'jBoardsApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
