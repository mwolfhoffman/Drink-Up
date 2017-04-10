(function () {
  let app = angular.module('drinkUp');

  app.service('$Beer', function ($http) {
    var bs = this
    bs.myBeer;
    var baseRef = firebase.database()
    var url = '//bcw-getter.herokuapp.com/?url=';

    bs.getAll = (query, cb) => {
      var urlSearch = 'http://api.brewerydb.com/v2/search?key=c1329ea5e1a23b9d443282db23f01b0e&q=' + query + '&withBreweries=Y';
      var searchUrl = url + encodeURIComponent(urlSearch);
      $http.get(searchUrl)
        .then(function (res) {
          cb(res)
        }, function (err) {
          console.log(err)
        })
    }

    bs.getBeerById = (id, cb) => {
      var urlBeer = `http://api.brewerydb.com/v2/beer/${id}?key=c1329ea5e1a23b9d443282db23f01b0e&q&withBreweries=Y`;
      var beerUrl = url + encodeURIComponent(urlBeer);
      $http.get(beerUrl)
        .then(function (res) {
          cb(res)
        }, function (err) {
          console.log(err)
        })
    }

    bs.getUserBeerById = (beerId, user) => {
      console.log('getting beer in beer service')
      baseRef.ref(`/users/${user.uid}/beers/${beerId}`).on('value', snapshot => {
        bs.myBeer = snapshot.val()
        return bs.myBeer
      })
    }

  })

})();
