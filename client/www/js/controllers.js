angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('ContactsCtrl', function($scope, ContactsService) {
  // $scope.contacts = ContactsService.all();
  $scope.contacts = ContactsService.find();
  $scope.count = ContactsService.count();
  console.log($scope.count);
})

// A simple controller that shows a tapped item's data
.controller('ContactDetailCtrl', function($scope, $stateParams, $location,ContactsService) {

  // $scope.contact = ContactsService.get($stateParams.Id);
  $scope.contact = ContactsService.findById({id:$stateParams.Id});
  $scope.delete = function() {
    ContactsService.deleteById({id:$stateParams.Id});
    $location.path('tab/contacts');
  }
})
.controller('AppUserCtrl', function($scope,$location,User) {
  $scope.currentUser = User.getCurrent();
  $scope.logout = function () {
    User.logout(function () {
      $location.path('/login');
    });
  }
})

.controller('ContactInsertCtrl', function($scope, $stateParams,ContactsService ) {

  $scope.contact = {gender:"男"};
  $scope.addName = function(contact) {
    ContactsService.create(contact);
  };

});
