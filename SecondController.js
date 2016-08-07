var nqApp = angular.module('app');

nqApp.controller('SecondController', ['$scope', function($scope){
$scope.score = 0;
$scope.numberA = 0;
$scope.numberB = 0;
$scope.currentDateAndTime = new Date();
$scope.loremLorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi corrupti eveniet reiciendis cumque illo quidem nihil ea repellat? Sunt iste quidem maxime deserunt accusamus soluta ratione in tenetur ab."

	$scope.add = function(numberA,numberB) {
		$scope.score = numberA + numberB;
	}
	
	$scope.minus = function(numberA,numberB) {
		$scope.score = numberA - numberB;
	}
	
	$scope.multi = function(numberA,numberB) {
		$scope.score = numberA * numberB;
	}

	$scope.divide = function(numberA,numberB) {
		$scope.score = numberA / numberB;
	}





}])