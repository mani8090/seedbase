'use strict';
angular.module('HomeService', ['ngCookies']).
    factory('homeService', function($http,$cookieStore) {
        return {
            getUsers: function(hash) {          
                return $http({
                    method: 'GET', 
                    url: 'http://localhost/seedbase_git/seedbase/seedbase_ws?action=getUsers',
                    headers:{
                        'Authorization':hash                       
                    },
                    async : false           
                })
            },
            deleteUser:function(id,hash){
                return $http({
                    method: 'DELETE', 
                    url: 'http://localhost/seedbase_git/seedbase/seedbase_ws?action=deleteUser&id='+id,
                    headers:{
                        'Authorization':hash                       
                    },
                    async : false           
                })
            },
            getUserData:function(id,hash){
                return $http({
                    method: 'GET', 
                    url: 'http://localhost/seedbase_git/seedbase/seedbase_ws?action=getUserData&id='+id,
                    headers:{
                        'Authorization':hash                       
                    },
                    async : false
                })
            },
            addUser: function(hash){
                //console.log($('#userForm').serialize());
                var username = "mani";
                return $http({
                    method:'POST',
                    url:'http://localhost/seedbase_git/seedbase/seedbase_ws',
                    data: "Username="+username,                    
                    headers:{
                        'Authorization':hash,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    async : false
                })
            },
            terminateUser: function(id){
                 return $http({
                    method: 'GET', 
                    url: 'http://localhost/seedbase_git/seedbase/seedbase_ws?action=terminateUser&id='+id,
                    headers:{
                        //'Authorization':hash                       
                    },
                    async : false
                })
            }
        }
    });
