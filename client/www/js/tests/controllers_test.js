'use strict';

describe('starter.controllers module', function() {

  beforeEach(module('ui.router'));
  beforeEach(module('starter.services'));
  beforeEach(module('starter.controllers'));
  var scope;
  beforeEach(inject(function($rootScope, $controller) {
    // $rootScope = $injector.get('$rootScope');
    // $controller('ContactsCrtl',{$scope:scope});
    // $controller = $injector.get('$controller');
    scope = $rootScope.$new();
  }));
  describe('contacts controller', function() {
    it('should have controller defined.', inject(function($controller, $rootScope, $state) {
      //spec body
      var view1Ctrl = $controller('ContactsCtrl', {
        $scope: scope,
        $state: $state
      });
      // var view1Ctrl = $controller('ContactsCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
