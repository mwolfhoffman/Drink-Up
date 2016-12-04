(() => {
    let app = angular.module('drinkUp');

    app.service('ListService', function () {
        var ls = this;

        // let _beers = [];
        let _liked = [];
        let _sucked = [];
        let _queued = [];

        // Beer Constructor// 
        function Beer(id, name, image, description, style) {
            this.id = id;
            this.name = name;
            this.image = image || 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Emoji_u1f37a.svg';
            this.description = description;
            this.style = style;
            //add glass
            //availabilty
        }

        //Add to any list//
        ls.addToList = function (list, id, name, image, description, style) {
            var beer = new Beer(id, name, image, description, style)
            if (list === 'liked') {
                _liked.push(beer);
                saveLiked();
            } else if (list === 'sucked') {
                _sucked.push(beer)
                saveSucked();
            } else if (list === 'queued') {
                _queued.push(beer)
                saveQueued();
            } else {
                return { "message": "Something went wrong." }
            }
        }

        //remove from any list//
        // ls.removeFromList = function (id, list) {
        //     debugger 
        //     let listName = ''
        //     if (list == 'liked') { listName = _liked }
        //     else if (list == 'sucked') { listName = _sucked }
        //     else { listName = _queued }
        //     listName.forEach((b) => {
        //         b.id == id ? list.splice(i, 1) : null;
        //         saveList(list)
        //     })
        // }



        function saveList(list) {
            if (list == 'liked') { listName = _liked }
            else if (list == 'sucked') { listName = _sucked }
            else { listName = _queued }
            localStorage.setItem(list, JSON.stringify(listName))

        }





            ///////////////////////////////////////////
            //Local Storage Functions/////////////////
            ////////////////////////////////////////

            //Liked Beers
            ls.getLiked = function () {
                // debugger
                let likedBeers = localStorage.getItem('_liked');
                console.log(likedBeers)
                if (likedBeers) {
                    likedBeers = JSON.parse(likedBeers);
                    console.log(likedBeers)
                    return likedBeers
                }
                return []
            }

            // function saveLiked() {
            //     localStorage.setItem('_liked', JSON.stringify(_liked))
            // }


            //sucked//
            function getSucked() {
                // debugger
                let suckedBeers = localStorage.getItem('_sucked');
                if (suckedBeers) {
                    suckedBeers = JSON.parse(suckedBeers);
                    return suckedBeers
                }
                return []
            }

            // function saveSucked() {
            //     // debugger
            //     localStorage.setItem('_sucked', JSON.stringify(_sucked))
            // }

            //queued//
            function getQueued() {
                let queuedBeers = localStorage.getItem('_queued');
                if (queuedBeers) {
                    queuedBeers = JSON.parse(queuedBeers);
                    return queuedBeers
                }
                return []
            }

            // function saveQueued() {
            //     localStorage.setItem('_queued', JSON.stringify(_queued))
            // }
            ///////////////////////
            ///////////////////////
        
    })

})();