angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('ContactsCtrl', function($scope, ContactsService) {
  // $scope.contacts = ContactsService.all();
  $scope.contacts = ContactsService.query();
})

// A simple controller that shows a tapped item's data
.controller('ContactDetailCtrl', function($scope, $stateParams, ContactsService) {

  // $scope.contact = ContactsService.get($stateParams.Id);
  $scope.contact = ContactsService.get({id:$stateParams.Id});
})

.controller('ContactInsertCtrl', function($scope, $stateParams, ContactsService) {

  var all = ContactsService.query(function() {
    console.log("index " + all.length);
    $scope.contact = {gender:"Male", id:all.length};
  });

  $scope.addName = function(contact) {
    console.dir(contact);
    // contact.id = $index+1;
    ContactsService.save(contact);
  };

});
