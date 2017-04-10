'use strict';

(function () {
  var app = angular.module('drinkUp');

  app.service('$Auth', function ($http, $location, $window) {
    var as = this;
    as.user = {};

    as.setUser = function (user) {
      as.user = user;
      $window.location.href = '/Drink-Up/#/search';
    };

    as.getUser = function () {
      return as.user;
    };
    as.deleteUser = function () {
      as.user = {};
      // ...needs to redirect to login
      $window.location.href = '/Drink-Up/#/login';
    };
  });
})();