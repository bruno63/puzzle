'use strict';

angular.module('puzzle')
.controller('puzzleCtrl', function($scope, $translatePartialLoader, $log, cfg) {
	cfg.GENERAL.CURRENT_APP = 'puzzle';
	$translatePartialLoader.addPart('puzzle');
	$log.log('puzzleCtrl/cfg = ' + JSON.stringify(cfg, null, '\t'));

 	$scope.puzzles = [
	 	{ src: 'app/puzzle/img/cat.jpg',         title: 'Cat',       rows: 4, cols: 4 },
	 	{ src: 'app/puzzle/img/elephant.jpg',    title: 'Elephant',  rows: 4, cols: 4 },
//	 	{ src: 'app/puzzle/img/fish.jpg',        title: 'Fish',      rows: 4, cols: 4 },
	 	{ src: 'app/puzzle/img/ostrich.jpg',     title: 'Ostrich',   rows: 4, cols: 4 },
	 	{ src: 'app/puzzle/img/shark.jpg',       title: 'Shark',     rows: 4, cols: 4 },
	 	{ src: 'app/puzzle/img/sheep.jpg',       title: 'Sheep',     rows: 4, cols: 4 },
	 	{ src: 'app/puzzle/img/zebra.jpg',       title: 'Zebra',     rows: 4, cols: 4 },
 	];
	$scope.puzzle = $scope.puzzles[2];

	$scope.showInfo = function() {
		$log.log('puzzleCtrl.showInfo() = ' + cfg.puzzle.SHOW_INFO);
		return cfg.puzzle.SHOW_INFO;
	};

	$scope.solve = function() {
		$scope.puzzle.api.solve();
	};

	$scope.shuffle = function() {
		$scope.puzzle.api.shuffle();
	};
});
