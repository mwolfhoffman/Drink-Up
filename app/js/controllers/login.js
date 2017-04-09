(function () {

    angular.module('drinkUp')
        .component('login', {
            templateUrl: 'partials/login.html',
            controller: LoginController
        })

    LoginController.$inject = ['AuthService', '$window']

    function LoginController(AuthService, $window) {

        var lc = this;

        //  lc.$onInit = function () {
        //     let user = AuthService.getUser()
        //     debugger
        //     if (!user==={}) {
        //        return
        //     }
        //     else{
        //         console.log('alraedy logged in', user)
        //         $window.location.href = '/#/search'
        //     }
        // }

        lc.loginWithFacebook = function () {
            console.log('clicked')
            var fbProvider = new firebase.auth.FacebookAuthProvider()
            firebase.auth().signInWithPopup(fbProvider)
                .then(function (result) {
                    console.log(result)
                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log('we got a user ', user)
                    debugger
                    if (user) {
                        console.log('$window ', $window.location.href)
                        // $window.location.href = '/#/search'
                        console.log('redirect? ', $window.location.href)
                        AuthService.setUser(user)
                    } else {
                        Materialize.toast('You Must Log In To Use This Site ', 4000)
                    }
                    // ...
                }).catch(function (error) {
                    console.log(error)
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage)
                    Materialize.toast(errorMessage, 4000)
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                    return
                });
        }

        lc.loginWithGoogle = () => {
            var gProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(gProvider).then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log('we got a user ', user)
                debugger
                if (user) {
                    AuthService.setUser(user)
                    $window.location.href = '/#/search'
                    // $location.path('/search')
                } else {
                    Materialize.toast('You Must Log In To Use This Site ', 4000)
                }

                // ...
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                Materialize.toast(errorMessage, 4000)
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                return
            });
        }
    }
})();
