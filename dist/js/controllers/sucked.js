'use strict';

(function () {

    angular.module('drinkUp').component('sucked', {
        templateUrl: 'partials/sucked.html',
        controller: SuckedController
    });
    SuckedController.$inject = ['$List', '$Auth', '$window'];
    function SuckedController($List, $Auth, $window) {
        var sc = this;
        sc.sucked = [];
        sc.$doCheck = function () {
            var user = $Auth.getUser();
            console.log('entered search page', user);
            if (user.email) {
                return;
            } else {
                console.log($window);
                Materialize.toast('You Must Be Logged In To Enter', 4000);
                $window.location.href = '#/login';
                return;
            }
        };

        //Get Hated Beers On Init
        sc.$onInit = function () {
            debugger;
            $List.getList('hated', $Auth.getUser());
            sc.sucked = $List.listResults;
            console.log(sc.sucked);
            return sc.sucked;
        };

        sc.removeSucked = function (beer) {
            var user = $Auth.getUser();
            $List.deleteBeer(beer, user).then(function () {
                $List.getList('sucked', user);
                $window.location.href = '/#/sucked';
            });
        };
    }
})();