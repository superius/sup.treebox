angular
	.module('sup.treebox.example', [
		'sup.treebox'
	])
	.controller('TreeBoxCtrl', treeBoxController);


function treeBoxController($scope, $rootScope, $http, $log, $window) {

    /* Example data */
    $scope.treeBoxData = [

        {id: 1, value: "Cars"},
        {id: 4, value: "Boat1"},
        {id: 4, value: "Boat2"},
        {id: 4, value: "Boat3"},
        {id: 4, value: "Boat4"},
        {id: 4, value: "Boat5"},
        {id: 4, value: "Boat6"},

        {id: 15, value: "Audi", parent: 1},
        {id: 16, value: "BMW", parent: 1},
        {id: 17, value: "Mercedes", parent: 1},

        {id: 21, value: "A3", parent: 15},
        {id: 22, value: "A6", parent: 15},
        {id: 23, value: "R8", parent: 15},

    ];

    $scope.frm = {};
    $scope.frm.tw1 = {id: 15}; // selected item

}