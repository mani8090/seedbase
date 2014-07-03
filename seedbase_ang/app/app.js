var Seedbase = angular.module("Seedbase", []);

Seedbase.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/views/login.html',
		controller: 'LoginController'
	});
});
	
	
