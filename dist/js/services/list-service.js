'use strict';

(function () {
    var app = angular.module('drinkUp');

    app.service('ListService', function () {
        var ls = this;

        /////////////////////////
        //Beer Lists Declared//
        //////////////////////
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

        //Add to any list//
        ls.addToList = function (list, id, name, image, description, style, availability, glass, abv) {
            debugger;
            var beer = new Beer(id, name, image, description, style);
            if (list === 'liked') {
                liked.push(beer);
                ls.saveLiked();
            } else if (list === 'sucked') {
                sucked.push(beer);
                ls.saveSucked();
            } else if (list === 'queued') {
                queued.push(beer);
                ls.saveQueued();
            } else {
                return { "message": "Something went wrong." };
            }
        };

        ///////////////////////////////////////////
        //Local Storage Functions/////////////////
        ////////////////////////////////////////

        ///////////////
        //Liked Beers//
        //////////////
        ls.getLiked = function () {
            // debugger
            var likedBeers = localStorage.getItem('liked');
            if (likedBeers) {
                console.log(JSON.parse(likedBeers));
                return JSON.parse(likedBeers);
            }
            return [];
        };

        ls.saveLiked = function () {
            localStorage.setItem('liked', JSON.stringify(liked));
        };

        ls.removeLiked = function (id) {
            var likedBeers = ls.getLiked();
            liked = likedBeers.filter(function (b) {
                return id != b.id;
            });
            ls.saveLiked();
        };

        /////////////
        //sucked////
        /////////////
        ls.getSucked = function () {
            // debugger
            var suckedBeers = localStorage.getItem('sucked');
            if (suckedBeers) {
                suckedBeers = JSON.parse(suckedBeers);
                console.log(suckedBeers);
                return suckedBeers;
            }
            return [];
        };

        ls.saveSucked = function () {
            // debugger
            localStorage.setItem('sucked', JSON.stringify(sucked));
        };

        ls.removeSucked = function (id) {
            var suckedBeers = ls.getSucked();
            sucked = suckedBeers.filter(function (b) {
                return id != b.id;
            });
            ls.saveSucked();
        };

        //queued//
        ls.getQueued = function () {
            var queuedBeers = localStorage.getItem('queued');
            if (queuedBeers) {
                queuedBeers = JSON.parse(queuedBeers);
                return queuedBeers;
            }
            return [];
        };

        ls.saveQueued = function () {
            localStorage.setItem('queued', JSON.stringify(queued));
        };

        ls.removeQueued = function (id) {
            var queuedBeers = ls.getQueued();
            queued = queuedBeers.filter(function (b) {
                return id != b.id;
            });
            ls.saveQueued();
        };
        ///////////////////////
        ///////////////////////
    });
})();