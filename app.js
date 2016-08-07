var ngApp = angular.module('app' , []);

ngApp.controller('MainController' , ['$scope', function($scope){
	$scope.coderspro = 'FAJNIE JEST';
	$scope.jakasLiczba = 645;

	$scope.addOneToJakasLiczba = function(){
		$scope.jakasLiczba++;
	};

	var credentialsArray = [];

	$scope.credentials = {
		login: 'test',
		password: '123qwesd '
	};
	$scope.addCredentials = function(login, password) {
		credentialsArray.push({
			login: login,
			password: password
			});
		console.log(credentialsArray);
	};

}]);