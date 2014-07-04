'use strict';
angular.module('LoginService', ['ngCookies']).
    factory('loginService', function($http,$cookieStore) {
        return {
            login: function(hash) {          
                return $http({
                    method: 'GET', 
                    url: 'http://localhost/seedbase_git/seedbase/seedbase_ws?action=login',
                    headers:{
                        'Authorization':hash                       
                    },
                    async : false           
                })
            }
        }
    });
