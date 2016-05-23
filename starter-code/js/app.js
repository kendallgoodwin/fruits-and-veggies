var app = angular.module("FVSorterApp", []);
app.controller("HomeCtrl", ['$scope', function($scope, $http) {

	$scope.primary = true;
	$scope.small = true;

	$scope.left = [];
	$scope.right = [];

	$scope.fruitVeggies = [
			'Banana',
			'Apple',
			'Apricot',
			'Asparagus',
			'Artichoke',
			'Arugula'
	];

	$scope.toCol1 = function() {
		$scope.left.push()
	}

	$scope.toCol2 = function() {
		$scope.right.push($scope.li)
	}

}]);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);