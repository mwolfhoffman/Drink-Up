angular.module('drinkUp')
    .component('queued', {
        templateUrl: 'partials/queued.html',
        controller: QueuedController
    })

QueuedController.$inject = ['$Beer', '$List', '$Auth', '$stateParams', '$window']

function QueuedController($Beer, $List, $Auth, $stateParams, $window) {
    var vm = this
    vm.queued;
    vm.$doCheck = function () {
        let user = $Auth.getUser()
        if (user.email) {
            debugger
            return
        } else {
            Materialize.toast('You Must Be Logged In To Enter', 4000)
            $window.location.href = '/#/login'
            return
        }
    }

    vm.$onInit = () => {
        debugger
        $List.getList('queued', $Auth.getUser());
        vm.queued = $List.listResults
        return vm.queued;
    }

    vm.removeQueued = (beer) => {
        let user = $Auth.getUser()
        $List.deleteBeer(beer, user).then(() => {
            $List.getList('queued', user)
            $window.location.href = '/#/queued'
        })
    }

}

// })(); 