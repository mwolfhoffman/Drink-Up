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
                .state({
                    name: 'liked',
                    url: '/liked',
                    template: '<liked></liked>'
                })
                .state({
                    name: 'sucked',
                    url: '/sucked',
                    template: '<sucked></sucked>'
                })
                .state({
                    name: 'queued',
                    url: '/queued',
                    template: '<queued></queued>'
                })

        })


        })();