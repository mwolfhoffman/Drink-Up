(function () {

    angular.module('drinkUp')
        .component('home', {
            templateUrl: 'partials/home.html',
            controller: HomeController
        })

    // HomeController.$inject = ['BeerService', 'ListService']

    function HomeController(BeerService, ListService) {
        var hc = this;
        hc.beerResults = [];
        hc.breweryResults = [];

        ///////////////////////////////
        //searches everyything/////////
        //////////////////////////////
        hc.searchAll = function (query) {
            hc.resetAll()  //resets all 
            $('#search-btn').text('Loading...');
            BeerService.getAll(query, (data) => {
                hc.allResults = data.data.data
                console.log(hc.allResults)
                hc.allResults.forEach((b) => { //if results have a brewery property, they are a beer. Otherwise, they are a brewery. 
                    b.breweries ? hc.beerResults.push(b) : hc.breweryResults.push(b)
                    $('#search-btn').text('Search');
                })
            })

        }


        hc.addToList = function(list, id, name, image, description, style){
            debugger 
            ListService.addToList(list, id, name, image, description, style)
            console.log(ListService.getLiked());
        }
        ///////////////////////
        ///////////////////////



        // hc.searchBeerOnly = (query) => {
        //     debugger
        //     BeerService.getAll(query, (data) => {
        //         data.data.data.forEach((b) => {
        //             if (data.data.data.breweries) {
        //                 hc.beerResults.push(b)
        //             }
        //         })
        //         console.log(hc.beerResults)
        //     })
        // }


        hc.resetAll = function(){
            hc.allResults = [];
            hc.beerResults = [];
            hc.breweryResults = [];

        }

    }

})(); 