(function () {

    angular.module('drinkUp')
        .component('home', {
            templateUrl: 'partials/home.html',
            controller: HomeController
        })

    HomeController.$inject = ['BeerService']

    function HomeController(BeerService) {
        var hc = this;
        

        hc.searchBeer = function (query) {
            BeerService.getAll(query, (data) => {
               hc.results=data.data.data
                console.log(hc.results)
            })
        }
    }

})(); 