(function () {

    angular.module('drinkUp')
        .component('liked', {
            templateUrl: 'partials/liked.html',
            controller: LikedController
        })

    LikedController.$inject = ['ListService', 'AuthService', '$window']

    function LikedController(ListService, AuthService, $window) {
        var lc = this;


        //Lifecycle Gets List of Liked Beers 
        lc.liked = [];
        lc.$doCheck = function () {

            let user = AuthService.getUser()
            debugger
            if (user.email) {
                lc.liked = ListService.getList('liked');
                return
            } else {
                Materialize.toast('You Must Be Logged In To Enter', 4000)
                $window.location.href = '/#/login'
                return
            }
        }


        lc.removeLiked = (id) => {

            console.log('removing a liked beer')
            $window.location.href="/#/liked"
            ListService.removeBeer('liked', id)
            lc.liked = ListService.getList('liked');
        }



    }

})(); 