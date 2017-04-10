'use strict';

(function () {

    angular.module('drinkUp').component('login', {
        templateUrl: 'partials/login.html',
        controller: LoginController
    });

    LoginController.$inject = ['$Auth', '$window'];

    function LoginController($Auth, $window) {
        var lc = this;
        lc.$onInit = function () {
            var user = $Auth.getUser();
            if (!user.email) {
                return;
            } else {
                $window.location.href = '/#/search';
            }
        };

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
                        if (existingUser.val()) {
                            $Auth.setUser(existingUser.val());
                            return;
                        } else {
                            var newUser = {
                                uid: user.uid,
                                email: user.email,
                                name: user.displayName,
                                liked: {},
                                hated: {},
                                queued: {}
                            };
                            firebase.database().ref('/users/' + user.uid).set(newUser);
                            $Auth.setUser(newUser);
                            return;
                        }
                    });
                } else {
                    Materialize.toast('You Must Log In To Use This Site ', 4000);
                }
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                Materialize.toast(errorMessage, 4000);
                var email = error.email;
                var credential = error.credential;
                return;
            });
        };
    }
})();