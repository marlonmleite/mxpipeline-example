'use strict';

/**
 * @ngdoc function
 * @name mxPipelineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mxPipelineApp
 */
angular.module('mxPipelineApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.itemsList = [
      {id: 'column1', name: 'Coluna 1', children:[{id:'1', name:'Task 1', partnerName:'Nome da organização', value: 1000.00, state: 0}]},
      {id: 'column2', name: 'Coluna 2', children:[{id:'2', name:'Task 2', partnerName:'Nome da organização', value: 3000.50, state: 3}]},
      {id: 'column3', name: 'Coluna 3', children:[]},
      {id: 'column4', name: 'Coluna 4', children:[]},
      {id: 'column5', name: 'Coluna 5'}
    ];

    $scope.onDropHandler = function(id) {
      alert("Drop " + id); 
    };

    $scope.itemClickHandler = function(id) {
      alert("Item click " + id);
    };

    $scope.itemStateClickHandler = function(id) {
      alert("Item activity click " + id);
    };

    $scope.addItem = function addItem() {
      $scope.itemsList.forEach(function(item, index){
        if (item.id === 'column2') {
          item.children.push({id:'3', activitys: 0}, {id:'4', activitys: 1});
        }
      });
    };
  });
