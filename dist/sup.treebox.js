function treeBoxDirective($document, $log) {

	return {
		restrict: 'E',
		scope: {
			data: '=',
			name: '=',
			value: '='
		},
		templateUrl: '../views/treebox.html',
		controller: function ($scope, filterFilter, $document) {

			$scope.types = $scope.data;

			$scope.indexSelected = 1;

			$scope.breadCrumbList = [];
			$scope.parentType = null;
			$scope.listVisible = false;

			$scope.widgetName = 'tw-' + $scope.name;

			$document.bind('click', function(event){

				var target = angular.element(event.target)
				if (!target.closest('.' + $scope.widgetName).length) {
					$scope.closeList();
				}

				$scope.$apply();
			});

			$scope.openList = function() {
				$scope.savedItem = null;
				$scope.savedItem = $scope.findTypeById($scope.value);
				$scope.listVisible = true;
				$scope.inputFocus = true;
			}

			$scope.toggleList = function() {
				if ($scope.listVisible) {
					$scope.listVisible = false
				}
				else {
					$scope.openList();
				}
			}

			$scope.closeList = function() {
				//if ($scope.savedItem) {
				$scope.listVisible = false;
				$scope.printItem = $scope.savedItem;
				if ($scope.savedItem && $scope.savedItem.id) {
					$scope.value = $scope.savedItem.id;
				}
				//}
			}

			$scope.resetSelection = function() {
				$scope.printItem = null;
				$scope.search = null;
				$scope.showListByParent();
				$scope.openList();
			}

			$scope.showList = function(event, inputValue) {

				$scope.isFocused = true;
				$scope.search = inputValue;

				$log.debug(event);
				if (event.keyCode == 8) { //backspacekey

					if (!inputValue || inputValue === '') {
						$scope.searchVisible = false;
						$scope.showListByParent();
					}

				}
				else if (event.keyCode == 27) { //escape
					$scope.toggleList();
				}
				else if (event.keyCode == 37) { // arrow left
					if ($scope.findTypeById($scope.parentType)) {
						$scope.showListByParent($scope.findTypeById($scope.parentType).parent);
					}
				}
				else if (event.keyCode == 38) { //arrow up
					if ($scope.selectedItem > -1) {
						$scope.selectedItem--;
					}
					else {
						if ($scope.typesListed && $scope.typesListed.length) {
							$scope.selectedItem = $scope.typesListed.length-1;
						}
					}
				}
				else if (event.keyCode == 40) { //arrow down
					if ($scope.typesListed && $scope.typesListed.length && $scope.selectedItem < ($scope.typesListed.length-1)) {
						$scope.selectedItem++;
					}
					else {
						if ($scope.findTypeById($scope.parentType)) {
							$scope.selectedItem = -1;
						}
						else {
							$scope.selectedItem = 0;
						}
					}
				}
				else if (event.keyCode == 13 || event.keyCode == 39) { // enter key or arrow right
					if ($scope.selectedItem === -1) {
						if ($scope.findTypeById($scope.parentType)) {
							$scope.showListByParent($scope.findTypeById($scope.parentType).parent);
						}
					}
					else {
						$scope.showListByParent($scope.typesListed[$scope.selectedItem].id);
					}
				}
				else {

					$scope.searchVisible = false;
					if ($scope.search) {
						$scope.searchVisible = true;
						var retVal = filterFilter($scope.types, {'value': inputValue})
						//alert(inputValue);
						$scope.selectedItem = 0;
						$scope.typesListed = retVal;
					}

				}

				var someElement = document.getElementsByClassName('selected');
				angular.element(document.getElementsByClassName('list-unstyled')).scrollToElementAnimated(someElement, 20);

				//console.log("T", $scope.searchVisible);
			}

			$scope.hoverItem = function() {
				console.log('test');
			}

			$scope.toggleSubmenu = function() {

			}

			$scope.findTypeById = function(id) {
				var retval;
				angular.forEach($scope.types, function(item, i) {
					if (item.id === id) {
						//console.log(item);
						retval = item;
						return false;
					}
				});

				return retval;
			};

			$scope.generateBreadCrumb = function(id, noResetBreadCrumb) {

				if (!id) return;
				var type = $scope.findTypeById(id);

				if (!noResetBreadCrumb)
					//console.log("reset");
					$scope.breadCrumbList = [];

				if (type && type.parent) {
					$scope.generateBreadCrumb(type.parent, true);
				}

				$scope.breadCrumbList.push(type);

			};

			$scope.showListByParent = function(parentId) {
				var retVal = [];

				$scope.breadCrumbList = [];
				$scope.generateBreadCrumb(parentId);
				$scope.parentType = parentId;

				angular.forEach($scope.types, function(item, i) {

					if (!parentId) {
						if (item && !item.parent) {
							retVal.push(item);
						}
					}
					else {
						if (item && item.parent === parentId) {
							retVal.push(item);
						}
					}

				});

				$scope.selectedItem = 0;
				$scope.typesListed = retVal;
				//$log.debug($scope.typesListed, $scope.typesListed.length)

				if ($scope.typesListed.length == 0) {
					var tmpItem = $scope.findTypeById(parentId);
					$scope.savedItem = tmpItem;
					$scope.indexSelected = 1;
					$scope.breadCrumbList = [];
					$scope.parentType = null;
					$scope.listVisible = false;
					$scope.closeList();
					$scope.search = null;
					$scope.searchVisible = false;
					$scope.showListByParent(); // reset
				}
			}

			/* Initi */
			$scope.showListByParent();
			if ($scope.value) {
				$scope.printItem = $scope.findTypeById($scope.value);
				$scope.savedItem = $scope.findTypeById($scope.value);
			}


		}
	}

};

angular
	.module('sup.treebox', [
		'keyboard',
		'duScroll'
	])
	.directive('supTreeBox', treeBoxDirective);