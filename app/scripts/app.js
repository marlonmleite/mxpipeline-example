'use strict';

/**
 * @ngdoc overview
 * @name mxPipelineApp
 * @description
 * # mxPipelineApp
 *
 * Main module of the application.
 */
angular
  .module('mxPipelineApp', ['mxPipeline'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
