var Seedbase = angular.module("Seedbase", ['UsersService','ngCookies']);
Seedbase.controller('UsersController', function ($scope,usersService,$cookieStore) {
    $scope.userDetails = false;
    $scope.userAddSection = false;
    $scope.usersList = true;
    if($cookieStore.get('userId') !== '' && typeof($cookieStore.get('userId')) !== 'undefined' ){
        $scope.username = decodeURIComponent(escape(window.atob( $cookieStore.get('userName') )));
        usersService.getUsers('123312').
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
        usersService.logout('').
                success(function(data, status, headers, config){
                
                }).
                error(function(xhr,textStatus,errorThrown){
                });
        location.href = 'index.html';
    }
    
    $scope.deleteUser = function(id){
        if(!confirm("Are you sure want to delete this user?"))
            return false;
        usersService.deleteUser(id,$cookieStore.get('userId')).
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
        usersService.getUserData(id,$cookieStore.get('userId')).
                success(function(data,status,headers,config){
                   // location.reload();
                }).error(function(xhr,textStatus,errorThrown){
                    
                });   
        return false;
    }
    $scope.userAdd = function(){
        $scope.userAddSection = true;
        $scope.usersList = false;
    }
    $scope.submitUser = function(){
        console.log("Added");
        //console.log($('#userForm').serialize());
        //console.log($("form").serialize());
        usersService.addUser($cookieStore.get('userId')).
                success(function(data,status,headers,config){
                   // location.reload();
                }).error(function(xhr,textStatus,errorThrown){
                    
                });
        return false;
    }
    
});

$(document).ready(function(){
   
});

Seedbase.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/usersList.html',
        controller: 'UsersController',
        service:'UsersService'
    });
});

