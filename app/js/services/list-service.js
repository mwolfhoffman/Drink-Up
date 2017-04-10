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

        ls.deleteBeer = (beer, user) => {
            baseRef.ref(`/users/${user.uid}/${beer.list}/${beer.data.id}`).set(null)
            return new Promise((res, rej) => {
                res()
            })
        }




    })

})();