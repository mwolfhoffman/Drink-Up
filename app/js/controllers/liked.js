(function () {

    angular.module('drinkUp')
        .component('liked', {
            templateUrl: 'partials/liked.html',
            controller: LikedController
        })

    LikedController.$inject = ['$List', '$Auth', '$window','$state']

    function LikedController($List, $Auth, $window, $state) {
        var lc = this;
        lc.liked = [];

        //Check if Authorize 
        lc.$doCheck = function () {
            let user = $Auth.getUser()
            if (user.email) {
                return
            } else {
                Materialize.toast('You Must Be Logged In To Enter', 4000)
                // $window.ngLocation.href = '/Drink-Up/#/login'
                $state.go('login')
                return
            }
        }

        //Get Liked Beers On Init
        lc.$onInit = () => {
            debugger
            $List.getList('liked', $Auth.getUser());
            lc.liked = $List.listResults
            return lc.liked;
        }

        lc.removeLiked = (beer) => {
            let user = $Auth.getUser()
            $List.deleteBeer(beer, user).then(() => {
                $List.getList('liked', user)
                // $window.ngLocation.href = '/Drink-Up/#/liked'
                $state.go('liked')
            })
        }



    }

})(); 