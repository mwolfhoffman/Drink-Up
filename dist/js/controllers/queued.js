'use strict';

(function () {

    angular.module('drinkUp').component('queued', {
        templateUrl: 'partials/queued.html',
        controller: QueuedController
    });

    QueuedController.$inject = ['ListService', 'AuthService', '$window'];

    function QueuedController(ListService, AuthService, $window) {
        var qc = this;
        qc.queued = [];
        qc.$doCheck = function () {
            var user = AuthService.getUser();
            console.log('entered search page', user);
            debugger;
            if (user.email) {
                qc.queued = ListService.getList('queued');
                return;
            } else {
                console.log($window);
                $window.location.href = '/#/login';
                return;
            }
        };

        qc.removeQueued = function (id) {
            ListService.removeBeer('queued', id);
            qc.queued = ListService.getList('queued');
        };
    }
})();