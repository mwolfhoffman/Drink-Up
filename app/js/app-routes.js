(() => {

    let app = angular.module('drinkUp')
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/login')

            $stateProvider
                .state({
                    name: 'login',
                    url: '/login',
                    template: '<login></login>'
                })
                .state({
                    name: 'search',
                    url: '/search',
                    template: '<search></search>'
                })
                // .state({
                //     name: 'search.results',
                //     url: '^/:query',
                //     results: '<results></results>'
                // })

                // http://www.codelord.net/2015/11/25/query-parameters-in-ui-router-without-needless-reloading-with-example-project/

                .state({
                    name: 'beer',
                    url: '/beer/:id',
                    template: '<beer></beer>'
                })
                .state({
                    name: 'mybeer',
                    url: '/mybeer/:id',
                    template: '<mybeer></mybeer>'
                })
                .state({
                    name: 'liked',
                    url: '/liked',
                    template: '<liked></liked>'
                })
                .state({
                    name: 'hated',
                    url: '/hated',
                    template: '<hated></hated>'
                })
                .state({
                    name: 'queued',
                    url: '/queued',
                    template: '<queued></queued>'
                })
        })

})()