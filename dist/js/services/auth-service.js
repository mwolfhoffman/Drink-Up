'use strict';

(function () {
  var app = angular.module('drinkUp');

  app.service('AuthService', function ($http) {
    var as = this;
    as.user = {};

    as.setUser = function (user) {
      debugger;
      console.log('in the auth service ', user);
      as.user = user;
      //needs to redirect to search ... 
    };

    as.deleteUser = function () {
      as.user = null;
      // ...needs to redirect to login
    };
  });
})();