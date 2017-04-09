(function () {

    angular.module('drinkUp')
        .component('search', {
            templateUrl: 'partials/search.html',
            controller: SearchController
        })

    SearchController.$inject = ['BeerService', 'ListService', 'AuthService', '$window']

    function SearchController(BeerService, ListService, AuthService, $window) {
        var hc = this;
        hc.beerResults = [];
        hc.breweryResults = [];

        hc.$onInit = function () {
            let user = AuthService.getUser()
            console.log('entered search page', user)
            debugger
            if (user.email) {
                return
            } else {
                console.log($window)
                $window.location.href = '/#/login'
                return
            }
        }

    hc.logout = () => {
        AuthService.deleteUser()
    }

    ///////////////////////////////
    //searches everyything/////////
    //////////////////////////////
    hc.searchAll = function (query) {
        hc.resetAll()  //resets all 
        $('#search-btn').text('Loading...');
        BeerService.getAll(query, (data) => {
            hc.allResults = data.data.data
            console.log(hc.allResults)

            if (!hc.allResults) {
                $('#search-btn').text('No Results. Try Again');
            } else {

                hc.allResults.forEach((b) => { //if results have a brewery property, they are a beer. Otherwise, they are a brewery. 
                    b.type === "beer" ? hc.beerResults.push(b) : hc.breweryResults.push(b)
                    $('#search-btn').text('Search');
                })
            }
        })

    }


    hc.addToList = function (list, id, name, image, description, style, availability, glass, abv) {
        debugger
        ListService.addToList(list, id, name, image, description, style, availability, glass, abv)
        // console.log(ListService.getLiked());
    }
    ///////////////////////
    ///////////////////////        


    hc.resetAll = function () {
        hc.allResults = [];
        hc.beerResults = [];
        hc.breweryResults = [];

    }

}

})(); 