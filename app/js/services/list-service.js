(() => {
    let app = angular.module('drinkUp');

    app.service('$List', function () {
        var ls = this;
        ls.listResults = [];
        var baseRef = firebase.database()

        //POST and PUT beer into a user's list
        ls.postBeer = (beer, user) => {
            debugger
            //Firebase can't save '$' characters, so $$hashKey must be deleted
            if(beer.data.$$hashKey){
                delete beer.data.$$hashKey
            }
            debugger 
            beer.data.listId = beer.list
           debugger 
            baseRef.ref(`/users/${user.uid}/beers/${beer.data.id}`).set(beer.data)
        }

        //Gets an entire list from the User's object, not the API
        ls.getList = (list, user) => {
            baseRef.ref(`/users/${user.uid}/beers`).on('value', snapshot => {
                let all = snapshot.val()
                ls.listResults = Object.values(all).filter((beer) => {
                    return beer.listId === list
                })
            })
            return ls.listResults
        }



        ls.deleteBeer = (beer, user) => {
            baseRef.ref(`/users/${user.uid}/beers/${beer.data.id}`).set(null)
            return new Promise((res, rej) => {
                res()
            })
        }

    })

})();