// var $ = require('jquery');
var app = angular.module('menuRoulette', ['ngRoute']);

app.controller('MainController', ['$scope', '$location', function($scope, $location){
		$scope.setRoute = function(route){
			$location.path(route);
		}
	}]);

app.controller('RestaurantController', ['$scope', '$http', function($scope, $http){
	var refresh = function(){
		$http.get('/api/restaurants').success(function(response){
			$scope.restaurants = response;
			console.log(response);
		})
	}
	refresh();
}])

app.controller('HomeController', ['$scope', function($scope){
		
}]);

app.config(function($routeProvider){
	// $locationProvider.html5Mode(true);

	$routeProvider
		.when('/restaurants', {
			controller: 'RestaurantController',
			templateUrl: '/partials/restaurants.html'
		})
		.when('/', {
			controller: 'HomeController', 
			templateUrl: '/partials/home.html'
		})
});