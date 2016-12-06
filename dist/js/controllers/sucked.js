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
            debugger;
            for (var i = 0; i < sc.sucked.length; i++) {
                var beer = sc.sucked[i];
                if (id == beer.id) {
                    sc.sucked.splice(i, 1);
                }
            }
            ListService.saveSucked();
            sc.sucked = ListService.JSON.parse('sucked');
        };
    }
})();