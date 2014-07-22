Seedbase.controller('HeaderController', function ($scope,usersService,$cookieStore) {
    if($cookieStore.get('userId') !== '' && typeof($cookieStore.get('userId')) !== 'undefined' ){
        $scope.username = decodeURIComponent(escape(window.atob( $cookieStore.get('userName') )));        
    }
    else{
        location.href='index.html';
    }
    
    $scope.logout = function(){
        $cookieStore.put('userId','');
        $cookieStore.put('userHash','');
        $cookieStore.put('userName','');
        /*usersService.logout('').
                success(function(data, status, headers, config){
                
                }).
                error(function(xhr,textStatus,errorThrown){
                });*/
        console.log("redirecting...")
        location.href = 'index.html#/';
    }
});