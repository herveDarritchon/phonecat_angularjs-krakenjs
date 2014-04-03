'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

	beforeEach(function() {
		browser().navigateTo('../app/index.html');
	});

});

describe('PhoneCat App', function() {

	describe('Phone list view', function() {

		beforeEach(function() {
			browser().navigateTo('../../app/index.html');
		});


		it("Number of row should be 8", function() {
			expect(repeater('.table-row').count()).toBe(8);
		});

	});
});


describe('PhoneCat App', function() {

	describe('Phone list view', function() {

		beforeEach(function() {
			browser().navigateTo('../../app/index.html');
		});


		it('should filter the phone list as user types into the search box', function() {
			expect(repeater('.phones li').count()).toBe(3);

			input('query').enter('nexus');
			expect(repeater('.phones li').count()).toBe(1);

			input('query').enter('motorola');
			expect(repeater('.phones li').count()).toBe(2);
		});

		it('should display the current filter value within an element with id "status"',
			function() {
				expect(element('#status').text()).toMatch(/Current filter: \s*$/);

				input('query').enter('nexus');

				expect(element('#status').text()).toMatch(/Current filter: nexus\s*$/);

				//alternative version of the last assertion that tests just the value of the binding
				using('#status').expect(binding('query')).toBe('nexus');
			});

		it('should be possible to control phone order via the drop down select box',
			function() {
				//let's narrow the dataset to make the test assertions shorter
				input('query').enter('tablet');

				expect(repeater('.phones li', 'Phone List').column('phone.name')).
				toEqual(["Motorola XOOM\u2122 with Wi-Fi",
					"MOTOROLA XOOM\u2122"]);

				select('orderProp').option('Alphabetical');

				expect(repeater('.phones li', 'Phone List').column('phone.name')).
				toEqual(["MOTOROLA XOOM\u2122",
					"Motorola XOOM\u2122 with Wi-Fi"]);
			});
	});
});


