var Seedbase = angular.module("Seedbase", ['LoginService','ngCookies']);
Seedbase.controller('LoginController', function ($scope,loginService,$cookieStore) {
    
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
            $scope.loginErrorMessage = '';
            loginService.login(crypted).
                success(function(data, status, headers, config) {                    
                    $scope.loginErrorMessage ='';
                    var response = JSON.stringify(data);
                    if(data.status == 'error'){
                        $scope.loginErrorMessage = data.reason;
                        return false;
                    }
                    else if(data.status == 'success'){
                        
                        $cookieStore.put('userHash', crypted);
                        $cookieStore.put('userId', window.btoa(unescape(encodeURIComponent( data.userId ))));
                        $cookieStore.put('userName',window.btoa(unescape(encodeURIComponent( data.userName ))));
                        location.href = 'users.html';
                    }
                    return false;
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

