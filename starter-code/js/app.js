var app = angular.module("FVSorterApp", []);
app.controller("HomeCtrl", ['$scope', function($scope, $http) {

	$scope.primary = true;
	$scope.small = true;

	$scope.left = [];
	$scope.right = [];
	$scope.pool = true;
	$scope.fruits = true;
	$scope.veggies = true;

	$scope.fruitVeggies = [
			'Banana',
			'Apple',
			'Apricot',
			'Asparagus',
			'Artichoke',
			'Arugula'
	];

	$scope.toCol1 = function(i) {
		// $scope.left.push(this.fv);
		$scope.left.push($scope.fruitVeggies.splice(i,1))
		console.log(this);
		this.pool = false;
		this.fruit = true;
	}

	$scope.toCol3 = function(i) {
		// $scope.right.push(this.fv);
		$scope.right.push($scope.fruitVeggies.splice(i,1))
		this.pool = false;
		this.veggies = true;
	}

	$scope.backToCenter = function(i) {
		// $scope.fruitVeggies.push(this.fv);
		$scope.fruitVeggies.push($scope.left.splice(i,1));
		console.log(this);
		this.fruits = false;
		this.pool = true;
	}

	$scope.backToMiddle = function(i) {
		$scope.fruitVeggies.push($scope.right.splice(i,1));
		// $scope.fruitVeggies.push(this.fv);
		this.veggies =  false;
		this.pool = true;
	}

}]);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);