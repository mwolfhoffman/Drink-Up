'use strict';

(function () {

    angular.module('drinkUp').component('sucked', {
        templateUrl: 'partials/sucked.html',
        controller: SuckedController
    });

    SuckedController.$inject = ['ListService'];

    function SuckedController(ListService) {
        var sc = this;

        sc.sucked = [];
        sc.$onInit = function () {
            sc.sucked = ListService.getSucked();
        };

        sc.removeSucked = function (id) {
            ListService.removeSucked(id);
            sc.sucked = ListService.getSucked();
        };
    }
})();