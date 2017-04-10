'use strict';

(function () {
  var app = angular.module('drinkUp');

  app.service('$Auth', function ($http, $location, $window, $state) {
    var as = this;
    as.user = {};

    $window.ngLocation = new Proxy($window.location, {
        get(target, prop){
            return target[prop]
        },
        set(target, prop, value){
          if(prop == "href"){
            if(value.includes('#')){
              let url = value.replace('/Drink-Up/#', '')
              let route = $window.NG_STATE_ROUTES.find(route=>route.url == url)
              if(route){
                $state.go(route)
                return true;
              }
            }
          }
          target[prop] = value;
          return true;
        }
    });

    as.setUser = function (user) {
      as.user = user;
      $window.ngLocation.href = '/Drink-Up/#/search';
    };

    as.getUser = function () {
      return as.user;
    };
    as.deleteUser = function () {
      as.user = {};
      // ...needs to redirect to login
      $window.ngLocation.href = '/Drink-Up/#/login';
    };
  });
})();