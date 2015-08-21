(function(){
	'use strict';

	angular
		.module('responsiveGrid')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$scope', '$log', '$location', 'DataService'];

	function HomeController($scope, $log, $location, DataService) {
		/*jshint validthis: true*/
		var vm = this;
		vm.layoutType = 'grid';
		vm.page = {
			header: "The Grid",
			description: "A digital frontier. I tried to imagine what custom responsive grids looked like in the CSS engine. Were they lanyards in a swimming pool, white-picket fences, or something else entirely?",
			credit: "Content was sourced from TheGuardian.com."
		}; //vm.page{}

		vm.tiles = DataService.data;

	} //HomeController()

}()); //IIFE
