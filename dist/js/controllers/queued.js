'use strict';

angular.module('drinkUp').component('queued', {
    templateUrl: 'partials/queued.html',
    controller: QueuedController
});

QueuedController.$inject = ['$Beer', '$List', '$Auth', '$stateParams', '$window'];

function QueuedController($Beer, $List, $Auth, $stateParams, $window) {
    var vm = this;
    vm.queued;
    vm.$doCheck = function () {
        var user = $Auth.getUser();
        if (user.email) {
            debugger;
            return;
        } else {
            Materialize.toast('You Must Be Logged In To Enter', 4000);
            $window.location.href = '/#/login';
            return;
        }
    };

    vm.$onInit = function () {
        debugger;
        $List.getList('queued', $Auth.getUser());
        vm.queued = $List.listResults;
        return vm.queued;
    };

    vm.removeQueued = function (beer) {
        console.log('removing...', beer);
        var user = $Auth.getUser();
        $List.deleteBeer(beer, user).then(function () {
            $List.getList('queued', user);
            $window.location.href = '/#/queued';
        });
    };
}

// })();