(() => {
    let app = angular.module('drinkUp');

    app.service('$List', function () {
        var ls = this;
        ls.listResults;
        var baseRef = firebase.database()

        //POST and PUT beer into a user's list
        ls.postBeer = (beer, user) => {
            //Firebase can't save '$' characters, so $$hashKey must be deleted
            delete beer.data.$$hashKey
            baseRef.ref(`/users/${user.uid}/${beer.list}/${beer.data.id}`).set(beer.data)
        }

        ls.getList = (list, user) => {
            console.log('getting list for ', list, 'the user is ', user)
            baseRef.ref(`/users/${user.uid}/${list}`).on('value', snapshot => {
                ls.listResults = Object.values(snapshot.val())
                return ls.listResults
            })
        }




















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
        function Beer(id, name) {
            this.id = id;
            this.name = name;
        }


        ///////////////////
        //Add to any list//
        ///////////////////
        // ls.addToList = function (list, id, name) {
        //     var beer = new Beer(id, name)
        //     if (list === 'liked') {
        //         liked.push(beer);
        //         ls.saveList(liked);
        //     } else if (list === 'sucked') {
        //         sucked.push(beer)
        //         ls.saveList(sucked)
        //     } else if (list === 'queued') {
        //         queued.push(beer)
        //         ls.saveList(queued);
        //     } else {
        //         return { "message": "Something went wrong." }
        //     }
        // }


        /////////////////////
        //Save Beer to List//
        ////////////////////
        ls.saveList = list => {
            switch (list) {
                case liked:
                    localStorage.setItem('liked', JSON.stringify(liked))
                    break;
                case sucked:
                    localStorage.setItem('sucked', JSON.stringify(sucked))
                    break;
                case queued:
                    localStorage.setItem('queued', JSON.stringify(queued))
                    break;
                default:
                    console.log('Error from ls.savedList()')
            }
        }

        ///////////////////////
        //Get Beers from List// 
        //////////////////////
        // ls.getList = list => {
        //     var likedBeer, suckedBeer, queuedBeer;
        //     if (list === 'liked') {
        //         return ls.getBeerList(likedBeer, 'liked')
        //     } else if (list === 'sucked') {
        //         return ls.getBeerList(suckedBeer, 'sucked')
        //     } else if (list === 'queued') {
        //         return ls.getBeerList(queuedBeer, 'queued')

        //     }
        // }
        ls.getBeerList = (listBeer, listString) => {
            listBeer = localStorage.getItem(listString);
            if (listBeer) {
                console.log(JSON.parse(listBeer))
                return JSON.parse(listBeer)
            }
            return [];
        }



        /////////////////////////
        //Remove Beer from List//
        /////////////////////////
        // ls.removeBeer = (list, id) => {
        //     if (list === 'liked') {
        //         ls.remove(list, id)
        //         localStorage.setItem('liked', JSON.stringify(updatedList))

        //     } else if (list === 'sucked') {
        //         ls.remove(list, id)
        //         localStorage.setItem('sucked', JSON.stringify(updatedList))

        //     } else if (list === 'queued') {
        //         ls.remove(list, id)
        //         localStorage.setItem('queued', JSON.stringify(updatedList))
        //     }
        // }

        // ls.remove = function (list, id) {
        //     debugger
        //     console.log('removing beer from  ... ', list)

        //     var beerList = ls.getList(list)
        //     updatedList = beerList.filter((b) => {
        //         return (id != b.id)
        //     })
        // }


    })

})();