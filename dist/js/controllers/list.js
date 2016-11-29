'use strict';

(function () {

    var _beers = [];
    var _liked = [];
    var _sucked = [];
    var _queue = [];

    Beer = function Beer(id, name, image, description, style) {
        undefined.id = id;
        undefined.name = name;
        undefined.image = image;
        undefined.description = description;
        undefined.style = stye;
    };

    undefined.getBeers = function () {
        return _beers;
    };

    undefined.addToList = function (list, id, name, image, description, style) {
        var beer = new Beer(id, name, image, description, style);
        if (list === 'liked') {
            _liked.push(beer);
        } else if (list === 'sucked') {
            _sucked.push(beer);
        } else if (list === 'queue') {
            _queue.push(beer);
        } else {
            return { "message": "Something went wrong." };
        }
    };

    undefined.removeFromList = function (id, list) {
        list.forEach(function (b) {
            b.id == id ? list.splice(i, 1) : null;
        });
    };

    ///////////////////////////////////////////
    //Local Storage Functions/////////////////
    ////////////////////////////////////////

    //Liked Beers
    function getLiked() {
        var likedBeers = localStorage.getItem('_liked');
        if (likedBeers) {
            likedBeers = JSON.parse(likedBeers);
            return likedBeers;
        }
        return [];
    }

    function saveLiked() {
        localStorage.setItem('_liked', JSON.stringify(_liked));
    }

    //sucked//
    function getSucked() {
        var suckedBeers = localStorage.getItem('_sucked');
        if (suckedBeers) {
            suckedBeers = JSON.parse(suckedBeers);
            return suckedBeers;
        }
        return [];
    }

    function saveSucked() {
        localStorage.setItem('_sucked', JSON.stringify(_sucked));
    }

    //queued//
    function getQueued() {
        var queuedBeers = localStorage.getItem('_queued');
        if (queuedBeers) {
            queuedBeers = JSON.parse(queuedBeers);
            return queuedBeers;
        }
        return [];
    }

    function saveSucked() {
        localStorage.setItem('_queued', JSON.stringify(_queued));
    }
    ///////////////////////
    ///////////////////////
})();