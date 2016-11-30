'use strict';

(function () {

    angular.module('drinkUp').component('queued', {
        templateUrl: 'partials/queued.html',
        controller: QueuedController
    });

    function QueuedController(ListService) {
        var qc = this;

        qc.getQueued = function () {
            return ListService.getQueued();
        };
    }
})();