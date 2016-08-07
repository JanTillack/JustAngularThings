var ngApp = angular.module('app');

ngApp.controller('ReapetExampleController' , ['$scope', function($scope){

	$scope.exampleArray = [
		{
			name:'Robert',
			surname: 'Beainaravicious',
			nationality: 'Litwin'
		},
		{
			name:'Sandra',
			surname: 'Ptaszek',
			nationality: 'Aborygen'
		},
		{
			name:'Anna',
			surname: 'Kazimierczak',
			nationality: 'Polska'
		},
		{
			name:'Bartłomiej',
			surname: 'Rogacewicz',
			nationality: 'Obywatel świata'
		},
		{
			name:'Jan',
			surname: 'Tillack',
			nationality: 'Szkot'
		}
	];

	$scope.isNameShown = false;

	$scope.showDetails = function(person){
		$scope.details = person;
	}
$scope.hideName = function(){
	$scope.isNameShown = ! $scope.isNameShown;
}
}]);