# sup.treebox
Treebox-select-like angularjs directive

# Requirements

- [AngularJS](http://angularjs.org/)

## Setup

1. Install using bower
  `$ bower install sup.treebox --save`
2. Include it in your project
 

  ```<script type="text/javascript" src="bower_components/sup.treebox/dist/sup.treebox.js"></script>```
3. Require 'sup.treebox' inside your angular module
```javascript
angular
	.module('sup.treebox.example', [
		'sup.treebox'
	])
	.controller('TreeBoxCtrl', treeBoxController);

