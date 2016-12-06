(function () {

    angular.module('drinkUp')
        .component('liked', {
            templateUrl: 'partials/liked.html',
            controller: LikedController
        })

    LikedController.$inject = ['ListService']

    function LikedController(ListService) {
        var lc = this;

        lc.liked = [];
        lc.$onInit = function () {
            lc.liked = ListService.getLiked();
        }


        lc.removeLiked = (id) => {
            debugger
            for (var i = 0; i < lc.liked.length; i++) {
                let beer = lc.liked[i]
                if (id == beer.id) {
                    lc.liked.splice(i, 1)
                }
            }
            ListService.saveLiked();
            lc.liked = ListService.JSON.parse('liked')
        }

    }

})(); 