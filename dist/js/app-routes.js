'use strict';

(function () {

    var app = angular.module('drinkUp').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        let routes = [{
            name: 'login',
            url: '/login',
            template: '<login></login>'
        },
        {
            name: 'search',
            url: '/search',
            template: '<search></search>'
        },
        // {
        //     name: 'search.results',
        //     url: '^/:query',
        //     results: '<results></results>'
        // },

        // http://www.codelord.net/2015/11/25/query-parameters-in-ui-router-without-needless-reloading-with-example-project/

        {
            name: 'beer',
            url: '/beer/:id',
            template: '<beer></beer>'
        },
        {
            name: 'mybeer',
            url: '/mybeer/:id',
            template: '<mybeer></mybeer>'
        },
        {
            name: 'liked',
            url: '/liked',
            template: '<liked></liked>'
        },
        {
            name: 'hated',
            url: '/hated',
            template: '<hated></hated>'
        },
        {
            name: 'queued',
            url: '/queued',
            template: '<queued></queued>'
        }];
        window.NG_STATE_ROUTES = routes;
        
        routes.forEach(route=>$stateProvider.state(route))
    });
})();