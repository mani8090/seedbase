var Seedbase = angular.module("Seedbase", ['LoginService','ngCookies']);
Seedbase.controller('LoginController', function ($scope,loginService) {
    
    $("#user_email").focus();
    $scope.loginSubmit = function(){
        console.log("login function");
        var username = $scope.username;
        var password = $scope.password;
        var crypted = $scope.crypt(username,password);
        if($.trim(username) == '' || $.trim(password) == ''){
            $scope.loginErrorMessage = 'Please enter credentials';
            return false; 
        }
        else{
            console.log("asdd");
            $scope.loginErrorMessage = '';
            loginService.login(crypted).
                success(function(data, status, headers, config) {
                    //$('#lightbox').hide();
                    $scope.loginErrorMessage ='';
                    console.log(JSON.stringify(data));
                }).
                error(function(xhr, textStatus, errorThrown) {
                
                });
        }
    }
    $scope.crypt = function(){
        return "Basic " + window.btoa($scope.username + ':' + $scope.password);
    }
	
});


Seedbase.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/login.html',
        controller: 'LoginController',
        service:'LoginService'
    });
});

