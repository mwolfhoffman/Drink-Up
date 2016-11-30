(function () {

    angular.module('drinkUp')
        .component('queued', {
            templateUrl: 'partials/queued.html',
            controller: QueuedController
        })

    function QueuedController(ListService) {
        var qc = this;

         qc.getQueued=()=>{
             return ListService.getQueued();
         }
         

    }

})(); 