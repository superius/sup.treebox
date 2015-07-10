angular
    .module('sup.treebox', [
		'keyboard',
        'duScroll'
    ])
    .directive('supTreeBox', treeBoxDirective)
    .directive('focusOnCondition', focusOnCondition)
    .directive('outsideClick', outsideClick)
    .controller('TreeBoxCtrl', treeBoxController);


function treeBoxController($scope, $rootScope, $http, $log, $window) {

		$scope.treeBoxData = [

		{id: 1, value: "Trošak", hasChilds: true},
		{id: 4, value: "Imovina", hasChilds: true},

		/* Trošak */
		{id: 5, value: "Reprezentacija", parent: 1},
		{id: 6, value: "Ured", parent: 1, hasChilds: true},
		{id: 7, value: "Potrošni materijal",
                description: "Npr. uredski papir, kemijske, markeri...",
                parent: 6},
		{id: 8, value: "Reprezentacija", parent: 6},
		{id: 9, value: "Režije", parent: 1, hasChilds: true},
		{id: 10, value: "Namještaj", parent: 6},
		{id: 11, value: "Namještaj", parent: 6},
		{id: 12, value: "Namještaj", parent: 6},
		{id: 13, value: "Namještaj", parent: 6},
		{id: 14, value: "Namještaj", parent: 6},

        /* Imovina */
        {id: 15, value: "Auto", parent: 4, hasChilds: false},

        /* Režije */
        {id: 91, value: "Struja", parent: 9},
        {id: 92, value: "Voda", parent: 9},
        {id: 93, value: "Komunalne usluge", parent: 9},

		];

        $scope.frm = {};

        $scope.frm.tw1 = 15;

}

function focusOnCondition($timeout) {

    var checkDirectivePrerequisites = function (attrs) {
      if (!attrs.focusOnCondition && attrs.focusOnCondition != "") {
            throw "FocusOnCondition missing attribute to evaluate";
      }
    }

    return {
        restrict: "A",
        link: function (scope, element, attrs, ctrls) {
            checkDirectivePrerequisites(attrs);

            scope.$watch(attrs.focusOnCondition, function (currentValue, lastValue) {
                if(currentValue == true) {
                    $timeout(function () {
                        element.focus();
                    });
                }
            });
        }
    };
}
