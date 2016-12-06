'use strict';

(function () {

    angular.module('drinkUp').component('queued', {
        templateUrl: 'partials/queued.html',
        controller: QueuedController
    });

    function QueuedController(ListService) {
        var qc = this;

        qc.queued = [];
        qc.$onInit = function () {
            qc.queued = ListService.getQueued();
        };

        qc.removeQueued = function (id) {
            debugger;
            for (var i = 0; i < qc.queued.length; i++) {
                var beer = qc.queued[i];
                if (id == beer.id) {
                    qc.queued.splice(i, 1);
                }
            }
            ListService.saveQueued();
            qc.queued = ListService.JSON.parse('queued');
        };
    }
})();