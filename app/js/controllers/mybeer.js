(function () {

    angular.module('drinkUp')
        .component('mybeer', {
            templateUrl: 'partials/mybeer.html',
            controller: MyBeerController
        })

    MyBeerController.$inject = ['$Beer', '$List', '$Auth', '$stateParams', '$window']

    function MyBeerController($Beer, $List, $Auth, $stateParams, $window) {
        //oninit 
        let bc = this
        bc.myBeer;

        bc.$onInit = function () {
            // get beer from the user, not the API
            let user = $Auth.getUser()
            $Beer.getUserBeerById($stateParams.id, user)
            bc.myBeer = $Beer.myBeer
        }

        bc.changeList = function (beer) {
            let user = $Auth.getUser()
            $List.postBeer(beer, user)
            Materialize.toast(`${beer.data.name} has been moved into your ${beer.list} list`, 4000)
            $window.location.href = `/#/${beer.list}`
        }
    }
})();