/**
*  Module
*
* Description
*/
angular.module('app', [
	'ui.router'
	])
.config(['$urlRouterProvider', '$locationProvider', '$stateProvider', function($urlRouterProvider, $locationProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({ enabled: true, requireBase: false });

	$stateProvider
	.state('home', {
		url: '/',
	  	templateUrl: 'templates/home.html',
  		controller: 'homeCtrl',
  		// resolve: {
  		// 	// friends: ['$http', function($http) {
  		// 	// 	return $http.get('api/friends.json').then(function(response) {
  		// 	// 		return response.data;
  		// 	// 	})
  		// 	// }]
  		// 	friends: ['Friends', function(Friends) {
  		// 		return Friends.get();
  		// 	}]
  		// }
	})
	.state('about', {
		url: '/about',
	  	templateUrl: 'templates/about.html',
  		controller: 'aboutCtrl'
	})

}])