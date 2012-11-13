'use strict';

angular.module('getpath', [], function($provide) {
  $provide.factory('contentPath', function() {
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
  });
});