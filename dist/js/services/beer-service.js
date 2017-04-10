'use strict';

(function () {
  var app = angular.module('drinkUp');

  app.service('$Beer', function ($http) {
    var bs = this;
    var url = '//bcw-getter.herokuapp.com/?url=';

    bs.getAll = function (query, cb) {
      var urlSearch = 'http://api.brewerydb.com/v2/search?key=c1329ea5e1a23b9d443282db23f01b0e&q=' + query + '&withBreweries=Y';
      var searchUrl = url + encodeURIComponent(urlSearch);
      $http.get(searchUrl).then(function (res) {
        cb(res);
      }, function (err) {
        console.log(err);
      });
    };

    bs.getBeerById = function (id, cb) {
      var urlBeer = 'http://api.brewerydb.com/v2/beer/' + id + '?key=c1329ea5e1a23b9d443282db23f01b0e&q&withBreweries=Y';
      var beerUrl = url + encodeURIComponent(urlBeer);
      $http.get(beerUrl).then(function (res) {
        cb(res);
      }, function (err) {
        console.log(err);
      });
    };
  });
})();