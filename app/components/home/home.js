(function () {

    angular.module('drinkUp')
        .component('home', {
            templateUrl: 'app/components/home/home.html',
            controller: HomeController
        })

HomeController.$inject = ['BeerService']
    
    function HomeController(BeerService) {
        var hc = this;

        hc.getAll = function(){
                BeerService.getAll((data)=>{
                    console.log(data)
                })
        }



    }

})(); 