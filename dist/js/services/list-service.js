'use strict';

(function () {
    var app = angular.module('drinkUp');

    app.service('ListService', function () {
        var ls = this;

        /////////////////////////
        //Beer Lists Declared//
        //////////////////////
        var updatedList;
        var liked = [];
        var sucked = [];
        var queued = [];

        //////////////////////   
        // Beer Constructor// 
        ///////////////////
        function Beer(id, name, image, description, style, availability, glass, abv) {
            this.id = id;
            this.name = name;
            this.image = image || 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Emoji_u1f37a.svg';
            this.description = description;
            this.style = style;
            this.availability = availability;
            this.glass = glass;
            this.abv = abv;
        }

        ///////////////////
        //Add to any list//
        ///////////////////
        ls.addToList = function (list, id, name, image, description, style, availability, glass, abv) {
            debugger;
            var beer = new Beer(id, name, image, description, style, availability, glass, abv);
            if (list === 'liked') {
                liked.push(beer);
                ls.saveList(liked);
            } else if (list === 'sucked') {
                sucked.push(beer);
                ls.saveList(sucked);
            } else if (list === 'queued') {
                queued.push(beer);
                ls.saveList(queued);
            } else {
                return { "message": "Something went wrong." };
            }
        };

        /////////////////////
        //Save Beer to List//
        ////////////////////
        ls.saveList = function (list) {
            switch (list) {
                case liked:
                    localStorage.setItem('liked', JSON.stringify(liked));
                    break;
                case sucked:
                    localStorage.setItem('sucked', JSON.stringify(sucked));
                    break;
                case queued:
                    localStorage.setItem('queued', JSON.stringify(queued));
                    break;
                default:
                    console.log('Error from ls.savedList()');
            }
        };

        ///////////////////////
        //Get Beers from List// 
        //////////////////////
        ls.getList = function (list) {
            var likedBeer, suckedBeer, queuedBeer;
            if (list === 'liked') {
                return ls.getBeerList(likedBeer, 'liked');
            } else if (list === 'sucked') {
                return ls.getBeerList(suckedBeer, 'sucked');
            } else if (list === 'queued') {
                return ls.getBeerList(queuedBeer, 'queued');
            }
        };
        ls.getBeerList = function (listBeer, listString) {
            listBeer = localStorage.getItem(listString);
            if (listBeer) {
                console.log(JSON.parse(listBeer));
                return JSON.parse(listBeer);
            }
            return [];
        };

        /////////////////////////
        //Remove Beer from List//
        /////////////////////////
        ls.removeBeer = function (list, id) {
            if (list === 'liked') {
                ls.remove(list, id);
                localStorage.setItem('liked', JSON.stringify(updatedList));
            } else if (list === 'sucked') {
                ls.remove(list, id);
                localStorage.setItem('sucked', JSON.stringify(updatedList));
            } else if (list === 'queued') {
                ls.remove(list, id);
                localStorage.setItem('queued', JSON.stringify(updatedList));
            }
        };

        ls.remove = function (list, id) {
            debugger;
            console.log('removing beer from  ... ', list);

            var beerList = ls.getList(list);
            updatedList = beerList.filter(function (b) {
                return id != b.id;
            });
        };
    });
})();