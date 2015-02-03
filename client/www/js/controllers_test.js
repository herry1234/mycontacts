'use strict';

describe('starter.controllers module', function() {

  beforeEach(module('starter.controllers'));

  describe('contacts controller', function(){

    it('should have controller defined.', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('ContactsCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
