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
                $window.location.href = '/#/login';
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

        lc.removeLiked = function (id) {

            console.log('removing a liked beer');
            $window.location.href = "/#/liked";
            $List.removeBeer('liked', id);
            lc.liked = $List.getList('liked');
        };
    }
})();