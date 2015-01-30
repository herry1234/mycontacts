angular.module('starter.services', ['ngResource'])

/**
*
*/
.factory('ContactsService', function($resource) {
  // Might use a resource here that returns a JSON array

//   // Some fake testing data
//   var contacts = [
// { id: 0, firstname: 'Herry', lastname : 'Wang', phone: "12345" },
// { id: 1, firstname: 'Harry',lastname: "Porter", phone: "22345"},
// { id: 2, firstname: 'John',lastname: "Moshe", phone: "32345"},
// { id: 3, firstname: 'Leo',lastname: "Fancy", phone: "42345"},
// ];
return $resource('http://localhost:3000/api/ppl/:id');


// return {
//   all: function() {
//     return $resource('http://localhost:3000/api/ppl');
//     // return contacts;
//   },
//   get: function(Id) {
//     // Simple index lookup
//     return contacts[Id];
//   },
//   getUid : function() {
//     return contacts.length;
//   },
//   add: function(contact) {
//     console.log("adding " + contact);
//     contact.id = this.getUid();
//     contacts.push(contact);
//     return contact;
//   }
// }
});
