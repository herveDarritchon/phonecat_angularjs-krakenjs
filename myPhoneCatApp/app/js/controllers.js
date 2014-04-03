 
var phonecatApp=angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
	$scope.paragraphTitle="This is my mobile list";
	$scope.name="World Wide Web !";
	$scope.phones = [
	{'name': 'Nexus S',
	'snippet': 'Fast just got faster with Nexus S.',
	'age': 1},
	{'name': 'Motorola XOOM™ with Wi-Fi',
	'snippet': 'The Next, Next Generation tablet.',
	'age': 2},
	{'name': 'MOTOROLA XOOM™',
	'snippet': 'The Next, Next Generation tablet.',
	'age': 3}
	];
	 $scope.orderProp = 'age';
	$scope.size=$scope.phones.length;
});