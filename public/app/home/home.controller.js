(function(){
	'use strict';

	angular
		.module('app')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$scope', '$log', '$location', 'DataService'];

	function HomeController($scope, $log, $location, DataService) {
		/*jshint validthis: true*/
		var vm = this;
		vm.layoutType = 'grid';
		vm.page = {
			header: "Responsive Grids",
			description: "This is an example of custom responsive grids for basic articles. Content was sourced from TheGuardian.com"
		}; //vm.page{}

		vm.tiles = DataService.data;
		vm.linkToSite = linkToSite;

		//Functions
		function linkToSite(link) {
			console.log(link); //REMOVE THIS WHEN DONE TESTING
			$location.url(link);
		}


	} //HomeController()

}()); //IIFE