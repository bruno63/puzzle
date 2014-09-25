'use strict';

angular.module('puzzle')
.controller('puzzleCtrl', function($scope, $translatePartialLoader, AppConfig) {
	AppConfig.setCurrentApp('Puzzle', 'fa-puzzle-piece', 'puzzle', 'app/puzzle/menu.html');
	$translatePartialLoader.addPart('puzzle');

 	$scope.puzzles = [
	 	{ src: 'app/puzzle/img/cat.jpg',         title: 'Cat',       rows: 4, cols: 4 },
	 	{ src: 'app/puzzle/img/elephant.jpg',    title: 'Elephant',  rows: 4, cols: 4 },
//	 	{ src: 'app/puzzle/img/fish.jpg',        title: 'Fish',      rows: 4, cols: 4 },
	 	{ src: 'app/puzzle/img/ostrich.jpg',     title: 'Ostrich',   rows: 4, cols: 4 },
	 	{ src: 'app/puzzle/img/shark.jpg',       title: 'Shark',     rows: 4, cols: 4 },
	 	{ src: 'app/puzzle/img/sheep.jpg',       title: 'Sheep',     rows: 4, cols: 4 },
	 	{ src: 'app/puzzle/img/zebra.jpg',       title: 'Zebra',     rows: 4, cols: 4 },
 	];
});
