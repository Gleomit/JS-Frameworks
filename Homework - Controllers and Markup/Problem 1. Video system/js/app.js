var videoSystemApp = angular.module('videoSystem', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when("/", {
			templateUrl: "partials/listAll.html",
			controller: "VideoController"
		}).when('/addVideo', {
			templateUrl: "partials/addVideo.html",
			controller: "VideoController"
		}).when('/video', {
			templateUrl: "partials/addVideo.html",
			controller: "VideoController"
		}).otherwise({
			redirectTo: "/"
		});
	}]);

	