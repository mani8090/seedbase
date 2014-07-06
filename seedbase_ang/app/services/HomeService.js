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
            }
        }
    });
