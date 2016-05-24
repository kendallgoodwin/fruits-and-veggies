var app = angular.module("FVSorterApp", []);
app.controller("HomeCtrl", ['$scope', function($scope, $http) {

	$scope.primary = true;
	$scope.small = true;

	$scope.left = [];
	$scope.right = [];
	$scope.pool = true;
	$scope.fruits = true;
	$scope.veggies = true;

	$scope.all = fruit.concat(vegetables);

	function shuffleArray(array) {
     for (var i = array.length - 1; i > 0; i--) {
         var j = Math.floor(Math.random() * (i + 1));
         var temp = array[i];
         array[i] = array[j];
         array[j] = temp;
     }
     return array;
 	}

 	$scope.fruitVeggies = shuffleArray($scope.all);

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