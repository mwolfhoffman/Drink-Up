'use strict';

(function () {

    angular.module('drinkUp').component('search', {
        templateUrl: 'partials/search.html',
        controller: SearchController
    });

    SearchController.$inject = ['$Beer', '$List', '$Auth', '$window'];

    function SearchController($Beer, $List, $Auth, $window) {
        var hc = this;
        hc.beerResults = [];
        hc.breweryResults = [];

        hc.$doCheck = function () {
            var user = $Auth.getUser();
            if (user.email) {
                return;
            } else {
                Materialize.toast('You Must Be Logged In To Enter', 4000);
                $window.location.href = '/#/login';
                return;
            }
        };

        hc.logout = function () {
            $Auth.deleteUser();
        };

        ///////////////////////////////
        //searches everyything/////////
        //////////////////////////////
        hc.searchAll = function (query) {
            hc.resetAll(); //resets all 
            $('#search-btn').text('Loading...');
            $Beer.getAll(query, function (data) {
                hc.allResults = data.data.data;

                if (!hc.allResults) {
                    $('#search-btn').text('No Results. Try Again');
                } else {

                    hc.allResults.forEach(function (b) {
                        //if results have a brewery property, they are a beer. Otherwise, they are a brewery. 
                        b.type === "beer" ? hc.beerResults.push(b) : hc.breweryResults.push(b);
                        $('#search-btn').text('Search');
                    });
                }
            });
        };

        hc.addToList = function (beer) {
            var user = $Auth.getUser();
            $List.postBeer(beer, user);
        };
        ///////////////////////
        ///////////////////////        


        hc.resetAll = function () {
            hc.allResults = [];
            hc.beerResults = [];
            hc.breweryResults = [];
        };
    }
})();