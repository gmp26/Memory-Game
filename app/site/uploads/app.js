'use strict';
/* App Controllers */
var memoryGameApp = angular.module('app', ['getpath']);

memoryGameApp.factory('game', function() {
  var tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
    'that-guy', 'zeppelin'];


  return new Game(tileNames);
});

memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
  $scope.game = game;
});

//usages:
//- in the repeater as: <mg-card tile="tile"></mg-card>
//- card currently being matched as: <mg-card tile="game.firstPick"></mg-card>

memoryGameApp.directive('gameCard', function(contentPath) {
  return {
    restrict: 'A',

    template: '<div class="container">' +
	          '<div class="card" ng-class="{flipped: tile().flipped}">' +
	              '<img class="front" ng-src="'+contentPath+'/img/back.png">' +
	              '<img class="back" ng-src="'+contentPath+'/img/{{tile().title}}.png">' +
	          '</div>' +
	        '</div>',
	
	
    scope: {
      tile: '&'
    }


  };
});

