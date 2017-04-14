(function () {

    angular.module('drinkUp')
        .component('login', {
            templateUrl: 'partials/login.html',
            controller: LoginController
        })

    LoginController.$inject = ['$Auth', '$window', '$state']

    function LoginController($Auth, $window, $state) {

        var lc = this;
        lc.$onInit = function () {
            let user = $Auth.getUser()
            debugger 
            if (!user.email) {
                return
            }
            else {
                console.log('alraedy logged in', user)
                // $window.ngLocation.href = '/Drink-Up/#/search'
                $state.go('search')
            }
        }


        lc.loginUser = (provider) => {
            if (provider === 'google') {
                provider = new firebase.auth.GoogleAuthProvider();
            }
            if (provider === 'facebook') {
                provider = new firebase.auth.FacebookAuthProvider()
            }

            firebase.auth().signInWithPopup(provider).then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
                if (user) {
                    firebase.database().ref(`/users/${user.uid}`).on('value', (existingUser) => {
                        console.log(existingUser.val())
                        if (existingUser.val()) {
                            $Auth.setUser(existingUser.val())
                            return
                        } else {
                            console.log(user)
                            var newUser = {
                                uid: user.uid,
                                email: user.email,
                                name: user.displayName,
                                liked: {},
                                hated: {},
                                queued: {}
                            }
                            firebase.database().ref(`/users/${user.uid}`).set(newUser)
                            $Auth.setUser(newUser)
                            return
                        }
                    })
                } else {
                    Materialize.toast('You Must Log In To Use This Site ', 4000)
                }
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                Materialize.toast(errorMessage, 4000)
                var email = error.email;
                var credential = error.credential;
                return
            });
        }
    }
})();
