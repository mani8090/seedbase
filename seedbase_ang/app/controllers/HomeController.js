var Seedbase = angular.module("Seedbase", ['HomeService','ngCookies']);
Seedbase.controller('HomeController', function ($scope,homeService) {
    homeService.getUsers(crypted).
        success(function(data, status, headers, config) {                    
            $scope.loginErrorMessage ='';
            var response = JSON.stringify(data);
            if(data.status == 'error'){
                $scope.loginErrorMessage = data.reason;
                return false;
            }
            else if(data.status == 'success'){
                location.href = 'home.html';
            }
            return false;
        }).
        error(function(xhr, textStatus, errorThrown) {

        });

});


Seedbase.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/users.html',
        controller: 'HomeController',
        service:'HomeService'
    });
});

