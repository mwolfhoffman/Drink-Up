'use strict';

(function () {
    angular.module('drinkUp').component('queued', {
        templateUrl: 'partials/queued.html',
        controller: QueuedController
    });

    QueuedController.$inject = ['$List', '$Auth', '$window'];
    function QueuedController($List, $Auth, $window) {
        var qc = this;
        qc.queued;

        qc.$doCheck = function () {
            var user = $Auth.getUser();
            if (user.email) {
                debugger;
                return;
            } else {
                console.log($window);
                Materialize.toast('You Must Be Logged In To Enter', 4000);
                $window.location.href = '/Drink-Up/#/login';
                return;
            }
            console.log('array of queued beers ', qc.queued);
        };

        qc.$onInit = function () {
            debugger;
            $List.getList('queued', $Auth.getUser());
            qc.queued = $List.listResults;
            return qc.queued;
        };

        qc.removeQueued = function (beer) {
            var user = $Auth.getUser();
            $List.deleteBeer(beer, user).then(function () {
                $List.getList('queued', user);
                $window.location.href = '/Drink-Up/#/queued';
            });
        };
    }
})();