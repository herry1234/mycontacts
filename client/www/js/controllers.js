angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('ContactsCtrl', function($scope, ContactsService) {
  // $scope.contacts = ContactsService.all();
  ContactsService.find()
  .$promise
  .then(function(results){
    $scope.contacts = results;
    $scope.count = ContactsService.count();
  });

})

.controller('ContactDetailCtrl', function($scope, $stateParams,$state,ContactsService,$ionicPopup) {

  $scope.contact = ContactsService.findById({id:$stateParams.Id});
  $scope.delete = function() {
    var confirmpop = $ionicPopup.confirm({
      title: "Delete contact",
      template: "Are you sure you want to delete this contact ?"
    });
    confirmpop.then(function(res) {
      if(res) {
        ContactsService.deleteById({id:$stateParams.Id});
        $state.go('tab.contacts-index');
      } else{
        //do nothing;
      }
    })
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
  $scope.updateit = function() {
    console.log($scope.contact);
    $scope.contact.$save(
      function (res) {
        $scope.showAlert("OK","Saved!");
        // $state.go('tab.contacts-index');
        }, function (err) {
        $scope.insertError = err;
        $scope.showAlert(err.statusText, err.data.error.message);
      }
    );
    // .$promise
    // .then(function (res) {
    //     $state.go('tab.contacts-index');
    //   }, function (err) {
    //   $scope.insertError = err;
    //   $scope.showAlert(err.statusText, err.data.error.message);
    // });
  }
})
.controller('AppUserCtrl', function($scope,User) {
  $scope.currentUser = User.getCurrent();
  $scope.logout = function () {
    User.logout(function () {
      $state.go('login');
    });
  }
})

.controller('ContactInsertCtrl', function($scope, $stateParams,ContactsService,$state,$ionicPopup ) {

  $scope.contact = { "gender":"男"};
  $scope.showAlert = function (title, errorMsg) {
    var alertPopup = $ionicPopup.alert({
      title: title,
      template: errorMsg
    });
    alertPopup.then(function () {
      console.log($scope.loginError);
    });
  };
  $scope.addName = function() {
    ContactsService.create($scope.contact)
    .$promise
    .then(function (res) {
        $state.go('tab.contacts-index');
      }, function (err) {
      $scope.insertError = err;
      $scope.showAlert(err.statusText, err.data.error.message);
    });
    // ContactsService.create(contact);
  };

});
