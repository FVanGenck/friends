angular.module('app')
.factory('Friends', [ '$http', function($http) {

	var URL = "http://localhost:3000/api/friends";

	return {
		get: function() {
			// return [
			// 	  {"name": "Will", "age": 30, "isSpecial": false},
			// 	  {"name": "Laura", "age": 26, "isSpecial": true}
			// 	]

			return $http.get(URL).then(function(response) {
					console.log("orginal get : " + JSON.stringify(response.data));
					return response.data;
				});


		}
	};
}])
