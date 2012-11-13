'use strict';
/* App Controllers */

// Discover our contentPath 
var cpath = (function() {
    var scripts = document.getElementsByTagName('script'),
        script = scripts[scripts.length - 1],
 		src;

    if (script.getAttribute.length !== undefined) {
        src = script.src;
    }
	else {
    	src = script.getAttribute('src', -1);
	}
	return "/"+src.split('/').slice(3,-1).join('/');
}());

var memoryGameApp = angular.module('app', []);

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

memoryGameApp.directive('gameCard', function() {
  return {
    restrict: 'A',

    template: '<div class="container">' +
	          '<div class="card" ng-class="{flipped: tile().flipped}">' +
	              '<img class="front" ng-src="'+cpath+'/img/back.png">' +
	              '<img class="back" ng-src="'+cpath+'/img/{{tile().title}}.png">' +
	          '</div>' +
	        '</div>',

    scope: {
      tile: '&'
    }


  };
});

