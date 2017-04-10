'use strict';

(function () {

    angular.module('drinkUp').component('hated', {
        templateUrl: 'partials/hated.html',
        controller: HatedController
    });
    HatedController.$inject = ['$List', '$Auth', '$window'];
    function HatedController($List, $Auth, $window) {
        var hc = this;
        hc.hated = [];
        hc.$doCheck = function () {
            var user = $Auth.getUser();
            console.log('entered search page', user);
            if (user.email) {
                return;
            } else {
                console.log($window);
                Materialize.toast('You Must Be Logged In To Enter', 4000);
                $window.ngLocation.href = '#/login';
                return;
            }
        };

        //Get Hated Beers On Init
        hc.$onInit = function () {
            debugger;
            $List.getList('hated', $Auth.getUser());
            hc.hated = $List.listResults;
            console.log(hc.hated);
            return hc.hated;
        };

        hc.removeHated = function (beer) {
            var user = $Auth.getUser();
            $List.deleteBeer(beer, user).then(function () {
                $List.getList('hated', user);
                $window.ngLocation.href = '/#/hated';
            });
        };
    }
})();