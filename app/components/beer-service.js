(()=>{
let app = angular.module('drinkUp'); 

    app.service('BeerService', function($http){
    var bs = this

      bs.getAll=(cb)=>{
          debugger 
        var url = '//bcw-getter.herokuapp.com/?url=';
        var url2 = 'http://api.brewerydb.com/v2/?key=c1329ea5e1a23b9d443282db23f01b0e' ;
        var apiUrl = url + encodeURIComponent(url2);
           var apiUrl = 
           $http.get(apiUrl)
           .then(function(res){
              cb(res)
           },function(err){
             console.log(err)
             })
           }

})

})();