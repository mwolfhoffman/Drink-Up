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
                
                if(!hc.allResults){
                       $('#search-btn').text('No Results. Try Again');
                }else{

                hc.allResults.forEach((b) => { //if results have a brewery property, they are a beer. Otherwise, they are a brewery. 
                    b.type==="beer" ? hc.beerResults.push(b) : hc.breweryResults.push(b)
                    $('#search-btn').text('Search');
                })
                }
            })

        }


        hc.addToList = function(list, id, name, image, description, style, availability, glass, abv){
            debugger 
            ListService.addToList(list, id, name, image, description, style, availability, glass, abv)
            // console.log(ListService.getLiked());
        }
        ///////////////////////
        ///////////////////////        


        hc.resetAll = function(){
            hc.allResults = [];
            hc.beerResults = [];
            hc.breweryResults = [];

        }

    }

})(); 