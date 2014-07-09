var Seedbase = angular.module("Seedbase", ['HomeService','ngCookies']);
Seedbase.controller('HomeController', function ($scope,homeService,$cookieStore) {
    $scope.userDetails = false;
    if($cookieStore.get('userId') !== '' && typeof($cookieStore.get('userId')) !== 'undefined' ){
        $scope.username = decodeURIComponent(escape(window.atob( $cookieStore.get('userName') )));
        homeService.getUsers('123312').
            success(function(data, status, headers, config) {                    
                $scope.loginErrorMessage ='';
                $scope.data = data;
                return false;
            }).
            error(function(xhr, textStatus, errorThrown) {

        });
    }
    else{
        location.href='index.html';
    }
    
    $scope.logout = function(){
        $cookieStore.put('userId','');
        $cookieStore.put('userHash','');
        $cookieStore.put('userName','');
        homeService.logout('').
                success(function(data, status, headers, config){
                
                }).
                error(function(xhr,textStatus,errorThrown){
                });
        location.href = 'index.html';
    }
    
    $scope.deleteUser = function(id){
        if(!confirm("Are you sure want to delete this user?"))
            return false;
        homeService.deleteUser(id,$cookieStore.get('userId')).
                success(function(data,status,headers,config){
                    location.reload();
                }).error(function(xhr,textStatus,errorThrown){
                    
                });
        return false;
    }
    
    $scope.lock = function(id){
        alert(id);
    }
    
    $scope.info = function(id){
        
    }
    $scope.details = function(id){
        $scope.userDetails = true;
        alert("fgh");
        return false;
    }
    
});

$(document).ready(function(){
   
});

Seedbase.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/users.html',
        controller: 'HomeController',
        service:'HomeService'
    });
});

