# sup.treebox
Treebox-select-like angularjs directive

# Requirements

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
```
### Use <sup-tree-box> directive inside your template file
```html
<sup-tree-box data="treeBoxData" name="'tw1'" value="frm.tw1"></sup-tree-box>
```
