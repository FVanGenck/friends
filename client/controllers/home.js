angular.module('app').
controller('homeCtrl', ['$scope',  'Friends', function($scope, Friends) {
    		$scope.title = 'Home';
    		$scope.items = ['home','about','contact'];
    		$scope.selectedValue = 'home';
    		Friends.get().then(function(friends) {
    			console.log(JSON.stringify(friends));
    			$scope.friends = friends;	
    		});
    		$scope.save = function($http) {
    			console.log(JSON.stringify($scope.friends));
    			// $http.post( '/api/friends', friends);
    		}
}])