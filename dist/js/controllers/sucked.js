'use strict';

(function () {

    angular.module('drinkUp').component('sucked', {
        templateUrl: 'partials/sucked.html',
        controller: SuckedController
    });

    function SuckedController(ListService) {
        var lc = this;

        lc.getSucked = function () {
            return ListService.getSucked();
        };
    }
})();