'use strict';

(function () {

    angular.module('drinkUp').component('liked', {
        templateUrl: 'partials/liked.html',
        controller: LikedController
    });

    LikedController.$inject = ['$List', '$Auth', '$window'];

    function LikedController($List, $Auth, $window) {
        var lc = this;
        lc.liked = [];

        //Check if Authorize 
        lc.$doCheck = function () {
            var user = $Auth.getUser();
            if (user.email) {
                return;
            } else {
                Materialize.toast('You Must Be Logged In To Enter', 4000);
                $window.ngLocation.href = '/Drink-Up/#/login';
                return;
            }
        };

        //Get Liked Beers On Init
        lc.$onInit = function () {
            debugger;
            $List.getList('liked', $Auth.getUser());
            lc.liked = $List.listResults;
            return lc.liked;
        };

        lc.removeLiked = function (beer) {
            var user = $Auth.getUser();
            $List.deleteBeer(beer, user).then(function () {
                $List.getList('liked', user);
                $window.ngLocation.href = '/Drink-Up/#/liked';
            });
        };
    }
})();