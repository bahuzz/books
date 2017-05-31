
	var bStore = angular.module('bstore-directives',[]);

	bStore.directive('reviewForm', function(){
		return {
			restrict: 'A',
			templateUrl: 'components/templates/review-form.html'
		};
	});

	bStore.directive('reviewContent', function(){
		return {
			restrict: 'E',
			templateUrl: 'components/templates/review-content.html'
		};
	});

	bStore.directive('productTabs', function(){
		return {
			restrict: 'E',
			templateUrl: 'components/templates/product-tabs.html',
			controller: function(){
				this.tab = 1;
				this.selectTab = function(setTab) {
					this.tab = setTab;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};

	});