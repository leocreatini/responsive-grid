(function() {
	'use strict';

	angular
		.module('app')
		.directive('tile', tile);

	function tile() {
		var directive = {
			link: link,
			restricted: 'E',
			templateUrl: '/app/tile/tile.html',
			controllerAs: 'vm',
			replace: true
		}; //directive{}

		return directive;

		function link(scope,elem,attrs) {

		} //link()

	} //tile()

} ()); //IIFE