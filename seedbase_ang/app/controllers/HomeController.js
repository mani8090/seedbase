var Seedbase = angular.module("Seedbase", ['HomeService','ngCookies']);
Seedbase.controller('HomeController', function ($scope,homeService,$cookieStore) {
    if($cookieStore.get('userId') != ''){
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
        location.href = 'index.html';
    }
    
    $scope.deleteUser = function(id){
        if(!confirm("Are you sure want to delete this user?"))
            return false;
        return false;
    }
    
    $scope.lock = function(id){
        
    }
    
    $scope.info = function(id){
        
    }
    
});

$(document).ready(function(){
   $(document).on('click','.btn-danger',function(){
     if(!confirm("Are you sure want to delete this user?"))
            return false;
      $.ajax({
          url:'http://localhost/seedbase_git/seedbase/seedbase_ws?action=deleteUser&id='+$(this).attr('data-user-id'),
          success:function(response){
              location.reload();
          }
          
      })
      return false;
   }); 
});

Seedbase.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/users.html',
        controller: 'HomeController',
        service:'HomeService'
    });
});

