angular.module('starter.login', ['starter.services','ionic'])
    .controller('LoginCtrl', function ($scope, User, $state, $ionicPopup) {
        if (User.getCachedCurrent()!==null) {
          //  $location.path('tab/contacts');
          $state.go('tab.contacts-index');
        }
        /**
         * Currently you need to initialiate the variables
         * you use whith ng-model. This seems to be a bug with
         * ionic creating a child scope for the ion-content directive
         */
        $scope.credentials = {};

        $scope.showAlert = function (title, errorMsg) {
            var alertPopup = $ionicPopup.alert({
                title: title,
                template: errorMsg
            });
            alertPopup.then(function (res) {
                console.log($scope.loginError);
            });
        };
        $scope.login = function () {
            $scope.loginResult = User.login({include: 'user', rememberMe: true}, $scope.credentials,
                function () {
                  $state.go('tab.contacts-index');
                    // var next = $location.nextAfterLogin || 'tab/contacts';
                    // $location.nextAfterLogin = null;
                    // $location.path(next);
                },
                function (err) {
                    $scope.loginError = err;
                    $scope.showAlert(err.statusText, err.data.error.message);
                }
            );
        };
        $scope.goToRegister = function () {
          console.log("GoToRegister");
            // $location.path('register');
            $state.go('register');
        };


    });
