'use strict';

/* jasmine specs for controllers go here */

describe("A always true suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("A always false suite", function() {
  it("contains spec with an expectation to be false", function() {
    expect(false).toBe(false);
  });
});

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){

    beforeEach(module('phonecatApp'));

    it('should create "phones" model with 3 phones', inject(function($controller) {
      var scope = {},
      ctrl = $controller('PhoneListCtrl', {$scope:scope});

      expect(scope.phones.length).toBe(3);
    }));

  });
});

describe('My first suite', function(){
  beforeEach(module('phonecatApp'));
  it("should behave as it should be", inject(function($controller) {
    var scope = {},
    ctrl = $controller('PhoneListCtrl', {$scope:scope});

    expect(scope.name).toBe('World Wide Web !');
  }));

 it("size of phone list should be 3", inject(function($controller) {
    var scope = {},
    ctrl = $controller('PhoneListCtrl', {$scope:scope});

    expect(scope.size).toBe(3);
  }));
});