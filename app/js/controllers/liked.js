(function () {

    angular.module('drinkUp')
        .component('liked', {
            templateUrl: 'partials/liked.html',
            controller: LikedController
        })

    function LikedController(ListService) {
        var lc = this;

         lc.getLiked=()=>{
             return ListService.getLiked();
         }
         

    }

})(); 