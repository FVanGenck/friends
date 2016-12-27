angular.module('app').
controller('aboutCtrl', ['$scope', 'Friends', function($scope, Friends) {
    		$scope.title = 'About';
    		$scope.items = Friends.get();
}])