'use strict';

(function () {

    angular.module('drinkUp').component('beer', {
        templateUrl: 'partials/beer.html',
        controller: BeerController
    });

    BeerController.$inject = ['$stateParams'];

    function HomeController(BeerService, ListService) {}
})();