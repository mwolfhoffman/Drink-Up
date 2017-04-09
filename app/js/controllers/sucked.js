(function () {

    angular.module('drinkUp')
        .component('sucked', {
            templateUrl: 'partials/sucked.html',
            controller: SuckedController
        })

    SuckedController.$inject = ['ListService', 'AuthService', '$window']

    function SuckedController(ListService, AuthService, $window) {
        var sc = this;
        sc.sucked = [];
        sc.$doCheck = function () {
            let user = AuthService.getUser()
            console.log('entered search page', user)
            debugger
            if (user.email) {
                sc.sucked = ListService.getList('sucked');
                return
            } else {
                console.log($window)
                Materialize.toast('You Must Be Logged In To Enter', 4000)
                $window.location.href = '/Drink-Up/#/login'
                return
            }
        }


        sc.removeSucked = (id) => {
            ListService.removeBeer('sucked', id)
            sc.sucked = ListService.getList('sucked');
        }
    }

})(); 