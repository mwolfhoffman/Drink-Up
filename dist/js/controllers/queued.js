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
            ListService.removeQueued(id);
            qc.queued = ListService.getQueued();
        };
    }
})();