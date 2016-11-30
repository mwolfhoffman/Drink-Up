'use strict';

(function () {

    angular.module('drinkUp').component('list', {
        templateUrl: 'partials/lists.html',
        controller: ListController
    });

    function ListController(ListService) {
        var lc = this;

        lc.getLiked = function () {
            return ListService.getLiked();
        };

        lc.getSucked = function () {
            return ListService.getSucked();
        };

        lc.getQueued = function () {
            return ListService.getQueued();
        };
    }
})();