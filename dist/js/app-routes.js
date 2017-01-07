'use strict';

(function () {

    var app = angular.module('drinkUp').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state({
            name: 'home',
            url: '/home',
            template: '<home></home>'
        }).state({
            name: 'liked',
            url: '/liked',
            template: '<liked></liked>'
        }).state({
            name: 'sucked',
            url: '/sucked',
            template: '<sucked></sucked>'
        }).state({
            name: 'queued',
            url: '/queued',
            template: '<queued></queued>'
        }).state({
            name: 'queuedBeer',
            url: '/queued/:id',
            template: '<queued></queued>'
        }).state({
            name: 'suckedBeer',
            url: '/sucked/:id',
            template: '<sucked></sucked>'
        }).state({
            name: 'likedBeer',
            url: '/liked/id',
            template: '<liked></liked>'
        }).state({
            name: 'beer',
            url: '/beer:id',
            template: '<beer></beer>'
        });
    });
})();