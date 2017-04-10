(function () {

    angular.module('drinkUp')
        .component('sucked', {
            templateUrl: 'partials/sucked.html',
            controller: SuckedController
        })

    SuckedController.$inject = ['$List', '$Auth', '$window']

    function SuckedController($List, $Auth, $window) {
        var sc = this;
        sc.sucked = [];
        sc.$doCheck = function () {
            let user = $Auth.getUser()
            console.log('entered search page', user)
            if (user.email) {
                return
            } else {
                console.log($window)
                Materialize.toast('You Must Be Logged In To Enter', 4000)
                $window.location.href = '#/login'
                return
            }
        }

        //Get Hated Beers On Init
        sc.$onInit = () => {
            debugger
            $List.getList('hated', $Auth.getUser());
            sc.sucked = $List.listResults
            console.log(sc.sucked)
            return sc.sucked;
        }


        sc.removeSucked = (id) => {
            $List.removeBeer('sucked', id)
            sc.sucked = $List.getList('sucked');
        }
    }

})(); 