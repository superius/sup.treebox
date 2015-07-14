angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("treebox.html","<div class=\"treebox-widget {{widgetName}}\">\n\n	<div  class=\"treebox-container\" >\n\n		<div ng-click=\"toggleList()\" class=\"input-container\" style=\"width: 100%;\">\n			<a ng-show=\"printItem.id && !listVisible\" href=\"\" ng-click=\"resetSelection()\">\n				<span class=\"ion-close-circled pull-right\"></span>\n			</a>\n\n			<p ng-keydown=\"openList()\" ng-focus=\"openList()\"\n							name=\"\" id=\"input\" class=\"\" value=\"\"\n							required=\"required\" pattern=\"\" title=\"\">{{printItem.value || \'Choose from list...\'}}\n				<span ng-show=\"!printItem.id || listVisible\" class=\"ion-arrow-down-b pull-right\"></span>\n\n			</p>\n		</div>\n\n		<div ng-if=\"listVisible\" class=\"{{widgetName}}\">\n\n\n			<!--Active item: {{selectedItem}}-->\n\n\n			<input ng-keyup=\"showList($event, search)\" ng-model=\"search\" type=\"text\"\n							name=\"\" id=\"input\" class=\"form-control search-input input-sm\">\n\n			<div ng-if=\"!searchVisible\" class=\"{{widgetName}}\">\n				<div ng-if=\"parentType\" class=\"text-center breadcrumb\">\n					<small>\n						<a ng-click=\"showListByParent(null)\" href=\"#\">Home</a>\n						<span ng-repeat=\"item in breadCrumbList\">\n							<span class=\"ion-android-arrow-dropright\"></span>\n							<a ng-click=\"showListByParent(item.id)\" href=\"#\">{{item.value}}</a>\n							<small>{{item.description}}</small>\n						</span>\n					</small>\n				</div>\n\n				<ul class=\"list-unstyled\" class=\"{{widgetName}}\">\n					<li><a class=\"{{widgetName}} itm_{{$index}}\" ng-if=\"parentType\" ng-class=\"{\'selected\': selectedItem == -1}\" ng-click=\"showListByParent(findTypeById(parentType).parent)\" href=\"\">\n						<span class=\"ion-android-arrow-dropleft\"></span> Povratak</a>\n					</li>\n					<li ng-repeat=\"type in typesListed\" class=\"{{widgetName}}\">\n						<a class=\"itm_{{$index}}\" ng-class=\"{\'selected\': selectedItem == $index}\" ng-if=\"type.hasChilds\" ng-click=\"showListByParent(type.id)\" href=\"\">\n							{{type.value}} <span class=\"ion-android-arrow-dropright pull-right\"></span>\n						</a>\n						<a class=\"itm_{{$index}}\" ng-if=\"!type.hasChilds\" ng-class=\"{\'selected\': selectedItem == $index}\" ng-click=\"showListByParent(type.id)\" href=\"\">\n							{{type.value}}\n							<br/><small>{{type.description}}</small>\n						</a>\n					</li>\n				</ul>\n			</div>\n\n			<div ng-if=\"searchVisible\" class=\"{{widgetName}}\">\n\n				<ul class=\"list-unstyled\">\n					<li ng-repeat=\"type in typesListed\">\n						<a ng-class=\"{\'selected\': selectedItem == $index}\" ng-if=\"!type.hasChilds\" ng-click=\"\" href=\"\">{{type.value}}</a>\n					</li>\n				</ul>\n\n			</div>\n		</div>\n\n	</div>\n\n</div>\n");}]);
/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.0
 */
;(function(l){'use strict';l(['jquery'],function($){var k=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};k.defaults={axis:'xy',duration:0,limit:true};function isWin(a){return!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!==-1}$.fn.scrollTo=function(f,g,h){if(typeof g==='object'){h=g;g=0}if(typeof h==='function'){h={onAfter:h}}if(f==='max'){f=9e9}h=$.extend({},k.defaults,h);g=g||h.duration;var j=h.queue&&h.axis.length>1;if(j){g/=2}h.offset=both(h.offset);h.over=both(h.over);return this.each(function(){if(f===null)return;var d=isWin(this),elem=d?this.contentWindow||window:this,$elem=$(elem),targ=f,attr={},toff;switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=d?$(targ):$(targ,elem);if(!targ.length)return;case'object':if(targ.is||targ.style){toff=(targ=$(targ)).offset()}}var e=$.isFunction(h.offset)&&h.offset(elem,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a==='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,prev=$elem[key](),max=k.max(elem,a);if(toff){attr[key]=toff[pos]+(d?0:prev-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b),10)||0;attr[key]-=parseInt(targ.css('border'+b+'Width'),10)||0}attr[key]+=e[pos]||0;if(h.over[pos]){attr[key]+=targ[a==='x'?'width':'height']()*h.over[pos]}}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)==='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key])){attr[key]=attr[key]<=0?0:Math.min(attr[key],max)}if(!i&&h.axis.length>1){if(prev===attr[key]){attr={}}else if(j){animate(h.onAfterFirst);attr={}}}});animate(h.onAfter);function animate(a){var b=$.extend({},h,{queue:true,duration:g,complete:a&&function(){a.call(elem,targ,h)}});$elem.animate(attr,b)}})};k.max=function(a,b){var c=b==='x'?'Width':'Height',scroll='scroll'+c;if(!isWin(a))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,doc=a.ownerDocument||a.document,html=doc.documentElement,body=doc.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(t){return $(t.elem)[t.prop]()},set:function(t){var a=this.get(t);if(t.options.interrupt&&t._last&&t._last!==a){return $(t.elem).stop()}var b=Math.round(t.now);if(a!==b){$(t.elem)[t.prop](b);t._last=this.get(t)}}};return k})}(typeof define==='function'&&define.amd?define:function(a,b){'use strict';if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));
function treeBoxDirective($document, $log, $templateCache) {

	return {
		restrict: 'E',
		scope: {
			data: '=',
			name: '=',
			value: '='
		},
		templateUrl: 'treebox.html',
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
				
				setTimeout(function(){ 
					$("." + $scope.widgetName +  " .search-input").focus();
					//$log.debug($(".search-input"));
				});

				$scope.savedItem = null;
				if ($scope.value && $scope.value.id) {
					$scope.savedItem = $scope.findTypeById($scope.value.id);
				}
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
					$scope.value = $scope.savedItem;
				}
				//}
			}

			$scope.$watch('value', function(newValue, oldValue) {
				$scope.printItem = {};
				$scope.savedItem = {};
				if ($scope.value && $scope.value.id) {
					$scope.printItem = $scope.findTypeById($scope.value.id);
					$scope.savedItem = $scope.findTypeById($scope.value.id);
				}
			});

			$scope.resetSelection = function() {
				$scope.printItem = null;
				$scope.search = null;
				$scope.savedItem = {};
				$scope.value = {};
				$scope.showListByParent();
				$scope.openList();
			}

			$scope.showList = function(event, inputValue) {

				$scope.isFocused = true;
				$scope.search = inputValue;

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

				setTimeout(function(){ 
					angular.element("." + $scope.widgetName +  " .list-unstyled").scrollTo('.selected');
				});
			}


			$scope.hoverItem = function() {
				$log.debug('test');
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
			if ($scope.value && $scope.value.id) {
				$scope.printItem = $scope.findTypeById($scope.value.id);
				$scope.savedItem = $scope.findTypeById($scope.value.id);
			}


		}
	}

};

angular
	.module('sup.treebox', [
		'templates'
	])
	.directive('supTreeBox', treeBoxDirective);