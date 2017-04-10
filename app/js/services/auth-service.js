(() => {
  let app = angular.module('drinkUp');

  app.service('$Auth', function ($http, $location, $window) {
    var as = this
    as.user = {}

      as.setUser = function (user) {
        as.user = user
        $window.location.href='/#/search'

      }

    as.getUser = function () {
      return as.user
    }
    as.deleteUser = () => {
      as.user = {}
      // ...needs to redirect to login
      $window.location.href='/#/login'

    }

  });
})();