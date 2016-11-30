(function () {

    angular.module('drinkUp')
        .component('sucked', {
            templateUrl: 'partials/sucked.html',
            controller: SuckedController
        })

    function SuckedController(ListService) {
        var lc = this;

         lc.getSucked=()=>{
             return ListService.getSucked();
         }
         

    }

})(); 