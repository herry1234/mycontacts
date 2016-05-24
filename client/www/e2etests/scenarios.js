'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /login when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("http://localhost:3000/index.html#/login");
  });
  it('should login successfully', function() {
    element(by.model('credentials.username')).sendKeys('abcd');
    element(by.model('credentials.password')).sendKeys('1234');
    element(by.css('.ion-log-in')).click();
    expect(browser.getLocationAbsUrl()).toMatch("http://localhost:3000/index.html#/tab/contacts");
  });


  describe('contacts list', function() {

    beforeEach(function() {
      browser.get('index.html#/tab/contacts');
    });


    it('should render view1 when user navigates to /view1', function() {
      //expect(element(by.model('count')).element(by.tagName('p')).getText()).
      //expect(element(by.model('count')).element(by.css('.ng-binding')).getText()).
      //var el = element(by.model('count')).element(by.tagName('p'));
      var el = element.all(by.css('.item-content')).first().element(by.tagName('p'));
      el.getText().then(function(text) {
        expect(text).toMatch(/电话: 13636321954/);
      });

    });

  });

});
