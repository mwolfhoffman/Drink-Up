(function () {
    angular.module('drinkUp')
        .component('queued', {
            templateUrl: 'partials/queued.html',
            controller: QueuedController
        })

    QueuedController.$inject = ['$List', '$Auth', '$window', '$state']
    function QueuedController($List, $Auth, $window, $state) {
        var qc = this;
        qc.queued;

        qc.$doCheck = function () {
        let user = $Auth.getUser()
        if (user.email) {
            debugger 
            return
        } else {
            console.log($window)
            Materialize.toast('You Must Be Logged In To Enter', 4000)
            // $window.ngLocation.href = '/Drink-Up/#/login'
            $state.go('login')
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

        qc.removeQueued=(beer)=>{
            let user = $Auth.getUser()
            $List.deleteBeer(beer, user).then(()=>{
                $List.getList('queued', user)
                // $window.ngLocation.href='/Drink-Up/#/queued'
                $state.go('queued')
            })
        }

    }

})(); 