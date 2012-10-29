'use strict';
/* App Controllers */


var memoryGameApp = angular.module('app', ['services']);

angular.module('services', []).
  value('foo', 'grubble');

memoryGameApp.factory('game', function() {
  var tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
    'that-guy', 'zeppelin'];

  return new Game(tileNames);
});


memoryGameApp.controller('GameCtrl', function GameCtrl($scope, $location, game) {
  $scope.game = game;

  // we assume that all angular resources have new-style content/id paths
  var url = $location.absUrl();

  // use /app/uploads as path in local tests
  $scope.path = "/app/uploads";
  if(url.indexOf("nrich") >= 0) {
	// we are installed in a resource - get the resource id:
	var lastSlash = url.lastIndexOf('/');
	var params = url.indexOf('?');
	if(params < 0)
		$scope.path = '/content/id' + url.substr(lastSlash);
	else 
		$scope.path = '/content/id' + url.substring(lastSlash, params);
  }
});


//usages:
//- in the repeater as: <mg-card tile="tile"></mg-card>
//- card currently being matched as: <mg-card tile="game.firstPick"></mg-card>

memoryGameApp.directive('mgCard', function() {
  return {
    restrict: 'E',


	// instead of inlining the template string here, one could use templateUrl: 'mg-card.html'
	// and then either create a mg-card.html file with the content or add
	// &lt;script type="text/ng-template" id="mg-card.html"&gt; template here </script> element to
	// index.html
    template: '<div class="container">' +
               '<div class="card" ng-class="{flipped: tile().flipped}">' +
                 '<img class="front" ng-src="/back.png">' +
                 '<img class="back" ng-src="uploads/img/{{tile().title}}.png">' +
               '</div>' +
             '</div>',
/*
    template: '<div class="container">' +
	          '<div class="card" ng-class="{flipped: tile.flipped}">' +
	              '<img class="front" ng-src="{{path}}/img/back.png">' +
	              '<img class="back" ng-src="{{path}}/img/{{tile.title}}.png">' +
	          '</div>' +
	        '</div>',
*/

    scope: {
      tile: 'accessor'
    }

  };
});

