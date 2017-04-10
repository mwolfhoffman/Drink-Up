(function () {
    angular.module('drinkUp')
        .component('queued', {
            templateUrl: 'partials/queued.html',
            controller: QueuedController
        })

    QueuedController.$inject = ['$List', '$Auth', '$window']
    function QueuedController($List, $Auth, $window) {
        var qc = this;
        qc.queued = [];
        qc.$doCheck = function () {
        let user = $Auth.getUser()
        if (user.email) {
            debugger 
            return
        } else {
            console.log($window)
            Materialize.toast('You Must Be Logged In To Enter', 4000)
            $window.location.href = '/#/login'
            return
        }
        console.log('array of queued beers ', qc.queued)
        }

        qc.$onInit = ()=>{
            debugger 
            $List.getList('queued', $Auth.getUser());
            qc.queued=$List.listResults
            return qc.queued; 
        }


        qc.removeQueued = function (id) {
            console.log(id)
            console.log('removing beer')
            $List.removeBeer('queued', id)
            // qc.queued = $List.getList('queued');
        }

    }

})(); 