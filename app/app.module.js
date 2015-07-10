angular
	.module('sup.treebox', [
		'keyboard',
		'duScroll',
		'templates'
	])
	.directive('supTreeBox', treeBoxDirective);