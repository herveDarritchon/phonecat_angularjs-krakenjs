'use strict';

console.log("This is it at " + new Date() + " !");

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

describe('My first suite', function(){
	beforeEach(module('phonecatApp'));
	it("should behave as it should be", inject(function($controller) {
		var scope = {},
		ctrl = $controller('PhoneListCtrl', {$scope:scope});

		expect(scope.name).toBe('World Wide Web !');
	}));

});

describe('PhoneCat controllers', function() {

	describe('PhoneListCtrl', function(){
		var scope, ctrl;

		beforeEach(module('phonecatApp'));

		beforeEach(inject(function($controller) {
			scope = {};
			ctrl = $controller('PhoneListCtrl', {$scope:scope});
		}));

		it('should create "phones" model with 3 phones', function() {
			expect(scope.phones.length).toBe(3);
		});


		it('should set the default value of orderProp model', function() {
			expect(scope.orderProp).toBe('age');
		});
	});
});