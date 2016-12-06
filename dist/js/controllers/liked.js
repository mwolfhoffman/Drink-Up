'use strict';

(function () {

    angular.module('drinkUp').component('liked', {
        templateUrl: 'partials/liked.html',
        controller: LikedController
    });

    LikedController.$inject = ['ListService'];

    function LikedController(ListService) {
        var lc = this;

        lc.liked = [];
        lc.$onInit = function () {
            lc.liked = ListService.getLiked();
        };

        lc.removeLiked = function (id) {
            // debugger 
            ListService.removeLiked(id);
            //   return ListService.getLiked(); 
        };
    }
})();