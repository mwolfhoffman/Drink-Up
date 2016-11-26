(() => {

    let app = angular.module('drinkUp')
        .config(
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home')

            $stateProvider
                .state({
                    name: 'home',
                    url: '/home',
                    template: '<home></home>'
                })
        })


        })();