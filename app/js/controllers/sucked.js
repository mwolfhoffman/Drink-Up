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
        sc.$onInit = function () {
            let user = AuthService.getUser()
            console.log('entered search page', user)
            debugger
            if (user.email) {
                sc.sucked = ListService.getList('sucked');
                return
            } else {
                console.log($window)
                $window.location.href = '/#/login'
                return
            }
        }


        sc.removeSucked = (id) => {
            ListService.removeBeer('sucked', id)
            sc.sucked = ListService.getList('sucked');
        }
    }

})(); 