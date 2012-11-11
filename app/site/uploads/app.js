'use strict';
/* App Controllers */


var memoryGameApp = angular.module('app', []);

memoryGameApp.factory('game', function() {
  var tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
    'that-guy', 'zeppelin'];

  return new Game(tileNames);
});


memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
  $scope.game = game;

  // we assume that all angular resources have new-style content/id paths
  var url = window.location.toString();
  // use /app/uploads as path in local tests
  $scope.cpath = "/app/site/uploads";
  if(url.indexOf("nrich") >= 0) {
	// we are installed in a resource - get the resource id:
	var lastSlash = url.lastIndexOf('/');
	var params = url.indexOf('?');
	if(params < 0)
		$scope.cpath = '/content/id' + url.substr(lastSlash);
	else 
		$scope.cpath = '/content/id' + url.substring(lastSlash, params);
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
/*    template: '<div class="container">' +
               '<div class="card" ng-class="{flipped: tile().flipped}">' +
                 '<img class="front" ng-src="uploads/img/back.png">' +
                 '<img class="back" ng-src="uploads/img/{{tile().title}}.png">' +
               '</div>' +
             '</div>',
*/

    template: '<div class="container">' +
	          '<div class="card" ng-class="{flipped: tile().flipped}">' +
	              '<img class="front" ng-src="{{cpath}}/img/back.png">' +
	              '<img class="back" ng-src="{{cpath}}/img/{{tile().title}}.png">' +
	          '</div>' +
	        '</div>',

    
    scope: {
      tile: '&',
      cpath: '@'
    }


  };
});

