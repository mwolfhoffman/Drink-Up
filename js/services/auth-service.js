'use strict';

(function () {
  var app = angular.module('drinkUp');

  app.service('$Auth', function ($http, $location, $window, $state) {
    var as = this;
    as.user = {};

    as.setUser = function (user) {
      as.user = user;
      // $window.ngLocation.href='/Drink-Up/#/search'
      $state.go('search');
    };

    as.getUser = function () {
      return as.user;
    };
    as.deleteUser = function () {
      as.user = {};
      // ...needs to redirect to login
      // $window.ngLocation.href='/Drink-Up/#/login'
      $state.go('login');
    };
  });
})();