(function () {

    angular.module('drinkUp')
        .component('sucked', {
            templateUrl: 'partials/sucked.html',
            controller: SuckedController
        })

        SuckedController.$inject=['ListService']

    function SuckedController(ListService) {
        var sc = this;
        
        sc.sucked = [];
        sc.$onInit =()=>{
            sc.sucked = ListService.getList('sucked');
        }

           sc.removeSucked = (id) => {
            ListService.removeBeer('sucked', id)
            sc.sucked = ListService.getList('sucked');  
                }
    }

})(); 