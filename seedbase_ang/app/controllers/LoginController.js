var Seedbase = angular.module("Seedbase", ['LoginService','ngCookies']);
Seedbase.controller('LoginController', function ($scope) {
    
    $("#user_email").focus();
	
});


Seedbase.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/login.html',
        controller: 'LoginController',
        service:'LoginService'
    });
});

