angular
	.module('sup.treebox.example', [
		'sup.treebox'
	])
	.controller('TreeBoxCtrl', treeBoxController);


function treeBoxController($scope, $rootScope, $http, $log, $window) {

    /* Example data */
    $scope.treeBoxData = [

        {id: 1, value: "Cars", hasChilds: true},
        {id: 4, value: "Boat1", hasChilds: false},
        {id: 4, value: "Boat2", hasChilds: false},
        {id: 4, value: "Boat3", hasChilds: false},
        {id: 4, value: "Boat4", hasChilds: false},
        {id: 4, value: "Boat5", hasChilds: false},
        {id: 4, value: "Boat6", hasChilds: false},

        {id: 15, value: "Audi", parent: 1, hasChilds: true},
        {id: 16, value: "BMW", parent: 1, hasChilds: false},
        {id: 17, value: "Mercedes", parent: 1, hasChilds: false},

        {id: 21, value: "A3", parent: 15, hasChilds: false},
        {id: 22, value: "A6", parent: 15, hasChilds: false},
        {id: 23, value: "R8", parent: 15, hasChilds: false},

    ];

    $scope.frm = {};
    $scope.frm.tw1 = {id: 15}; // selected item

}