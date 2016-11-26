(function () {

    angular.module('drinkUp')
        .component('home', {
            templateUrl: 'app/components/home/home.html',
            controller: HomeController
        })

    HomeController.$inject = ['BeerService']

    function HomeController(BeerService) {
        var hc = this;
        

        hc.searchBeer = function (query) {
            BeerService.getAll(query, (data) => {
               hc.results=data.data.data
                console.log(results)
            })
        }
    }

})(); 