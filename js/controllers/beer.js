'use strict';

(function () {

    angular.module('drinkUp').component('beer', {
        templateUrl: 'partials/beer.html',
        controller: BeerController
    });

    BeerController.$inject = ['$Beer', '$Auth', '$List', '$stateParams', '$window'];

    function BeerController($Beer, $Auth, $List, $stateParams, $window) {
        //oninit 
        var bc = this;
        bc.$onInit = function () {
            console.log($window);
            $Beer.getBeerById($stateParams.id, function (data) {
                console.log('beer result  ===>', data.data.data);
                bc.beer = data.data.data;
                bc.name = data.data.data.name;
                bc.id = data.data.data.id;
                bc.brewery = data.data.data.breweries[0];
                //.name, .description, .established, .website, .locations[0].locality and also .region
                bc.description = data.data.data.description ? data.data.data.description : 'There is no description for ' + bc.beer.name;
                bc.label = data.data.data.label ? data.data.data.label.icon : 'https://hotemoji.com/images/emoji/2/l80sild2t522.png';

                bc.abv = data.data.data.abv ? data.data.data.abv : 'N/A';

                bc.ibu = data.data.data.ibu ? data.data.data.ibu : 'N/A';

                bc.avail = data.data.data.available ? data.data.data.available.name : 'N/A';

                bc.srm = data.data.data.srm ? data.data.data.srm.name : 'N/A';

                bc.temp = data.data.data.servingTemperatureDisplay ? data.data.data.servingTemperatureDisplay : 'N/A, but probably cold';

                bc.glass = data.data.data.glass ? data.data.data.glass.name : 'N/A';
            });
        };
        bc.addToList = function (list, id, name, image, description, style, availability, glass, abv) {
            $List.addToList(list, id, name, image, description, style, availability, glass, abv);
            // console.log($List.getLiked());
        };

        bc.changeList = function (beer) {
            console.log('changing list for my beer');
            var user = $Auth.getUser();
            $List.postBeer(beer, user);
            Materialize.toast(beer.data.name + ' has been moved into your ' + beer.list + ' list', 4000);
            // $window.ngLocation.href = `/Drink-Up/#/${beer.list}`
            $state.go('' + beer.list);
        };
    }
})();