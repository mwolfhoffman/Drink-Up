'use strict';

(function () {

    angular.module('drinkUp').component('beer', {
        templateUrl: 'partials/beer.html',
        controller: BeerController
    });

    BeerController.$inject = ['BeerService', 'ListService', '$stateParams'];

    function BeerController(BeerService, ListService, $stateParams) {
        //oninit 
        var bc = this;
        bc.$onInit = function () {
            BeerService.getBeerById($stateParams.id, function (data) {
                bc.beer = data.data.data;
                bc.name = data.data.data.name;
                bc.id = data.data.data.id;
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
            debugger;
            ListService.addToList(list, id, name, image, description, style, availability, glass, abv);
            // console.log(ListService.getLiked());
        };
    }
})();