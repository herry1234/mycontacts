angular.module('starter.register', ['starter.services', 'ionic'])
    .controller('RegisterCtrl', function ($scope, User, $ionicPopup, $location) {

        $scope.registration = {};

        /**
         * Redirect user to the app if already logged in
         */
        if (User.getCachedCurrent()!==null) {
            $location.path('tab/home');
        }

        /**
         * @name register()
         * @desctiption
         * register a new user and login
         */
        $scope.register = function () {
            $scope.registration.created = new Date().toJSON();

            $scope.user = User.create($scope.registration)
                .$promise
                .then(function (res) {
                  User.login({include: 'user', rememberMe: true}, $scope.registration)
                  .$promise
                  .then(function (res) {
                    $location.path('tab/contacts')
                  }, function (err) {
                    $scope.loginError = err;
                    $scope.showAlert(err.statusText, err.data.error.message);
                  })

                }, function (err) {
                    $scope.registerError = err;
                    $scope.showAlert(err.statusText, err.data.error.message);
                });
        };

        $scope.showAlert = function (title, errorMsg) {
            var alertPopup = $ionicPopup.alert({
                title: title,
                template: errorMsg
            });
            alertPopup.then(function () {
                console.log($scope.loginError);
            });
        };
    });
