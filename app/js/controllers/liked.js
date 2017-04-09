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
        lc.$onInit = function () {

            let user = AuthService.getUser()
            console.log('entered search page', user)
            debugger
            if (user.email) {
                lc.liked = ListService.getList('liked');
                return
            } else {
                console.log($window)
                $window.location.href = '/#/login'
                return
            }
        }


        lc.removeLiked = (id) => {
            ListService.removeBeer('liked', id)
            lc.liked = ListService.getList('liked');
        }



    }

})(); 