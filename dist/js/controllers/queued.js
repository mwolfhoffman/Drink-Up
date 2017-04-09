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
        qc.index = 1;
        qc.$doCheck = function () {
            // let user = AuthService.getUser()
            // console.log('entered search page', user)
            // debugger
            // if (user.email) {
            qc.queued = ListService.getList('queued');
            //         return
            //     } else {
            //         console.log($window)
            //         Materialize.toast('You Must Be Logged In To Enter', 4000)
            //         $window.location.href = '/#/login'
            //         return
            //     }
        };

        qc.removeQueued = function (id) {
            console.log(id);
            console.log('removing beer');
            ListService.removeBeer('queued', id);
            // qc.queued = ListService.getList('queued');
        };
    }
})();