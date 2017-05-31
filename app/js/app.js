'use strict';

var bStore = angular.module('bookStore',['bstore-directives']);

bStore.controller('bookStoreController', ['$http',function($http){
	var store = this;
	$http.get('/books.json').success(function(data){
		store.products = data;
	});
}]);

bStore.controller('ReviewController',function(){
	this.review = {};

	this.addReview = function(hm){
		hm.reviews.push(this.review);
		this.review = {};
	};
});

