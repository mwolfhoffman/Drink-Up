'use strict';

(function () {

    angular.module('drinkUp').component('liked', {
        templateUrl: 'partials/liked.html',
        controller: LikedController
    });

    LikedController.$inject = ['ListService'];

    function LikedController(ListService) {
        var lc = this;

        //Lifecycle Gets List of Liked Beers 
        lc.liked = [];
        lc.$onInit = function () {
            lc.liked = ListService.getList('liked');
        };

        lc.removeLiked = function (id) {
            ListService.removeBeer('liked', id);
            lc.liked = ListService.getList('liked');
        };
    }
})();