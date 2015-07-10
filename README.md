# sup.treebox
Treebox-select-like angularjs directive

## Requirements

- [AngularJS](http://angularjs.org/)

## Setup

### Install using bower
  `$ bower install sup.treebox --save`

### Include it in your project
```
<script type="text/javascript" src="bower_components/sup.treebox/dist/sup.treebox.js"></script>
```
### Require 'sup.treebox' inside your angular module
```javascript
angular
	.module('sup.treebox.example', [
		'sup.treebox'
	])
	.controller('TreeBoxCtrl', treeBoxController);
	
function treeBoxController($scope, $rootScope, $http, $log, $window) {
	/* Example data */
	$scope.treeBoxData = [

		{id: 1, value: "Group A", hasChilds: true},
		{id: 4, value: "Group B", hasChilds: true},

		{id: 15, value: "Child 1", parent: 4, hasChilds: false}

	];
	
	$scope.frm = {};
	$scope.frm.tw1 = 15; // selected item

}
	
```
### Use <sup-tree-box> directive inside your template file
```html
<sup-tree-box data="treeBoxData" name="'tw1'" value="frm.tw1"></sup-tree-box>
```
