
var phonecatApp=angular.module('phonecatApp', []);
/*.config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }
);*/
phonecatApp.controller('PhoneListCtrl', function ($scope) {
	console.log("This is it !");
	$scope.paragraphTitle="This is my mobile list";
	$scope.name="World Wide Web !";
	$scope.phones = [
	{'name':'Nexus S','snippet':'Fast just got faster with Nexus S.'},
	{'name':'Motorola XOOMTM with Wi- Fi','snippet':'The Next, Next Generation tablet.'},
	{'name':'MOTOROLA XOOMTM','snippet':'The Next, Next Generation tablet.'}
	];
});