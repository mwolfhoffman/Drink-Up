(() => {
  let app = angular.module('drinkUp');

  app.service('AuthService', function ($http, $location, $window) {
    var as = this
    as.user = {}

      as.setUser = function (user) {
        debugger
        as.user = user
        console.log('in the auth service ', as.user)
        //needs to redirect to search ... 
        debugger 
        console.log('current path  ', $location.path())
        // $location.path('/search')

      }

    as.getUser = function () {
      return as.user
    }
    as.deleteUser = () => {
      as.user = {}
      // ...needs to redirect to login
      $window.location.href='/Drink-Up/#/login'

    }

  });
})();