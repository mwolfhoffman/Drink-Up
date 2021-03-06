(function () {

    angular.module('drinkUp')
        .component('mybeer', {
            templateUrl: 'partials/mybeer.html',
            controller: MyBeerController
        })

    MyBeerController.$inject = ['$Beer', '$List', '$Auth', '$stateParams', '$window', '$state']

    function MyBeerController($Beer, $List, $Auth, $stateParams, $window, $state) {
        //oninit 
        let bc = this
        bc.myBeer;


        bc.$onInit = function () {
            // get beer from the user, not the API
            let user = $Auth.getUser()
            console.log('my beer id is...', $stateParams.id)
            $Beer.getUserBeerById($stateParams.id, user)
            bc.myBeer = $Beer.myBeer
            console.log('beer from the user  ', bc.myBeer)
        }

        bc.changeList = function (beer) {
            console.log('changing list for my beer')
            let user = $Auth.getUser()
            $List.postBeer(beer, user)
            Materialize.toast(`${beer.data.name} has been moved into your ${beer.list} list`, 4000)
            // $window.ngLocation.href = `/Drink-Up/#/${beer.list}`
            $state.go(`${beer.list}`)
        }
    }
})();