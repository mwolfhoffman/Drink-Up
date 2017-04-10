'use strict';

(function () {

    angular.module('drinkUp').component('login', {
        templateUrl: 'partials/login.html',
        controller: LoginController
    });

    LoginController.$inject = ['AuthService', '$window'];

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


        lc.loginUser = function (provider) {
            if (provider === 'google') {
                provider = new firebase.auth.GoogleAuthProvider();
            }
            if (provider === 'facebook') {
                provider = new firebase.auth.FacebookAuthProvider();
            }

            firebase.auth().signInWithPopup(provider).then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
                if (user) {
                    firebase.database().ref('/users/' + user.uid).on('value', function (existingUser) {
                        console.log(existingUser.val());
                        if (existingUser.val()) {
                            AuthService.setUser(existingUser.val());
                            return;
                        } else {
                            console.log(user);
                            var newUser = {
                                uid: user.uid,
                                email: user.email,
                                name: user.displayName,
                                liked: {},
                                hated: {},
                                queued: {}
                            };
                            firebase.database().ref('/users/' + user.uid).set(newUser);
                            AuthService.setUser(newUser);
                            return;
                        }
                    });
                } else {
                    Materialize.toast('You Must Log In To Use This Site ', 4000);
                }
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                Materialize.toast(errorMessage, 4000);
                var email = error.email;
                var credential = error.credential;
                return;
            });
        };
    }
})();

// lc.loginWithFacebook = function () {
//     console.log('clicked')
//     var fbProvider = new firebase.auth.FacebookAuthProvider()
//     firebase.auth().signInWithPopup(fbProvider)
//         .then(function (result) {
//             console.log(result)
//             // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//             var token = result.credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//             console.log('we got a user ', user)
//             debugger
//             if (user) {
//                 firebase.database().ref(`/users/${user.uid}`).on('value', (u) => {
//                     if (u) {
//                         AuthService.setUser(u.val())
//                     } else {
//                         AuthService.setUser(user)
//                     }
//                 })
//             } else {
//                 Materialize.toast('You Must Log In To Use This Site ', 4000)
//             }
//             // ...
//         }).catch(function (error) {
//             console.log(error)
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(errorMessage)
//             Materialize.toast(errorMessage, 4000)
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//             return
//         });
// }

// lc.loginWithGoogle = () => {
//     console.log('firebase  ', firebase)
//     var gProvider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(gProvider).then(function (result) {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = result.credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;
//         debugger
//         if (user) {
//             debugger
//             firebase.database().ref(`/users/${user.uid}`).on('value', (existingUser) => {
//                 console.log(existingUser.val())
//                 if (existingUser.val()) {
//                     debugger
//                     AuthService.setUser(existingUser.val())
//                     return
//                 } else {
//                     console.log(user)
//                     debugger
//                     var newUser = {
//                         uid: user.uid,
//                         email: user.email,
//                         name: user.displayName,
//                         liked: {},
//                         hated: {},
//                         queued: {}
//                     }
//                     firebase.database().ref(`/users/${user.uid}`).set(newUser)
//                     AuthService.setUser(newUser)
//                     return
//                 }
//             })
//         } else {
//             Materialize.toast('You Must Log In To Use This Site ', 4000)
//         }
//         // ...
//         // ...
//     }).catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(errorMessage)
//         Materialize.toast(errorMessage, 4000)
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//         return
//     });
// }
// }


// })();