'use strict';

angular.module('puzzle', ['core'])
.config(function ($stateProvider) {
	$stateProvider
	.state('puzzle', {
		url: '/puzzleBasic',
		templateUrl: 'app/puzzle/puzzleBasic.html',
		controller: 'puzzleCtrl',
		authenticate: false
	})
	.state('puzzleAdvanced', {
		url: '/puzzleAdvanced',
		templateUrl: 'app/puzzle/puzzleAdvanced.html',
		controller: 'puzzleCtrl',
		authenticate: true
	});
});

