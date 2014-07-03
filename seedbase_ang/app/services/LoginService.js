'use strict';
angular.module('LoginService', ['ngCookies']).
    factory('dataService', function($http,$cookieStore) {
        return {
            getData: function(hash) {          
                return $http({
                    method: 'GET', 
                    url: 'app/data/DataDictionaryInput.json',
                    headers:{
                        'Authorization':'Raghu:1234'                       
                    },
                    async : false           
                })
            }
        }
    });
