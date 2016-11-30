(function () {

    angular.module('drinkUp')
        .component('list', {
            templateUrl: 'partials/lists.html',
            controller: ListController
        })

    function ListController(ListService) {
        var lc = this;

         lc.getLiked=()=>{
             return ListService.getLiked();
         }
         
         lc.getSucked=()=>{
             return ListService.getSucked();
         }
         
         lc.getQueued=()=>{
             return ListService.getQueued();
         }

    }

})(); 